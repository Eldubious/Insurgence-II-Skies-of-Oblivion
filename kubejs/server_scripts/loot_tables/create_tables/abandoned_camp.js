// Create the loot table for abandoned camp chests
LootJS.lootTables(event => {

    event.create("insurgence:chests/abandoned_camp")
    .createPool(pool => {
        pool.rolls(1);
        pool.bonusRolls(0.5);
        pool.addEntry(LootEntry.of("minecraft:ink_sac", [1, 4]).withWeight(10));
        pool.addEntry(LootEntry.of("farmersdelight:rice_panicle", [1, 4]).withWeight(10));
        pool.addEntry(LootEntry.of("minecraft:rabbit_hide", [1, 4]).withWeight(10));
        pool.addEntry(LootEntry.of("supplementaries:antique_ink").withWeight(1).withQuality(0.2));
        pool.addEntry(LootEntry.of("minecraft:nautilus_shell", [0, 2]).withWeight(5));
        pool.addEntry(LootEntry.of("minecraft:turtle_scute", [0, 3]).withWeight(2).withQuality(0.4));
        pool.addEntry(LootEntry.of("minecraft:armadillo_scute", [0, 3]).withWeight(2).withQuality(0.4));
        pool.addEntry(LootEntry.of("autumnity:snail_shell_piece", [0, 3]).withWeight(2).withQuality(0.4));
    })
    .createPool(pool => {
        pool.rolls(1);
        pool.bonusRolls(0);
        pool.addEntry(LootEntry.empty().withWeight(20));
        pool.addEntry(LootEntry.of("relics:rider_flute").withWeight(1).withQuality(1));
    })
    .createPool(pool => {
        pool.rolls(2);
        pool.bonusRolls(0.2);
        pool.addEntry(LootEntry.empty().withWeight(40));
        pool.addEntry(LootEntry.of("spells_gone_wrong:mana_shard", [1, 4]).withWeight(10));
        pool.addEntry(LootEntry.of("minecraft:potion").withWeight(20).addPotion("irons_spellbooks:instant_mana_one"));
        pool.addEntry(LootEntry.of("minecraft:potion").withWeight(5).withQuality(0.5).addPotion("irons_spellbooks:instant_mana_two"));
        pool.addEntry(LootEntry.of("minecraft:potion").withWeight(20).addPotion("minecraft:healing"));
        pool.addEntry(LootEntry.of("minecraft:potion").withWeight(5).withQuality(0.5).addPotion("minecraft:strong_healing"));
    })
    .createPool(pool => {
        pool.rolls(1);
        pool.bonusRolls(0);
        pool.addEntry(LootEntry.of("minecraft:charcoal", [1, 5]).withWeight(20));
        pool.addEntry(LootEntry.of("runelic:runelic_pattern").withWeight(1).withQuality(1));
    })
    .createPool(pool => {
        pool.rolls(1);
        pool.bonusRolls(0);
        pool.addEntry(LootEntry.empty().withWeight(20));
        pool.addEntry(LootEntry.of("irons_jewelry:recipe").withWeight(1).withQuality(1).jsonFunction({
            function: "minecraft:set_components",
            components: {
                "irons_jewelry:stored_pattern": "irons_jewelry:haggler_ring"
            }
        }));
    })
});