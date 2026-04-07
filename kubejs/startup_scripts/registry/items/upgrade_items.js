// Register items used to upgrade equipment
StartupEvents.registry("item", event => {

  event.create("insurgence:enchantment_upgrader")
    .translationKey("item.insurgence.enchantment_upgrader")
    .rarity("uncommon")

  event.create("insurgence:haven_blessing_upgrader")
    .translationKey("item.insurgence.haven_blessing_upgrader")
    .rarity("rare")
    .tooltip(Component.translate("tooltip.insurgence.info.haven_blessing_upgrader").italic())

  event.create("insurgence:overworld_curse_downgrader")
    .translationKey("item.insurgence.overworld_curse_downgrader")
    .rarity("rare")
    .tooltip(Component.translate("tooltip.insurgence.info.overworld_curse_downgrader").italic())

  event.create("insurgence:nether_curse_downgrader")
    .translationKey("item.insurgence.overworld_curse_downgrader")
    .rarity("rare")
    .tooltip(Component.translate("tooltip.insurgence.info.nether_curse_downgrader").italic())

  event.create("insurgence:nether_time_upgrader")
    .translationKey("item.insurgence.nether_time_upgrader")
    .rarity("rare")
    .tooltip(Component.translate("tooltip.insurgence.info.nether_time_upgrader").italic())

  event.create("insurgence:end_curse_downgrader")
    .translationKey("item.insurgence.end_curse_downgrader")
    .rarity("rare")
    .tooltip(Component.translate("tooltip.insurgence.info.end_curse_downgrader").italic())
})