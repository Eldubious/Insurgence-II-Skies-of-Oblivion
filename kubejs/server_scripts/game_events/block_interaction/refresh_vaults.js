// Allow the player to completely refresh the loot of any vault using the refresh item
const refreshItem = "insurgence:token_of_renewal";
const refreshEffectSound = "minecraft:block.trial_spawner.ambient_ominous";
const vaultKeyItems = [
    "minecraft:trial_key", "minecraft:ominous_trial_key", "enderscape:end_city_key",
    "insurgence:pillager_key", "insurgence:ominous_pillager_key", "insurgence:sword_tower_key",
    "insurgence:staff_tower_key", "insurgence:cup_tower_key", "insurgence:ring_tower_key"
];

BlockEvents.rightClicked("minecraft:vault", event => {
    vaultRightClicked(event);
})
BlockEvents.rightClicked("enderscape:end_vault", event => {
    vaultRightClicked(event);
})

// Handle the right clicked event when clicking a vault
function vaultRightClicked(event) {
    if (!event.level.isClientSide()) {

        if (isHoldingRefreshItem(event.player, event.hand)) {
            // Only refresh loot if vault is currently inactive
            if (event.block.properties.get('vault_state') == 'inactive') {
                refreshVault(event.server, event.block, event.player, event.hand);
                refreshVaultEffects(event.server, event.block);
                tellRefreshSuccess(event.player);
            }
            else {
                tellRefreshError(event.player);
            }
        }
        else if (isHoldingKey(event.player, event.hand) && event.block.properties.get('vault_state') == 'active') {
            let targetKey = event.block.getEntityData().get("config").get("key_item").get("id");
            let keyComponents = event.block.getEntityData().get("config").get("key_item").get("components");
            let keyName = parseKeyComponents(targetKey, keyComponents);

            if (!isHoldingCorrectKey(event.player, event.hand, targetKey, keyComponents)) {
                let msg = Component.translate("chat_message.insurgence.vault.wrong_key").gray().append(keyName.green());
                event.player.tell(msg);
            }
        }
    }
}

// Tell the player the vault successfully refreshed
function tellRefreshSuccess(player) {
    let successMsg = Component.translate("chat_message.insurgence.token_of_renewal.success");
    player.tell(successMsg);
}

// Tell the player the vault couldn't be refreshed
function tellRefreshError(player) {
    let errorMsg = Component.literal("W.").font("kubejs:icons").append(
        Component.translate("chat_message.insurgence.token_of_renewal.error").font("minecraft:default")
    );
    player.tell(errorMsg);
}

// Run the commands responsible to reset a vault's memory
function refreshVault(server, block, player, hand) {
    let dim = block.dimension.toString();
    let x = block.getX();
    let y = block.getY();
    let z = block.getZ();

    let cmdRefresh = `execute in ${dim} run data remove block ${x} ${y} ${z} server_data.rewarded_players`;
    server.runCommandSilent(cmdRefresh);

    if (!player.isCreative()) {   // Subtract the player's items if not in creative mode
        if (hand == 'MAIN_HAND') {
            let itemAmt = player.mainHandItem.getCount();
            player.mainHandItem.setCount(itemAmt - 1);
        }
        else if (hand == 'OFF_HAND') {
            let itemAmt = player.offHandItem.getCount();
            player.offHandItem.setCount(itemAmt - 1);
        }           
    }
}

// Place the particle and sound effects for refreshing a vault
function refreshVaultEffects(server, block) {
    let dim = block.dimension.toString();
    let x = block.getX();
    let y = block.getY();
    let z = block.getZ();

    let cmdParticleFire = `execute in ${dim} run particle minecraft:soul_fire_flame ${x} ${y + 1.2} ${z} 0.05 0 0.05 0.045 5 normal`;
    server.runCommandSilent(cmdParticleFire);

    let cmdParticleSoul = `execute in ${dim} run particle minecraft:sculk_soul ${x} ${y + 1.3} ${z}`;
    server.runCommandSilent(cmdParticleSoul);

    let cmdAmbientSound = `execute positioned ${x} ${y} ${z} in ${dim} run playsound ${refreshEffectSound} block @a[distance=..25] ${x} ${y} ${z} 100`;
    server.runCommandSilent(cmdAmbientSound);
}

