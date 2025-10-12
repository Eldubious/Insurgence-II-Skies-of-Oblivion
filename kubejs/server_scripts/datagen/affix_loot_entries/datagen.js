// Generate the data for all possible affix loot entries permutations according to the data in item_definitions.js
ServerEvents.generateData("last", event => {

    itemGroups.forEach(group => {
        let category = group.groupCategory

        if (group.hasSpells) {  // Seperate datagen for items which may have spells imbued
            for (let iIndex in group.items) {
                let itemReg = group.items[iIndex]
                let itemName = itemReg.split(':')[1]

                for (let sIndex in group.spells) {
                    let spellReg = group.spells[sIndex].spell
                    let spellName = spellReg.split(':')[1]

                    if (group.spells[sIndex].possibleItems.indexOf(itemReg) != -1) {
                        // Spell can be applied to current item

                        for (let spellLvl = group.spells[sIndex].levelMin; spellLvl <= group.spells[sIndex].levelMax; spellLvl++) {
                            // Iterate through all allowed spell levels

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
                                                },
                                                "irons_spellbooks:spell_container": {
                                                    maxSpells: 1,
                                                    spellWheel: true,
                                                    locked: true,
                                                    mustEquip: group.spells[sIndex].needEquip,
                                                    data: [
                                                        {
                                                            id: spellReg,
                                                            index: 0,
                                                            level: spellLvl,
                                                        }
                                                    ]
                                                }
                                            }
                                        },
                                        weights: group.weights
                                    }

                                    event.json(`insurgence:affix_loot_entries/${category}/${itemName}_${patternName}_${materialName}_${spellName}_lvl${spellLvl}`, json)
                                    event.getGenerated(`insurgence:affix_loot_entries/${category}/${itemName}_${patternName}_${materialName}_${spellName}_lvl${spellLvl}`)
                                }
                            }
                        }
                    }
                    else {
                        // Spell cannot be applied to current item
                        continue
                    }
                }
            }
        }
        else {
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
        }
    })
})