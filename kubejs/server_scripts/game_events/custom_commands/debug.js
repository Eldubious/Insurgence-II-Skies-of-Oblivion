// Create custom commands for debugging
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
    // Helper function
    const tellStages = (player) => {
        player.tell(Component.literal(`Stages on the player ${player.name.getString()}:`))

        player.getStages().getAll().forEach(stage => {
            player.tell(Component.literal(stage))
        })
        return 1
    }
})