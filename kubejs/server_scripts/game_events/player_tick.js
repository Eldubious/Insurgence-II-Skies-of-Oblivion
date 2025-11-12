// Handle all player ticking events in this file
let tick = 1
let hasTotemVision = false
PlayerEvents.tick(event => {
    let server = event.getServer()
    let playerId = event.player.uuid.toString()
    let mainHandItem = event.player.mainHandItem.id.toString()
    let offHandItem = event.player.offHandItem.id.toString()

    // Give the player night vision if holding the Totem of Vision
    if (!hasTotemVision && (mainHandItem == 'insurgence:totem_of_vision' || offHandItem == 'insurgence:totem_of_vision')) {
        let giveNightVisionCmd = `effect give ${playerId} minecraft:night_vision infinite 0 true`
        server.runCommandSilent(giveNightVisionCmd)
        hasTotemVision = true
    }
    // Remove the player's infinite night vision if they are no longer holding the totem of vision
    else if (hasTotemVision && mainHandItem != 'insurgence:totem_of_vision' && offHandItem != 'insurgence:totem_of_vision') {
        let rmNightVisionCmd = `effect clear ${playerId} minecraft:night_vision`
        server.runCommandSilent(rmNightVisionCmd)
        hasTotemVision = false
    }

    
    if (tick == 100) tick = 0
    tick++
})