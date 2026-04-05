// Register fuel items for the custom portal blocks.
StartupEvents.registry("item", event => {

    event.create("insurgence:nether_fuel")
        .translationKey("item.insurgence.nether_fuel")
        .texture("minecraft:item/charcoal")
        .rarity("rare")
        .tooltip(Component.translate("tooltip.insurgence.info.nether_fuel").gold().italic())
})