// Create custom commands for debugging and game events
ServerEvents.commandRegistry(event => {
  const {
    commands: Commands,
    arguments: Arguments
  } = event
  
  // Tell the player all of their current game stages
  // with an optional argument to specify a different player
  event.register(Commands.literal('get_stages')
    .then(Commands.argument('target', Arguments.PLAYER.create(event))
      .executes(ctx => tellStages(Arguments.PLAYER.getResult(ctx, 'target')))
    )
  )
  // Helper function for get_stages command
  const tellStages = (player) => {
    player.tell(Component.literal(`Stages on the player ${player.name.getString()}:`))
    
    player.getStages().getAll().forEach(stage => {
      player.tell(Component.literal(stage))
    })
    return 1
  }

  // Marks the player as having completed the tutorial
  // Completing the tutorial allows travel from Haven -> Overworld
  event.register(Commands.literal('complete_tutorial')
    .then(Commands.argument('target', Arguments.PLAYER.create(event))
      .executes(ctx => completeTutorial(Arguments.PLAYER.getResult(ctx, 'target')))
    )
  )

  // Helper function for complete_tutorial command
  const completeTutorial = (player) => {
    let pData = player.getPersistentData()
    pData.putBoolean("tutorial_completed", true)
  }
})