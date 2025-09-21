# Wipe the pre-existing items/loot from the container one block above and insert a new loot table.
# Used for testing the output of loot tables

data remove block ~ ~1 ~ Items
$data modify block ~ ~1 ~ LootTable set value "$(lootTable)"