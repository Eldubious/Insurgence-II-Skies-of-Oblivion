const netherPortalBoxParticles = ["minecraft:flame", "irons_spellbooks:dragon_fire", "amendments:fireball_trail"]
const netherPortalAmbientParticle = "minecraft:trial_spawner_detection"
const netherPortalClosingParticle = "amendments:fireball_explosion"

function createNetherPortal(server, marker) {
    let uuid = marker.uuid.toString()   // Also used as the id of the portal event
    let tpId = `teleporting_to_nether+${uuid}`
    let persistentData = server.getPersistentData()
    if (!persistentData.contains("active_events")) {
        persistentData.put("active_events", [])
    }
    if (persistentData.get("active_events").toArray().indexOf(tpId) == -1) {
        persistentData.get("active_events").push(tpId)
    }
    let i = [].values
    let pos = marker.pos
    let dim = marker.level.dimension.toString()
    let data = marker.nbt.data
    let timer = data.timer
    if (timer == undefined) {
        server.runCommandSilent(`data modify entity ${uuid} data.timer set value 0`)

        server.runCommandSilent(`execute in ${dim} run playsound minecraft:block.portal.trigger block @a ${pos.x()} ${pos.y()} ${pos.z()} 100 0.7`)
    }
    else {
        timer = parseInt(timer.getAsString())

        if (timer < 80) {   // Start by highlighting the activation area
            createBox(server, dim, pos, timer)
        }
        else if (timer == 100) {    // Create the portal closing particles
            closeBox(server, dim, pos, timer, 0)
        }
        else if (timer == 105) {
            closeBox(server, dim, pos, timer, 0.5)
        }
        else if (timer == 120) {  // Marker has expired after 6 seconds
            server.runCommandSilent(`execute in ${dim} run particle ${netherPortalClosingParticle} ${pos.x()} ${pos.y()} ${pos.z()}`)
            server.runCommandSilent(`execute in ${dim} run playsound minecraft:entity.player.teleport block @a ${pos.x()} ${pos.y()} ${pos.z()} 100 0.7`)
            server.runCommandSilent(`execute in ${dim} run playsound minecraft:ambient.nether_wastes.mood block @a ${pos.x()} ${pos.y()} ${pos.z()} 50`)

            teleportEntities(server, tpId, dim, pos, uuid)
            marker.kill()

            let tpTagIdx = persistentData.get("active_events").toArray().indexOf(`${tpId}`)
            if (tpTagIdx != -1) persistentData.get("active_events").remove(tpTagIdx)
            return
        }
        server.runCommandSilent(`data modify entity ${uuid} data.timer set value ${timer + 1}`)
    }
    
}

// Spawn particles which indicate the size of the portal
function createBox(server, dim, pos, timer) {
    server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() - 5} ${pos.y() - 0.4} ${pos.z()} 0 0 2 0 2 normal`)
    server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() + 5} ${pos.y() - 0.4} ${pos.z()} 0 0 2 0 2 normal`)
    server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x()} ${pos.y() - 0.4} ${pos.z() - 5} 2 0 0 0 2 normal`)
    server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x()} ${pos.y() - 0.4} ${pos.z() + 5} 2 0 0 0 2 normal`)

    server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() - 5} ${pos.y() + 4.4} ${pos.z()} 0 0 2 0 2 normal`)
    server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() + 5} ${pos.y() + 4.4} ${pos.z()} 0 0 2 0 2 normal`)
    server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x()} ${pos.y() + 4.4} ${pos.z() - 5} 2 0 0 0 2 normal`)
    server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x()} ${pos.y() + 4.4} ${pos.z() + 5} 2 0 0 0 2 normal`)

    server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() - 5} ${pos.y() + 2} ${pos.z() - 5} 0 0.9 0 0 1 normal`)
    server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() + 5} ${pos.y() + 2} ${pos.z() + 5} 0 0.9 0 0 1 normal`)
    server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() + 5} ${pos.y() + 2} ${pos.z() - 5} 0 0.9 0 0 1 normal`)
    server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() - 5} ${pos.y() + 2} ${pos.z() + 5} 0 0.9 0 0 1 normal`)

    if (timer % 2 == 0) {
        server.runCommandSilent(`execute in ${dim} run particle ${netherPortalAmbientParticle} ${pos.x()} ${pos.y() + 1.25} ${pos.z()} 2 0.9 2 0 1 normal`)
    }
}

