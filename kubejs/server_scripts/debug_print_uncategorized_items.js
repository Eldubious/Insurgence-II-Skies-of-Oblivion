/*
    A debugging script which prints out every registered item in the game
    which does not belong to a category tag.

    Used to find new items from mod additions or updates which need to be categorized.
*/
const categoryItemTags = [
    "insurgence:category/unused",
    "insurgence:category/creative_mode",
    "insurgence:category/guide_book",
    "insurgence:category/unlock_item",
    "insurgence:category/collectable",
    "insurgence:category/material",
    "insurgence:category/tool",
    "insurgence:category/ammo",
    "insurgence:category/plant",
    "insurgence:category/crop",
    "insurgence:category/consumable",
    "insurgence:category/cosmetic",
    "insurgence:category/natural_block",
    "insurgence:category/decorative_block",
    "insurgence:category/material_block",
    "insurgence:category/functional_block",
    "insurgence:category/redstone_block",
    "insurgence:category/crafting_station",
    "insurgence:unique_item",
    "insurgence:crafted_item",
    "insurgence:tarot_cards"
];

// Will never print out the items in this list
const itemsToSkip = [

];

// The number of item ids to print per line
const idsPerLine = 4;

// If the script should run or not
const active = true;

ServerEvents.loaded(event => {
    if (!active)
        return;

    let allItems = Item.getTypeList();

    let categorized = [];
    let uncategorized = [];
    let skipped = [];

    for (let i in allItems) {
        let id = allItems[i];

        if (itemsToSkip.includes(id)) {
            skipped.push(id);
            continue;
        }

        let item = Item.of(id);
        let matchedTag = categoryItemTags.find(tag => item.hasTag(tag));

        if (matchedTag) {
            categorized.push(id);
        }
        else {
            uncategorized.push(id);
        }   
    }
    uncategorized.sort();

    // Print out summary
    console.log("==========================================");
    console.log("       Item Categorization Summary");
    console.log(`total items registered: ${allItems.size()}`);
    console.log(`categorized items: ${categorized.length}`);
    console.log(`uncategorized items: ${uncategorized.length}`);
    console.log(`skipped items: ${skipped.length}`);
    console.log("==========================================");
    console.log("          Uncategorized Items");

    let line = "";
    let lineCount = 0;
    for (let i in uncategorized) {
        let id = uncategorized[i];

        if (lineCount < idsPerLine) {
            line += `"${id}", `;
            lineCount++;
        }
        else {
            line += `"${id}", `;
            console.log(line);
            line = "";
            lineCount = 0;
        }
    }
});

