// Teleport entities between dimensions at certain y-levels
// Connections are: Overworld <-> Haven <-> The End
function dimensionTp(server, entity) {
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
        // Make sure the player has completed the tutorial before being allowed to leave the Haven
        let pData = entity.getPersistentData();
        if (pData.contains("flags")) {
            let flags = pData.get("flags");

            // Player has not completed tutorial
            if (currDim == "insurgence:skies" && flags.toArray().indexOf("completed_tutorial") == -1) {
                server.runCommandSilent(`damage ${uuid} 1000000000 minecraft:bad_respawn_point`);
                return;
            }
        }

        // Teleport any entities the player is mounted on first

    }

    let tpCmd = `execute in ${destDim} run tp ${uuid} ${targetPos[0]} ${targetPos[1]} ${targetPos[2]}`;
    console.log(tpCmd);
    server.runCommandSilent(tpCmd);    
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