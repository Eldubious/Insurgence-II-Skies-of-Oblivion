// Control which biomes have which structures
ServerEvents.tags('worldgen/biome', event => {

    // Abandoned Camp
    let abandonedCampBiomes = [
        "autumnity:maple_forest", "autumnity:pumpkin_fields", "minecraft:birch_forest", "minecraft:dark_forest", "minecraft:forest",
        "minecraft:grove", "minecraft:old_growth_birch_forest", "minecraft:old_growth_pine_taiga", "minecraft:old_growth_spruce_taiga",
        "minecraft:savanna", "minecraft:savanna_plateau", "minecraft:snowy_taiga", "minecraft:taiga", "minecraft:windswept_forest"
    ];
    for (let i in abandonedCampBiomes) {
        event.add("insurgence:has_structure/abandoned_camp", abandonedCampBiomes[i]);
    }

    /*      Battle Tower        */
    // Default style
    let defaultStyleBiomes = ['minecraft:plains', 'minecraft:forest', 'minecraft:birch_forest']
    for (let i in defaultStyleBiomes) {
        let biome = defaultStyleBiomes[i]

        event.add('insurgence:has_structure/battle_tower', biome)
        event.add('insurgence:has_structure/battle_tower/default', biome)
    }

    // Desert style
    let desertStyleBiomes = ['minecraft:desert']
    for (let i in desertStyleBiomes) {
        let biome = desertStyleBiomes[i]

        event.add('insurgence:has_structure/battle_tower', biome)
        event.add('insurgence:has_structure/battle_tower/desert', biome)
    }

    // Savanna style
    let savannaStyleBiomes = ['minecraft:savanna']
    for (let i in savannaStyleBiomes) {
        let biome = savannaStyleBiomes[i]

        event.add('insurgence:has_structure/battle_tower', biome)
        event.add('insurgence:has_structure/battle_tower/savanna', biome)
    }

    // Snowy style
    let snowyStyleBiomes = ['minecraft:snowy_plains']
    for (let i in snowyStyleBiomes) {
        let biome = snowyStyleBiomes[i]

        event.add('insurgence:has_structure/battle_tower', biome)
        event.add('insurgence:has_structure/battle_tower/snowy', biome)
    }

    // Overgrown style
    let overgrownStyleBiomes = ['minecraft:jungle', 'minecraft:bamboo_jungle']
    for (let i in overgrownStyleBiomes) {
        let biome = overgrownStyleBiomes[i]

        event.add('insurgence:has_structure/battle_tower', biome)
        event.add('insurgence:has_structure/battle_tower/overgrown', biome)
    }

    // Aquatic style
    let aquaticStyleBiomes = ['minecraft:deep_ocean', 'minecraft:deep_cold_ocean']
    for (let i in aquaticStyleBiomes) {
        let biome = aquaticStyleBiomes[i]

        event.add('insurgence:has_structure/battle_tower', biome)
        event.add('insurgence:has_structure/battle_tower/aquatic', biome)
    }

    // Nether style
    let netherStyleBiomes = ['minecraft:crimson_forest']
    for (let i in netherStyleBiomes) {
        let biome = netherStyleBiomes[i]

        event.add('insurgence:has_structure/battle_tower', biome)
        event.add('insurgence:has_structure/battle_tower/nether', biome)
    }

    // End style
    let endStyleBiomes = ['minecraft:end_highlands']
    for (let i in endStyleBiomes) {
        let biome = endStyleBiomes[i]

        event.add('insurgence:has_structure/battle_tower', biome)
        event.add('insurgence:has_structure/battle_tower/end', biome)
    }
})
