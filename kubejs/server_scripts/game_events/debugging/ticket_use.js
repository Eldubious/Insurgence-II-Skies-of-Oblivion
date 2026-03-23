// Handles all uses of debug tickets
ItemEvents.firstRightClicked("insurgence:debug_ticket", event => {
    let item = event.getItem()

    function ticket_error(errorType) {
        event.player.tell(Component.translate(`chat_message.insurgence.debug_ticket_${errorType}`).gray().italic())
    }

    if (event.getHand() == "OFF_HAND") {
        ticket_error("wrong_hand")
    }
    else {
        let funcType = item.customData.get("type")
        if (funcType != null) funcType = funcType.getAsString().toString()
        else ticket_error("no_data")

        switch (funcType) {
            case "world_tier":
                let tier = item.customData.get('tier')
                if (tier != null) tier = tier.getAsString().toString()
                else ticket_error("no_data")

                if (tier == 'haven' || tier == 'frontier' || tier == 'ascent' || tier == 'summit' || tier == 'pinnacle') {
                    event.server.runCommandSilent(`apoth set_world_tier ${event.player.uuid.toString()} ${tier}`)
                    event.player.tell(Component.translate(`chat_message.insurgence.set_world_tier_${tier}`).gray().italic())
                    
                    event.player.stages.remove("haven"); event.player.stages.remove("frontier"); event.player.stages.remove("ascent")
                    event.player.stages.remove("summit"); event.player.stages.remove("pinnacle")
                    event.player.stages.add(tier)
                }
                break
            case "place_effect":
                let effectType = item.customData.get('effect')
                if (effectType != null) effectType = effectType.getAsString().toString()
                else ticket_error("no_data")

                let effects = ['nether_portal_area']
                if (effects.indexOf(effectType) != -1) {
                    let pos = event.player.pos
                    let playerId = event.player.uuid.toString()
                    let dimId = event.player.level.dimension.toString()

                    let cmd = `execute positioned ${pos.x()} ${pos.y()} ${pos.z()} in ${dimId} as ${playerId} run summon minecraft:marker ~ ~ ~ 
                        {data:{type:"place_effect",effect:"${effectType}"}}`
                    event.server.runCommandSilent(cmd)
                    event.player.tell(Component.translate(`chat_message.insurgence.place_effect_${effectType}`).gray().italic())
                }
                else ticket_error("no_data")

                break
        }
    }
})