StartupEvents.registry("block", event => {

    event.create("insurgence:active_nether_portal_machine_dummy")
        .translationKey("block.insurgence.active_nether_portal_machine_dummy")
        .tagItem("insurgence:unused")

    event.create("insurgence:idle_nether_portal_machine_dummy")
        .translationKey("block.insurgence.idle_nether_portal_machine_dummy")
        .tagItem("insurgence:unused")
})