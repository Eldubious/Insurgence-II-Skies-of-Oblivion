// Add the 'Unique' & rarity text to the tooltips of items
ItemEvents.modifyTooltips(event => {

    event.modifyAll(tooltip => {    // Add item rarities to tooltips
        
    })

    let uniqueItemTypes = ['sword', 'scythe', 'trident', 'mace', 'harp', 'knife', 'axe', 'pickaxe',
        'shovel', 'hoe', 'bow', 'crossbow', 'staff', 'wand', 'helmet', 'chestplate', 'leggings',
        'boots', 'elytra', 'ring', 'belt', 'necklace', 'curio', 'shield', 'club', 'polearm',
        'fishing_rod', 'shears', 'slingshot']
    for (let i in uniqueItemTypes) {
        event.modify(`#insurgence:unique_item/${uniqueItemTypes[i]}`, tooltip => {
            tooltip.insert(1, Component.translate('tooltip.insurgence.unique').red().append(
                Component.of(" ").append(
                Component.translate(`tooltip.insurgence.${uniqueItemTypes[i]}`).gray())))
            tooltip.insert(2, Text.of("RARITY_MARKER"))
            tooltip.insert(3, Text.of("SPELL_IMBUEMENT_MARKER"))
            tooltip.insert(4, Text.of(" "))

            tooltip.dynamic('equipment_items')
            tooltip.dynamic('item_rarity')
        })
    }

    let craftedItemTypes = ['sword', 'scythe', 'trident', 'mace', 'hammer', 'knife', 'axe', 'pickaxe',
        'shovel', 'hoe', 'bow', 'crossbow', 'helmet', 'chestplate', 'leggings',
        'boots', 'elytra', 'ring', 'necklace', 'curio', 'shield', 'polearm',
        'fishing_rod', 'shears', 'slingshot', 'paxel', 'bracelet']
    for (let i in craftedItemTypes) {
        event.modify(`#insurgence:crafted_item/${craftedItemTypes[i]}`, tooltip => {
            tooltip.insert(1, Component.translate('tooltip.insurgence.crafted').aqua().append(
                Component.of(" ").append(
                Component.translate(`tooltip.insurgence.${craftedItemTypes[i]}`).gray())))
            tooltip.insert(2, Text.of("RARITY_MARKER"))
            tooltip.insert(3, Text.of(" "))

            tooltip.dynamic('equipment_items')
            tooltip.dynamic('item_rarity')
        })
    }


    /*
        Apply informational tooltips on how to obtain certain items.
    */
    
    // Where to find armor trims
    event.modify('#minecraft:trim_templates', tooltip => {
        tooltip.insert(1, Component.literal(' '))
        tooltip.insert(2, Component.literal(' '))
        tooltip.insert(3, Component.literal(' '))

        tooltip.dynamic('trim_template_information')
    })
})