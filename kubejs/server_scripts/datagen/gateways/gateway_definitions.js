// A list of the gateways to create.
const gateways = [
  {   // Undead Monsters
    type: "shrine_encounter",
    waveCount: 2,
    name: "undead_monsters",
    size: "small",
    color: "#5F665C",
    entities: [
      {
        id: "minecraft:zombie",
        initCount: 2,
        scaleFactor: 2,
        modifiers: [
          "max_health",
          "armor",
          "knockback_resistance",
          "armor_shred",
          "prot_shred"
        ],
        effects: [
          "strength"
        ]
      },
      {
        id: "minecraft:skeleton",
        initCount: 1,
        scaleFactor: 1,
        modifiers: [
          "max_health",
          "armor"
        ],
        effects: [
          "speed"
        ]
      }
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
        initCount: 2,
        scaleFactor: 1,
        modifiers: [
          "max_health",
          "armor",
          "knockback_resistance",
          "life_steal",
          "current_hp_damage"
        ],
        effects: [
          "speed",
          "infested"
        ]
      },
      {
        id: "minecraft:silverfish",
        initCount: 3,
        scaleFactor: 2,
        modifiers: [
          "max_health",
          "life_steal"
        ],
        effects: []
      }
    ],
    rewards: [
      {
        item: "minecraft:string",
        baseCount: 5,
        scaleFactor: 2
      }
    ]
  }
]
