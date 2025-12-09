// Register the blocks used as portal frames in custom portals
StartupEvents.registry("block", event => {

    // Allows teleportation to the Nether
    event.create("insurgence:nether_portal")
        .translationKey("block.insurgence.nether_portal")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:features_cannot_replace")
        .stoneSoundType()

})