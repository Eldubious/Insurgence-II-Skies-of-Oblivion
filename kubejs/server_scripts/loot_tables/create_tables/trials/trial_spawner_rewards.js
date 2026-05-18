// Rewards given upon trial completion
LootJS.lootTables(event => {

    // Village trial spawners
    event.create("insurgence:spawners/village/key", "chest")
    .createPool(pool => {
        pool.addEntry(LootEntry.of("insurgence:pillager_key"));
    })
    event.create("insurgence:spawners/village/ominous/key", "chest")
    .createPool(pool => {
        pool.addEntry(LootEntry.of("insurgence:ominous_pillager_key"));
    })
})