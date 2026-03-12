// Handles all uses of debug tickets
ItemEvents.firstRightClicked("insurgence:debug_ticket", event => {
    let item = event.getItem()

    if (event.getHand() == "OFF_HAND") {
        event.player.tell(Component.translate("chat_message.insurgence.debug_ticket_wrong_hand").gray().italic())
    }
    else {
        let funcType = item.customData.get("type")
        if (funcType != null) funcType = funcType.getAsString().toString()
        else event.player.tell(Component.translate("chat_message.insurgence.debug_ticket_no_data").gray().italic())

        switch (funcType) {
            case "world_tier":
                let tier = item.customData.get('tier')
                if (tier != null) tier = tier.getAsString().toString()
                else event.player.tell(Component.translate("chat_message.insurgence.debug_ticket_no_data").gray().italic())

                if (tier == 'haven' || tier == 'frontier' || tier == 'ascent' || tier == 'summit' || tier == 'pinnacle') {
                    event.server.runCommandSilent(`apoth set_world_tier ${event.player.uuid.toString()} ${tier}`)
                    event.player.tell(Component.translate(`chat_message.insurgence.set_world_tier_${tier}`).gray().italic())
                    
                    event.player.stages.remove("haven"); event.player.stages.remove("frontier"); event.player.stages.remove("ascent")
                    event.player.stages.remove("summit"); event.player.stages.remove("pinnacle")
                    event.player.stages.add(tier)
                }
        }
    }
})