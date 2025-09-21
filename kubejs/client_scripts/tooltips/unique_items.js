// Add the 'Unique' text to the tooltips of certain items
ItemEvents.modifyTooltips(event => {

    let uniqueItemTypes = ['sword', 'scythe', 'trident', 'mace', 'harp', 'knife', 'axe', 'pickaxe',
        'shovel', 'hoe', 'bow', 'crossbow', 'staff', 'wand', 'helmet', 'chestplate', 'leggings',
        'boots', 'elytra', 'ring', 'belt', 'necklace', 'curio']
    for (let i in uniqueItemTypes) {
        event.modify(`#insurgence:unique_item/${uniqueItemTypes[i]}`, tooltip => {
            tooltip.insert(1, Component.translate('tooltip.insurgence.unique').red().append(
                Component.of(" ").append(
                Component.translate(`tooltip.insurgence.${uniqueItemTypes[i]}`).gray())))
            tooltip.insert(2, Text.of(" "))

            tooltip.dynamic('unique_items')
        })
    }
})