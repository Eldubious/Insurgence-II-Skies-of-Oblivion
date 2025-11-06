// Register the different variants of the Gateway-summoning shrine pillars
StartupEvents.registry("block", event => {

    event.create('insurgence:andesite_gateway_pillar')
        .translationKey('block.insurgence.andesite_gateway_pillar')
        .unbreakable()
        .noDrops()
        .blockEntity(entityInfo => {
            entityInfo.initialData({
                gateway: "insurgence:waystone/zombie",
                trialComplete: false
            })
        })
        

})