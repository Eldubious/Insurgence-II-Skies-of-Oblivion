// Loot tables for items which are dropped during ominous trials
LootJS.lootTables(event => {

    event.create("insurgence:ominous_item_spawner/dragon_charge", "chest")
    .createPool(pool => {
        pool.addEntry(LootEntry.of("amendments:dragon_charge"));
    })
})