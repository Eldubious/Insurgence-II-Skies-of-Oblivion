// Creates the loot tables used by vaults in villages
LootJS.lootTables(event => {

    event.create("insurgence:chests/village/trial_loot", "chest")
    .createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:emerald", [2, 4]).withWeight(5))
    })

    event.create("insurgence:chests/village/ominous_loot", "chest")
    .createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:diamond", [1, 5]).withWeight(5));
    })
});