// Spawn the particles that indicate that the portal is closing
function closeBox(server, dim, pos, timer, startPos) {
    let interval = 1

    for (let i = startPos; i <= 5.5; i += interval) {
        let speed = getRandomSpeed()

        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() - 5} ${pos.y() - 0.4} ${pos.z() + i} 5 0.4 ${-i} ${speed} 0 normal`)
        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() - 5} ${pos.y() - 0.4} ${pos.z() - i} 5 0.4 ${i} ${speed} 0 normal`)
        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() + 5} ${pos.y() - 0.4} ${pos.z() + i} -5 0.4 ${-i} ${speed} 0 normal`)
        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() + 5} ${pos.y() - 0.4} ${pos.z() - i} -5 0.4 ${i} ${speed} 0 normal`)

        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() - i} ${pos.y() - 0.4} ${pos.z() + 5} ${i} 0.4 -5 ${speed} 0 normal`)
        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() - i} ${pos.y() - 0.4} ${pos.z() - 5} ${i} 0.4 5 ${speed} 0 normal`)
        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() + i} ${pos.y() - 0.4} ${pos.z() + 5} ${-i} 0.4 -5 ${speed} 0 normal`)
        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() + i} ${pos.y() - 0.4} ${pos.z() - 5} ${-i} 0.4 5 ${speed} 0 normal`)

        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() - 5} ${pos.y() + 4.4} ${pos.z() + i} 5 -4.4 ${-i} ${speed} 0 normal`)
        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() - 5} ${pos.y() + 4.4} ${pos.z() - i} 5 -4.4 ${i} ${speed} 0 normal`)
        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() + 5} ${pos.y() + 4.4} ${pos.z() + i} -5 -4.4 ${-i} ${speed} 0 normal`)
        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() + 5} ${pos.y() + 4.4} ${pos.z() - i} -5 -4.4 ${i} ${speed} 0 normal`)

        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() - i} ${pos.y() + 4.4} ${pos.z() + 5} ${i} -4.4 -5 ${speed} 0 normal`)
        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() - i} ${pos.y() + 4.4} ${pos.z() - 5} ${i} -4.4 5 ${speed} 0 normal`)
        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() + i} ${pos.y() + 4.4} ${pos.z() + 5} ${-i} -4.4 -5 ${speed} 0 normal`)
        server.runCommandSilent(`execute in ${dim} run particle ${getRandomParticle()} ${pos.x() + i} ${pos.y() + 4.4} ${pos.z() - 5} ${-i} -4.4 5 ${speed} 0 normal`)
    }
}

function teleportEntities(server, tpId, dim, pos, uuid) {
    server.runCommandSilent(`execute in ${dim} positioned as ${uuid} run tag @e[x=${pos.x() - 5},dx=9.5,y=${pos.y() - 0.5},dy=4.5,z=${pos.z() - 5},dz=9.5,
        predicate=insurgence:can_travel_to_nether] add ${tpId}`)

    let teleportedEntities = server.getEntities().filter(e => e.tags.contains(tpId))
    for (let i in teleportedEntities) {
        let e = teleportedEntities[i]
        let posTmp = e.pos
        spawnTeleportParticles(server, dim, posTmp.x, posTmp.y, posTmp.z)
        attachPlayersToAnchor(e, pos, dim)
    }

    server.runCommandSilent(`execute in insurgence:the_nether run spreadplayers ${pos.x() - 0.5} ${pos.z() - 0.5} 0 200 under 100 true @e[tag=${tpId}]`)
}

// Spawn particles to indicate that an entity was teleported
function spawnTeleportParticles(server, dim, x, y, z) {
    server.runCommandSilent(`execute in ${dim} run particle irons_spellbooks:fiery_smoke ${x} ${y + 0.5} ${z} 0.25 0.25 0.25 0.015 2 normal`)
    server.runCommandSilent(`execute in ${dim} run particle minecraft:trial_spawner_detection ${x} ${y} ${z} 0.4 0.2 0.4 0 10 normal`)
}   

// Get a random speed used for particle creation
function getRandomSpeed() {
    let speed = Math.random() / 10
    if (speed < 0.03) speed = 0.03
    else if (speed > 0.085) speed = 0.085
    return speed
}

// Get a random particle to be used when outlining the portal area
function getRandomParticle() {
    let idx = Math.round(Math.random() * (netherPortalBoxParticles.length - 1))
    return netherPortalBoxParticles[idx]
}

// Mark the return coordinates and dimension of only player entities' persistent data
function attachPlayersToAnchor(entity, pos, dim) {
    let entityType = entity.type
    if (entityType == "minecraft:player") {
        let persistentData = entity.getPersistentData()
        let returnPoint = {
            "x": pos.x(),
            "y": pos.y() + 1,   // Teleport on top of the portal block
            "z": pos.z(),
            "dim": dim
        }
        persistentData.put("nether_portal_return_coordinates", returnPoint)
    }
}