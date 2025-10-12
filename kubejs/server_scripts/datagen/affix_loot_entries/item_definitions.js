// A list of items and possible components to be used in affix loot datagen
const itemGroups = [
    /*
        Generic
        Non-Imbued
        Affix Loot
    */
    {   // Overworld - Stone Tools & Chain Armor
        groupCategory: "generic_overworld_loot",
        constraints: {
            dimensions: [
                "minecraft:overworld"
            ]
        },
        items: [
            "minecraft:chainmail_helmet",
            "minecraft:chainmail_chestplate",
            "minecraft:chainmail_leggings",
            "minecraft:chainmail_boots",
            "minecraft:stone_sword",
            "minecraft:stone_pickaxe",
            "minecraft:stone_axe",
            "minecraft:stone_shovel"
        ],
        patterns: [
            "minecraft:bolt",
            "minecraft:flow",
            "minecraft:raiser",
            "minecraft:host",
            "minecraft:shaper",
            "minecraft:wayfinder"
        ],
        materials: [
            "minecraft:copper",
            "minecraft:iron",
            "oreganized:lead"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 15
            },
            frontier: {
                weight: 10
            }
        }
    },
    {   // The Nether - Stone Tools & Chain Armor
        groupCategory: "generic_nether_loot",
        constraints: {
            dimensions: [
                "minecraft:the_nether"
            ]
        },
        items: [
            "minecraft:chainmail_helmet",
            "minecraft:chainmail_chestplate",
            "minecraft:chainmail_leggings",
            "minecraft:chainmail_boots",
            "minecraft:stone_sword",
            "minecraft:stone_pickaxe",
            "minecraft:stone_axe",
            "minecraft:stone_shovel"
        ],
        patterns: [
            "minecraft:rib",
            "minecraft:raiser",
            "minecraft:host",
            "minecraft:shaper",
            "minecraft:wayfinder"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:iron",
            "oreganized:quartz",
            "pigsteel:pigsteel"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 15
            },
            frontier: {
                weight: 10
            }
        }
    },
    {   // The End - Stone Tools & Chain Armor
        groupCategory: "generic_end_loot",
        constraints: {
            dimensions: [
                "minecraft:the_end"
            ]
        },
        items: [
            "minecraft:chainmail_helmet",
            "minecraft:chainmail_chestplate",
            "minecraft:chainmail_leggings",
            "minecraft:chainmail_boots",
            "minecraft:stone_sword",
            "minecraft:stone_pickaxe",
            "minecraft:stone_axe",
            "minecraft:stone_shovel"
        ],
        patterns: [
            "minecraft:eye",
            "minecraft:raiser",
            "minecraft:host",
            "minecraft:shaper",
            "minecraft:wayfinder"
        ],
        materials: [
            "minecraft:amethyst",
            "enderscape:nebulite",
            "enderscape:shadoline"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 15
            },
            frontier: {
                weight: 10
            }
        }
    },
    {   // Overworld - Golden Tools & Armor
        groupCategory: "generic_overworld_loot",
        constraints: {
            dimensions: [
                "minecraft:overworld"
            ]
        },
        items: [
            "minecraft:golden_helmet",
            "minecraft:golden_chestplate",
            "minecraft:golden_leggings",
            "minecraft:golden_boots",
            "minecraft:golden_sword",
            "minecraft:golden_axe",
            "minecraft:golden_pickaxe",
            "minecraft:golden_shovel"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:flow",
            "minecraft:bolt"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:copper",
            "minecraft:iron",
            "minecraft:quartz",
            "minecraft:netherite"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 5
            },
            frontier: {
                weight: 10
            },
            ascent: {
                weight: 5
            }
        }
    },
    {   // The Nether - Golden Tools & Armor
        groupCategory: "generic_nether_loot",
        constraints: {
            dimensions: [
                "minecraft:the_nether"
            ]
        },
        items: [
            "minecraft:golden_helmet",
            "minecraft:golden_chestplate",
            "minecraft:golden_leggings",
            "minecraft:golden_boots",
            "minecraft:golden_sword",
            "minecraft:golden_axe",
            "minecraft:golden_pickaxe",
            "minecraft:golden_shovel"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:rib"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:copper",
            "minecraft:iron",
            "minecraft:quartz",
            "minecraft:netherite"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 5
            },
            frontier: {
                weight: 10
            },
            ascent: {
                weight: 5
            }
        }
    },
    {   // The End - Golden Tools & Armor
        groupCategory: "generic_end_loot",
        constraints: {
            dimensions: [
                "minecraft:the_end"
            ]
        },
        items: [
            "minecraft:golden_helmet",
            "minecraft:golden_chestplate",
            "minecraft:golden_leggings",
            "minecraft:golden_boots",
            "minecraft:golden_sword",
            "minecraft:golden_axe",
            "minecraft:golden_pickaxe",
            "minecraft:golden_shovel"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:eye"
        ],
        materials: [
            "minecraft:amethyst",
            "minecraft:gold",
            "minecraft:iron",
            "enderscape:nebulite",
            "enderscape:shadoline"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 5
            },
            frontier: {
                weight: 10
            },
            ascent: {
                weight: 5
            }
        }
    },
    {   // Overworld - Iron Tools & Armor
        groupCategory: "generic_overworld_loot",
        constraints: {
            dimensions: [
                "minecraft:overworld"
            ]
        },
        items: [
            "minecraft:iron_helmet",
            "minecraft:iron_chestplate",
            "minecraft:iron_leggings",
            "minecraft:iron_boots",
            "minecraft:iron_sword",
            "minecraft:iron_axe",
            "minecraft:iron_pickaxe",
            "minecraft:iron_shovel"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:bolt",
            "minecraft:flow"
        ],
        materials: [
            "minecraft:copper",
            "minecraft:gold",
            "minecraft:amethyst",
            "minecraft:emerald",
            "minecraft:diamond"
        ],
        hasSpells: false,
        weights: {
            frontier: {
                quality: 1.0,
                weight: 25
            },
            ascent: {
                weight: 10
            },
            summit: {
                weight: 10
            }
        }
    },
    {   // The Nether - Iron Tools & Armor
        groupCategory: "generic_nether_loot",
        constraints: {
            dimensions: [
                "minecraft:the_nether"
            ]
        },
        items: [
            "minecraft:iron_helmet",
            "minecraft:iron_chestplate",
            "minecraft:iron_leggings",
            "minecraft:iron_boots",
            "minecraft:iron_sword",
            "minecraft:iron_axe",
            "minecraft:iron_pickaxe",
            "minecraft:iron_shovel"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:rib"
        ],
        materials: [
            "minecraft:quartz",
            "minecraft:gold",
            "minecraft:redstone",
            "minecraft:netherite",
            "minecraft:diamond",
            "pigsteel:pigsteel"
        ],
        hasSpells: false,
        weights: {
            frontier: {
                quality: 1.0,
                weight: 25
            },
            ascent: {
                weight: 10
            },
            summit: {
                weight: 10
            }
        }
    },
    {   // The End - Iron Tools & Armor
        groupCategory: "generic_end_loot",
        constraints: {
            dimensions: [
                "minecraft:the_end"
            ]
        },
        items: [
            "minecraft:iron_helmet",
            "minecraft:iron_chestplate",
            "minecraft:iron_leggings",
            "minecraft:iron_boots",
            "minecraft:iron_sword",
            "minecraft:iron_axe",
            "minecraft:iron_pickaxe",
            "minecraft:iron_shovel"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:eye"
        ],
        materials: [
            "enderscape:shadoline",
            "enderscape:nebulite",
            "minecraft:gold",
            "minecraft:amethyst",
            "minecraft:emerald",
            "minecraft:diamond"
        ],
        hasSpells: false,
        weights: {
            frontier: {
                quality: 1.0,
                weight: 25
            },
            ascent: {
                weight: 10
            },
            summit: {
                weight: 10
            }
        }
    },
    {   // Overworld - Diamond Tools & Armor
        groupCategory: "generic_overworld_loot",
        constraints: {
            dimensions: [
                "minecraft:overworld"
            ]
        },
        items: [
            "minecraft:diamond_helmet",
            "minecraft:diamond_chestplate",
            "minecraft:diamond_leggings",
            "minecraft:diamond_boots",
            "minecraft:diamond_sword",
            "minecraft:diamond_axe",
            "minecraft:diamond_pickaxe",
            "minecraft:diamond_shovel"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:bolt",
            "minecraft:flow"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:amethyst",
            "minecraft:emerald",
            "minecraft:diamond"
        ],
        hasSpells: false,
        weights: {
            ascent: {
                quality: 1.5,
                weight: 10
            },
            summit: {
                weight: 25
            },
            pinnacle: {
                weight: 10
            }
        }
    },
    {   // The Nether - Diamond Tools & Armor
        groupCategory: "generic_nether_loot",
        constraints: {
            dimensions: [
                "minecraft:the_nether"
            ]
        },
        items: [
            "minecraft:diamond_helmet",
            "minecraft:diamond_chestplate",
            "minecraft:diamond_leggings",
            "minecraft:diamond_boots",
            "minecraft:diamond_sword",
            "minecraft:diamond_axe",
            "minecraft:diamond_pickaxe",
            "minecraft:diamond_shovel"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:rib"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:amethyst",
            "minecraft:emerald",
            "minecraft:diamond"
        ],
        hasSpells: false,
        weights: {
            ascent: {
                quality: 1.5,
                weight: 10
            },
            summit: {
                weight: 25
            },
            pinnacle: {
                weight: 10
            }
        }
    },
    {   // The End - Diamond Tools & Armor
        groupCategory: "generic_end_loot",
        constraints: {
            dimensions: [
                "minecraft:the_end"
            ]
        },
        items: [
            "minecraft:diamond_helmet",
            "minecraft:diamond_chestplate",
            "minecraft:diamond_leggings",
            "minecraft:diamond_boots",
            "minecraft:diamond_sword",
            "minecraft:diamond_axe",
            "minecraft:diamond_pickaxe",
            "minecraft:diamond_shovel"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:eye"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:amethyst",
            "minecraft:emerald",
            "minecraft:diamond"
        ],
        hasSpells: false,
        weights: {
            ascent: {
                quality: 1.5,
                weight: 10
            },
            summit: {
                weight: 25
            },
            pinnacle: {
                weight: 10
            }
        }
    },
    {   // Overworld - Electrum Tools & Armor
        groupCategory: "generic_overworld_loot",
        constraints: {
            dimensions: [
                "minecraft:overworld"
            ]
        },
        items: [
            "oreganized:electrum_helmet",
            "oreganized:electrum_chestplate",
            "oreganized:electrum_leggings",
            "oreganized:electrum_boots",
            "oreganized:electrum_sword",
            "oreganized:electrum_axe",
            "oreganized:electrum_pickaxe",
            "oreganized:electrum_shovel"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:bolt",
            "minecraft:flow"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:amethyst",
            "minecraft:emerald",
            "minecraft:diamond"
        ],
        hasSpells: false,
        weights: {
            summit: {
                quality: 1.0,
                weight: 10
            },
            pinnacle: {
                weight: 20
            }
        }
    },
    {   // The Nether - Electrum Tools & Armor
        groupCategory: "generic_nether_loot",
        constraints: {
            dimensions: [
                "minecraft:the_nether"
            ]
        },
        items: [
            "oreganized:electrum_helmet",
            "oreganized:electrum_chestplate",
            "oreganized:electrum_leggings",
            "oreganized:electrum_boots",
            "oreganized:electrum_sword",
            "oreganized:electrum_axe",
            "oreganized:electrum_pickaxe",
            "oreganized:electrum_shovel"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:rib"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:amethyst",
            "minecraft:emerald",
            "minecraft:diamond"
        ],
        hasSpells: false,
        weights: {
            summit: {
                quality: 1.0,
                weight: 10
            },
            pinnacle: {
                weight: 20
            }
        }
    },
    {   // The End - Electrum Tools & Armor
        groupCategory: "generic_end_loot",
        constraints: {
            dimensions: [
                "minecraft:the_end"
            ]
        },
        items: [
            "oreganized:electrum_helmet",
            "oreganized:electrum_chestplate",
            "oreganized:electrum_leggings",
            "oreganized:electrum_boots",
            "oreganized:electrum_sword",
            "oreganized:electrum_axe",
            "oreganized:electrum_pickaxe",
            "oreganized:electrum_shovel"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:eye"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:amethyst",
            "minecraft:emerald",
            "minecraft:diamond"
        ],
        hasSpells: false,
        weights: {
            summit: {
                quality: 1.0,
                weight: 10
            },
            pinnacle: {
                weight: 20
            }
        }
    },
    {   // Overworld - Wooden Tools
        groupCategory: "generic_overworld_loot",
        constraints: {
            dimensions: [
                "minecraft:overworld"
            ]
        },
        items: [
            "minecraft:wooden_sword",
            "minecraft:wooden_pickaxe",
            "minecraft:wooden_axe",
            "minecraft:wooden_shovel"
        ],
        patterns: [
            "minecraft:bolt",
            "minecraft:flow",
            "minecraft:raiser",
            "minecraft:host",
            "minecraft:shaper",
            "minecraft:wayfinder"
        ],
        materials: [
            "minecraft:copper",
            "oreganized:silver",
            "minecraft:iron"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 25
            },
            frontier: {
                weight: 5
            }
        }
    },
    {   // The Nether - Wooden Tools
        groupCategory: "generic_nether_loot",
        constraints: {
            dimensions: [
                "minecraft:the_nether"
            ]
        },
        items: [
            "minecraft:wooden_sword",
            "minecraft:wooden_pickaxe",
            "minecraft:wooden_axe",
            "minecraft:wooden_shovel"
        ],
        patterns: [
            "minecraft:rib",
            "minecraft:raiser",
            "minecraft:host",
            "minecraft:shaper",
            "minecraft:wayfinder"
        ],
        materials: [
            "minecraft:copper",
            "oreganized:silver",
            "minecraft:gold"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 25
            },
            frontier: {
                weight: 5
            }
        }
    },
    {   // The End - Wooden Tools
        groupCategory: "generic_end_loot",
        constraints: {
            dimensions: [
                "minecraft:the_end"
            ]
        },
        items: [
            "minecraft:wooden_sword",
            "minecraft:wooden_pickaxe",
            "minecraft:wooden_axe",
            "minecraft:wooden_shovel"
        ],
        patterns: [
            "minecraft:eye",
            "minecraft:raiser",
            "minecraft:host",
            "minecraft:shaper",
            "minecraft:wayfinder"
        ],
        materials: [
            "minecraft:copper",
            "oreganized:silver",
            "minecraft:gold"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 25
            },
            frontier: {
                weight: 5
            }
        }
    },
    /*
        Generic
        Spell-Imbued
        Affix Loot
    */
    {   // Overworld - Golden Tools & Armor
        groupCategory: "generic_overworld_spell_loot",
        constraints: {
            dimensions: [
                "minecraft:overworld"
            ]
        },
        items: [
            "minecraft:golden_helmet",
            "minecraft:golden_chestplate",
            "minecraft:golden_leggings",
            "minecraft:golden_boots",
            "minecraft:golden_sword",
            "minecraft:golden_axe",
            "minecraft:golden_pickaxe",
            "minecraft:golden_shovel",
            "minecraft:golden_hoe"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:flow",
            "minecraft:bolt"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:copper",
            "minecraft:iron",
            "minecraft:quartz",
            "minecraft:netherite"
        ],
        hasSpells: true,
        spells: [
            {
                spell: "irons_spellbooks:blaze_storm",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "minecraft:golden_sword",
                    "minecraft:golden_axe",
                    "minecraft:golden_pickaxe",
                    "minecraft:golden_shovel",
                    "minecraft:golden_hoe"
                ],
                needEquip: false
            },
            {
                spell: "irons_spellbooks:burning_dash",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "minecraft:golden_chestplate",
                    "minecraft:golden_leggings",
                    "minecraft:golden_boots"
                ],
                needEquip: true
            },
            {
                spell: "irons_spellbooks:burning_dash",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "minecraft:golden_hoe"
                ],
                needEquip: true
            },
            {
                spell: "irons_spellbooks:fire_breath",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "minecraft:golden_helmet"
                ],
                needEquip: true
            },
            {
                spell: "irons_spellbooks:fire_breath",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "minecraft:golden_hoe"
                ],
                needEquip: false
            },
            {
                spell: "irons_spellbooks:ray_of_siphoning",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "minecraft:golden_sword",
                    "minecraft:golden_axe",
                    "minecraft:golden_pickaxe",
                    "minecraft:golden_shovel",
                    "minecraft:golden_hoe"
                ],
                needEquip: false
            }
        ],
        weights: {
            ascent: {
                quality: 0.5,
                weight: 2
            }
        }
    },
    {   // Overworld - Golden Tools & Armor
        groupCategory: "generic_nether_spell_loot",
        constraints: {
            dimensions: [
                "minecraft:the_nether"
            ]
        },
        items: [
            "minecraft:golden_helmet",
            "minecraft:golden_chestplate",
            "minecraft:golden_leggings",
            "minecraft:golden_boots",
            "minecraft:golden_sword",
            "minecraft:golden_axe",
            "minecraft:golden_pickaxe",
            "minecraft:golden_shovel",
            "minecraft:golden_hoe"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:rib"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:copper",
            "minecraft:iron",
            "minecraft:quartz",
            "minecraft:netherite"
        ],
        hasSpells: true,
        spells: [
            {
                spell: "irons_spellbooks:blaze_storm",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "minecraft:golden_sword",
                    "minecraft:golden_axe",
                    "minecraft:golden_pickaxe",
                    "minecraft:golden_shovel",
                    "minecraft:golden_hoe"
                ],
                needEquip: false
            },
            {
                spell: "irons_spellbooks:burning_dash",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "minecraft:golden_chestplate",
                    "minecraft:golden_leggings",
                    "minecraft:golden_boots"
                ],
                needEquip: true
            },
            {
                spell: "irons_spellbooks:burning_dash",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "minecraft:golden_hoe"
                ],
                needEquip: true
            },
            {
                spell: "irons_spellbooks:fire_breath",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "minecraft:golden_helmet"
                ],
                needEquip: true
            },
            {
                spell: "irons_spellbooks:fire_breath",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "minecraft:golden_hoe"
                ],
                needEquip: false
            },
            {
                spell: "irons_spellbooks:ray_of_siphoning",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "minecraft:golden_sword",
                    "minecraft:golden_axe",
                    "minecraft:golden_pickaxe",
                    "minecraft:golden_shovel",
                    "minecraft:golden_hoe"
                ],
                needEquip: false
            }
        ],
        weights: {
            ascent: {
                quality: 0.5,
                weight: 2
            }
        }
    },
    {   // The End - Golden Tools & Armor
        groupCategory: "generic_end_spell_loot",
        constraints: {
            dimensions: [
                "minecraft:the_end"
            ]
        },
        items: [
            "minecraft:golden_helmet",
            "minecraft:golden_chestplate",
            "minecraft:golden_leggings",
            "minecraft:golden_boots",
            "minecraft:golden_sword",
            "minecraft:golden_axe",
            "minecraft:golden_pickaxe",
            "minecraft:golden_shovel",
            "minecraft:golden_hoe"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:eye"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:amethyst",
            "minecraft:iron",
            "enderscape:shadoline",
            "enderscape:nebulite"
        ],
        hasSpells: true,
        spells: [
            {
                spell: "irons_spellbooks:blaze_storm",
                levelMin: 3,
                levelMax: 5,
                possibleItems: [
                    "minecraft:golden_sword",
                    "minecraft:golden_axe",
                    "minecraft:golden_pickaxe",
                    "minecraft:golden_shovel",
                    "minecraft:golden_hoe"
                ],
                needEquip: false
            },
            {
                spell: "irons_spellbooks:burning_dash",
                levelMin: 3,
                levelMax: 5,
                possibleItems: [
                    "minecraft:golden_chestplate",
                    "minecraft:golden_leggings",
                    "minecraft:golden_boots"
                ],
                needEquip: true
            },
            {
                spell: "irons_spellbooks:burning_dash",
                levelMin: 3,
                levelMax: 5,
                possibleItems: [
                    "minecraft:golden_hoe"
                ],
                needEquip: true
            },
            {
                spell: "irons_spellbooks:fire_breath",
                levelMin: 3,
                levelMax: 5,
                possibleItems: [
                    "minecraft:golden_helmet"
                ],
                needEquip: true
            },
            {
                spell: "irons_spellbooks:fire_breath",
                levelMin: 3,
                levelMax: 5,
                possibleItems: [
                    "minecraft:golden_hoe"
                ],
                needEquip: false
            },
            {
                spell: "irons_spellbooks:ray_of_siphoning",
                levelMin: 3,
                levelMax: 5,
                possibleItems: [
                    "minecraft:golden_sword",
                    "minecraft:golden_axe",
                    "minecraft:golden_pickaxe",
                    "minecraft:golden_shovel",
                    "minecraft:golden_hoe"
                ],
                needEquip: false
            }
        ],
        weights: {
            ascent: {
                quality: 0.5,
                weight: 2
            }
        }
    },
    /*
        Biome-Specific
        Non-Imbued
        Affix Loot
    */
    {   // Desert - Stone Tools & Chain Armor
        groupCategory: "desert_loot",
        constraints: {
            biomes: "#c:is_desert" 
        },
        items: [
            "minecraft:chainmail_helmet",
            "minecraft:chainmail_chestplate",
            "minecraft:chainmail_leggings",
            "minecraft:chainmail_boots",
            "minecraft:stone_sword",
            "minecraft:stone_pickaxe",
            "minecraft:stone_axe",
            "minecraft:stone_shovel"
        ],
        patterns: [
            "minecraft:dune"
        ],
        materials: [
            "minecraft:copper",
            "minecraft:gold",
            "minecraft:redstone",
            "minecraft:lapis"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 45
            },
            frontier: {
                weight: 30
            }
        }
    },
    {   // Jungle - Stone Tools & Chain Armor
        groupCategory: "jungle_loot",
        constraints: {
            biomes: "#c:is_jungle" 
        },
        items: [
            "minecraft:chainmail_helmet",
            "minecraft:chainmail_chestplate",
            "minecraft:chainmail_leggings",
            "minecraft:chainmail_boots",
            "minecraft:stone_sword",
            "minecraft:stone_pickaxe",
            "minecraft:stone_axe",
            "minecraft:stone_shovel"
        ],
        patterns: [
            "minecraft:wild"
        ],
        materials: [
            "minecraft:redstone",
            "minecraft:gold",
            "minecraft:emerald",
            "minecraft:lapis",
            "oreganized:silver"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 45
            },
            frontier: {
                weight: 30
            }
        }
    },
    {   // Dark Forest - Stone Tools & Chain Armor
        groupCategory: "dark_forest_loot",
        constraints: {
            biomes: "#c:is_dark_forest" 
        },
        items: [
            "minecraft:chainmail_helmet",
            "minecraft:chainmail_chestplate",
            "minecraft:chainmail_leggings",
            "minecraft:chainmail_boots",
            "minecraft:stone_sword",
            "minecraft:stone_pickaxe",
            "minecraft:stone_axe",
            "minecraft:stone_shovel"
        ],
        patterns: [
            "minecraft:sentry"
        ],
        materials: [
            "minecraft:gold",
            "oreganized:silver",
            "minecraft:lapis",
            "minecraft:emerald",
            "vanillabackport:resin"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 45
            },
            frontier: {
                weight: 30
            }
        }
    },
    {   // Ocean - Stone Tools & Chain Armor
        groupCategory: "ocean_loot",
        constraints: {
            biomes: "#c:is_ocean" 
        },
        items: [
            "minecraft:chainmail_helmet",
            "minecraft:chainmail_chestplate",
            "minecraft:chainmail_leggings",
            "minecraft:chainmail_boots",
            "minecraft:stone_sword",
            "minecraft:stone_pickaxe",
            "minecraft:stone_axe",
            "minecraft:stone_shovel"
        ],
        patterns: [
            "minecraft:coast"
        ],
        materials: [
            "minecraft:lapis",
            "oreganized:silver",
            "minecraft:gold",
            "minecraft:emerald",
            "upgrade_aquatic:tooth"
        ],
        hasSpells: false,
        weights: {
            haven: {
                weight: 45
            },
            frontier: {
                weight: 30
            }
        }
    },
    {   // Swamp - Slime Armor
        groupCategory: "swamp_loot",
        constraints: {
            biomes: "#c:is_swamp"
        },
        items: [
            "usefulslime:slime_helmet",
            "usefulslime:slime_chestplate",
            "usefulslime:slime_leggings",
            "usefulslime:slime_boots"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:bolt",
            "minecraft:flow"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:amethyst",
            "minecraft:emerald"
        ],
        hasSpells: false,
        weights: {
            frontier: {
                quality: 1.5,
                weight: 30
            },
            ascent: {
                quality: 1.0,
                weight: 30
            },
            summit: {
                weight: 30
            }
        }
    },
    /*
        Biome-Specific
        Spell-Imbued
        Affix Loot
    */
    {   // Swamp - Slime Armor
        groupCategory: "swamp_spell_loot",
        constraints: {
            biomes: "#c:is_swamp"
        },
        items: [
            "usefulslime:slime_helmet",
            "usefulslime:slime_chestplate",
            "usefulslime:slime_leggings",
            "usefulslime:slime_boots"
        ],
        patterns: [
            "minecraft:wayfinder",
            "minecraft:raiser",
            "minecraft:shaper",
            "minecraft:host",
            "minecraft:bolt",
            "minecraft:flow"
        ],
        materials: [
            "minecraft:gold",
            "minecraft:amethyst",
            "minecraft:emerald"
        ],
        hasSpells: true,
        spells: [
            {
                spell: "irons_spellbooks:poison_arrow",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "usefulslime:slime_helmet",
                    "usefulslime:slime_chestplate",
                    "usefulslime:slime_leggings",
                    "usefulslime:slime_boots"
                ],
                needEquip: true
            },
            {
                spell: "irons_spellbooks:acid_orb",
                levelMin: 1,
                levelMax: 2,
                possibleItems: [
                    "usefulslime:slime_helmet",
                    "usefulslime:slime_chestplate",
                    "usefulslime:slime_leggings",
                    "usefulslime:slime_boots"
                ],
                needEquip: true
            },
            {
                spell: "irons_spellbooks:poison_breath",
                levelMin: 1,
                levelMax: 4,
                possibleItems: [
                    "usefulslime:slime_helmet",
                    "usefulslime:slime_chestplate",
                    "usefulslime:slime_leggings",
                    "usefulslime:slime_boots"
                ],
                needEquip: true
            }
        ],
        weights: {
            ascent: {
                quality: 2.0,
                weight: 5
            },
            summit: {
                weight: 5
            }
        }
    },
    
]