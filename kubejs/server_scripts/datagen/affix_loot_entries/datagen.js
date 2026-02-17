// Generate the data for all possible affix loot entries permutations according to the data in item_definitions.js
ServerEvents.generateData("last", event => {

    itemGroups.forEach(group => {
        let category = group.groupCategory


        for (let iIndex in group.items) {
            let itemReg = group.items[iIndex]
            let itemName = itemReg.split(':')[1]

            for (let pIndex in group.patterns) {
                let patternReg = group.patterns[pIndex]
                let patternName = patternReg.split(':')[1]

                for (let mIndex in group.materials) {
                    let materialReg = group.materials[mIndex]
                    let materialName = materialReg.split(':')[1]

                    let json = {
                        type: "apotheosis:affix_loot_entry",
                        rarities: [],
                        constraints: group.constraints,
                        stack: {
                            id: itemReg,
                            count: 1,
                            components: {
                                "minecraft:trim": {
                                    pattern: patternReg,
                                    material: materialReg
                                }
                            }
                        },
                        weights: group.weights
                    }

                    event.json(`insurgence:affix_loot_entries/${category}/${itemName}_${patternName}_${materialName}_no_spells`, json)
                    event.getGenerated(`insurgence:affix_loot_entries/${category}/${itemName}_${patternName}_${materialName}_no_spells`)
                }
            }
        }
    })
})