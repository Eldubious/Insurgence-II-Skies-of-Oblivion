// Removes all original loot tables
LootJS.lootTables(event => {
    let ids = event.getLootTableIds(/.*chests\/.*/);
    let insurgenceIds = event.getLootTableIds(/.^insurgence:chests\/.*/);

    ids.forEach(e => {
        let id = String(e);
        if (id.includes("village")) {
            console.log(id);
        }
    });
})