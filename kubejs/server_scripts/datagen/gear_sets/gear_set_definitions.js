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
    {
        type: "gateway",
        name: "piglin_rider_crossbow",
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
    }
]