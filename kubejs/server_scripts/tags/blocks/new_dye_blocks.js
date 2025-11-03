// Add new blocks from the new dyes colors to their correct block tags
ServerEvents.tags('block', event => {

    // Add new color foundry blocks to the correct tags
    let newDyeColors = ['maroon', 'rose', 'coral', 'ginger', 'tan', 'beige', 'amber', 'olive', 'forest', 'verdant', 'teal', 'mint',
        'aqua', 'slate', 'navy', 'indigo']
    for (let i in newDyeColors) {
        let foundryBlocks = [`productivemetalworks:${newDyeColors[i]}_fire_bricks`, `productivemetalworks:${newDyeColors[i]}_foundry_controller`,
            `productivemetalworks:${newDyeColors[i]}_foundry_drain`, `productivemetalworks:${newDyeColors[i]}_foundry_capacitor`,
            `productivemetalworks:${newDyeColors[i]}_foundry_tank`, `productivemetalworks:${newDyeColors[i]}_foundry_window`]
        for (let j in foundryBlocks) {
            event.add('minecraft:mineable/pickaxe', foundryBlocks[j])
            event.add('silentgear:mineable/paxel', foundryBlocks[j])
            event.add('productivemetalworks:foundry_wall_blocks', foundryBlocks[j])
        }
        event.add('productivemetalworks:fire_bricks', `productivemetalworks:${newDyeColors[i]}_fire_bricks`)
        event.add('productivemetalworks:foundry_controllers', `productivemetalworks:${newDyeColors[i]}_foundry_controller`)
        event.add('productivemetalworks:foundry_drains', `productivemetalworks:${newDyeColors[i]}_foundry_drain`)
        event.add('productivemetalworks:foundry_capacitors', `productivemetalworks:${newDyeColors[i]}_foundry_capacitor`)
        event.add('productivemetalworks:foundry_tanks', `productivemetalworks:${newDyeColors[i]}_foundry_tank`)
        event.add('productivemetalworks:foundry_windows', `productivemetalworks:${newDyeColors[i]}_foundry_window`)
    }
})