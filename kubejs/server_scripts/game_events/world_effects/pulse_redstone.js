// Places and deletes a redstone block to update connected redstone on world gen
function pulse_redstone(server, marker) {
    let dim = marker.level.dimension.toString();
    if (dim == "minecraft:the_nether") {    // Don't execute anything if marker is in vanilla nether
        server.runCommandSilent(`execute in ${dim} run particle minecraft:angry_villager ${marker.pos.x()} ${marker.pos.y()} ${marker.pos.z()}`);
        return;
    }
    let uuid = marker.uuid.toString();
    let pos = marker.pos;
    let x = Math.floor(pos.x());
    let y = Math.floor(pos.y());
    let z = Math.floor(pos.z());
    let level = server.getLevel(dim);
    let data = marker.nbt.data;

    let timer = data.timer;
    if (timer == undefined) {
        server.runCommandSilent(`data modify entity ${uuid} data.timer set value 0`);
        let prevBlock = level.getBlock(pos);
        server.runCommandSilent(`data modify entity ${uuid} data.prevBlock set value "${prevBlock}"`);
        server.runCommandSilent(`execute in ${dim} run setblock ${x} ${y} ${z} minecraft:redstone_block`);
    }
    else {
        if (timer >= 2) {
            let prevBlock = String(data.prevBlock);
            server.runCommandSilent(`execute in ${dim} run setblock ${x} ${y} ${z} ${prevBlock.substring(1, prevBlock.length - 1)}`);
            marker.kill();
        }
        server.runCommandSilent(`data modify entity ${uuid} data.timer set value ${parseInt(timer) + 1}`);
    }

    
}