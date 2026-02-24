// A list of attribute modifiers which gateways entities use.
// Scale factor controls how much the base value increases for every world tier and wave.
const gatewayModifiers = {
  "armor": {
    id: "minecraft:generic.armor",
    operation: "add_value",
    baseValue: 3,
    scaleFactor: 3
  },
  "knockback_resistance": {
    id: "minecraft:generic.knockback_resistance",
    operation: "add_value",
    baseValue: 0.1,
    scaleFactor: 0.1
  },
  "max_health": {
    id: "minecraft:generic.max_health",
    operation: "add_multiplied_value",
    baseValue: 0.1,
    scaleFactor: 0.05
  },
  "life_steal": {
    id: "apothic_attributes:life_steal",
    operation: "add_value",
    baseValue: 0.2,
    scaleFactor: 0
  },
  "armor_shred": {
    id: "apothic_attributes:armor_shred",
    operation: "add_value",
    baseValue: 0.1,
    scaleFactor: 0.075
  },
  "prot_shred": {
    id: "apothic_attributes:prot_shred",
    operation: "add_value",
    baseValue: 0.1,
    scaleFactor: 0.075
  },
  "current_hp_damage": {
    id: "apothic_attributes:current_hp_damage",
    operation: "add_value",
    baseValue: -0.1,
    scaleFactor: 0.025
  }
}

const gatewayEffects = {
  "strength": {
    id: "minecraft:strength",
    duration: -1,
    baseAmplifier: 0,
    scaleFactor: 0.5
  },
  "resistance": {
    id: "minecraft:resistance",
    duration: -1,
    baseAmplifier: 0,
    scaleFactor: 0.5
  },
  "speed": {
    id: "minecraft:speed",
    duration: -1,
    baseAmplifier: 0,
    scaleFactor: 0.5
  },
  "speed_faster": {
    id: "minecraft:speed",
    duration: -1,
    baseAmplifier: 2,
    scaleFactor: 0.5
  },
  "infested": {
    id: "minecraft:infested",
    duration: -1,
    baseAmplifier: 0,
    scaleFactor: 0
  }
}
