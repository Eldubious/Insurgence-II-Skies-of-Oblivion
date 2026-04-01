// Allow the player to completely refresh the loot of any vault using the refresh item
const refreshItem = "insurgence:token_of_renewal"
const refreshEffectSound = "minecraft:block.trial_spawner.ambient_ominous"

BlockEvents.rightClicked("minecraft:vault", event => {
    vaultRightClicked(event)
})
BlockEvents.rightClicked("enderscape:end_vault", event => {
    vaultRightClicked(event)
})

// Handle the right clicked event when clicking a vault
function vaultRightClicked(event) {
    if (!event.level.isClientSide() &&
        ((event.player.mainHandItem.id.toString() == refreshItem && event.hand == 'MAIN_HAND') ||
        (event.player.offHandItem.id.toString() == refreshItem && event.hand == 'OFF_HAND'))) {

        // Only refresh loot if vault is currently inactive
        if (event.block.properties.get('vault_state') == 'inactive') {
            refreshVault(event.server, event.block, event.player, event.hand)
            refreshVaultEffects(event.server, event.block)
            tellRefreshSuccess(event.server, event.player)
        }
        else {
            tellRefreshError(event.server, event.player)
        }
    }
}

// Tell the player the vault successfully refreshed
function tellRefreshSuccess(server, player) {
    let cmdActionBar = `execute as ${player.uuid.toString()} run title @s actionbar {"translate":"actionbar.insurgence.token_of_renewal.success"}`
    server.runCommandSilent(cmdActionBar)
}

// Tell the player the vault couldn't be refreshed
function tellRefreshError(server, player) {
    let cmdActionBar = `execute as ${player.uuid.toString()} run title @s actionbar {"translate":"actionbar.insurgence.token_of_renewal.error"}`
    server.runCommandSilent(cmdActionBar)
}

// Run the commands responsible to reset a vault's memory
function refreshVault(server, block, player, hand) {
    let dim = block.dimension.toString();
    let x = block.getX()
    let y = block.getY()
    let z = block.getZ()

    let cmdRefresh = `execute in ${dim} run data remove block ${x} ${y} ${z} server_data.rewarded_players`
    server.runCommandSilent(cmdRefresh)

    if (!player.isCreative()) {   // Subtract the player's items if not in creative mode
        if (hand == 'MAIN_HAND') {
            let itemAmt = player.mainHandItem.getCount()
            player.mainHandItem.setCount(itemAmt - 1)
        }
        else if (hand == 'OFF_HAND') {
            let itemAmt = player.offHandItem.getCount()
            player.offHandItem.setCount(itemAmt - 1)
        }           
    }
}

// Place the particle and sound effects for refreshing a vault
function refreshVaultEffects(server, block) {
    let dim = block.dimension.toString();
    let x = block.getX()
    let y = block.getY()
    let z = block.getZ()

    let cmdParticleFire = `execute in ${dim} run particle minecraft:soul_fire_flame ${x} ${y + 1.2} ${z} 0.05 0 0.05 0.045 5 normal`
    server.runCommandSilent(cmdParticleFire)

    let cmdParticleSoul = `execute in ${dim} run particle minecraft:sculk_soul ${x} ${y + 1.3} ${z}`
    server.runCommandSilent(cmdParticleSoul)

    let cmdAmbientSound = `execute positioned ${x} ${y} ${z} in ${dim} run playsound ${refreshEffectSound} block @a[distance=..25] ${x} ${y} ${z} 100`
    server.runCommandSilent(cmdAmbientSound)
}