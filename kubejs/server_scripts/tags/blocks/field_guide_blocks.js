// Add blocks as field guide entries by tag
ServerEvents.tags("block", event => {

  let oreBlocks = [
    "minecraft:coal_ore", "minecraft:iron_ore", "minecraft:copper_ore", "minecraft:gold_ore",
    "minecraft:redstone_ore", "minecraft:lapis_ore", "minecraft:diamond_ore", "minecraft:emerald_ore",
    "minecraft:ancient_debris", "minecraft:nether_quartz_ore", "minecraft:budding_amethyst", "minecraft:glowstone",
    "enderscape:shadoline_ore", "enderscape:nebulite_ore", "iss_magicfromtheeast:jade_ore", 
    "irons_spellbooks:mithril_ore", "oreganized:silver_ore", "oreganized:lead_ore"
  ]
  for (let i in oreBlocks) {
    let ore = oreBlocks[i]
    event.add("insurgence:field_guide/ore", ore)
  }

  let workstationBlocks = [
    "minecraft:crafting_table"
  ]
  for (let i in workstationBlocks) {
    let workstation = workstationBlocks[i]
    event.add("insurgence:field_guide/workstation", workstation)
  }
})