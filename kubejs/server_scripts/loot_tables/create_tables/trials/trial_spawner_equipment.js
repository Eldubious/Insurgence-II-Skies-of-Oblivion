LootJS.lootTables(event => {

    event.create("insurgence:equipment/trial_spawners/pillager", "equipment")
    .createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:crossbow").enchantWithLevels([20, 30]));
    })
    .createPool(pool => {
        pool.addEntry(LootEntry.of("oreganized:lead_bolt", 2));
    })

    event.create("insurgence:equipment/trial_spawners/vindicator", "equipment")
    .createPool(pool => {
        pool.addEntry(LootEntry.of("minecraft:diamond_axe").enchantWithLevels([20, 30]));
    })
})