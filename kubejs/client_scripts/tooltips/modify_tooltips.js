// Add the 'Unique' & rarity text to the tooltips of items
ItemEvents.modifyTooltips(event => {

    event.modifyAll(tooltip => {    // Add item rarities to tooltips
        
    })

    let uniqueItemTypes = ['sword', 'scythe', 'trident', 'mace', 'harp', 'knife', 'axe', 'pickaxe',
        'shovel', 'hoe', 'bow', 'crossbow', 'staff', 'wand', 'helmet', 'chestplate', 'leggings',
        'boots', 'elytra', 'ring', 'belt', 'necklace', 'curio', 'shield', 'club']
    for (let i in uniqueItemTypes) {
        event.modify(`#insurgence:unique_item/${uniqueItemTypes[i]}`, tooltip => {
            tooltip.insert(1, Component.translate('tooltip.insurgence.unique').red().append(
                Component.of(" ").append(
                Component.translate(`tooltip.insurgence.${uniqueItemTypes[i]}`).gray())))
            tooltip.insert(2, Text.of("RARITY_MARKER"))
            tooltip.insert(3, Text.of(" "))

            tooltip.dynamic('unique_items')
            tooltip.dynamic('item_rarity')
        })
    }
})