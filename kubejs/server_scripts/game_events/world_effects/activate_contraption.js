// Quickly places and removes a deployer + motor to assemble a contraption after structure generation.
const validContraptionAssemblers = ['create:elevator_pulley']

function activate_contraption(server, marker) {
    let dim = marker.level.dimension.toString();
    if (dim == "minecraft:the_nether") {    // Don't execute anything if marker is in vanilla nether
        return;
    }
    let uuid = marker.uuid.toString();
    let pos = marker.pos;
    let level = server.getLevel(dim);
    let data = marker.nbt.data;
    let timer = data.timer;
    if (timer == undefined) {   // Initialize the effect timer
        server.runCommandSilent(`data modify entity ${uuid} data.timer set value 0`);
        let deployerPos = findAssembler(server, level, marker, uuid, pos);
        if (deployerPos == null) {
            marker.kill();
            return;
        }
        console.log("Deployer goes: " + deployerPos);
        let axis = true;
        if (deployerPos[3] == "west" || deployerPos[3] == "east") axis = false;
        server.runCommandSilent(`execute in ${dim} run setblock ${deployerPos[0]} ${deployerPos[1]} ${deployerPos[2]} create:deployer[facing=${deployerPos[3]},axis_along_first=${axis}]`);
        let motorPos = findMotorLocation(server, level, marker, uuid, deployerPos);
        if (motorPos == null) {
            removeDeployer(server, level, dim, deployerPos[0], deployerPos[1], deployerPos[2]);
            marker.kill();
            return;
        }
        console.log(motorPos);
        server.runCommandSilent(`execute in ${dim} run setblock ${motorPos[0]} ${motorPos[1]} ${motorPos[2]} create:creative_motor[facing=${motorPos[3]}]`);
    }
    else {
        if (timer >= 60) {
            data = marker.nbt.data;
            removeDeployer(server, level, dim, parseInt(data.deployerX), parseInt(data.deployerY), parseInt(data.deployerZ));
            removeMotor(server, level, dim, parseInt(data.motorX), parseInt(data.motorY), parseInt(data.motorZ));
            marker.kill();
        }
        server.runCommandSilent(`data modify entity ${uuid} data.timer set value ${parseInt(timer) + 1}`);
    }
}

function findAssembler(server, level, marker, uuid, pos) {
    let x = parseInt(pos.x()); let y = parseInt(pos.y()); let z = parseInt(pos.z());
    let motorSearchAxis = "";
    if (validContraptionAssemblers.indexOf(level.getBlock([x + 1, y, z])) != -1) {
        server.runCommandSilent(`data modify entity ${uuid} data.deployerX set value ${x - 1}`);
        server.runCommandSilent(`data modify entity ${uuid} data.deployerY set value ${y}`);
        server.runCommandSilent(`data modify entity ${uuid} data.deployerZ set value ${z}`);
        server.runCommandSilent(`data modify entity ${uuid} data.deployerDirection set value "east"`);
        motorSearchAxis = "z";
    }
    else if (validContraptionAssemblers.indexOf(level.getBlock([x - 1, y, z])) != -1) {
        server.runCommandSilent(`data modify entity ${uuid} data.deployerX set value ${x + 1}`);
        server.runCommandSilent(`data modify entity ${uuid} data.deployerY set value ${y}`);
        server.runCommandSilent(`data modify entity ${uuid} data.deployerZ set value ${z}`);
        server.runCommandSilent(`data modify entity ${uuid} data.deployerDirection set value "west"`);
        motorSearchAxis = "z";
    }
    else if (validContraptionAssemblers.indexOf(level.getBlock([x, y, z + 1])) != -1) {
        server.runCommandSilent(`data modify entity ${uuid} data.deployerX set value ${x}`);
        server.runCommandSilent(`data modify entity ${uuid} data.deployerY set value ${y}`);
        server.runCommandSilent(`data modify entity ${uuid} data.deployerZ set value ${z - 1}`);
        server.runCommandSilent(`data modify entity ${uuid} data.deployerDirection set value "south"`);
        motorSearchAxis = "x";
    }
    else if (validContraptionAssemblers.indexOf(level.getBlock([x, y, z - 1])) != -1) {
        server.runCommandSilent(`data modify entity ${uuid} data.deployerX set value ${x}`);
        server.runCommandSilent(`data modify entity ${uuid} data.deployerY set value ${y}`);
        server.runCommandSilent(`data modify entity ${uuid} data.deployerZ set value ${z + 1}`);
        server.runCommandSilent(`data modify entity ${uuid} data.deployerDirection set value "north"`);
        motorSearchAxis = "x";
    }
    else {
        return null;
    }

    let data = marker.nbt.data;
    return [parseInt(data.deployerX), parseInt(data.deployerY), parseInt(data.deployerZ), data.deployerDirection, motorSearchAxis];
}

function findMotorLocation(server, level, marker, uuid, pos) {
    let x = pos[0]; let y = pos[1]; let z = pos[2];
    let axis = pos[4];
    if (axis == "x") {
        if (level.getBlock([x + 1, y, z]) == "minecraft:air") {
            server.runCommandSilent(`data modify entity ${uuid} data.motorX set value ${x + 1}`);
            server.runCommandSilent(`data modify entity ${uuid} data.motorY set value ${y}`);
            server.runCommandSilent(`data modify entity ${uuid} data.motorZ set value ${z}`);
            server.runCommandSilent(`data modify entity ${uuid} data.motorDirection set value "west"`);
        }
        else if (level.getBlock([x - 1, y, z]) == "minecraft:air") {
            server.runCommandSilent(`data modify entity ${uuid} data.motorX set value ${x - 1}`);
            server.runCommandSilent(`data modify entity ${uuid} data.motorY set value ${y}`);
            server.runCommandSilent(`data modify entity ${uuid} data.motorZ set value ${z}`);
            server.runCommandSilent(`data modify entity ${uuid} data.motorDirection set value "east"`);
        }
        else {
            return null;
        }
    }
    else if (axis == "z") {
        if (level.getBlock([x, y, z + 1]) == "minecraft:air") {
            server.runCommandSilent(`data modify entity ${uuid} data.motorX set value ${x}`);
            server.runCommandSilent(`data modify entity ${uuid} data.motorY set value ${y}`);
            server.runCommandSilent(`data modify entity ${uuid} data.motorZ set value ${z + 1}`);
            server.runCommandSilent(`data modify entity ${uuid} data.motorDirection set value "north"`);
        }
        else if (level.getBlock([x, y, z - 1]) == "minecraft:air") {
            server.runCommandSilent(`data modify entity ${uuid} data.motorX set value ${x}`);
            server.runCommandSilent(`data modify entity ${uuid} data.motorY set value ${y}`);
            server.runCommandSilent(`data modify entity ${uuid} data.motorZ set value ${z - 1}`);
            server.runCommandSilent(`data modify entity ${uuid} data.motorDirection set value "south"`);
        }
        else {
            return null;
        }
    }
    else {
        return null;
    }

    let data = marker.nbt.data;
    return [parseInt(data.motorX), parseInt(data.motorY), parseInt(data.motorZ), data.motorDirection];
}

function removeDeployer(server, level, dim, x, y, z) {
    if (level.getBlock([x, y, z]) == "create:deployer") {
        server.runCommandSilent(`execute in ${dim} run setblock ${x} ${y} ${z} minecraft:air`);
    }
}

function removeMotor(server, level, dim, x, y, z) {
    if (level.getBlock([x, y, z]) == "create:creative_motor") {
        server.runCommandSilent(`execute in ${dim} run setblock ${x} ${y} ${z} minecraft:air`);
    }
}