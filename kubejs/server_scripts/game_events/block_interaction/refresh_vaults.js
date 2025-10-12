// Allow the player to completely refresh the loot of any vault using the refresh item
const refresh_item = "insurgence:token_of_renewal"

BlockEvents.rightClicked("minecraft:vault", event => {

    if (!event.level.isClientSide() &&
        ((event.player.mainHandItem.id.toString() == refresh_item && event.hand == 'MAIN_HAND') ||
        (event.player.offHandItem.id.toString() == refresh_item && event.hand == 'OFF_HAND'))) {

        // Only refresh loot if vault is currently inactive
        if (event.block.properties.get('vault_state') == 'inactive') {
            let dim = event.block.dimension.toString();
            let x = event.block.getX()
            let y = event.block.getY()
            let z = event.block.getZ()

            let cmdRefresh = `execute in ${dim} run data remove block ${x} ${y} ${z} server_data.rewarded_players`
            event.server.runCommandSilent(cmdRefresh)

            let cmdParticleFire = `execute in ${dim} run particle minecraft:soul_fire_flame ${x} ${y + 1.2} ${z} 0.05 0 0.05 0.045 5 normal`
            event.server.runCommandSilent(cmdParticleFire)

            let cmdParticleSoul = `execute in ${dim} run particle minecraft:sculk_soul ${x} ${y + 1.3} ${z}`
            event.server.runCommandSilent(cmdParticleSoul)

            let cmdAmbientSound = `execute positioned ${x} ${y} ${z} in ${dim} run playsound minecraft:block.trial_spawner.ambient_ominous block @a[distance=..25] ${x} ${y} ${z} 100`
            event.server.runCommandSilent(cmdAmbientSound)

            if (!event.player.isCreative()) {   // Subtract the player's items if not in creative mode
                if (event.hand == 'MAIN_HAND') {
                    let itemAmt = event.player.mainHandItem.getCount()
                    event.player.mainHandItem.setCount(itemAmt - 1)
                }
                else if (event.hand == 'OFF_HAND') {
                    let itemAmt = event.player.offHandItem.getCount()
                    event.player.offHandItem.setCount(itemAmt - 1)
                }
                
            }
        }
    }
})

BlockEvents.rightClicked("enderscape:end_vault", event => {
    console.log(event.hand)

    if (!event.level.isClientSide() &&
        ((event.player.mainHandItem.id.toString() == refresh_item && event.hand == 'MAIN_HAND') ||
        (event.player.offHandItem.id.toString() == refresh_item && event.hand == 'OFF_HAND'))) {

        // Only refresh loot if vault is currently inactive
        if (event.block.properties.get('vault_state') == 'inactive') {
            let dim = event.block.dimension.toString();
            let x = event.block.getX()
            let y = event.block.getY()
            let z = event.block.getZ()

            let cmdRefresh = `execute in ${dim} run data remove block ${x} ${y} ${z} server_data.rewarded_players`
            event.server.runCommandSilent(cmdRefresh)

            let cmdParticleFire = `execute in ${dim} run particle minecraft:soul_fire_flame ${x} ${y + 1.2} ${z} 0.05 0 0.05 0.045 5 normal`
            event.server.runCommandSilent(cmdParticleFire)

            let cmdParticleSoul = `execute in ${dim} run particle minecraft:sculk_soul ${x} ${y + 1.3} ${z}`
            event.server.runCommandSilent(cmdParticleSoul)

            let cmdAmbientSound = `execute positioned ${x} ${y} ${z} in ${dim} run playsound minecraft:block.trial_spawner.ambient_ominous block @a[distance=..25] ${x} ${y} ${z} 100`
            event.server.runCommandSilent(cmdAmbientSound)

            if (!event.player.isCreative()) {   // Subtract the player's items if not in creative mode
                if (event.hand == 'MAIN_HAND') {
                    let itemAmt = event.player.mainHandItem.getCount()
                    event.player.mainHandItem.setCount(itemAmt - 1)
                }
                else if (event.hand == 'OFF_HAND') {
                    let itemAmt = event.player.offHandItem.getCount()
                    event.player.offHandItem.setCount(itemAmt - 1)
                }
                
            }
        }
    }
})