// Handle all gameplay changes which depend on player ticks
let pTick = 1

let hasTotemVision = false


PlayerEvents.tick(event => {
    let server = event.getServer()
    let playerId = event.player.uuid.toString()
    let mainHandItem = event.player.mainHandItem.id.toString()
    let offHandItem = event.player.offHandItem.id.toString()
    let dimension = event.player.level.dimension.toString()
    let x = event.player.getX(); let y = event.player.getY(); let z = event.player.getZ()

    // Teleport players between dimensions depending on their y coordinate
    dimensionTp(server, playerId, dimension, x, y, z)

    // Apply Night Vision to players holding the Totem of Vision
    visionTotemEffect(server, playerId, mainHandItem, offHandItem)

    
    if (pTick == 100) pTick = 0
    pTick++
})

// Teleport the player between dimensions
// Connections are Overworld <--> Haven <-- The End
function dimensionTp(server, playerId, dimension, x, y, z) {
    let targetDim = null
    let targetX = null
    let targetY = null
    let targetZ = null

    if (y <= -61 && dimension == 'insurgence:skies') {
        // Haven -> Overworld
        targetDim = 'minecraft:overworld'
        targetX = x
        targetY = 321
        targetZ = z
    }
    else if (y <= -71 && dimension == 'minecraft:the_end') {
        // The End -> Haven
        targetDim = 'insurgence:skies'
        targetX = 0
        targetY = 257
        targetZ = 0
    }
    else if (y > 400 && dimension == 'minecraft:overworld') {
        // Overworld -> Haven
        targetDim = 'insurgence:skies'
        targetX = x
        targetY = 0
        targetZ = z
    }

    if (targetDim == null || targetX == null || targetY == null || targetZ == null) {
        return
    }
    let tpCmd = `execute in ${targetDim} run tp ${playerId} ${targetX} ${targetY} ${targetZ}`
    server.runCommandSilent(tpCmd)
}



// Check if the player is holding the Totem of Vision
function visionTotemEffect(server, playerId, mainHandItem, offHandItem) {
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
}

