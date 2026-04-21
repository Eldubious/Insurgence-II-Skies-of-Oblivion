# Wipe the pre-existing items/loot from the container one block above and insert a new loot table.
# Used for testing the output of loot tables

setblock ~ ~1 ~ minecraft:chest
$data modify block ~ ~1 ~ LootTable set value "$(lootTable)"