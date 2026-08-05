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

    // Damage unprotected players in the End once per second
    applyEndRitualDamage(server, player, playerId, pData, dimension, time)
  }

})

function applyEndRitualDamage(server, player, playerId, pData, dimension, time) {
  const warningFlag = "warned_about_end_ritual_damage"

  if (dimension != "minecraft:the_end") {
    if (pData.contains(warningFlag))
      pData.remove(warningFlag)
    return
  }

  let flags = pData.get("flags").toArray()
  if (flags.indexOf("completed_ender_eye_ritual") != -1 || player.creative || player.spectator || time % 20 != 0)
    return

  if (!pData.contains(warningFlag)) {
    pData.putBoolean(warningFlag, true)
    player.tell(Component.translate("chat_message.insurgence.end_ritual.damage_warning").darkPurple())
  }

  let damage = player.getMaxHealth() * 0.1
  server.runCommandSilent(`damage ${playerId} ${damage} insurgence:draconic_energy`)
  server.runCommandSilent(`execute in ${dimension} run particle minecraft:reverse_portal ${player.getX()} ${player.getY() + 1} ${player.getZ()} 0.35 0.7 0.35 0.02 8 normal`)
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
