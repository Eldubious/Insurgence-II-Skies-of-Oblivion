// A list of the gateways to create.
const gateways = [
    /*
        Overworld encounter Gateways for Waystone Shrines
    */
    {   // Undead Monsters
        type: "shrine_encounter",
        waveCount: 2,
        name: "undead_monsters",
        size: "small",
        color: "#5F665C",
        entities: [
            {
                id: "minecraft:zombie",
                initCount: 1,
                scaleFactor: 1,
                modifiers: [],
                effects: [
                    "strength"
                ],
                lootTable: "minecraft:empty",
                gearSet: "insurgence:generic_zombie_armor/wild/copper"
            },
            {
                id: "minecraft:skeleton",
                initCount: 1,
                scaleFactor: 0.5,
                modifiers: [],
                effects: [
                    "speed"
                ],
                lootTable: "minecraft:empty"
            }
        ],
        modifiers: [
            "max_health_minor",
            "armor_shred"
        ],
        rewards: [
            {
                item: "minecraft:rotten_flesh",
                baseCount: 5,
                scaleFactor: 2
            }
        ]
    },
    {   // Arthropods
        type: "shrine_encounter",
        waveCount: 2,
        name: "arthropods",
        size: "small",
        color: "#8F4B40",
        entities: [
            {
                id: "minecraft:spider",
                initCount: 1,
                scaleFactor: 0.5,
                modifiers: [],
                effects: [
                    "speed",
                    "infested"
                ],
                lootTable: "minecraft:empty"
            },
            {
                id: "minecraft:silverfish",
                initCount: 2,
                scaleFactor: 1,
                modifiers: [],
                effects: [],
                lootTable: "minecraft:empty"
            }
        ],
        modifiers: [
            "max_health_minor",
            "armor_shred"
        ],
        rewards: [
            {
                item: "minecraft:string",
                baseCount: 5,
                scaleFactor: 2
            }
        ]
    },
    {   // Hoglin Riders
        type: "shrine_encounter",
        waveCount: 2,
        name: "hoglin_riders",
        size: "small",
        color: "#DE8022",
        entities: [
            {
                id: "minecraft:hoglin",
                desc: "entity_name.insurgence.hoglin_rider",
                initCount: 1,
                scaleFactor: 0.75,
                modifiers: [],
                effects: [],
                customNbt: {
                    IsImmuneToZombification: true
                },
                lootTable: "minecraft:empty",
                passenger: {
                    id: "minecraft:piglin",
                    customNbt: {
                        IsImmuneToZombification: true,
                        CannotHunt: true
                    },
                    lootTable: "minecraft:empty"
                }
            },
            {
                id: "minecraft:hoglin",
                desc: "entity_name.insurgence.baby_hoglin",
                initCount: 1,
                scaleFactor: 1,
                modifiers: [],
                effects: [],
                customNbt: {
                    IsImmuneToZombification: true,
                    Age: -2000000
                },
                lootTable: "minecraft:empty"
            }
        ],
        modifiers: [],
        rewards: [
            {
                item: "minecraft:gold_ingot",
                baseCount: 1,
                scaleFactor: 0.5
            }
        ]
    },
    /*
    Tower protectors for Tower of Staves
    */
    { // Skeletons
        type: "staves_tower",
        name: "skeletons",
        size: "medium",
        entity: {
            id: "minecraft:skeleton",
            count: 14 
        }
    }
]
