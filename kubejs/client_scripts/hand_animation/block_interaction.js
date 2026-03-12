// Make the player swing their hand for events whose logic is handled on the server-side
BlockEvents.rightClicked('insurgence:andesite_gateway_shrine', event => event.player.swing())
BlockEvents.rightClicked('insurgence:sandstone_gateway_shrine', event => event.player.swing())
BlockEvents.rightClicked('insurgence:mossy_gateway_shrine', event => event.player.swing())
BlockEvents.rightClicked('insurgence:deepslate_gateway_shrine', event => event.player.swing())
BlockEvents.rightClicked('insurgence:blackstone_gateway_shrine', event => event.player.swing())
BlockEvents.rightClicked('insurgence:end_stone_gateway_shrine', event => event.player.swing())
BlockEvents.rightClicked('minecraft:vault', event => {
    if (handsMatch(event.player, 'insurgence:token_of_renewal')) event.player.swing()
})
BlockEvents.rightClicked('enderscape:end_vault', event => {
    if (handsMatch(event.player, 'insurgence:token_of_renewal')) event.player.swing()
})

// Returns true if either of the players hands are holding the target item
function handsMatch(player, targetItem) {
    let mainHandItem = player.mainHandItem.id.toString()
    let offHandItem = player.offHandItem.id.toString()

    if (mainHandItem == targetItem || offHandItem == targetItem) {
        return true
    }
    return false
}