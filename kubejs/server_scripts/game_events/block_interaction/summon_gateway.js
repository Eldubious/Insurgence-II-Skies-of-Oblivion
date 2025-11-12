// Summon a gateway of the correct difficulty when interacting with a gateway shrine
BlockEvents.rightClicked('insurgence:andesite_gateway_shrine', event => {
    if (event.player.shiftKeyDown) return
    if (event.hand == 'MAIN_HAND') handleShrineInteraction(event)
})
BlockEvents.rightClicked('insurgence:sandstone_gateway_shrine', event => {
    if (event.player.shiftKeyDown) return
    if (event.hand == 'MAIN_HAND') handleShrineInteraction(event)
})
BlockEvents.rightClicked('insurgence:mossy_gateway_shrine', event => {
    if (event.player.shiftKeyDown) return
    if (event.hand == 'MAIN_HAND') handleShrineInteraction(event)
})
BlockEvents.rightClicked('insurgence:deepslate_gateway_shrine', event => {
    if (event.player.shiftKeyDown) return
    if (event.hand == 'MAIN_HAND') handleShrineInteraction(event)
})
BlockEvents.rightClicked('insurgence:blackstone_gateway_shrine', event => {
    if (event.player.shiftKeyDown) return
    if (event.hand == 'MAIN_HAND') handleShrineInteraction(event)
})
BlockEvents.rightClicked('insurgence:end_stone_gateway_shrine', event => {
    if (event.player.shiftKeyDown) return
    if (event.hand == 'MAIN_HAND') handleShrineInteraction(event)
})

// Handle the interaction event for each gateway shrine
function handleShrineInteraction(event) {
    let entityData = event.block.getEntityData().get('data')
    let player = event.player
    let stages = player.getStages()
    let block = event.block
    
    // Don't do anything if a trial is in progress
    if (entityData.get('trialInProgress').toString() == '1b') {
        return
    }

    // Allow changing the gateway type using a renamed Name Tag in creative mode, and don't summon a gateway
    if (player.isCreative() && player.mainHandItem.id.toString() == 'minecraft:name_tag') {
        let enemy = player.mainHandItem.customName.getString().toLowerCase()
        entityData.put('enemyType', enemy)
        player.tell(`Set enemy type of the shrine at ${block.x} ${block.y} ${block.z} to "${enemy}"`)
        return
    }

    // Tell the user an enemy type must be assigned
    if (String(entityData.get('enemyType')) == '"none"') {
        player.tell(Component.translate("chat_message.insurgence.gateway_shrine.no_enemy_type"))
        return
    }

    let worldTier = 'haven'
    if (stages.has('pinnacle')) worldTier = 'pinnacle'
    else if (stages.has('summit')) worldTier = 'summit'
    else if (stages.has('ascent')) worldTier = 'ascent'
    else if (stages.has('frontier')) worldTier = 'frontier' 
    let enemyType = String(entityData.get('enemyType'))
    let gateway = `insurgence:shrine/${enemyType.substring(1, enemyType.length - 1).toLowerCase()}_${worldTier}`

    let summonGatewayCmd = `open_gateway ${block.x} ${block.y + 1} ${block.z} ${gateway}`
    event.server.runCommandSilent(summonGatewayCmd)
    entityData.put('trialInProgress', true)
}