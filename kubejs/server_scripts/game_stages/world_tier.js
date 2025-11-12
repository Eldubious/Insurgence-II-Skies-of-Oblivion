// Give players game stages corresponding to their current world tier.
let prevWorldTier = null;

PlayerEvents.tick(event => {
    let currWorldTier = String(event.player.getNbt().get("neoforge:attachments").get("apotheosis:world_tier"))
    currWorldTier = currWorldTier.substring(1, currWorldTier.length - 1)

    if (currWorldTier != prevWorldTier) {   // Player has updated their world tier
        if (prevWorldTier != null) {
            event.player.stages.remove(prevWorldTier)
        }
        event.player.stages.add(currWorldTier)
        prevWorldTier = currWorldTier
    }
    
})