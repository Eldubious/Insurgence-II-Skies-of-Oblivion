const netherFlavorTextCount = 12  // 1-indexed

// Apply dimension effects to players
function updateDimensionEffect(server, player, playerId, pData, dimension) {
  let amps = getDimensionEffectLevels(pData)
  let netherTime = getNetherTime(pData)

  // Failsafe to remove nether curse flag
  if (dimension != "minecraft:the_nether" && dimension != "insurgence:the_nether" && pData.contains("applied_nether_curse"))
    pData.remove("applied_nether_curse")

  // Return player to survival if they left the secret world
  if (dimension != "insurgence:secret_world" && !player.creative && !player.spectator && pData.contains("in_secret_world")) {
    pData.remove("in_secret_world")
    server.runCommandSilent(`execute as ${playerId} run gamemode survival @s`)
  }

  switch (dimension) {
    case 'insurgence:skies':
      applyDimensionEffect(server, player, playerId, "insurgence:haven_blessing", "infinite", parseFloat(amps["insurgence:skies"]), pData)
      break

    case 'minecraft:overworld':
      applyDimensionEffect(server, player, playerId, "insurgence:overworld_curse", "infinite", parseFloat(amps["minecraft:overworld"]), pData)
      break

    case 'minecraft:the_nether':
      applyDimensionEffect(server, player, playerId, "insurgence:nether_curse", netherTime, parseFloat(amps["insurgence:the_nether"]), pData)
      break

    case 'insurgence:the_nether':
      applyDimensionEffect(server, player, playerId, "insurgence:nether_curse", netherTime, parseFloat(amps["insurgence:the_nether"]), pData)
      break
    
    case 'minecraft:the_end':
      applyDimensionEffect(server, player, playerId, "insurgence:end_curse", "infinite", parseFloat(amps["minecraft:the_end"]), pData)
      break

    case 'eternal_starlight:starlight':
      applyDimensionEffect(server, player, playerId, "insurgence:starlight_curse", "infinite", parseFloat(amps["eternal_starlight:starlight"]), pData)
      break

    case 'irons_spellbooks:pocket_dimension':
      applyDimensionEffect(server, player, playerId, "insurgence:secret_blessing", "infinite", 0, pData)
      break

    case 'insurgence:secret_world':
      // Special case for Secret World; switch gamemode to adventure to prevent block placing/breaking
      if (!player.creative && !player.spectator && !pData.contains("in_secret_world")) {
        pData.putBoolean("in_secret_world", true)
        server.runCommandSilent(`execute as ${playerId} run gamemode adventure @s`)
      }
      applyDimensionEffect(server, player, playerId, "insurgence:secret_blessing", "infinite", 0, pData)
      break
  }
}

// Replaces all dimensional effects on a player with a new one. Only does something if the player doesn't already have the effect
function applyDimensionEffect(server, player, playerId, effectId, duration, amplifier, pData) {
  if (!player.hasEffect(effectId)) {

    // Teleport the player out of the nether only if their nether effect has run out
    if (effectId == "insurgence:nether_curse" && pData.contains("applied_nether_curse")) {
      pData.remove("applied_nether_curse")
      returnFromNether(server, player, playerId, pData)
    }

    removeAllCurses(server, playerId, effectId)
    let effectCmd = `effect give ${playerId} ${effectId} ${duration} ${amplifier} true`
    server.runCommandSilent(effectCmd)

    // Special case for applying nether effect
    if (effectId == "insurgence:nether_curse") {
      // Special flag to mark if the nether effect has already been applied to the player
      pData.putBoolean("applied_nether_curse", true)

      // Tell the player special flavor text when the effect is applied
      if (pData.contains("entered_nether_previously")) {
        let n = Math.round(Math.random() * 11) + 1
        server.runCommandSilent(`tellraw ${playerId} {"translate":"chat_message.insurgence.nether.flavor.enter_${n}"}`)
      }
      else {  // Player has never entered the nether before
        pData.putBoolean("entered_nether_previously", true)

        server.runCommandSilent(`tellraw ${playerId} {"translate":"chat_message.insurgence.nether.flavor.first_enter.line_1"}`)
        server.runCommandSilent(`tellraw ${playerId} {"translate":"chat_message.insurgence.nether.flavor.first_enter.line_2"}`)
      }
      server.runCommandSilent(`tellraw ${playerId} {"translate":"chat_message.insurgence.nether.time.first_enter"}`)
    }
  }
}

// Clear every dimensional curse from a player other than the exception param
const dimensionCurses = ["insurgence:overworld_curse", "insurgence:nether_curse", "insurgence:end_curse", "insurgence:haven_blessing",
  "insurgence:secret_blessing", "insurgence:starlight_curse"]
function removeAllCurses(server, playerId, exception) {
  for (let i in dimensionCurses) {
    let curse = dimensionCurses[i]
    if (curse != exception) {
      server.runCommandSilent(`effect clear ${playerId} ${curse}`)
    }
  }
}

// Gets the required effect level based on the player's upgrades.
function getDimensionEffectLevels(pData) {
    let effectLevels = {
      "minecraft:overworld": 5,
      "insurgence:the_nether": 5,
      "minecraft:the_end": 5,
      "eternal_starlight:starlight": 5,
      "insurgence:skies": 0
    }
    
    if (!pData.contains("dimension_effect_levels")) {   // Create default if nonexistent
      pData.put("dimension_effect_levels", effectLevels)
      return effectLevels
    }
    let playerEffectLevels = pData.get("dimension_effect_levels")
        
    effectLevels["minecraft:overworld"] = playerEffectLevels["minecraft:overworld"]
    effectLevels["insurgence:the_nether"] = playerEffectLevels["insurgence:the_nether"]
    effectLevels["minecraft:the_end"] = playerEffectLevels["minecraft:the_end"]
    effectLevels["insurgence:skies"] = playerEffectLevels["insurgence:skies"]
    effectLevels["eternal_starlight:starlight"] = playerEffectLevels["eternal_starlight:starlight"]
    return effectLevels
}

// Gets the total amount of time the player has in the nether
function getNetherTime(pData) {
  if (!pData.contains("nether_visit_time")) { // Default time is five minutes
    pData.put("nether_visit_time", 300)
    return 300
  }
  return parseFloat(pData.get("nether_visit_time"))
}

// Teleports the player out of the nether. Called when time has run out
function returnFromNether(server, player, playerId, pData) {
  if (pData.contains("nether_portal_return_coordinates")) {
    let returnPos = pData.get("nether_portal_return_coordinates")
    server.runCommandSilent(`execute in ${returnPos.dim.getAsString()} run tp ${playerId} ${parseFloat(returnPos.x)} ${parseFloat(returnPos.y)} ${parseFloat(returnPos.z)}`)
  }
  else if (!player.creative) {  // Could not get a respawn point; kill the player as last resort
    server.runCommandSilent(`damage ${playerId} 1000000000 minecraft:bad_respawn_point`)
  }
  else if (player.creative) {
    player.tell("Nether time ran out. Could not get respawn point.")
  }
}