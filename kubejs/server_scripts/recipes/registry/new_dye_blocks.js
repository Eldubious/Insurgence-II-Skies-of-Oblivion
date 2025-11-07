// Register recipes for all the items added for the new dyes
ServerEvents.recipes(event => {

    let newDyeColors = ['maroon', 'rose', 'coral', 'ginger', 'tan', 'beige', 'amber', 'olive', 'forest', 'verdant', 'teal', 'mint',
        'aqua', 'slate', 'navy', 'indigo']
    for (let i in newDyeColors) {

        event.shaped(`camping:sleeping_bag_${newDyeColors[i]}`,
            [
                'A',
                'B',
                'B'
            ],
            {
                A: 'minecraft:white_wool',
                B: `dye_depot:${newDyeColors[i]}_wool`
            }
        )

        event.shaped(`camping:tent_${newDyeColors[i]}`,
            [
                'ABA',
                'B B',
                'A A'
            ],
            {
                A: `dye_depot:${newDyeColors[i]}_wool`,
                B: 'minecraft:stick'
            }
        )
    }
})