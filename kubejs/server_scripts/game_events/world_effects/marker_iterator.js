// Iterates on all marker entities every tick.
ServerEvents.tick(event => {
    let server = event.server
    let markers = server.getEntities().filter(e => e.id.toString() == "minecraft:marker")
    for (let i in markers) {
        let m = markers[i]
        let data = m.getNbt().data
        if (data == null) continue
        
        switch (data.type) {
            case null:
                break
            case "place_effect":
                switch (data.effect) {
                    case null:
                        break
                    case "nether_portal_area":
                        createNetherPortal(server, m)
                        break
                }
                break
        }
    }
})