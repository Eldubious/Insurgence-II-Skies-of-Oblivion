// Handle all player ticking events in this file
let pTick = 1

let hasTotemVision = false
let hasOverworldCurse = false
let hasNetherCurse = false
let hasEndCurse = false
let hasHavenBlessing = false

PlayerEvents.tick(event => {
    let server = event.getServer()
    let playerId = event.player.uuid.toString()
    let mainHandItem = event.player.mainHandItem.id.toString()
    let offHandItem = event.player.offHandItem.id.toString()
    let dimension = event.player.dimension.id.toString()

    // Give the player the dimension's status effect
    applyDimensionEffects(server, playerId, dimension)

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

    
    if (pTick == 100) pTick = 0
    pTick++
})

// Do the necessary checks for applying and removing dimension curses or blessings
function applyDimensionEffects(server, playerId, dimension) {
    // Haven Blessing
    if (!hasHavenBlessing && dimension == 'insurgence:skies') {
        let giveDimBlessCmd = `effect give ${playerId} insurgence:haven_blessing infinite 0 true`
        server.runCommandSilent(giveDimBlessCmd)
        hasHavenBlessing = true
        hasOverworldCurse = false; hasNetherCurse = false; hasEndCurse = false
    }
    // Overworld Curse
    else if (!hasOverworldCurse && dimension == 'minecraft:overworld') {
        let giveDimCurseCmd = `effect give ${playerId} insurgence:overworld_curse infinite 0 true`
        server.runCommandSilent(giveDimCurseCmd)
        hasOverworldCurse = true
        hasHavenBlessing = false; hasNetherCurse = false; hasEndCurse = false
    }
    // Nether Curse
    else if (!hasNetherCurse && dimension == 'minecraft:the_nether') {
        let giveDimCurseCmd = `effect give ${playerId} insurgence:nether_curse infinite 0 true`
        server.runCommandSilent(giveDimCurseCmd)
        hasNetherCurse = true
        hasHavenBlessing = false; hasOverworldCurse = false; hasEndCurse = false
    }
    // End Curse
    else if (!hasEndCurse && dimension == 'minecraft:the_end') {
        let giveDimCurseCmd = `effect give ${playerId} insurgence:end_curse infinite 0 true`
        server.runCommandSilent(giveDimCurseCmd)
        hasEndCurse = true
        hasHavenBlessing = false; hasOverworldCurse = false; hasNetherCurse = false
    }
    // Player is in another dimension, or the flags are messed up
    else {
        hasHavenBlessing = false; hasOverworldCurse = false
        hasNetherCurse = false; hasEndCurse = false

        let rmDimCurseCmd = `effect clear ${playerId} insurgence:haven_blessing`
        server.runCommandSilent(rmDimCurseCmd)
        rmDimCurseCmd = `effect clear ${playerId} insurgence:overworld_curse`
        server.runCommandSilent(rmDimCurseCmd)
        rmDimCurseCmd = `effect clear ${playerId} insurgence:nether_curse`
        server.runCommandSilent(rmDimCurseCmd)
        rmDimCurseCmd = `effect clear ${playerId} insurgence:end_curse`
        server.runCommandSilent(rmDimCurseCmd)
    }
}