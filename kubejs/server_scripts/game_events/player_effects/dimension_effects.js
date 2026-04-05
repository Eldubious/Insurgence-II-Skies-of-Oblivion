// Apply dimension effects to players
PlayerEvents.tick(event => {
  let server = event.getServer()
  let playerId = event.player.uuid.toString()
  let dimension = event.player.level.dimension.toString()
  let pData = event.player.getPersistentData()
  let amps = getDimensionEffectLevels(event.player)
  let time = parseFloat(getNetherTime(event.player))
  netherPortalReturnCleanup(event.player, dimension)

  switch (dimension) {
    case 'insurgence:skies':
      if (!event.player.hasEffect("insurgence:haven_blessing")) {
        removeAllCurses(server, playerId, 'insurgence:haven_blessing')
        server.runCommandSilent(`effect give ${playerId} insurgence:haven_blessing infinite ${parseFloat(amps["insurgence:skies"])} true`)
      }
      break

    case 'minecraft:overworld':
      if (!event.player.hasEffect("insurgence:overworld_curse")) {
        removeAllCurses(server, playerId, 'insurgence:overworld_curse')
        server.runCommandSilent(`effect give ${playerId} insurgence:overworld_curse infinite ${parseFloat(amps["minecraft:overworld"])} true`)
      }
      break

    case 'minecraft:the_nether':
      if (!event.player.hasEffect("insurgence:nether_curse")) {
        if (pData.contains("applied_nether_curse")) {
          pData.remove("applied_nether_curse")
          if (pData.contains("nether_portal_return_coordinates")) {
            let returnPos = pData.get("nether_portal_return_coordinates")
            server.runCommandSilent(`execute in ${returnPos.dim.getAsString()} run tp ${playerId} ${parseFloat(returnPos.x)} ${parseFloat(returnPos.y)} ${parseFloat(returnPos.z)}`)
          }
          else if (!event.player.creative) {
            server.runCommandSilent(`damage ${playerId} 1000000000 minecraft:bad_respawn_point`)
          }
        }

        removeAllCurses(server, playerId, 'insurgence:nether_curse')
        server.runCommandSilent(`effect give ${playerId} insurgence:nether_curse ${time} ${parseFloat(amps["insurgence:the_nether"])} true`)
        pData.putBoolean("applied_nether_curse", true)
      }
      break

    case 'insurgence:the_nether':
      if (!event.player.hasEffect("insurgence:nether_curse")) {
        if (pData.contains("applied_nether_curse")) {
          pData.remove("applied_nether_curse")

          if (pData.contains("nether_portal_return_coordinates")) {
            let returnPos = pData.get("nether_portal_return_coordinates")
            server.runCommandSilent(`execute in ${returnPos.dim.getAsString()} run tp ${playerId} ${parseFloat(returnPos.x)} ${parseFloat(returnPos.y)} ${parseFloat(returnPos.z)}`)
          }
          else if (!event.player.creative) {
            server.runCommandSilent(`damage ${playerId} 1000000000 minecraft:bad_respawn_point`)
          }
        }

        removeAllCurses(server, playerId, 'insurgence:nether_curse')
        server.runCommandSilent(`effect give ${playerId} insurgence:nether_curse ${time} ${parseFloat(amps["insurgence:the_nether"])} true`)
        pData.putBoolean("applied_nether_curse", true)
      }
      break
    
    case 'minecraft:the_end':
      if (!event.player.hasEffect("insurgence:end_curse")) {
        removeAllCurses(server, playerId, 'insurgence:end_curse')
        server.runCommandSilent(`effect give ${playerId} insurgence:end_curse infinite ${parseFloat(amps["minecraft:the_end"])} true`)
      }
      break
  }

})

// Clear every dimensional curse from a player other than the exception param
const dimensionCurses = ["insurgence:overworld_curse", "insurgence:nether_curse", "insurgence:end_curse", "insurgence:haven_blessing"]
function removeAllCurses(server, playerId, exception) {
  for (let i in dimensionCurses) {
    let curse = dimensionCurses[i]
    if (curse != exception) {
      server.runCommandSilent(`effect clear ${playerId} ${curse}`)
    }
  }
}

// Gets the required effect level based on the player's upgrades.
function getDimensionEffectLevels(entity) {
    let effectLevels = {
      "minecraft:overworld": 5,
      "insurgence:the_nether": 5,
      "minecraft:the_end": 5,
      "insurgence:skies": 0
    }
    let pData = entity.getPersistentData()

    if (!pData.contains("dimension_effect_levels")) {   // Create default if nonexistent
      pData.put("dimension_effect_levels", effectLevels)
      return effectLevels
    }
        
    effectLevels["minecraft:overworld"] = pData.get("dimension_effect_levels")["minecraft:overworld"]
    effectLevels["insurgence:the_nether"] = pData.get("dimension_effect_levels")["insurgence:the_nether"]
    effectLevels["minecraft:the_end"] = pData.get("dimension_effect_levels")["minecraft:the_end"]
    effectLevels["insurgence:skies"] = pData.get("dimension_effect_levels")["insurgence:skies"]
    return effectLevels

}

// Gets the amount of time the player has in the nether
function getNetherTime(entity) {
  let pData = entity.getPersistentData()

  if (!pData.contains("nether_visit_time")) { // Default time is five minutes
    pData.put("nether_visit_time", 300)
    return 300
  }

  return pData.get("nether_visit_time")
}

// Cleanup nether portal return data if no longer in the nether
function netherPortalReturnCleanup(entity, dimension) {
  let pData = entity.getPersistentData()

  if (pData.contains("nether_portal_return_coordinates") && !(dimension == "minecraft:the_nether" || dimension == "insurgence:the_nether")) {
    pData.remove("nether_portal_return_coordinates")
  }
  if (pData.contains("applied_nether_curse") && !(dimension == "minecraft:the_nether" || dimension == "insurgence:the_nether")) {
    pData.remove("applied_nether_curse")
  }
}