// Create generic village loot tables to be called by other loot tables

LootJS.lootTables(event => {
    

    event.getLootTable("minecraft:chests/village/village_armorer");


    event.getLootTable("minecraft:chests/village/village_mason");
    event.getLootTable("minecraft:chests/village/village_temple");
    event.getLootTable("reliquary:inject/chests/village/village_weaponsmith");
    event.getLootTable("sawmill:chests/village_carpenter_plains");
    event.getLootTable("minecraft:chests/village/village_fisher");
    event.getLootTable("minecraft:chests/village/village_toolsmith");
    event.getLootTable("farmersdelight:chests/fd_village_butcher");
    event.getLootTable("minecraft:chests/village/village_jungle_house");

})