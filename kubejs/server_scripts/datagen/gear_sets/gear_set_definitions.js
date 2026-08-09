const gearSets = [
    {
        type: "gateway",
        name: "generic_zombie_armor",
        useTags: true,
        weight: 1,
        quality: 0,
        trims: {
            patterns: [
                "minecraft:wild"
            ],
            materials: [
                "minecraft:copper"
            ]
        },
        mainHand: [
            {
                weight: 1,
                applyTrims: true,
                haven: "minecraft:wooden_sword",
                frontier: "minecraft:stone_sword",
                ascent: "minecraft:iron_sword",
                summit: "minecraft:diamond_sword",
                pinnacle: "minecraft:netherite_sword"
            },
            {
                weight: 1,
                applyTrims: true,
                id: "minecraft:wooden_axe"
            }
        ],
        helmet: [
            {
                weight: 1,
                applyTrims: true,
                id: "minecraft:leather_helmet"
            }
        ],
        chestplate: [
            {
                weight: 1,
                applyTrims: true,
                id: "minecraft:leather_chestplate"
            }
        ],
        leggings: [
            {
                weight: 1,
                applyTrims: true,
                id: "minecraft:leather_leggings"
            }
        ],
        boots: [
            {
                weight: 1,
                applyTrims: true,
                id: "minecraft:leather_boots"
            }
        ]
    },
    /*
        ---- Ranged Weapons with Ammo ----
    */
    {   // Crossbow with Spectral Arrows
        type: "gateway",
        name: "crossbow_with_spectral_arrow",
        useTags: false,
        weight: 1,
        quality: 0,
        mainHand: [
            {
                weight: 1,
                applyTrims: false,
                id: "minecraft:crossbow"
            }
        ],
        offHand: [
            {
                weight: 1,
                applyTrims: false,
                id: "minecraft:spectral_arrow",
                count: 12
            }
        ]
    },
    /*
        ---- Full Sets ----
    */
    {   // Electrum Armor Ranged
        type: "gateway",
        name: "electrum_armor_ranged",
        useTags: false,
        weight: 1,
        quality: 0,
        trims: {
            patterns: [
                "minecraft:bolt"
            ],
            materials: [
                "minecraft:iron"
            ]
        },
        mainHand: [
            {
                weight: 1,
                applyTrims: false,
                id: "minecraft:bow"
            }
        ],
        helmet: [
            {
                weight: 1,
                applyTrims: true,
                id: "oreganized:electrum_helmet"
            }
        ],
        chestplate: [
            {
                weight: 1,
                applyTrims: true,
                id: "oreganized:electrum_chestplate"
            }
        ],
        leggings: [
            {
                weight: 1,
                applyTrims: true,
                id: "oreganized:electrum_leggings"
            }
        ],
        boots: [
            {
                weight: 1,
                applyTrims: true,
                id: "oreganized:electrum_boots"
            }
        ]
    },
    {   // Electrum Armor Melee
        type: "gateway",
        name: "electrum_armor_melee",
        useTags: false,
        weight: 1,
        quality: 0,
        trims: {
            patterns: [
                "minecraft:bolt"
            ],
            materials: [
                "minecraft:iron"
            ]
        },
        mainHand: [
            {
                weight: 1,
                applyTrims: false,
                id: "oreganized:electrum_sword"
            },
            {
                weight: 1,
                applyTrims: false,
                id: "oreganized:electrum_axes"
            }
        ],
        helmet: [
            {
                weight: 1,
                applyTrims: true,
                id: "oreganized:electrum_helmet"
            }
        ],
        chestplate: [
            {
                weight: 1,
                applyTrims: true,
                id: "oreganized:electrum_chestplate"
            }
        ],
        leggings: [
            {
                weight: 1,
                applyTrims: true,
                id: "oreganized:electrum_leggings"
            }
        ],
        boots: [
            {
                weight: 1,
                applyTrims: true,
                id: "oreganized:electrum_boots"
            }
        ]
    }
]