// Places a creative motor
const validMotorConnectors = ["create:rotation_speed_controller"];

function place_motor(server, marker) {
    let dim = marker.level.dimension.toString();
    if (dim == "minecraft:the_nether") {    // Don't execute anything if marker is in vanilla nether
        server.runCommandSilent(`execute in ${dim} run particle minecraft:angry_villager ${marker.pos.x()} ${marker.pos.y()} ${marker.pos.z()}`);
        return;
    }
    let data = marker.nbt.data;
    let uuid = marker.uuid.toString();
    let pos = marker.pos;
    let level = server.getLevel(dim);
    let direction = findConnector(server, level, marker, uuid, pos);
    if (direction != null) {
        server.runCommandSilent(`execute in ${dim} run setblock ${Math.floor(pos.x())} ${Math.floor(pos.y())} ${Math.floor(pos.z())} create:creative_motor[facing=${direction}]`);
    }
    marker.kill();
}

function findConnector(server, level, marker, uuid, pos) {
    let x = Math.floor(pos.x());
    let y = Math.floor(pos.y());
    let z = Math.floor(pos.z());
    let direction = "";
    if (validMotorConnectors.indexOf(level.getBlock([x + 1, y, z])) != -1) {
        direction = "east";
    }
    else if (validMotorConnectors.indexOf(level.getBlock([x - 1, y, z])) != -1) {
        direction = "west";
    }
    else if (validMotorConnectors.indexOf(level.getBlock([x, y, z + 1])) != -1) {
        direction = "south";
    }
    else if (validMotorConnectors.indexOf(level.getBlock([x, y, z - 1])) != -1) {
        direction = "north";
    }
    else {
        return null;
    }
    return direction;
}
