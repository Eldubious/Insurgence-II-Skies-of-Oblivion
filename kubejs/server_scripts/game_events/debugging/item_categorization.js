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

const itemsToSkip = [

];

function getAllItems() {
    return Item.getTypeList();
}

function getAllUncategorizedItems() {
    let allItems = getAllItems();
    let uncategorized = [];
    for (let i in allItems) {
        let id = allItems[i];

        if (itemsToSkip.includes(id)) {
            continue;
        }

        let item = Item.of(id);
        let matchedTag = categoryItemTags.find(tag => item.hasTag(tag));
        if (!matchedTag) {
            uncategorized.push(id);
        } 
    }
    return uncategorized;
}

function givePlayerItem(server, playerId, itemId) {
    server.runCommandSilent(`give ${playerId} ${itemId}`);
}

function takePlayerItem(server, playerId, itemId) {

}

function printTagOptions(player) {

}