// Register effects that are given to all players in their respective dimension
StartupEvents.registry("mob_effect", event => {

    event.create("insurgence:overworld_curse")
        .translationKey("mob_effect.insurgence.overworld_curse")
        .color(Color.LIGHT_BLUE_DYE)
        .modifyAttribute("minecraft:generic.armor", "0c91962e-bac3-11f0-8de9-0242ac120002", 20, "add_value")
        .effectTick((e) => {
            let dimensionId = e.level.dimension.toString();
            let effectLevels = getDimensionEffectLevels(e)

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
            let effectLevels = getDimensionEffectLevels(e)

            if (dimensionId != "minecraft:the_nether" && dimensionId != "insurgence:the_nether") {
                e.server.runCommandSilent(`effect clear ${e.getUuid().toString()} insurgence:nether_curse`)
            }
        })

    event.create("insurgence:end_curse")
        .translationKey("mob_effect.insurgence.end_curse")
        .color(Color.MAGENTA_DYE)
        .modifyAttribute("apothic_attributes:armor_pierce", "17a1e320-bac3-11f0-8de9-0242ac120002", 20, "add_value")
        .effectTick((e) => {
            let dimensionId = e.level.dimension.toString();
            let effectLevels = getDimensionEffectLevels(e)

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
            let effectLevels = getDimensionEffectLevels(e)

            if (dimensionId != "insurgence:skies") {
                e.server.runCommandSilent(`effect clear ${e.getUuid().toString()} insurgence:haven_blessing`)
            }
        })
})

function getDimensionEffectLevels(entity) {
    let effectLevels = {
        "minecraft:overworld": 5,
        "insurgence:the_nether": 5,
        "minecraft:the_end": 5,
        "insurgence:skies": 0
    }
    if (entity.id.toString() == "minecraft:player") {
        let pData = entity.getPersistentData()

        if (!pData.contains("dimension_effect_levels")) {   // Create default if nonexistent
            pData.put("dimension_effect_levels", effectLevels)
            return effectLevels
        }
        
        effectLevels["minecraft:overworld"] = pData.get("dimension_effect_levels")["minecraft:overworld"]
        effectLevels["insurgence:the_nether"] = pData.get("dimension_effect_levels")["insurgence:the_nether"]
        effectLevels["minecraft:the_end"] = pData.get("dimension_effect_levels")["minecraft:the_end"]
        effectLevels["insurgence:skies"] = pData.get("dimension_effect_levels")["insurgence:skies"]
        return effectLevels
    }
    else return effectLevels
}