// Register the blocks used as portal frames in custom portals
StartupEvents.registry("block", event => {

    event.create("insurgence:nether_portal_frame")
        .translationKey("block.insurgence.nether_portal_frame")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:features_cannot_replace")
        .tagBlock("insurgence:nether_portal_frame")
        .stoneSoundType()

    event.create("insurgence:overworld_portal_frame")
        .translationKey("block.insurgence.overworld_portal_frame")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:features_cannot_replace")
        .tagBlock("insurgence:overworld_portal_frame")
        .stoneSoundType()

})