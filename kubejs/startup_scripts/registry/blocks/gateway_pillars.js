// Register the different variants of the Gateway-summoning shrine pillars
StartupEvents.registry("block", event => {

    // Andesite
    event.create('insurgence:andesite_gateway_shrine')
        .translationKey('block.insurgence.andesite_gateway_shrine')
        .unbreakable()
        .noDrops()
        .stoneSoundType()
        .blockEntity(entityInfo => {
            entityInfo.initialData({
                enemyType: "none",
                trialInProgress: false
            })
        })
        .box(0, 0, 0, 16, 9, 16, true)
        .tagBoth("insurgence:gateway_shrines")
        
        
    // Sandstone
    event.create('insurgence:sandstone_gateway_shrine')
        .translationKey('block.insurgence.sandstone_gateway_shrine')
        .unbreakable()
        .noDrops()
        .stoneSoundType()
        .blockEntity(entityInfo => {
            entityInfo.initialData({
                enemyType: "none",
                trialInProgress: false
            })
        })
        .box(0, 0, 0, 16, 9, 16, true)
        .tagBoth("insurgence:gateway_shrines")

    // Mossy Stone
    event.create('insurgence:mossy_gateway_shrine')
        .translationKey('block.insurgence.mossy_gateway_shrine')
        .unbreakable()
        .noDrops()
        .stoneSoundType()
        .blockEntity(entityInfo => {
            entityInfo.initialData({
                enemyType: "none",
                trialInProgress: false
            })
        })
        .box(0, 0, 0, 16, 9, 16, true)
        .tagBoth("insurgence:gateway_shrines")

    // Deepslate
    event.create('insurgence:deepslate_gateway_shrine')
        .translationKey('block.insurgence.deepslate_gateway_shrine')
        .unbreakable()
        .noDrops()
        .stoneSoundType()
        .blockEntity(entityInfo => {
            entityInfo.initialData({
                enemyType: "none",
                trialInProgress: false
            })
        })
        .box(0, 0, 0, 16, 9, 16, true)
        .tagBoth("insurgence:gateway_shrines")

    // Blackstone
    event.create('insurgence:blackstone_gateway_shrine')
        .translationKey('block.insurgence.blackstone_gateway_shrine')
        .unbreakable()
        .noDrops()
        .stoneSoundType()
        .blockEntity(entityInfo => {
            entityInfo.initialData({
                enemyType: "none",
                trialInProgress: false
            })
        })
        .box(0, 0, 0, 16, 9, 16, true)
        .tagBoth("insurgence:gateway_shrines")

    // End Stone
    event.create('insurgence:end_stone_gateway_shrine')
        .translationKey('block.insurgence.end_stone_gateway_shrine')
        .unbreakable()
        .noDrops()
        .stoneSoundType()
        .blockEntity(entityInfo => {
            entityInfo.initialData({
                enemyType: "none",
                trialInProgress: false
            })
        })
        .box(0, 0, 0, 16, 9, 16, true)
        .tagBoth("insurgence:gateway_shrines")
        

})
