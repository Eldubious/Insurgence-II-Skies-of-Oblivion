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
  
  
  // Only perform persistent data checks every 10 ticks/0.5 seconds
  if (time % 10 == 0) {
    let pData = player.getPersistentData()

    // Create the flags field if it doesn't exist
    if (!pData.contains("flags"))
        pData.put("flags", []);

    // Update the player's current dimensional effect
    updateDimensionEffect(server, player, playerId, pData, dimension)

    // Cleanup nether portal return data if no longer in the nether
    netherPortalReturnCleanup(pData, dimension)
  }

})

// Cleanup nether portal return data if no longer in the nether
function netherPortalReturnCleanup(pData, dimension) {
  if (pData.contains("nether_portal_return_coordinates") && !(dimension == "minecraft:the_nether" || dimension == "insurgence:the_nether")) {
    pData.remove("nether_portal_return_coordinates")
  }
  if (pData.contains("applied_nether_curse") && !(dimension == "minecraft:the_nether" || dimension == "insurgence:the_nether")) {
    pData.remove("applied_nether_curse")
  }
}
