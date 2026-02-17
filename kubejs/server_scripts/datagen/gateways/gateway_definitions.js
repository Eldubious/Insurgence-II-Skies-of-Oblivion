// A list of the gateways to create.
const gateways = [
  {
    type: "shrine_encounter",
    name: "undead_monsters",
    size: "small",
    color: "#5F665C",
    entities: [
      {
        id: "minecraft:zombie",
        initCount: 2,
        scaleFactor: 2,
        modifiers: [
          "minecraft:generic.armor",
          "minecraft:generic.knockback_resistance"
        ],
        effects: [
          "minecraft:strength"
        ]
      }
    ],
    rewards: [
      {
        item: "minecraft:rotten_flesh",
        baseCount: 5,
        scaleFactor: 7
      }
    ]
  }
]
