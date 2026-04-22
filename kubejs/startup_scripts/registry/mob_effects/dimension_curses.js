// Register effects that are given to all players in their respective dimension
StartupEvents.registry("mob_effect", event => {
  
  event.create("insurgence:overworld_curse")
    .translationKey("mob_effect.insurgence.overworld_curse")
    .color(Color.LIGHT_BLUE_DYE)
    .modifyAttribute("minecraft:generic.armor", "insurgence:overworld_curse_armor_buff", 20, "add_value")
  
  event.create("insurgence:nether_curse")
    .translationKey("mob_effect.insurgence.nether_curse")
    .color(Color.RED_DYE)
    .modifyAttribute("minecraft:generic.armor_toughness", "insurgence:nether_curse_armor_toughness_buff", 20, "add_value")
  
  event.create("insurgence:end_curse")
    .translationKey("mob_effect.insurgence.end_curse")
    .color(Color.MAGENTA_DYE)
    .modifyAttribute("apothic_attributes:armor_pierce", "insurgence:end_curse_armor_pierce_buff", 20, "add_value")
  
  event.create("insurgence:starlight_curse")
    .translationKey("mob_effect.insurgence.starlight_curse")
    .color(Color.DARK_PURPLE)
    .modifyAttribute("minecraft:generic.max_health", "insurgence:starlight_curse_health_buff", 40, "add_value")
  
  event.create("insurgence:haven_blessing")
    .translationKey("mob_effect.insurgence.haven_blessing")
    .color(Color.WHITE_DYE)
    .modifyAttribute("minecraft:generic.attack_damage", "insurgence:haven_blessing_damage_buff", 20, "add_value")

  event.create("insurgence:secret_blessing")
    .translationKey("mob_effect.insurgence.secret_blessing")
    .color(Color.GOLD)
    .modifyAttribute("minecraft:generic.armor", "insurgence:secret_blessing_armor_buff", 20, "add_value")
    .modifyAttribute("minecraft:generic.max_health", "insurgence:secret_blessing_health_buff", 20, "add_value")
  
})

// Handles ticking for every mob effect
function effectTick(entity, effectType) {
  
}


