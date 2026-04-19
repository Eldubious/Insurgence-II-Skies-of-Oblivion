// Handle all gameplay events and effects which rely on per-player ticking
PlayerEvents.tick(event => {
  let server = event.getServer()
  let time = server.getTickCount()
  let player = event.getPlayer()
  let playerId = player.uuid.toString()

  let x = event.player.getX(); let y = event.player.getY(); let z = event.player.getZ()
  let dimension = event.player.level.dimension.toString()

  //let mainHandItem = event.player.mainHandItem.id.toString()
  //let offHandItem = event.player.offHandItem.id.toString()
  
  // Teleport players between dimensions depending on their y coordinate
  dimensionTp(server, playerId, dimension, x, y, z)
  
  // Only perform persistent data checks every 10 ticks/0.5 seconds
  if (time % 10 == 0) {
    let pData = player.getPersistentData()

    // Update the player's current dimensional effect
    updateDimensionEffect(server, player, playerId, pData, dimension)

    // Cleanup nether portal return data if no longer in the nether
    netherPortalReturnCleanup(pData, dimension)
  }
  
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

// Cleanup nether portal return data if no longer in the nether
function netherPortalReturnCleanup(pData, dimension) {
  if (pData.contains("nether_portal_return_coordinates") && !(dimension == "minecraft:the_nether" || dimension == "insurgence:the_nether")) {
    pData.remove("nether_portal_return_coordinates")
  }
  if (pData.contains("applied_nether_curse") && !(dimension == "minecraft:the_nether" || dimension == "insurgence:the_nether")) {
    pData.remove("applied_nether_curse")
  }
}