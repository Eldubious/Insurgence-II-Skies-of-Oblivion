const particleEffectTypes = ["nether_portal_area"];

// Handles all uses of debug tickets
ItemEvents.firstRightClicked("insurgence:debug_ticket", event => {
    let server = event.server;
    let player = event.player;
    let uuid = player.uuid.toString();
    let item = event.getItem();

    if (event.getHand() == "OFF_HAND")
        ticket_error(player, "wrong_hand");
    else {
        let funcType = item.customData.get("type");
        if (funcType != null)
            funcType = funcType.getAsString().toString();
        else
            ticket_error(player, "no_data");

        switch (funcType) {
            case "send_to_secret_world":
                server.runCommandSilent(`execute as ${uuid} run function insurgence:dev/send_to_secret_world`);
                break;

            case "world_tier":
                let tier = item.customData.get('tier');
                if (tier != null)
                    tier = tier.getAsString().toString();
                else
                    ticket_error(player, "no_data");

                if (tier == 'haven' || tier == 'frontier' || tier == 'ascent' || tier == 'summit' || tier == 'pinnacle')
                    event.server.runCommandSilent(`execute as ${uuid} run function insurgence:advancement/set_world_tier/${tier}`);
                break;
                
            case "place_effect":
                let effectType = item.customData.get("effect");
                if (effectType != null)
                    effectType = effectType.getAsString().toString();
                else
                    ticket_error(player, "no_data");

                if (particleEffectTypes.indexOf(effectType) != -1) {
                    let pos = player.pos;
                    let dimId = player.level.dimension.toString();

                    let cmd = `execute positioned ${pos.x()} ${pos.y()} ${pos.z()} in ${dimId} as ${uuid} run summon minecraft:marker ~ ~ ~ ` +
                        `{data:{type:"place_effect",effect:"${effectType}"}}`;
                    server.runCommandSilent(cmd);
                    player.tell(Component.translate(`chat_message.insurgence.place_effect_${effectType}`).gray().italic());
                }
                else
                    ticket_error(player, "no_data");
                break;

            case "toggle_flag":
                let flag = item.customData.get("flag");
                if (flag != null)
                    flag = flag.getAsString().toString();
                else
                    ticket_error(player, "no_data");
                toggleFlag(player, flag);
                break;
        }
    }
});

// Messages the player that there was an error with using the debug ticket.
function ticket_error(player, errorType) {
    player.tell(Component.translate(`chat_message.insurgence.debug_ticket_${errorType}`).gray().italic());
}

// Toggles a flag in the player's persistent data
function toggleFlag(player, flag) {
    let pData = player.getPersistentData();
    if (!pData.contains("flags"))
        pData.put("flags", []);
    else {
        let flags = pData.get("flags");

        if (flags.toArray().indexOf(flag) == -1) {  // Flag is false
            flags.push(flag);
            player.tell(Component.literal(`Toggled flag "${flag}" to `).append(Component.literal("TRUE").green()));
        }
        else {  // Flag is true
            let fIdx = flags.toArray().indexOf(flag);
            if (fIdx != -1) 
                flags.remove(fIdx);
            player.tell(Component.literal(`Toggled flag "${flag}" to `).append(Component.literal("FALSE").red()));
        }
    }
}
