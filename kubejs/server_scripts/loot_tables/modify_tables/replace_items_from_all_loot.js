const itemIdsToRemoveFromLoot = [
    "minecraft:enchanted_book"
];

const itemTagsToRemoveFromLoot = [
    "#insurgence:category/unused"
];

const itemFiltersToRemoveFromLoot = [
    ...itemIdsToRemoveFromLoot,
    ...itemTagsToRemoveFromLoot.map(tag => ItemFilter.tag(tag.substring(1)))
];

LootJS.lootTables(event => {
    const allLootTables = event.modifyLootTables();

    itemFiltersToRemoveFromLoot.forEach(filter => allLootTables.removeItem(filter));
});

LootJS.modifiers(event => {
    const removalModifier = event.addTypeModifier(...LootType.values())
        .name("insurgence:remove_items_from_all_loot");

    itemFiltersToRemoveFromLoot.forEach(filter => removalModifier.removeLoot(filter));
});