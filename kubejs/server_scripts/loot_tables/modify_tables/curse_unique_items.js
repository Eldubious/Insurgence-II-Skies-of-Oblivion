LootJS.modifiers(event => {
    event.addTypeModifier(...LootType.values())
        .name("insurgence:curse_unique_items")
        .group(ItemFilter.tag("insurgence:unique_item"), action => {
            action.jsonFunction({
                function: "minecraft:set_components",
                components: {
                    "!minecraft:enchantments": {},
                    "!minecraft:stored_enchantments": {}
                }
            });
            action.jsonFunction({
                function: "minecraft:enchant_randomly",
                options: "#minecraft:curse"
            });
        });
});