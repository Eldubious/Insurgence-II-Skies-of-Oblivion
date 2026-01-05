// Register items used solely for debugging
StartupEvents.registry("item", event => {

    event.create("insurgence:debug_ticket")
        .translationKey("item.insurgence.debug_ticket")
        .texture("minecraft:item/name_tag")
        .rarity("irons_spellbooks:cinderous")
        .glow(true)
        .tooltip(Component.translate("tooltip.insurgence.debug_ticket.no_data").gold().italic())
})