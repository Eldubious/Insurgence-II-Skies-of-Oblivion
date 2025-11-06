// Register effects that are given to all players in their respective dimension
StartupEvents.registry("mob_effect", event => {

    event.create("insurgence:overworld_curse")
        .translationKey("mob_effect.insurgence.overworld_curse")
        .color(Color.LIGHT_BLUE_DYE)
        .modifyAttribute("minecraft:generic.armor", "0c91962e-bac3-11f0-8de9-0242ac120002", 20, "add_value")
        .effectTick((e) => {
            let dimensionId = e.level.dimension.toString();

            if (dimensionId != "minecraft:overworld") {
                e.server.runCommandSilent(`effect clear ${e.getUuid().toString()} insurgence:overworld_curse`)
            }
        })

    event.create("insurgence:nether_curse")
        .translationKey("mob_effect.insurgence.nether_curse")
        .color(Color.RED_DYE)
        .modifyAttribute("minecraft:generic.armor_toughness", "0001de6e-bac3-11f0-8de9-0242ac120002", 20, "add_value")
        .effectTick((e) => {
            let dimensionId = e.level.dimension.toString();

            if (dimensionId != "minecraft:overworld") {
                e.server.runCommandSilent(`effect clear ${e.getUuid().toString()} insurgence:nether_curse`)
            }
        })

    event.create("insurgence:end_curse")
        .translationKey("mob_effect.insurgence.end_curse")
        .color(Color.MAGENTA_DYE)
        .modifyAttribute("apothic_attributes:armor_pierce", "17a1e320-bac3-11f0-8de9-0242ac120002", 20, "add_value")
        .effectTick((e) => {
            let dimensionId = e.level.dimension.toString();

            if (dimensionId != "minecraft:the_end") {
                e.server.runCommandSilent(`effect clear ${e.getUuid().toString()} insurgence:end_curse`)
            }
        })

    event.create("insurgence:haven_blessing")
        .translationKey("mob_effect.insurgence.haven_blessing")
        .color(Color.WHITE_DYE)
        .modifyAttribute("minecraft:generic.attack_damage", "1d382218-bac3-11f0-8de9-0242ac120002", 20, "add_value")
        .effectTick((e) => {
            let dimensionId = e.level.dimension.toString();

            if (dimensionId != "insurgence:skies") {
                e.server.runCommandSilent(`effect clear ${e.getUuid().toString()} insurgence:haven_blessing`)
            }
        })
})