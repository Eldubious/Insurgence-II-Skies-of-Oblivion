// Teleport entities between dimensions at certain y-levels
// Connections are: Overworld <-> Haven <-> The End
function dimensionTp(server, entity) {
    if (entity.isRemoved())
        return;

    let pos = entity.pos;
    let currDim = entity.level.dimension.toString();
    let destDim = getDestination(currDim, pos.y);
    if (destDim == null)
        return;
    let targetY = getTargetY(currDim, destDim, pos.y);
    if (targetY == -1)
        return;

    let targetPos = [pos.x, targetY, pos.z];
    let uuid = entity.uuid.toString();

    // Special actions to perform if the teleporting entity is a player
    if (entity.type == "minecraft:player") {
        let vehicle = entity.getVehicle();
        if (vehicle != null) {
            teleportMountedPlayers(server, vehicle, currDim, destDim, targetPos);
            return;
        }

        if (!canPlayerLeaveDimension(server, entity, currDim))
            return;
    }
    else if (hasPlayerPassenger(entity))
        return;

    let tpCmd = `execute in ${destDim} run tp ${uuid} ${targetPos[0]} ${targetPos[1]} ${targetPos[2]}`;
    console.log(tpCmd);
    server.runCommandSilent(tpCmd);    
}

// Teleports a vehicle first, then teleports and remounts its direct player passengers
function teleportMountedPlayers(server, vehicle, currDim, destDim, targetPos) {
    let passengers = vehicle.getPassengers();
    let players = [];

    for (let i in passengers) {
        let passenger = passengers[i];
        if (passenger.type == "minecraft:player" && canPlayerLeaveDimension(server, passenger, currDim))
            players.push(passenger);
    }

    if (players.length == 0)
        return;

    let vehicleUuid = vehicle.uuid.toString();
    let vehicleId = vehicle.getUuid();
    vehicle.ejectPassengers();
    server.runCommandSilent(`execute in ${destDim} run tp ${vehicleUuid} ${targetPos[0]} ${targetPos[1]} ${targetPos[2]}`);

    let destinationVehicle = server.getEntityByUUID(vehicleId);
    if (destinationVehicle == null) {
        console.warn(`Could not find vehicle ${vehicleUuid} after dimension teleport`);
    }

    for (let i in players) {
        let player = players[i];
        let playerUuid = player.uuid.toString();
        let playerId = player.getUuid();
        server.runCommandSilent(`execute in ${destDim} run tp ${playerUuid} ${targetPos[0]} ${targetPos[1]} ${targetPos[2]}`);

        if (destinationVehicle == null)
            continue;

        let destinationPlayer = server.getEntityByUUID(playerId);
        if (destinationPlayer == null || !destinationPlayer.startRiding(destinationVehicle, true))
            console.warn(`Could not remount player ${playerUuid} on vehicle ${vehicleUuid}`);
    }
}

// Returns whether an entity has a direct player passenger
function hasPlayerPassenger(entity) {
    let passengers = entity.getPassengers();
    for (let i in passengers) {
        if (passengers[i].type == "minecraft:player")
            return true;
    }
    return false;
}

// Enforces the Haven tutorial gate before a player can leave the dimension
function canPlayerLeaveDimension(server, player, currDim) {
    if (currDim != "insurgence:skies")
        return true;

    let pData = player.getPersistentData();
    if (!pData.contains("flags"))
        return true;

    let flags = pData.get("flags");
    if (flags.toArray().indexOf("completed_tutorial") != -1)
        return true;

    server.runCommandSilent(`damage ${player.uuid.toString()} 1000000000 minecraft:bad_respawn_point`);
    return false;
}

// Returns the id of the dimension the entity is teleporting to, or null if there is none
function getDestination(currDim, y) {
    switch (currDim) {
        case "insurgence:skies":
            if (y < 0)
                return "minecraft:overworld";
            else if (y > 300)
                return "minecraft:the_end";

        case "minecraft:overworld":
            if (y > 400)
                return "insurgence:skies";
        
        case "minecraft:the_end":
            if (y < 0)
                return "insurgence:skies";

        default:
            return null;
    }
}

// Returns the y value to be used when teleporting the entity
function getTargetY(currDim, targetDim, y) {
    switch (targetDim) {
        case "minecraft:overworld":
            if (currDim == "insurgence:skies" && y < 0)
                return 390;
        
        case "minecraft:the_end":
            if (currDim == "insurgence:skies" && y > 300)
                return 10;

        case "insurgence:skies":
            if (currDim == "minecraft:overworld" && y > 400)
                return 10;
            else if (currDim == "minecraft:the_end" && y < 0)
                return 290;
        
        default:
            return -1;
    }
}