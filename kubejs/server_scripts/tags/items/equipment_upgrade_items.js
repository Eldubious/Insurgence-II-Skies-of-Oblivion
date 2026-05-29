const genericUpgradeItems = [

];
const reinforcementUpgradeItems = [

];
const liningUpgradeItems = [

];
const coatingUpgradeItems = [

];

// Add items which are used for equipment upgrades to their own tags
ServerEvents.tags("item", event => {

    // Items which can be used to upgrade all items
    for (let i in genericUpgradeItems) {
        giveUpgradeTag(event, "generic", genericUpgradeItems[i]);
    }

    // Items which can be used to upgrade shields and some armors
    for (let i in reinforcementUpgradeItems) {
        giveUpgradeTag(event, "reinforcement", reinforcementUpgradeItems[i]);
    }

    // Items which can be used to upgrade armor
    for (let i in liningUpgradeItems) {
        giveUpgradeTag(event, "lining", liningUpgradeItems[i]);
    }

    // Items which can be used to upgrade tools & weapons
    for (let i in coatingUpgradeItems) {
        giveUpgradeTag(event, "coating", coatingUpgradeItems[i]);
    }
});

// Adds an item to the common upgrade tag as well as a tag for its specific upgrade type
function giveUpgradeTag(event, upgradeType, item) {
    event.add("insurgence:equipment_upgrade_item", item);
    switch (upgradeType) {
        case "generic":
            event.add("insurgence:equipment_upgrade_item/generic", item);
            break;

        case "reinforcement":
            event.add("insurgence:equipment_upgrade_item/reinforcement", item);
            break;

        case "lining":
            event.add("insurgence:equipment_upgrade_item/lining", item);
            break;

        case "coating":
            event.add("insurgence:equipment_upgrade_item/coating", item);
            break;
    }
}