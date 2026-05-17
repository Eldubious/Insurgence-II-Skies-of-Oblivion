// Customize what curio slots items can be placed into
ServerEvents.tags("item", event => {

  // Add items to slots
  let spyglassItems = ["minecraft:spyglass"]
  let compassItems = ["minecraft:compass", "minecraft:recovery_compass", "minecraft:map", "minecraft:filled_map",
    "minecraft:clock", "supplementaries:altimeter", "oreganized:thermometer", "oreganized:speedometer",
    "irons_spellbooks:wayward_compass", "supplementaries:slice_map"
  ]
  let bundleItems = ["quark:seed_pouch", "minecraft:bundle", "minecraft:white_bundle", "minecraft:light_gray_bundle",
    "minecraft:gray_bundle", "minecraft:black_bundle", "minecraft:brown_bundle", "minecraft:red_bundle", "minecraft:orange_bundle",
    "minecraft:yellow_bundle", "minecraft:lime_bundle", "minecraft:green_bundle", "minecraft:cyan_bundle",
    "minecraft:light_blue_bundle", "minecraft:blue_bundle", "minecraft:purple_bundle", "minecraft:magenta_bundle",
    "minecraft:pink_bundle", "malum:soulwoven_pouch", "malum:ravenous_pouch", "tide:fish_satchel",
    "dye_the_world:amber_bundle", "dye_the_world:aqua_bundle", "dye_the_world:beige_bundle", "dye_the_world:coral_bundle",
    "dye_the_world:forest_bundle", "dye_the_world:ginger_bundle", "dye_the_world:indigo_bundle", "dye_the_world:maroon_bundle",
    "dye_the_world:mint_bundle", "dye_the_world:navy_bundle", "dye_the_world:olive_bundle", "dye_the_world:rose_bundle",
    "dye_the_world:slate_bundle", "dye_the_world:tan_bundle", "dye_the_world:teal_bundle", "dye_the_world:verdant_bundle"
  ]

  for (let i in spyglassItems) {
    event.add("curios:spyglass", spyglassItems[i])
  }
  for (let i in compassItems) {
    event.add("curios:compass", compassItems[i])
  }
  for (let i in bundleItems) {
    event.add("curios:bundle", bundleItems[i])
  }

  // Remove items from other slots
  event.remove("curios:belt", "minecraft:spyglass")
})
