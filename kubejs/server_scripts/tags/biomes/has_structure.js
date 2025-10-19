// Control which biomes have which structures
ServerEvents.tags('worldgen/biome', event => {

    // Overgrown, Generic, & Wooden Battle Towers
    let genericBattleTowers = ['minecraft:plains', 'minecraft:forest', 'minecraft:birch_forest']
    for (let i in genericBattleTowers) {
        event.add('insurgence:has_structure/overgrown_battle_tower', genericBattleTowers[i])
        event.add('insurgence:has_structure/generic_battle_tower', genericBattleTowers[i])
        event.add('insurgence:has_structure/wooden_battle_tower', genericBattleTowers[i])
    }
})