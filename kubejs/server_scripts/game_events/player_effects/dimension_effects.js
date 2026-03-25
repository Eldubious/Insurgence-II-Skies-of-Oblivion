// Apply dimension effects to players
PlayerEvents.tick(event => {
  let server = event.getServer()
  let playerId = event.player.uuid.toString()
  let dimension = event.player.level.dimension.toString()
  let pData = event.player.getPersistentData()
  
  switch (dimension) {
    case 'insurgence:skies':
      removeAllCurses(server, playerId, 'insurgence:haven_blessing')
      server.runCommandSilent(`effect give ${playerId} insurgence:haven_blessing infinite ${0} true`)
      break

    case 'minecraft:overworld':
      removeAllCurses(server, playerId, 'insurgence:overworld_curse')
      server.runCommandSilent(`effect give ${playerId} insurgence:overworld_curse infinite ${4} true`)
      break

    case 'minecraft:the_nether':
      removeAllCurses(server, playerId, 'insurgence:nether_curse')
      server.runCommandSilent(`effect give ${playerId} insurgence:nether_curse infinite ${4} true`)
      break

    case 'insurgence:the_nether':
      removeAllCurses(server, playerId, 'insurgence:nether_curse')
      server.runCommandSilent(`effect give ${playerId} insurgence:nether_curse infinite ${4} true`)
      break
    
    case 'minecraft:the_end':
      removeAllCurses(server, playerId, 'insurgence:end_curse')
      server.runCommandSilent(`effect give ${playerId} insurgence:end_curse infinite ${4} true`)
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