// Returns boolean for if the player is holding the refresh item
function isHoldingRefreshItem(player, hand) {
    if (player.mainHandItem.id.toString() == refreshItem && hand == "MAIN_HAND") {
        return true;
    }
    else if (player.offHandItem.id.toString() == refreshItem && hand == "OFF_HAND") {
        return true;
    }
    return false;
}

// Retuns boolean for if the player is holding any kind of key
function isHoldingKey(player, hand) {
    if (vaultKeyItems.includes(player.mainHandItem.id.toString()) && hand == "MAIN_HAND") {
        return true;
    }
    else if (vaultKeyItems.includes(player.offHandItem.id.toString()) && hand == "OFF_HAND") {
        return true;
    }
    return false;
}

// Returns a component with the translated name of the required key
function parseKeyComponents(id, components) {
    let modelData = 0;
    switch (id) {
        case "minecraft:trial_key":
            if (components == undefined) {
                return Component.translate("item.minecraft.trial_key");
            }
            modelData = components.getInt("minecraft:custom_model_data");
            switch (modelData) {
                case 711:
                    return Component.translate("item.dnt.shrine_key");

                case 712:
                    return Component.translate("item.dnt.creeper_key");

                case 713:
                    return Component.translate("item.dnt.citadel_key");

                case 715:
                    return Component.translate("item.dnt.trident_trial_key");

                case 717:
                    return Component.translate("item.dnt.piglin_donjon_key");

                case 718:
                    return Component.translate("item.dnt.piglin_outstation_key");

                case 719:
                    return Component.translate("item.dnt.nether_keep_key");

                case 721:
                    return Component.translate("item.dnt.end_castle_key");

                case 722:
                    return Component.translate("item.dnt.toxic_key");

                default:
                    return Component.empty();
            }
            
        case "minecraft:ominous_trial_key":
            if (components == undefined) {
                return Component.translate("item.minecraft.ominous_trial_key");
            }
            modelData = components.getInt("minecraft:custom_model_data");
            console.log(modelData)
            switch (modelData) {
                case 711:
                    return Component.translate("item.dnt.ominous_shrine_key");

                case 712:
                    return Component.translate("item.dnt.ominous_toxic_key");

                case 714:
                    return Component.translate("item.dnt.citadel_boss_key");

                case 716:
                    return Component.translate("item.dnt.trident_trial_boss_key");

                case 720:
                    return Component.translate("item.dnt.end_ship_key");

                case 723:
                    return Component.translate("item.dnt.toxic_boss_key");
                    
                default:
                    return Component.empty();
            }

        case "enderscape:end_city_key":
            return Component.translate("item.enderscape.end_city_key");

        case "insurgence:pillager_key":
            return Component.translate("item.insurgence.pillager_key");

        case "insurgence:ominous_pillager_key":
            return Component.translate("item.insurgence.ominous_pillager_key");

        case "insurgence:sword_tower_key":
            if (components == undefined) {
                return Component.empty();
            }
            return Component.empty();

    }
}

// Checks if the player is holding the correct key type with the correct components
function isHoldingCorrectKey(player, hand, targetKeyId, targetKeyComponents) {
    let playerKeyItem = player.mainHandItem;
    if (hand == "OFF_HAND")
        playerKeyItem = player.offHandItem;

    switch (playerKeyItem.id) {
        case "minecraft:trial_key":
            return false;

        case "minecraft:ominous_trial_key":
            return false;

        case "enderscape:end_city_key":
            if (targetKeyId == "enderscape:end_city_key")
                return true;
            else
                return false;

        case "insurgence:pillager_key":
            if (targetKeyId == "insurgence:pillager_key")
                return true;
            else
                return false;

        case "insurgence:ominous_pillager_key":
            if (targetKeyId == "insurgence:ominous_pillager_key")
                return true;
            else
                return false;
        
        default:
            return false;
    }
}
