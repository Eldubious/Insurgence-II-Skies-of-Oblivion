// Create item tags
ServerEvents.tags("item", event => {

    function craftedItemTags(itemType, itemName) {
        event.add("insurgence:crafted_item", itemName)
        event.add(`insurgence:crafted_item/${itemType}`, itemName)
    }


    let craftedSwords = [
        "minecraft:wooden_sword", "psi:psimetal_sword", "create:cardboard_sword",
        "eternal_starlight:malarite_sword", "eternal_starlight:amaramber_sword",
        "#caverns_and_chasms:copper_swords", "caverns_and_chasms:silver_sword",
        "cataclysm:black_steel_sword"
    ];
    for (let i in craftedSwords) craftedItemTags("sword", craftedSwords[i]);

    let craftedScythes = [

    ];
    for (let i in craftedScythes) craftedItemTags("scythe", craftedScythes[i]);

    let craftedPolearms = [
        "eternal_starlight:malarite_spear"
    ];
    for (let i in craftedPolearms) craftedItemTags("polearm", craftedPolearms[i]);

    let craftedKnives = [
        "farmersdelight:flint_knife"
    ];
    for (let i in craftedKnives) craftedItemTags("knife", craftedKnives[i]);

    let craftedAxes = [
        "minecraft:wooden_axe", "psi:psimetal_axe", "eternal_starlight:malarite_axe",
        "eternal_starlight:amaramber_axe", "#caverns_and_chasms:copper_axes",
        "caverns_and_chasms:silver_axe", "cataclysm:black_steel_axe"
    ];
    for (let i in craftedAxes) craftedItemTags("axe", craftedAxes[i]);

    let craftedPickaxes = [
        "minecraft:wooden_pickaxe", "psi:psimetal_pickaxe", "eternal_starlight:malarite_pickaxe",
        "eternal_starlight:amaramber_pickaxe", "#caverns_and_chasms:copper_pickaxes",
        "caverns_and_chasms:silver_pickaxe", "cataclysm:black_steel_pickaxe"
    ];
    for (let i in craftedPickaxes) craftedItemTags("pickaxe", craftedPickaxes[i]);

    let craftedShovels = [
        "minecraft:wooden_shovel", "psi:psimetal_shovel", "eternal_starlight:malarite_shovel",
        "eternal_starlight:amaramber_shovel", "#caverns_and_chasms:copper_shovels",
        "caverns_and_chasms:silver_shovel", "cataclysm:black_steel_shovel"
    ];
    for (let i in craftedShovels) craftedItemTags("shovel", craftedShovels[i]);

    let craftedHoes = [
        "minecraft:wooden_hoe", "eternal_starlight:malarite_hoe", "eternal_starlight:malarite_sickle",
        "eternal_starlight:amaramber_hoe", "eternal_starlight:amaramber_sickle", "#caverns_and_chasms:copper_hoes",
        "caverns_and_chasms:silver_hoe", "cataclysm:black_steel_hoe"
    ];
    for (let i in craftedHoes) craftedItemTags("hoe", craftedHoes[i]);

    let craftedBows = []
    for (let i in craftedBows) {
        craftedItemTags("bow", craftedBows[i])
    }

    let craftedCrossbows = []
    for (let i in craftedCrossbows) {
        craftedItemTags("crossbow", craftedCrossbows[i])
    }

    let craftedSlingshots = [
        "supplementaries:slingshot", "usefulslime:slime_sling"
    ];
    for (let i in craftedSlingshots) craftedItemTags("slingshot", craftedSlingshots[i]);

    let craftedHelmets = [
      "usefulslime:slime_helmet", "create:cardboard_helmet", "create:copper_diving_helmet",
      "create:netherite_diving_helmet", "psi:psimetal_exosuit_helmet", "#caverns_and_chasms:copper_helmets",
      "caverns_and_chasms:silver_helmet"
    ];
    for (let i in craftedHelmets) craftedItemTags("helmet", craftedHelmets[i]);

    let craftedChestplates = [
      "autumnity:snail_shell_chestplate", "usefulslime:slime_chestplate", "create:cardboard_chestplate",
      "create:copper_backtank", "create:netherite_backtank", "create_jetpack:jetpack", "create_jetpack:netherite_jetpack",
      "psi:psimetal_exosuit_chestplate", "#caverns_and_chasms:copper_chestplates",
      "caverns_and_chasms:silver_chestplate"
    ];
    for (let i in craftedChestplates) craftedItemTags("chestplate", craftedChestplates[i]);

    let craftedLeggings = [
      "usefulslime:slime_leggings", "create:cardboard_leggings", "psi:psimetal_exosuit_leggings",
      "#caverns_and_chasms:copper_leggings", "caverns_and_chasms:silver_leggings"
    ];
    for (let i in craftedLeggings) craftedItemTags("leggings", craftedLeggings[i]);

    let craftedBoots = [
      "usefulslime:slime_boots", "create:cardboard_boots", "create:copper_diving_boots",
      "create:netherite_diving_boots", "psi:psimetal_exosuit_boots", "#caverns_and_chasms:copper_boots",
      "caverns_and_chasms:silver_boots"
    ];
    for (let i in craftedBoots) craftedItemTags("boots", craftedBoots[i]);

    let craftedRings = [
        "irons_jewelry:ring"
    ];
    for (let i in craftedRings) craftedItemTags("ring", craftedRings[i]);

    let craftedNecklaces = [
        "irons_jewelry:necklace"
    ];
    for (let i in craftedNecklaces) craftedItemTags("necklace", craftedNecklaces[i]);

    let craftedCurios = [
        "apotheosis:potion_charm", "malum:rune_of_scorching", "malum:rune_of_protection",
        "malum:rune_of_ailment_cleansing", "malum:rune_of_dexterity", "malum:rune_of_sky_tether",
        "malum:rune_of_good_tides", "malum:rune_of_oaken_might", "malum:rune_of_fiery_embrace",
        "malum:rune_of_vitality", "malum:rune_of_culling", "malum:rune_of_reinforcement",
        "malum:rune_of_volatile_distortion", "malum:rune_of_howling_gale", "malum:rune_of_flowing_grasp",
        "malum:rune_of_stone_ward", "malum:rune_of_burning_fervor", "malum:mending_diffuser",
        "malum:impurity_stabilizer", "malum:shielding_apparatus", "malum:warping_engine",
        "malum:accelerating_inlay", "malum:prismatic_focus_lens", "malum:blazing_diode",
        "malum:intricate_assembly", "malum:sympathy_drive", "malum:suspicious_device",
        "malum:caustic_catalyst", "malum:resonance_tuner", "malum:runic_brooch",
        "malum:glass_brooch", "malum:elaborate_brooch", "malum:gluttonous_brooch",
        "create:goggles", "aeronautics:aviators_goggles", "cataclysm:sticky_gloves"
    ];
    for (let i in craftedCurios) craftedItemTags("curio", craftedCurios[i]);

    let craftedFishingRods = [
        "minecraft:fishing_rod", "tide:stone_fishing_rod", "tide:iron_fishing_rod",
        "tide:golden_fishing_rod", "tide:crystal_fishing_rod", "tide:diamond_fishing_rod", "tide:netherite_fishing_rod"
    ];
    for (let i in craftedFishingRods) craftedItemTags("fishing_rod", craftedFishingRods[i]);

    let craftedAnimalArmor = [
        "minecraft:leather_horse_armor", "minecraft:wolf_armor", "wan_ancient_beasts:surfer_armor",
        "#caverns_and_chasms:copper_horse_armors", "caverns_and_chasms:silver_horse_armor"
    ];
    for (let i in craftedAnimalArmor) craftedItemTags("animal_armor", craftedAnimalArmor[i]);

    let craftedStaves = [
      "camping:walking_stick"
    ];
    for (let i in craftedStaves) craftedItemTags("staff", craftedStaves[i]);

    let craftedWands = [
        "malum:mnemonic_hex_staff", "malum:unwinding_chaos", "malum:erosion_scepter"
    ];
    for (let i in craftedWands) craftedItemTags("wand", craftedWands[i]);

    let craftedBrushes = [
        "minecraft:brush", "eternal_starlight:deepsilver_brush"
    ];
    for (let i in craftedBrushes) craftedItemTags("brush", craftedBrushes[i]);

    let craftedBelts = [
        "cataclysm:belt_of_beginner"
    ];
    for (let i in craftedBelts) craftedItemTags("belt", craftedBelts[i]);

    let craftedShields = [
        "cataclysm:black_steel_targe"
    ];
    for (let i in craftedShields) craftedItemTags("shield", craftedShields[i]);
})
