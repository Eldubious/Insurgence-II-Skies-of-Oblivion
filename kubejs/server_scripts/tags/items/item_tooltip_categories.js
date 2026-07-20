// Categorize every item in the game into distinct categories.
// "unique" and "crafted" items are an extension of this and thus excluded from the categorization.
// Used mainly for tooltips.

// Items which are unused in this modpack
let categoryUnused = [
    "apothic_enchanting:boots_tome", "apothic_enchanting:chestplate_tome", "apothic_enchanting:extraction_tome",
    "apothic_enchanting:fishing_tome", "apothic_enchanting:helmet_tome", "apothic_enchanting:improved_scrap_tome",
    "apothic_enchanting:leggings_tome", "apothic_enchanting:other_tome", "apothic_enchanting:pickaxe_tome",
    "apothic_enchanting:weapon_tome",
    
    "camping:enderbag", "camping:enderpack", "camping:goodybag", "camping:large_backpack",
    "camping:sheepbag", "camping:small_backpack", "camping:wanderer_backpack", "camping:wanderer_bag",

    "collectorsalbum:common_acacia_sapling_card", "collectorsalbum:common_allium_card", "collectorsalbum:common_amethyst_shard_card", "collectorsalbum:common_apple_card", "collectorsalbum:common_azure_bluet_card",
    "collectorsalbum:common_bat_card", "collectorsalbum:common_beacon_card", "collectorsalbum:common_bee_card", "collectorsalbum:common_beetroot_card", "collectorsalbum:common_bell_card",
    "collectorsalbum:common_blaze_card", "collectorsalbum:common_blaze_powder_card", "collectorsalbum:common_blue_orchid_card", "collectorsalbum:common_brewing_stand_card", "collectorsalbum:common_brown_mushroom_card",
    "collectorsalbum:common_card_pack", "collectorsalbum:common_carrot_card", "collectorsalbum:common_cat_card", "collectorsalbum:common_chainmail_boots_card", "collectorsalbum:common_chainmail_chestplate_card",
    "collectorsalbum:common_chainmail_leggings_card", "collectorsalbum:common_chicken_card", "collectorsalbum:common_clock_card", "collectorsalbum:common_coal_card", "collectorsalbum:common_compass_card",
    "collectorsalbum:common_cow_card", "collectorsalbum:common_creeper_card", "collectorsalbum:common_custom_card_pack", "collectorsalbum:common_dandelion_card", "collectorsalbum:common_dark_oak_sapling_card",
    "collectorsalbum:common_diamond_axe_card", "collectorsalbum:common_diamond_boots_card", "collectorsalbum:common_diamond_card", "collectorsalbum:common_diamond_chestplate_card", "collectorsalbum:common_diamond_helmet_card",
    "collectorsalbum:common_diamond_horse_armor_card", "collectorsalbum:common_diamond_leggings_card", "collectorsalbum:common_diamond_pickaxe_card", "collectorsalbum:common_diamond_shovel_card", "collectorsalbum:common_diamond_sword_card",
    "collectorsalbum:common_enchantment_table_card", "collectorsalbum:common_ender_dragon_card", "collectorsalbum:common_ender_eye_card", "collectorsalbum:common_ender_pearl_card", "collectorsalbum:common_enderman_card",
    "collectorsalbum:common_firework_rocket_card", "collectorsalbum:common_fox_card", "collectorsalbum:common_ghast_card", "collectorsalbum:common_glow_berries_card", "collectorsalbum:common_glowstone_dust_card",
    "collectorsalbum:common_golden_apple_card", "collectorsalbum:common_golden_axe_card", "collectorsalbum:common_golden_boots_card", "collectorsalbum:common_golden_carrot_card", "collectorsalbum:common_golden_chestplate_card",
    "collectorsalbum:common_golden_hoe_card", "collectorsalbum:common_golden_horse_armor_card", "collectorsalbum:common_golden_leggings_card", "collectorsalbum:common_golden_pickaxe_card", "collectorsalbum:common_golden_shovel_card",
    "collectorsalbum:common_heart_of_the_sea_card", "collectorsalbum:common_honeycomb_card", "collectorsalbum:common_horse_card", "collectorsalbum:common_iron_axe_card", "collectorsalbum:common_iron_boots_card",
    "collectorsalbum:common_iron_helmet_card", "collectorsalbum:common_iron_hoe_card", "collectorsalbum:common_iron_horse_armor_card", "collectorsalbum:common_iron_ingot_card", "collectorsalbum:common_iron_leggings_card",
    "collectorsalbum:common_iron_shovel_card", "collectorsalbum:common_iron_sword_card", "collectorsalbum:common_jungle_sapling_card", "collectorsalbum:common_kelp_card", "collectorsalbum:common_lantern_card",
    "collectorsalbum:common_leather_boots_card", "collectorsalbum:common_leather_chestplate_card", "collectorsalbum:common_leather_helmet_card", "collectorsalbum:common_leather_horse_armor_card", "collectorsalbum:common_leather_leggings_card",
    "collectorsalbum:common_melon_slice_card", "collectorsalbum:common_music_disc_card", "collectorsalbum:common_nautilus_shell_card", "collectorsalbum:common_nether_star_card", "collectorsalbum:common_nether_wart_card",
    "collectorsalbum:common_netherite_boots_card", "collectorsalbum:common_netherite_chestplate_card", "collectorsalbum:common_netherite_helmet_card", "collectorsalbum:common_netherite_hoe_card", "collectorsalbum:common_netherite_ingot_card",
    "collectorsalbum:common_netherite_pickaxe_card", "collectorsalbum:common_netherite_shovel_card", "collectorsalbum:common_netherite_sword_card", "collectorsalbum:common_oak_sapling_card", "collectorsalbum:common_oxeye_daisy_card",
    "collectorsalbum:common_parrot_card", "collectorsalbum:common_pig_card", "collectorsalbum:common_piglin_brute_card", "collectorsalbum:common_pillager_card", "collectorsalbum:common_polar_bear_card",
    "collectorsalbum:common_potato_card", "collectorsalbum:common_red_mushroom_card", "collectorsalbum:common_red_tulip_card", "collectorsalbum:common_redstone_card", "collectorsalbum:common_repacked_card_pack",
    "collectorsalbum:common_shield_card", "collectorsalbum:common_skeleton_card", "collectorsalbum:common_slime_card", "collectorsalbum:common_spider_card", "collectorsalbum:common_spruce_sapling_card",
    "collectorsalbum:common_squid_card", "collectorsalbum:common_stone_axe_card", "collectorsalbum:common_stone_hoe_card", "collectorsalbum:common_stone_pickaxe_card", "collectorsalbum:common_stone_shovel_card",
    "collectorsalbum:common_sugar_cane_card", "collectorsalbum:common_sweet_berries_card", "collectorsalbum:common_turtle_helmet_card", "collectorsalbum:common_villager_card", "collectorsalbum:common_wheat_card",
    "collectorsalbum:common_wither_card", "collectorsalbum:common_wither_skeleton_card", "collectorsalbum:common_wolf_card", "collectorsalbum:common_wooden_axe_card", "collectorsalbum:common_wooden_hoe_card",
    "collectorsalbum:common_wooden_shovel_card", "collectorsalbum:common_wooden_sword_card", "collectorsalbum:common_zombie_card", "collectorsalbum:epic_acacia_sapling_card", "collectorsalbum:epic_allium_card",
    "collectorsalbum:epic_apple_card", "collectorsalbum:epic_azure_bluet_card", "collectorsalbum:epic_bamboo_card", "collectorsalbum:epic_bat_card", "collectorsalbum:epic_beacon_card",
    "collectorsalbum:epic_beetroot_card", "collectorsalbum:epic_bell_card", "collectorsalbum:epic_birch_sapling_card", "collectorsalbum:epic_blaze_card", "collectorsalbum:epic_blaze_powder_card",
    "collectorsalbum:epic_brewing_stand_card", "collectorsalbum:epic_brown_mushroom_card", "collectorsalbum:epic_campfire_card", "collectorsalbum:epic_card_pack", "collectorsalbum:epic_carrot_card",
    "collectorsalbum:epic_chainmail_boots_card", "collectorsalbum:epic_chainmail_chestplate_card", "collectorsalbum:epic_chainmail_helmet_card", "collectorsalbum:epic_chainmail_leggings_card", "collectorsalbum:epic_chicken_card",
    "collectorsalbum:epic_coal_card", "collectorsalbum:epic_compass_card", "collectorsalbum:epic_cookie_card", "collectorsalbum:epic_cow_card", "collectorsalbum:epic_creeper_card",
    "collectorsalbum:epic_dandelion_card", "collectorsalbum:epic_dark_oak_sapling_card", "collectorsalbum:epic_dead_bush_card", "collectorsalbum:epic_diamond_axe_card", "collectorsalbum:epic_diamond_boots_card",
    "collectorsalbum:epic_diamond_chestplate_card", "collectorsalbum:epic_diamond_helmet_card", "collectorsalbum:epic_diamond_hoe_card", "collectorsalbum:epic_diamond_horse_armor_card", "collectorsalbum:epic_diamond_leggings_card",
    "collectorsalbum:epic_diamond_shovel_card", "collectorsalbum:epic_diamond_sword_card", "collectorsalbum:epic_emerald_card", "collectorsalbum:epic_enchantment_table_card", "collectorsalbum:epic_ender_dragon_card",
    "collectorsalbum:epic_ender_pearl_card", "collectorsalbum:epic_enderman_card", "collectorsalbum:epic_feather_card", "collectorsalbum:epic_firework_rocket_card", "collectorsalbum:epic_fox_card",
    "collectorsalbum:epic_glow_berries_card", "collectorsalbum:epic_glowstone_dust_card", "collectorsalbum:epic_gold_ingot_card", "collectorsalbum:epic_golden_apple_card", "collectorsalbum:epic_golden_axe_card",
    "collectorsalbum:epic_golden_carrot_card", "collectorsalbum:epic_golden_chestplate_card", "collectorsalbum:epic_golden_helmet_card", "collectorsalbum:epic_golden_hoe_card", "collectorsalbum:epic_golden_horse_armor_card",
    "collectorsalbum:epic_golden_pickaxe_card", "collectorsalbum:epic_golden_shovel_card", "collectorsalbum:epic_golden_sword_card", "collectorsalbum:epic_heart_of_the_sea_card", "collectorsalbum:epic_honeycomb_card",
    "collectorsalbum:epic_iron_axe_card", "collectorsalbum:epic_iron_boots_card", "collectorsalbum:epic_iron_chestplate_card", "collectorsalbum:epic_iron_helmet_card", "collectorsalbum:epic_iron_hoe_card",
    "collectorsalbum:epic_iron_ingot_card", "collectorsalbum:epic_iron_leggings_card", "collectorsalbum:epic_iron_pickaxe_card", "collectorsalbum:epic_iron_shovel_card", "collectorsalbum:epic_iron_sword_card",
    "collectorsalbum:epic_kelp_card", "collectorsalbum:epic_lantern_card", "collectorsalbum:epic_lapis_lazuli_card", "collectorsalbum:epic_leather_boots_card", "collectorsalbum:epic_leather_chestplate_card",
    "collectorsalbum:epic_leather_horse_armor_card", "collectorsalbum:epic_leather_leggings_card", "collectorsalbum:epic_magma_cube_card", "collectorsalbum:epic_melon_slice_card", "collectorsalbum:epic_music_disc_card",
    "collectorsalbum:epic_nether_star_card", "collectorsalbum:epic_nether_wart_card", "collectorsalbum:epic_netherite_axe_card", "collectorsalbum:epic_netherite_boots_card", "collectorsalbum:epic_netherite_chestplate_card",
    "collectorsalbum:epic_netherite_hoe_card", "collectorsalbum:epic_netherite_ingot_card", "collectorsalbum:epic_netherite_leggings_card", "collectorsalbum:epic_netherite_pickaxe_card", "collectorsalbum:epic_netherite_shovel_card",
    "collectorsalbum:epic_oak_sapling_card", "collectorsalbum:epic_oxeye_daisy_card", "collectorsalbum:epic_panda_card", "collectorsalbum:epic_parrot_card", "collectorsalbum:epic_pig_card",
    "collectorsalbum:epic_pillager_card", "collectorsalbum:epic_polar_bear_card", "collectorsalbum:epic_poppy_card", "collectorsalbum:epic_potato_card", "collectorsalbum:epic_red_mushroom_card",
    "collectorsalbum:epic_redstone_card", "collectorsalbum:epic_repacked_card_pack", "collectorsalbum:epic_sheep_card", "collectorsalbum:epic_shield_card", "collectorsalbum:epic_skeleton_card",
    "collectorsalbum:epic_spider_card", "collectorsalbum:epic_spruce_sapling_card", "collectorsalbum:epic_spyglass_card", "collectorsalbum:epic_squid_card", "collectorsalbum:epic_stone_axe_card",
    "collectorsalbum:epic_stone_pickaxe_card", "collectorsalbum:epic_stone_shovel_card", "collectorsalbum:epic_stone_sword_card", "collectorsalbum:epic_sugar_cane_card", "collectorsalbum:epic_sweet_berries_card",
    "collectorsalbum:epic_villager_card", "collectorsalbum:epic_wheat_card", "collectorsalbum:epic_witch_card", "collectorsalbum:epic_wither_card", "collectorsalbum:epic_wither_skeleton_card",
    "collectorsalbum:epic_wooden_axe_card", "collectorsalbum:epic_wooden_hoe_card", "collectorsalbum:epic_wooden_pickaxe_card", "collectorsalbum:epic_wooden_shovel_card", "collectorsalbum:epic_wooden_sword_card",
    "collectorsalbum:legendary_acacia_sapling_card", "collectorsalbum:legendary_allium_card", "collectorsalbum:legendary_amethyst_shard_card", "collectorsalbum:legendary_apple_card", "collectorsalbum:legendary_azure_bluet_card",
    "collectorsalbum:legendary_bat_card", "collectorsalbum:legendary_beacon_card", "collectorsalbum:legendary_bee_card", "collectorsalbum:legendary_beetroot_card", "collectorsalbum:legendary_bell_card",
    "collectorsalbum:legendary_blaze_card", "collectorsalbum:legendary_blaze_powder_card", "collectorsalbum:legendary_blue_orchid_card", "collectorsalbum:legendary_brewing_stand_card", "collectorsalbum:legendary_brown_mushroom_card",
    "collectorsalbum:legendary_card_pack", "collectorsalbum:legendary_carrot_card", "collectorsalbum:legendary_cat_card", "collectorsalbum:legendary_chainmail_boots_card", "collectorsalbum:legendary_chainmail_chestplate_card",
    "collectorsalbum:legendary_chainmail_leggings_card", "collectorsalbum:legendary_chicken_card", "collectorsalbum:legendary_clock_card", "collectorsalbum:legendary_coal_card", "collectorsalbum:legendary_compass_card",
    "collectorsalbum:legendary_cow_card", "collectorsalbum:legendary_creeper_card", "collectorsalbum:legendary_custom_card_pack", "collectorsalbum:legendary_dandelion_card", "collectorsalbum:legendary_dark_oak_sapling_card",
    "collectorsalbum:legendary_diamond_axe_card", "collectorsalbum:legendary_diamond_boots_card", "collectorsalbum:legendary_diamond_card", "collectorsalbum:legendary_diamond_chestplate_card", "collectorsalbum:legendary_diamond_helmet_card",
    "collectorsalbum:legendary_diamond_horse_armor_card", "collectorsalbum:legendary_diamond_leggings_card", "collectorsalbum:legendary_diamond_pickaxe_card", "collectorsalbum:legendary_diamond_shovel_card", "collectorsalbum:legendary_diamond_sword_card",
    "collectorsalbum:legendary_enchantment_table_card", "collectorsalbum:legendary_ender_dragon_card", "collectorsalbum:legendary_ender_eye_card", "collectorsalbum:legendary_ender_pearl_card", "collectorsalbum:legendary_enderman_card",
    "collectorsalbum:legendary_firework_rocket_card", "collectorsalbum:legendary_fox_card", "collectorsalbum:legendary_ghast_card", "collectorsalbum:legendary_glow_berries_card", "collectorsalbum:legendary_glowstone_dust_card",
    "collectorsalbum:legendary_golden_apple_card", "collectorsalbum:legendary_golden_axe_card", "collectorsalbum:legendary_golden_boots_card", "collectorsalbum:legendary_golden_carrot_card", "collectorsalbum:legendary_golden_chestplate_card",
    "collectorsalbum:legendary_golden_hoe_card", "collectorsalbum:legendary_golden_horse_armor_card", "collectorsalbum:legendary_golden_leggings_card", "collectorsalbum:legendary_golden_pickaxe_card", "collectorsalbum:legendary_golden_shovel_card",
    "collectorsalbum:legendary_heart_of_the_sea_card", "collectorsalbum:legendary_honeycomb_card", "collectorsalbum:legendary_horse_card", "collectorsalbum:legendary_iron_axe_card", "collectorsalbum:legendary_iron_boots_card",
    "collectorsalbum:legendary_iron_helmet_card", "collectorsalbum:legendary_iron_hoe_card", "collectorsalbum:legendary_iron_horse_armor_card", "collectorsalbum:legendary_iron_ingot_card", "collectorsalbum:legendary_iron_leggings_card",
    "collectorsalbum:legendary_iron_shovel_card", "collectorsalbum:legendary_iron_sword_card", "collectorsalbum:legendary_jungle_sapling_card", "collectorsalbum:legendary_kelp_card", "collectorsalbum:legendary_lantern_card",
    "collectorsalbum:legendary_leather_boots_card", "collectorsalbum:legendary_leather_chestplate_card", "collectorsalbum:legendary_leather_helmet_card", "collectorsalbum:legendary_leather_horse_armor_card", "collectorsalbum:legendary_leather_leggings_card",
    "collectorsalbum:legendary_melon_slice_card", "collectorsalbum:legendary_music_disc_card", "collectorsalbum:legendary_nautilus_shell_card", "collectorsalbum:legendary_nether_star_card", "collectorsalbum:legendary_nether_wart_card",
    "collectorsalbum:legendary_netherite_boots_card", "collectorsalbum:legendary_netherite_chestplate_card", "collectorsalbum:legendary_netherite_helmet_card", "collectorsalbum:legendary_netherite_hoe_card", "collectorsalbum:legendary_netherite_ingot_card",
    "collectorsalbum:legendary_netherite_pickaxe_card", "collectorsalbum:legendary_netherite_shovel_card", "collectorsalbum:legendary_netherite_sword_card", "collectorsalbum:legendary_oak_sapling_card", "collectorsalbum:legendary_oxeye_daisy_card",
    "collectorsalbum:legendary_parrot_card", "collectorsalbum:legendary_pig_card", "collectorsalbum:legendary_piglin_brute_card", "collectorsalbum:legendary_pillager_card", "collectorsalbum:legendary_polar_bear_card",
    "collectorsalbum:legendary_potato_card", "collectorsalbum:legendary_red_mushroom_card", "collectorsalbum:legendary_red_tulip_card", "collectorsalbum:legendary_redstone_card", "collectorsalbum:legendary_repacked_card_pack",
    "collectorsalbum:legendary_shield_card", "collectorsalbum:legendary_skeleton_card", "collectorsalbum:legendary_slime_card", "collectorsalbum:legendary_spider_card", "collectorsalbum:legendary_spruce_sapling_card",
    "collectorsalbum:legendary_squid_card", "collectorsalbum:legendary_stone_axe_card", "collectorsalbum:legendary_stone_hoe_card", "collectorsalbum:legendary_stone_pickaxe_card", "collectorsalbum:legendary_stone_shovel_card",
    "collectorsalbum:legendary_sugar_cane_card", "collectorsalbum:legendary_sweet_berries_card", "collectorsalbum:legendary_turtle_helmet_card", "collectorsalbum:legendary_villager_card", "collectorsalbum:legendary_wheat_card",
    "collectorsalbum:legendary_wither_card", "collectorsalbum:legendary_wither_skeleton_card", "collectorsalbum:legendary_wolf_card", "collectorsalbum:legendary_wooden_axe_card", "collectorsalbum:legendary_wooden_hoe_card",
    "collectorsalbum:legendary_wooden_shovel_card", "collectorsalbum:legendary_wooden_sword_card", "collectorsalbum:legendary_zombie_card", "collectorsalbum:mythical_acacia_sapling_card", "collectorsalbum:mythical_allium_card",
    "collectorsalbum:mythical_apple_card", "collectorsalbum:mythical_azure_bluet_card", "collectorsalbum:mythical_bamboo_card", "collectorsalbum:mythical_bat_card", "collectorsalbum:mythical_beacon_card",
    "collectorsalbum:mythical_beetroot_card", "collectorsalbum:mythical_bell_card", "collectorsalbum:mythical_birch_sapling_card", "collectorsalbum:mythical_blaze_card", "collectorsalbum:mythical_blaze_powder_card",
    "collectorsalbum:mythical_brewing_stand_card", "collectorsalbum:mythical_brown_mushroom_card", "collectorsalbum:mythical_campfire_card", "collectorsalbum:mythical_card_pack", "collectorsalbum:mythical_carrot_card",
    "collectorsalbum:mythical_chainmail_boots_card", "collectorsalbum:mythical_chainmail_chestplate_card", "collectorsalbum:mythical_chainmail_helmet_card", "collectorsalbum:mythical_chainmail_leggings_card", "collectorsalbum:mythical_chicken_card",
    "collectorsalbum:mythical_coal_card", "collectorsalbum:mythical_compass_card", "collectorsalbum:mythical_cookie_card", "collectorsalbum:mythical_cow_card", "collectorsalbum:mythical_creeper_card",
    "collectorsalbum:mythical_dandelion_card", "collectorsalbum:mythical_dark_oak_sapling_card", "collectorsalbum:mythical_dead_bush_card", "collectorsalbum:mythical_diamond_axe_card", "collectorsalbum:mythical_diamond_boots_card",
    "collectorsalbum:mythical_diamond_chestplate_card", "collectorsalbum:mythical_diamond_helmet_card", "collectorsalbum:mythical_diamond_hoe_card", "collectorsalbum:mythical_diamond_horse_armor_card", "collectorsalbum:mythical_diamond_leggings_card",
    "collectorsalbum:mythical_diamond_shovel_card", "collectorsalbum:mythical_diamond_sword_card", "collectorsalbum:mythical_emerald_card", "collectorsalbum:mythical_enchantment_table_card", "collectorsalbum:mythical_ender_dragon_card",
    "collectorsalbum:mythical_ender_pearl_card", "collectorsalbum:mythical_enderman_card", "collectorsalbum:mythical_feather_card", "collectorsalbum:mythical_firework_rocket_card", "collectorsalbum:mythical_fox_card",
    "collectorsalbum:mythical_glow_berries_card", "collectorsalbum:mythical_glowstone_dust_card", "collectorsalbum:mythical_gold_ingot_card", "collectorsalbum:mythical_golden_apple_card", "collectorsalbum:mythical_golden_axe_card",
    "collectorsalbum:mythical_golden_carrot_card", "collectorsalbum:mythical_golden_chestplate_card", "collectorsalbum:mythical_golden_helmet_card", "collectorsalbum:mythical_golden_hoe_card", "collectorsalbum:mythical_golden_horse_armor_card",
    "collectorsalbum:mythical_golden_pickaxe_card", "collectorsalbum:mythical_golden_shovel_card", "collectorsalbum:mythical_golden_sword_card", "collectorsalbum:mythical_heart_of_the_sea_card", "collectorsalbum:mythical_honeycomb_card",
    "collectorsalbum:mythical_iron_axe_card", "collectorsalbum:mythical_iron_boots_card", "collectorsalbum:mythical_iron_chestplate_card", "collectorsalbum:mythical_iron_helmet_card", "collectorsalbum:mythical_iron_hoe_card",
    "collectorsalbum:mythical_iron_ingot_card", "collectorsalbum:mythical_iron_leggings_card", "collectorsalbum:mythical_iron_pickaxe_card", "collectorsalbum:mythical_iron_shovel_card", "collectorsalbum:mythical_iron_sword_card",
    "collectorsalbum:mythical_kelp_card", "collectorsalbum:mythical_lantern_card", "collectorsalbum:mythical_lapis_lazuli_card", "collectorsalbum:mythical_leather_boots_card", "collectorsalbum:mythical_leather_chestplate_card",
    "collectorsalbum:mythical_leather_horse_armor_card", "collectorsalbum:mythical_leather_leggings_card", "collectorsalbum:mythical_magma_cube_card", "collectorsalbum:mythical_melon_slice_card", "collectorsalbum:mythical_music_disc_card",
    "collectorsalbum:mythical_nether_star_card", "collectorsalbum:mythical_nether_wart_card", "collectorsalbum:mythical_netherite_axe_card", "collectorsalbum:mythical_netherite_boots_card", "collectorsalbum:mythical_netherite_chestplate_card",
    "collectorsalbum:mythical_netherite_hoe_card", "collectorsalbum:mythical_netherite_ingot_card", "collectorsalbum:mythical_netherite_leggings_card", "collectorsalbum:mythical_netherite_pickaxe_card", "collectorsalbum:mythical_netherite_shovel_card",
    "collectorsalbum:mythical_oak_sapling_card", "collectorsalbum:mythical_oxeye_daisy_card", "collectorsalbum:mythical_panda_card", "collectorsalbum:mythical_parrot_card", "collectorsalbum:mythical_pig_card",
    "collectorsalbum:mythical_pillager_card", "collectorsalbum:mythical_polar_bear_card", "collectorsalbum:mythical_poppy_card", "collectorsalbum:mythical_potato_card", "collectorsalbum:mythical_red_mushroom_card",
    "collectorsalbum:mythical_redstone_card", "collectorsalbum:mythical_repacked_card_pack", "collectorsalbum:mythical_sheep_card", "collectorsalbum:mythical_shield_card", "collectorsalbum:mythical_skeleton_card",
    "collectorsalbum:mythical_spider_card", "collectorsalbum:mythical_spruce_sapling_card", "collectorsalbum:mythical_spyglass_card", "collectorsalbum:mythical_squid_card", "collectorsalbum:mythical_stone_axe_card",
    "collectorsalbum:mythical_stone_pickaxe_card", "collectorsalbum:mythical_stone_shovel_card", "collectorsalbum:mythical_stone_sword_card", "collectorsalbum:mythical_sugar_cane_card", "collectorsalbum:mythical_sweet_berries_card",
    "collectorsalbum:mythical_villager_card", "collectorsalbum:mythical_wheat_card", "collectorsalbum:mythical_witch_card", "collectorsalbum:mythical_wither_card", "collectorsalbum:mythical_wither_skeleton_card",
    "collectorsalbum:mythical_wooden_axe_card", "collectorsalbum:mythical_wooden_hoe_card", "collectorsalbum:mythical_wooden_pickaxe_card", "collectorsalbum:mythical_wooden_shovel_card", "collectorsalbum:mythical_wooden_sword_card",
    "collectorsalbum:rare_acacia_sapling_card", "collectorsalbum:rare_allium_card", "collectorsalbum:rare_amethyst_shard_card", "collectorsalbum:rare_apple_card", "collectorsalbum:rare_azure_bluet_card",
    "collectorsalbum:rare_bat_card", "collectorsalbum:rare_beacon_card", "collectorsalbum:rare_bee_card", "collectorsalbum:rare_beetroot_card", "collectorsalbum:rare_bell_card",
    "collectorsalbum:rare_blaze_card", "collectorsalbum:rare_blaze_powder_card", "collectorsalbum:rare_blue_orchid_card", "collectorsalbum:rare_brewing_stand_card", "collectorsalbum:rare_brown_mushroom_card",
    "collectorsalbum:rare_card_pack", "collectorsalbum:rare_carrot_card", "collectorsalbum:rare_cat_card", "collectorsalbum:rare_chainmail_boots_card", "collectorsalbum:rare_chainmail_chestplate_card",
    "collectorsalbum:rare_chainmail_leggings_card", "collectorsalbum:rare_chicken_card", "collectorsalbum:rare_clock_card", "collectorsalbum:rare_coal_card", "collectorsalbum:rare_compass_card",
    "collectorsalbum:rare_cow_card", "collectorsalbum:rare_creeper_card", "collectorsalbum:rare_custom_card_pack", "collectorsalbum:rare_dandelion_card", "collectorsalbum:rare_dark_oak_sapling_card",
    "collectorsalbum:rare_diamond_axe_card", "collectorsalbum:rare_diamond_boots_card", "collectorsalbum:rare_diamond_card", "collectorsalbum:rare_diamond_chestplate_card", "collectorsalbum:rare_diamond_helmet_card",
    "collectorsalbum:rare_diamond_horse_armor_card", "collectorsalbum:rare_diamond_leggings_card", "collectorsalbum:rare_diamond_pickaxe_card", "collectorsalbum:rare_diamond_shovel_card", "collectorsalbum:rare_diamond_sword_card",
    "collectorsalbum:rare_enchantment_table_card", "collectorsalbum:rare_ender_dragon_card", "collectorsalbum:rare_ender_eye_card", "collectorsalbum:rare_ender_pearl_card", "collectorsalbum:rare_enderman_card",
    "collectorsalbum:rare_firework_rocket_card", "collectorsalbum:rare_fox_card", "collectorsalbum:rare_ghast_card", "collectorsalbum:rare_glow_berries_card", "collectorsalbum:rare_glowstone_dust_card",
    "collectorsalbum:rare_golden_apple_card", "collectorsalbum:rare_golden_axe_card", "collectorsalbum:rare_golden_boots_card", "collectorsalbum:rare_golden_carrot_card", "collectorsalbum:rare_golden_chestplate_card",
    "collectorsalbum:rare_golden_hoe_card", "collectorsalbum:rare_golden_horse_armor_card", "collectorsalbum:rare_golden_leggings_card", "collectorsalbum:rare_golden_pickaxe_card", "collectorsalbum:rare_golden_shovel_card",
    "collectorsalbum:rare_heart_of_the_sea_card", "collectorsalbum:rare_honeycomb_card", "collectorsalbum:rare_horse_card", "collectorsalbum:rare_iron_axe_card", "collectorsalbum:rare_iron_boots_card",
    "collectorsalbum:rare_iron_helmet_card", "collectorsalbum:rare_iron_hoe_card", "collectorsalbum:rare_iron_horse_armor_card", "collectorsalbum:rare_iron_ingot_card", "collectorsalbum:rare_iron_leggings_card",
    "collectorsalbum:rare_iron_shovel_card", "collectorsalbum:rare_iron_sword_card", "collectorsalbum:rare_jungle_sapling_card", "collectorsalbum:rare_kelp_card", "collectorsalbum:rare_lantern_card",
    "collectorsalbum:rare_leather_boots_card", "collectorsalbum:rare_leather_chestplate_card", "collectorsalbum:rare_leather_helmet_card", "collectorsalbum:rare_leather_horse_armor_card", "collectorsalbum:rare_leather_leggings_card",
    "collectorsalbum:rare_melon_slice_card", "collectorsalbum:rare_music_disc_card", "collectorsalbum:rare_nautilus_shell_card", "collectorsalbum:rare_nether_star_card", "collectorsalbum:rare_nether_wart_card",
    "collectorsalbum:rare_netherite_boots_card", "collectorsalbum:rare_netherite_chestplate_card", "collectorsalbum:rare_netherite_helmet_card", "collectorsalbum:rare_netherite_hoe_card", "collectorsalbum:rare_netherite_ingot_card",
    "collectorsalbum:rare_netherite_pickaxe_card", "collectorsalbum:rare_netherite_shovel_card", "collectorsalbum:rare_netherite_sword_card", "collectorsalbum:rare_oak_sapling_card", "collectorsalbum:rare_oxeye_daisy_card",
    "collectorsalbum:rare_parrot_card", "collectorsalbum:rare_pig_card", "collectorsalbum:rare_piglin_brute_card", "collectorsalbum:rare_pillager_card", "collectorsalbum:rare_polar_bear_card",
    "collectorsalbum:rare_potato_card", "collectorsalbum:rare_red_mushroom_card", "collectorsalbum:rare_red_tulip_card", "collectorsalbum:rare_redstone_card", "collectorsalbum:rare_repacked_card_pack",
    "collectorsalbum:rare_shield_card", "collectorsalbum:rare_skeleton_card", "collectorsalbum:rare_slime_card", "collectorsalbum:rare_spider_card", "collectorsalbum:rare_spruce_sapling_card",
    "collectorsalbum:rare_squid_card", "collectorsalbum:rare_stone_axe_card", "collectorsalbum:rare_stone_hoe_card", "collectorsalbum:rare_stone_pickaxe_card", "collectorsalbum:rare_stone_shovel_card",
    "collectorsalbum:rare_sugar_cane_card", "collectorsalbum:rare_sweet_berries_card", "collectorsalbum:rare_turtle_helmet_card", "collectorsalbum:rare_villager_card", "collectorsalbum:rare_wheat_card",
    "collectorsalbum:rare_wither_card", "collectorsalbum:rare_wither_skeleton_card", "collectorsalbum:rare_wolf_card", "collectorsalbum:rare_wooden_axe_card", "collectorsalbum:rare_wooden_hoe_card",
    "collectorsalbum:rare_wooden_shovel_card", "collectorsalbum:rare_wooden_sword_card", "collectorsalbum:rare_zombie_card", "collectorsalbum:uncommon_acacia_sapling_card", "collectorsalbum:uncommon_allium_card",
    "collectorsalbum:uncommon_apple_card", "collectorsalbum:uncommon_azure_bluet_card", "collectorsalbum:uncommon_bamboo_card", "collectorsalbum:uncommon_bat_card", "collectorsalbum:uncommon_beacon_card",
    "collectorsalbum:uncommon_beetroot_card", "collectorsalbum:uncommon_bell_card", "collectorsalbum:uncommon_birch_sapling_card", "collectorsalbum:uncommon_blaze_card", "collectorsalbum:uncommon_blaze_powder_card",
    "collectorsalbum:uncommon_brewing_stand_card", "collectorsalbum:uncommon_brown_mushroom_card", "collectorsalbum:uncommon_campfire_card", "collectorsalbum:uncommon_card_pack", "collectorsalbum:uncommon_carrot_card",
    "collectorsalbum:uncommon_chainmail_boots_card", "collectorsalbum:uncommon_chainmail_chestplate_card", "collectorsalbum:uncommon_chainmail_helmet_card", "collectorsalbum:uncommon_chainmail_leggings_card", "collectorsalbum:uncommon_chicken_card",
    "collectorsalbum:uncommon_coal_card", "collectorsalbum:uncommon_compass_card", "collectorsalbum:uncommon_cookie_card", "collectorsalbum:uncommon_cow_card", "collectorsalbum:uncommon_creeper_card",
    "collectorsalbum:uncommon_dandelion_card", "collectorsalbum:uncommon_dark_oak_sapling_card", "collectorsalbum:uncommon_dead_bush_card", "collectorsalbum:uncommon_diamond_axe_card", "collectorsalbum:uncommon_diamond_boots_card",
    "collectorsalbum:uncommon_diamond_chestplate_card", "collectorsalbum:uncommon_diamond_helmet_card", "collectorsalbum:uncommon_diamond_hoe_card", "collectorsalbum:uncommon_diamond_horse_armor_card", "collectorsalbum:uncommon_diamond_leggings_card",
    "collectorsalbum:uncommon_diamond_shovel_card", "collectorsalbum:uncommon_diamond_sword_card", "collectorsalbum:uncommon_emerald_card", "collectorsalbum:uncommon_enchantment_table_card", "collectorsalbum:uncommon_ender_dragon_card",
    "collectorsalbum:uncommon_ender_pearl_card", "collectorsalbum:uncommon_enderman_card", "collectorsalbum:uncommon_feather_card", "collectorsalbum:uncommon_firework_rocket_card", "collectorsalbum:uncommon_fox_card",
    "collectorsalbum:uncommon_glow_berries_card", "collectorsalbum:uncommon_glowstone_dust_card", "collectorsalbum:uncommon_gold_ingot_card", "collectorsalbum:uncommon_golden_apple_card", "collectorsalbum:uncommon_golden_axe_card",
    "collectorsalbum:uncommon_golden_carrot_card", "collectorsalbum:uncommon_golden_chestplate_card", "collectorsalbum:uncommon_golden_helmet_card", "collectorsalbum:uncommon_golden_hoe_card", "collectorsalbum:uncommon_golden_horse_armor_card",
    "collectorsalbum:uncommon_golden_pickaxe_card", "collectorsalbum:uncommon_golden_shovel_card", "collectorsalbum:uncommon_golden_sword_card", "collectorsalbum:uncommon_heart_of_the_sea_card", "collectorsalbum:uncommon_honeycomb_card",
    "collectorsalbum:uncommon_iron_axe_card", "collectorsalbum:uncommon_iron_boots_card", "collectorsalbum:uncommon_iron_chestplate_card", "collectorsalbum:uncommon_iron_helmet_card", "collectorsalbum:uncommon_iron_hoe_card",
    "collectorsalbum:uncommon_iron_ingot_card", "collectorsalbum:uncommon_iron_leggings_card", "collectorsalbum:uncommon_iron_pickaxe_card", "collectorsalbum:uncommon_iron_shovel_card", "collectorsalbum:uncommon_iron_sword_card",
    "collectorsalbum:uncommon_kelp_card", "collectorsalbum:uncommon_lantern_card", "collectorsalbum:uncommon_lapis_lazuli_card", "collectorsalbum:uncommon_leather_boots_card", "collectorsalbum:uncommon_leather_chestplate_card",
    "collectorsalbum:uncommon_leather_horse_armor_card", "collectorsalbum:uncommon_leather_leggings_card", "collectorsalbum:uncommon_magma_cube_card", "collectorsalbum:uncommon_melon_slice_card", "collectorsalbum:uncommon_music_disc_card",
    "collectorsalbum:uncommon_nether_star_card", "collectorsalbum:uncommon_nether_wart_card", "collectorsalbum:uncommon_netherite_axe_card", "collectorsalbum:uncommon_netherite_boots_card", "collectorsalbum:uncommon_netherite_chestplate_card",
    "collectorsalbum:uncommon_netherite_hoe_card", "collectorsalbum:uncommon_netherite_ingot_card", "collectorsalbum:uncommon_netherite_leggings_card", "collectorsalbum:uncommon_netherite_pickaxe_card", "collectorsalbum:uncommon_netherite_shovel_card",
    "collectorsalbum:uncommon_oak_sapling_card", "collectorsalbum:uncommon_oxeye_daisy_card", "collectorsalbum:uncommon_panda_card", "collectorsalbum:uncommon_parrot_card", "collectorsalbum:uncommon_pig_card",
    "collectorsalbum:uncommon_pillager_card", "collectorsalbum:uncommon_polar_bear_card", "collectorsalbum:uncommon_poppy_card", "collectorsalbum:uncommon_potato_card", "collectorsalbum:uncommon_red_mushroom_card",
    "collectorsalbum:uncommon_redstone_card", "collectorsalbum:uncommon_repacked_card_pack", "collectorsalbum:uncommon_sheep_card", "collectorsalbum:uncommon_shield_card", "collectorsalbum:uncommon_skeleton_card",
    "collectorsalbum:uncommon_spider_card", "collectorsalbum:uncommon_spruce_sapling_card", "collectorsalbum:uncommon_spyglass_card", "collectorsalbum:uncommon_squid_card", "collectorsalbum:uncommon_stone_axe_card",
    "collectorsalbum:uncommon_stone_pickaxe_card", "collectorsalbum:uncommon_stone_shovel_card", "collectorsalbum:uncommon_stone_sword_card", "collectorsalbum:uncommon_sugar_cane_card", "collectorsalbum:uncommon_sweet_berries_card",
    "collectorsalbum:uncommon_villager_card", "collectorsalbum:uncommon_wheat_card", "collectorsalbum:uncommon_witch_card", "collectorsalbum:uncommon_wither_card", "collectorsalbum:uncommon_wither_skeleton_card",
    "collectorsalbum:uncommon_wooden_axe_card", "collectorsalbum:uncommon_wooden_hoe_card", "collectorsalbum:uncommon_wooden_pickaxe_card", "collectorsalbum:uncommon_wooden_shovel_card", "collectorsalbum:uncommon_wooden_sword_card", 

];

// Items which are exclusive to Creative Mode
let categoryCreativeMode = [
    "apotheosis:boss_summoner",

    "autumnity:turkey_spawn_egg",

    "buzzier_bees:grizzly_bear_spawn_egg", "buzzier_bees:moobloom_spawn_egg",
];

// Items which are guide books
let categoryGuideBook = [
    "patchouli:guide_book", "delighto_flight:cook_book", "malum:encyclopedia_arcana", "tide:fishing_journal",
    "irons_jewelry:jewelcrafting_guide"
];

// Items which are used as unlocks for content or upgrades for items (loot, recipes, etc.)
let categoryUnlockItem = [
    "apotheosis:diamond_upgrade_smithing_template", "apotheosis:gold_upgrade_smithing_template",
    "apotheosis:iron_upgrade_smithing_template", "apotheosis:sigil_of_malice", "apotheosis:sigil_of_rebirth",
    "apotheosis:sigil_of_socketing", "apotheosis:sigil_of_supremacy", "apotheosis:sigil_of_unnaming",

    "apothic_enchanting:prismatic_web",

    "backpacked:unlock_token",

    "bountiful:decree",

    "constructionstick:template_angel", "constructionstick:template_battery", "constructionstick:template_destruction",
    "constructionstick:template_replacement",
];

// Items which are purely collectables
let categoryCollectable = [
    "apotheosis:music_disc_flash", "apotheosis:music_disc_shimmer", "apothic_enchanting:music_disc_arcana",
    "apothic_enchanting:music_disc_eterna",

    "autumnity:swirl_banner_pattern",

    "buzzier_bees:honeycomb_banner_pattern",

    "gamediscs:game_disc_flappy_bird", "gamediscs:game_disc_slime", "gamediscs:game_disc_blocktris",
    "gamediscs:game_disc_tnt_sweeper", "gamediscs:game_disc_pong", "gamediscs:game_disc_froggie",
    "gamediscs:game_disc_rabbit",

    "exposure:photograph", "exposure:aged_photograph", "exposure:stacked_photographs",
    "exposure:developed_black_and_white_film", "exposure:developed_color_film"
];

// Items which are crafting materials or resuls
let categoryMaterial = [
    "amendments:dye_bottle", "amendments:dragon_charge",

    "apotheosis:epic_material", "apotheosis:gem", "apotheosis:gem_dust", "apotheosis:gem_fused_slate",
    "apotheosis:mythic_material", "apotheosis:rare_material", "apotheosis:uncommon_material",

    "apothic_enchanting:inert_trident", "apothic_enchanting:infused_breath", "apothic_enchanting:warden_tendril",

    "ancientreforging:ancient_material",

    "architects_palette:algal_blend", "architects_palette:algal_brick", "architects_palette:entwine_rod",
    "architects_palette:nether_brass_ingot", "architects_palette:oracle_jelly", "architects_palette:sunmetal_brick",
    "architects_palette:sunmetal_blend", "architects_palette:unobtanium", "architects_palette:wardstone_blend",
    "architects_palette:withered_bone", "architects_palette:cerebral_plate",

    "autumnity:sap_bottle", "autumnity:snail_shell_piece", "autumnity:turkey_egg", "autumnity:syrup_bottle",
    
    "buzzier_bees:four_leaf_clover",

    "gamediscs:redstone_circuit", "gamediscs:processor", "gamediscs:battery", "gamediscs:display",
    "gamediscs:control_pad",

    "exposure:broken_interplanar_projector"
];

// Items which are used as tools but are not "unique" or "crafted"
let categoryTool = [
    "another_furniture:furniture_hammer",

    "apothic_enchanting:ender_lead", "apothic_enchanting:flimsy_ender_lead", "apothic_enchanting:occult_ender_lead",

    "autumnity:large_maple_boat", "autumnity:maple_boat", "autumnity:maple_chest_boat", "autumnity:maple_furnace_boat",

    "backpacked:backpack",

    "boatload:acacia_furnace_boat", "boatload:birch_furnace_boat", "boatload:cherry_furnace_boat",
    "boatload:crimson_boat", "boatload:crimson_chest_boat", "boatload:crimson_furnace_boat",
    "boatload:jungle_furnace_boat", "boatload:large_acacia_boat", "boatload:large_birch_boat",
    "boatload:large_cherry_boat", "boatload:large_crimson_boat", "boatload:large_jungle_boat",
    "boatload:large_mangrove_boat", "boatload:large_oak_boat", "boatload:large_spruce_boat",
    "boatload:large_warped_boat", "boatload:oak_furnace_boat", "boatload:spruce_furnace_boat",
    "boatload:warped_boat", "boatload:warped_chest_boat", "boatload:warped_furnace_boat",

    "buzzier_bees:bee_bottle", "buzzier_bees:endermite_bottle",

    "camping:multitool",

    "constructionstick:copper_stick", "constructionstick:diamond_stick", "constructionstick:netherite_stick",
    "constructionstick:wooden_stick",

    "gamediscs:gaming_console",

    "exposure:camera", "exposure:camera_stand", "exposure:album", "exposure_polaroid:instant_camera",
    "exposure:interplanar_projector"
];

// Items which are used as ammo
let categoryAmmo = [

];

// Items which are plants
let categoryPlant = [
    "autumnity:autumn_crocus", "autumnity:orange_maple_sapling", "autumnity:yellow_maple_sapling",
    "autumnity:red_maple_sapling",

    "buzzier_bees:buttercup", "buzzier_bees:pink_clover", "buzzier_bees:white_clover",
];

// Plants which are crops
let categoryCrop = [
    "autumnity:foul_berry_pips",
];

// Items which are foods, drinks, or otherwise consumed
let categoryConsumable = [
    "autumnity:cooked_turkey", "autumnity:cooked_turkey_piece", "autumnity:foul_soup", "autumnity:pancake",
    "autumnity:pumpkin_bread", "autumnity:turkey_piece", "autumnity:turkey",

    "bountiful:bounty",

    "buzzier_bees:honey_apple", "buzzier_bees:honey_bread",

    "camping:marshmallow_on_a_stick", "camping:roasted_marshmallow",

    "exposure:black_and_white_film", "exposure:color_film", "exposure:high_sensitivity_black_and_white_film",
    "exposure:high_sensitivity_color_film", "exposure_polaroid:instant_black_and_white_slide",
    "exposure_polaroid:instant_color_slide", "exposure_polaroid:high_sensitivity_instant_black_and_white_slide",
    "exposure_polaroid:high_sensitivity_instant_color_slide",

    
];

// Items which are used for cosmetic upgrades
let categoryCosmeticItem = [

];

// Blocks which are most commonly a part of the world's generation
let categoryNaturalBlock = [

];

// Blocks which are purely decorative
let categoryDecorativeBlock = [
    // Another Furniture
    "another_furniture:acacia_flower_box", "another_furniture:bamboo_flower_box", "another_furniture:birch_flower_box",
    "another_furniture:cherry_flower_box", "another_furniture:crimson_flower_box", "another_furniture:dark_oak_flower_box",
    "another_furniture:jungle_flower_box", "another_furniture:oak_flower_box", "another_furniture:spruce_flower_box",
    "another_furniture:warped_flower_box",
    
    "another_furniture:acacia_shelf", "another_furniture:bamboo_shelf", "another_furniture:birch_shelf", "another_furniture:cherry_shelf",
    "another_furniture:crimson_shelf", "another_furniture:dark_oak_shelf", "another_furniture:jungle_shelf",
    "another_furniture:mangrove_shelf", "another_furniture:oak_shelf", "another_furniture:warped_shelf",
    
    "another_furniture:acacia_shutter", "another_furniture:bamboo_shutter", "another_furniture:cherry_shutter",
    "another_furniture:crimson_shutter", "another_furniture:dark_oak_shutter", "another_furniture:jungle_shutter",
    "another_furniture:mangrove_shutter", "another_furniture:oak_shutter", "another_furniture:spruce_shutter",
    "another_furniture:warped_shutter", "another_furniture:birch_shutter", 
    
    "another_furniture:acacia_table", "another_furniture:birch_table", "another_furniture:cherry_table", "another_furniture:mangrove_table",
    "another_furniture:oak_table", "another_furniture:spruce_table", "another_furniture:warped_table", "another_furniture:bamboo_table",
    "another_furniture:crimson_table", "another_furniture:dark_oak_table", "another_furniture:jungle_table",
    
    "another_furniture:bamboo_chair", "another_furniture:birch_chair", "another_furniture:crimson_chair", "another_furniture:dark_oak_chair",
    "another_furniture:jungle_chair", "another_furniture:mangrove_chair", "another_furniture:oak_chair", "another_furniture:spruce_chair",
    "another_furniture:warped_chair", 

    "another_furniture:birch_bench", "another_furniture:cherry_bench", "another_furniture:mangrove_bench", "another_furniture:oak_bench",
    "another_furniture:spruce_bench", "another_furniture:warped_bench", "another_furniture:acacia_bench", "another_furniture:bamboo_bench",
    "another_furniture:crimson_bench", "another_furniture:dark_oak_bench", "another_furniture:jungle_bench",

    "another_furniture:black_curtain", "another_furniture:blue_curtain", "another_furniture:cyan_curtain", "another_furniture:gray_curtain",
    "another_furniture:green_curtain", "another_furniture:light_blue_curtain", "another_furniture:lime_curtain",
    "another_furniture:magenta_curtain", "another_furniture:orange_curtain", "another_furniture:pink_curtain",
    "another_furniture:purple_curtain", "another_furniture:red_curtain", "another_furniture:white_curtain",
    "another_furniture:yellow_curtain", "another_furniture:brown_curtain", "another_furniture:light_gray_curtain",
    
    
    "another_furniture:black_lamp", "another_furniture:blue_lamp", "another_furniture:brown_lamp", "another_furniture:cyan_lamp",
    "another_furniture:gray_lamp", "another_furniture:green_lamp", "another_furniture:light_blue_lamp", "another_furniture:light_gray_lamp",
    "another_furniture:magenta_lamp", "another_furniture:pink_lamp", "another_furniture:purple_lamp", "another_furniture:red_lamp",
    "another_furniture:white_lamp", "another_furniture:yellow_lamp", "another_furniture:lime_lamp", "another_furniture:orange_lamp",
    
    "another_furniture:black_sofa", "another_furniture:blue_sofa", "another_furniture:brown_sofa", "another_furniture:cyan_sofa",
    "another_furniture:gray_sofa", "another_furniture:green_sofa", "another_furniture:light_blue_sofa", "another_furniture:light_gray_sofa",
    "another_furniture:lime_sofa", "another_furniture:orange_sofa", "another_furniture:purple_sofa", "another_furniture:red_sofa",
    "another_furniture:yellow_sofa", "another_furniture:magenta_sofa", "another_furniture:pink_sofa", "another_furniture:white_sofa",
    
    "another_furniture:black_stool", "another_furniture:blue_stool", "another_furniture:brown_stool", "another_furniture:cyan_stool",
    "another_furniture:gray_stool", "another_furniture:green_stool", "another_furniture:light_blue_stool", "another_furniture:light_gray_stool",
    "another_furniture:lime_stool", "another_furniture:magenta_stool", "another_furniture:orange_stool", "another_furniture:pink_stool",
    "another_furniture:red_stool", "another_furniture:white_stool", "another_furniture:purple_stool", "another_furniture:yellow_stool",

    "another_furniture:blue_tall_stool", "another_furniture:brown_tall_stool", "another_furniture:cyan_tall_stool",
    "another_furniture:yellow_tall_stool", "another_furniture:green_tall_stool", "another_furniture:light_blue_tall_stool",
    "another_furniture:light_gray_tall_stool", "another_furniture:lime_tall_stool", "another_furniture:magenta_tall_stool",
    "another_furniture:orange_tall_stool", "another_furniture:pink_tall_stool", "another_furniture:purple_tall_stool",
    "another_furniture:white_tall_stool", "another_furniture:black_tall_stool", "another_furniture:red_tall_stool", 
    
    //  Architect's Palette
    "architects_palette:abyssaline", "architects_palette:abyssaline_brick_slab", "architects_palette:abyssaline_bricks",
    "architects_palette:abyssaline_lamp", "architects_palette:abyssaline_pillar", "architects_palette:abyssaline_plating",
    "architects_palette:abyssaline_tile_slab", "architects_palette:abyssaline_tiles", "architects_palette:chiseled_abyssaline_bricks",

    "architects_palette:chiseled_hadaline_bricks", "architects_palette:hadaline_brick_slab",
    "architects_palette:hadaline_brick_vertical_slab", "architects_palette:hadaline_bricks", "architects_palette:hadaline_lamp",
    "architects_palette:hadaline_pillar", "architects_palette:hadaline_tile_slab", "architects_palette:hadaline_tile_vertical_slab",
    "architects_palette:hadaline_tiles",

    "architects_palette:acacia_board_slab", "architects_palette:acacia_board_stairs", "architects_palette:acacia_board_vertical_slab",
    "architects_palette:acacia_board_wall", "architects_palette:bamboo_board_slab", "architects_palette:bamboo_board_stairs",
    "architects_palette:bamboo_board_vertical_slab", "architects_palette:bamboo_board_wall", "architects_palette:bamboo_boards",
    "architects_palette:birch_board_stairs", "architects_palette:birch_board_vertical_slab", "architects_palette:birch_board_wall",
    "architects_palette:birch_boards", "architects_palette:cherry_board_slab", "architects_palette:cherry_board_stairs",
    "architects_palette:cherry_board_vertical_slab", "architects_palette:cherry_boards", "architects_palette:crimson_board_slab", 
    "architects_palette:crimson_board_vertical_slab", "architects_palette:crimson_board_wall", "architects_palette:crimson_boards",
    "architects_palette:dark_oak_board_slab", "architects_palette:dark_oak_board_vertical_slab",
    "architects_palette:dark_oak_board_wall", "architects_palette:dark_oak_boards", "architects_palette:jungle_board_slab",
    "architects_palette:jungle_board_stairs", "architects_palette:jungle_board_vertical_slab", "architects_palette:jungle_board_wall",
    "architects_palette:jungle_boards", "architects_palette:mangrove_board_slab", "architects_palette:mangrove_board_stairs",
    "architects_palette:mangrove_board_vertical_slab", "architects_palette:mangrove_board_wall", "architects_palette:oak_board_slab",
    "architects_palette:oak_board_stairs", "architects_palette:oak_board_vertical_slab", "architects_palette:oak_boards",
    "architects_palette:spruce_board_slab", "architects_palette:spruce_board_stairs", "architects_palette:spruce_board_vertical_slab", 
    "architects_palette:spruce_boards", "architects_palette:warped_board_stairs", "architects_palette:warped_board_vertical_slab",
    "architects_palette:warped_board_wall", "architects_palette:warped_boards", "architects_palette:twisted_board_slab",
    "architects_palette:twisted_board_stairs", "architects_palette:twisted_board_wall", "architects_palette:twisted_boards",

    "architects_palette:acacia_railing", "architects_palette:birch_railing", "architects_palette:cherry_railing",
    "architects_palette:crimson_railing", "architects_palette:dark_oak_railing", "architects_palette:mangrove_railing",
    "architects_palette:oak_railing", "architects_palette:spruce_railing", "architects_palette:warped_railing",
    "architects_palette:twisted_railing",
    
    "architects_palette:acacia_totem_wing", "architects_palette:blank_acacia_totem", "architects_palette:grinning_acacia_totem",
    "architects_palette:placid_acacia_totem", "architects_palette:shocked_acacia_totem",
      
    "architects_palette:algal_brick_slab", "architects_palette:algal_brick_vertical_slab",
    "architects_palette:algal_brick_wall", "architects_palette:algal_bricks", "architects_palette:algal_cage_lantern",
    "architects_palette:algal_lamp", "architects_palette:chiseled_algal_bricks", "architects_palette:cracked_algal_bricks",
    "architects_palette:overgrown_algal_brick_slab", "architects_palette:overgrown_algal_brick_stairs",
    "architects_palette:overgrown_algal_brick_vertical_slab", "architects_palette:overgrown_algal_brick_wall",
    "architects_palette:overgrown_algal_bricks",

    "architects_palette:chiseled_olivestone", "architects_palette:cracked_olivestone_bricks", "architects_palette:cracked_olivestone_tiles",
    "architects_palette:olivestone_brick_slab", "architects_palette:olivestone_brick_stairs", "architects_palette:olivestone_brick_vertical_slab", 
    "architects_palette:olivestone_bricks", "architects_palette:olivestone_pillar",
    "architects_palette:olivestone_tile_slab", "architects_palette:olivestone_tile_stairs",
    "architects_palette:olivestone_tile_vertical_slab", "architects_palette:olivestone_tiles",

    "architects_palette:chiseled_sunmetal_block", "architects_palette:sunmetal_block",  "architects_palette:sunmetal_nub",
    "architects_palette:sunmetal_pillar", "architects_palette:sunmetal_stairs",
    "architects_palette:sunmetal_vertical_slab",
 
    "architects_palette:ancient_plating_fence", "architects_palette:ancient_plating_slab",
    "architects_palette:ancient_plating_stairs", "architects_palette:ancient_plating_vertical_slab",
    "architects_palette:ancient_plating_wall",

    "architects_palette:cut_nether_brass_slab", "architects_palette:cut_nether_brass_stairs",
    "architects_palette:cut_nether_brass_vertical_slab", "architects_palette:cut_nether_brass_wall",
    "architects_palette:nether_brass_block", "architects_palette:nether_brass_chain", 
    "architects_palette:nether_brass_lantern", "architects_palette:nether_brass_nub", 
    "architects_palette:nether_brass_pillar", "architects_palette:nether_brass_slab",
    "architects_palette:nether_brass_stairs", "architects_palette:nether_brass_torch",
    "architects_palette:nether_brass_vertical_slab", "architects_palette:smooth_nether_brass",
    "architects_palette:smooth_nether_brass_slab", "architects_palette:smooth_nether_brass_stairs",

    "architects_palette:entwine_bars", "architects_palette:entwine_block", "architects_palette:entwine_pillar", 
    "architects_palette:entwine_slab", "architects_palette:entwine_vertical_slab",

    "architects_palette:basalt_tile_slab", "architects_palette:basalt_tile_stairs",
    "architects_palette:basalt_tile_vertical_slab", "architects_palette:basalt_tile_wall",
    "architects_palette:basalt_tiles", "architects_palette:chiseled_basalt_tiles",

    "architects_palette:calcite_brick_slab", "architects_palette:calcite_brick_stairs",
    "architects_palette:calcite_brick_vertical_slab", "architects_palette:calcite_brick_wall",
    "architects_palette:calcite_bricks", "architects_palette:calcite_pillar", "architects_palette:heavy_calcite_bricks",

    "architects_palette:chiseled_tuff", "architects_palette:heavy_tuff_bricks", "architects_palette:tuff_brick_slab",
    "architects_palette:tuff_brick_stairs", "architects_palette:tuff_brick_vertical_slab", 
    "architects_palette:tuff_bricks", "architects_palette:tuff_lamp", "architects_palette:tuff_pillar",

    "architects_palette:chiseled_end_stone_bricks", "architects_palette:choral_end_stone_bricks",
    "architects_palette:cracked_end_stone_bricks", "architects_palette:heavy_cracked_end_stone_bricks",
    "architects_palette:heavy_end_stone_bricks",

    "architects_palette:chiseled_dripstone", "architects_palette:dripstone_brick_stairs",
    "architects_palette:dripstone_brick_vertical_slab", "architects_palette:dripstone_brick_wall",
    "architects_palette:dripstone_bricks", "architects_palette:dripstone_lamp",

    "architects_palette:chiseled_gilded_sandstone", "architects_palette:gilded_sandstone",
    "architects_palette:gilded_sandstone_pillar", "architects_palette:gilded_sandstone_stairs",
    "architects_palette:gilded_sandstone_vertical_slab",

    "architects_palette:glowstone_cage_lantern", "architects_palette:polished_glowstone",
    "architects_palette:polished_glowstone_nub", "architects_palette:polished_glowstone_vertical_slab",
    "architects_palette:polished_glowstone_wall", "architects_palette:runic_glowstone",

    "architects_palette:chiseled_packed_ice", "architects_palette:packed_ice_pillar", "architects_palette:coarse_snow",
    "architects_palette:polished_packed_ice", "architects_palette:polished_packed_ice_slab",
    "architects_palette:polished_packed_ice_stairs", "architects_palette:polished_packed_ice_vertical_slab",
    "architects_palette:polished_packed_ice_wall",

    "architects_palette:heavy_cracked_stone_bricks", "architects_palette:heavy_mossy_stone_bricks",
    "architects_palette:heavy_stone_bricks",

    "architects_palette:twisting_blackstone_bricks", "architects_palette:weeping_blackstone", "architects_palette:weeping_blackstone_bricks",

    "architects_palette:bone_nub", "architects_palette:bread_nub", "architects_palette:copper_nub",
    "architects_palette:deepslate_nub", "architects_palette:diamond_nub", "architects_palette:diorite_nub",
    "architects_palette:emerald_nub", "architects_palette:exposed_copper_nub", "architects_palette:gold_nub",
    "architects_palette:granite_nub", "architects_palette:iron_nub", "architects_palette:netherite_nub",
    "architects_palette:nub_of_ender", "architects_palette:sandstone_nub", "architects_palette:smooth_stone_nub",
    "architects_palette:stone_nub", "architects_palette:waxed_copper_nub", 
    "architects_palette:waxed_oxidized_copper_nub", "architects_palette:waxed_weathered_copper_nub",
    "architects_palette:weathered_copper_nub",

    "architects_palette:bordered_moonshale", "architects_palette:cracked_moonshale_bricks", "architects_palette:moonshale",
    "architects_palette:moonshale_brick_slab", "architects_palette:moonshale_brick_vertical_slab",
    "architects_palette:moonshale_brick_wall", "architects_palette:moonshale_bricks",
    "architects_palette:moonshale_flagstone", "architects_palette:moonshale_slab",
    "architects_palette:moonshale_vertical_slab", "architects_palette:moonshale_wall",

    "architects_palette:moonstone", "architects_palette:sunstone",

    "architects_palette:craterstone_slab", "architects_palette:craterstone_stairs",
    "architects_palette:craterstone_vertical_slab", "architects_palette:craterstone_wall",

    "architects_palette:cerebral_block", "architects_palette:cerebral_pillar",
    "architects_palette:cerebral_slab", "architects_palette:cerebral_tile_slab", "architects_palette:cerebral_tile_stairs",
    "architects_palette:cerebral_tile_vertical_slab", "architects_palette:cerebral_tile_wall",
    "architects_palette:cerebral_tiles", "architects_palette:cerebral_wall",

    "architects_palette:dark_oracle_brick_slab", "architects_palette:dark_oracle_brick_vertical_slab",
    "architects_palette:dark_oracle_brick_wall", "architects_palette:dark_oracle_bricks", "architects_palette:framed_oracle_block",
    "architects_palette:oracle_block", "architects_palette:oracle_brick_slab", "architects_palette:oracle_brick_stairs",
    "architects_palette:oracle_brick_vertical_slab", "architects_palette:oracle_brick_wall", 
    "architects_palette:oracle_lamp", "architects_palette:oracle_pillar", "architects_palette:oracle_slab",
    "architects_palette:oracle_stairs", "architects_palette:oracle_tile_stairs",
    "architects_palette:oracle_tile_vertical_slab", "architects_palette:oracle_tile_wall",
    "architects_palette:oracle_tiles", "architects_palette:oracle_vertical_slab",

    "architects_palette:esoterrack", "architects_palette:esoterrack_brick_slab",
    "architects_palette:esoterrack_brick_stairs", "architects_palette:esoterrack_brick_vertical_slab", 
    "architects_palette:esoterrack_bricks", "architects_palette:esoterrack_pillar",
    "architects_palette:esoterrack_slab", "architects_palette:esoterrack_stairs",
    "architects_palette:esoterrack_vertical_slab",

    "architects_palette:wardstone", "architects_palette:wardstone_brick_slab",
    "architects_palette:wardstone_brick_stairs", "architects_palette:wardstone_brick_vertical_slab",
    "architects_palette:wardstone_brick_wall", "architects_palette:wardstone_bricks", 
    "architects_palette:wardstone_pillar", "architects_palette:wardstone_slab",
    "architects_palette:wardstone_stairs", "architects_palette:wardstone_vertical_slab",
    "architects_palette:wardstone_wall",

    "architects_palette:nebulite", "architects_palette:nebulite_slab", "architects_palette:nebulite_stairs",
    "architects_palette:nebulite_vertical_slab", "architects_palette:nebulite_wall", "architects_palette:polished_nebulite",
    "architects_palette:polished_nebulite_slab", "architects_palette:polished_nebulite_stairs",
         
    "architects_palette:chiseled_coal_ore_bricks", "architects_palette:coal_ore_brick_slab",
    "architects_palette:coal_ore_brick_stairs", "architects_palette:coal_ore_brick_vertical_slab",
    "architects_palette:coal_ore_brick_wall", "architects_palette:cracked_coal_ore_bricks",
     
    "architects_palette:chiseled_diamond_ore_bricks", "architects_palette:cracked_diamond_ore_bricks",
    "architects_palette:diamond_ore_brick_stairs", "architects_palette:diamond_ore_brick_vertical_slab",
    "architects_palette:diamond_ore_brick_wall", "architects_palette:diamond_ore_bricks",

    "architects_palette:chiseled_emerald_ore_bricks", "architects_palette:cracked_emerald_ore_bricks",
    "architects_palette:emerald_ore_brick_slab", "architects_palette:emerald_ore_brick_stairs",
    "architects_palette:emerald_ore_brick_vertical_slab", "architects_palette:emerald_ore_bricks",
     
    "architects_palette:chiseled_gold_ore_bricks", "architects_palette:cracked_gold_ore_bricks",
    "architects_palette:gold_ore_brick_slab", "architects_palette:gold_ore_brick_vertical_slab",
    "architects_palette:gold_ore_brick_wall", "architects_palette:gold_ore_bricks",

    "architects_palette:chiseled_iron_ore_bricks", "architects_palette:iron_ore_brick_slab",
    "architects_palette:iron_ore_brick_stairs", "architects_palette:iron_ore_brick_vertical_slab",
    "architects_palette:iron_ore_brick_wall",
        
    "architects_palette:chiseled_lapis_ore_bricks", "architects_palette:cracked_lapis_ore_bricks",
    "architects_palette:lapis_ore_brick_slab", "architects_palette:lapis_ore_brick_stairs",
    "architects_palette:lapis_ore_brick_vertical_slab", "architects_palette:lapis_ore_brick_wall",
    "architects_palette:lapis_ore_bricks",
      
    "architects_palette:chiseled_redstone_ore_bricks", "architects_palette:cracked_redstone_ore_bricks",
    "architects_palette:redstone_ore_brick_slab", "architects_palette:redstone_ore_brick_stairs",
    "architects_palette:redstone_ore_brick_vertical_slab", "architects_palette:redstone_ore_brick_wall",
    "architects_palette:redstone_ore_bricks",

    "architects_palette:crustless_bread_block",
           
    "architects_palette:ekanite_rod", "architects_palette:heliodor_rod", "architects_palette:monazite_rod",

    "architects_palette:molten_nether_bricks",
         
    "architects_palette:entrails", "architects_palette:entrails_slab", "architects_palette:entrails_stairs",

    "architects_palette:flint_pillar", "architects_palette:flint_tile_slab", "architects_palette:flint_tile_stairs", 
    "architects_palette:flint_tile_wall", "architects_palette:flint_tiles",

    "architects_palette:hazard_block", "architects_palette:hazard_sign", "architects_palette:hazard_vertical_slab",
    "architects_palette:hazard_wall",

    "architects_palette:lit_withered_osseous_skull", "architects_palette:withered_bone_block",
    "architects_palette:withered_osseous_brick_slab", "architects_palette:withered_osseous_brick_stairs",
    "architects_palette:withered_osseous_brick_vertical_slab", "architects_palette:withered_osseous_bricks",
    "architects_palette:withered_osseous_pillar", "architects_palette:withered_osseous_skull",

    "architects_palette:osseous_brick_stairs", "architects_palette:osseous_brick_vertical_slab",
    "architects_palette:osseous_brick_wall", "architects_palette:osseous_bricks", "architects_palette:osseous_pillar",
         
    "architects_palette:mushy_myonite_brick_slab", "architects_palette:mushy_myonite_brick_stairs", 
    "architects_palette:mushy_myonite_brick_wall", "architects_palette:mushy_myonite_bricks",
    "architects_palette:myonite", "architects_palette:myonite_brick_slab", "architects_palette:myonite_brick_stairs", 
    "architects_palette:myonite_brick_wall", "architects_palette:myonite_bricks", "architects_palette:myonite_slab",
    "architects_palette:myonite_stairs", "architects_palette:myonite_vertical_slab",
         
    "architects_palette:onyx", "architects_palette:onyx_brick_slab", "architects_palette:onyx_brick_stairs",
    "architects_palette:onyx_brick_vertical_slab", "architects_palette:onyx_bricks", "architects_palette:onyx_pillar",
    "architects_palette:onyx_slab", "architects_palette:onyx_stairs", "architects_palette:onyx_vertical_slab",
        
    "architects_palette:pipe", "architects_palette:sheet_metal_wall",

    "architects_palette:tread_plate", "architects_palette:tread_plate_slab", 
    "architects_palette:tread_plate_vertical_slab", "architects_palette:tread_plate_wall",
        
    "architects_palette:plating_block", "architects_palette:plating_nub", "architects_palette:plating_stairs",
    "architects_palette:plating_vertical_slab", "architects_palette:plating_wall",

    "architects_palette:stripped_twisted_log", "architects_palette:stripped_twisted_wood", "architects_palette:twisted_fence", 
    "architects_palette:twisted_leaves", "architects_palette:twisted_log", "architects_palette:twisted_planks",
    "architects_palette:twisted_slab", "architects_palette:twisted_stairs", "architects_palette:twisted_vertical_slab",
    "architects_palette:twisted_wood",
     
    "architects_palette:warpstone_slab", "architects_palette:warpstone_stairs",
    "architects_palette:warpstone_vertical_slab", "architects_palette:warpstone_wall",

    // Autumnity
    "autumnity:carved_large_pumpkin_slice", "autumnity:large_cupric_jack_o_lantern_slice",
    "autumnity:large_ender_jack_o_lantern_slice", "autumnity:large_redstone_jack_o_lantern_slice",
    "autumnity:large_soul_jack_o_lantern_slice", "autumnity:large_pumpkin_slice",
    
    "autumnity:cupric_jack_o_lantern", "autumnity:ender_jack_o_lantern", "autumnity:redstone_jack_o_lantern",
    "autumnity:soul_jack_o_lantern",

    "autumnity:chiseled_snail_shell_bricks", "autumnity:snail_shell_brick_slab",
    "autumnity:snail_shell_brick_stairs", "autumnity:snail_shell_brick_wall", 
    "autumnity:snail_shell_tile_slab", "autumnity:snail_shell_tile_stairs", "autumnity:snail_shell_tile_wall",
    "autumnity:snail_shell_tiles",

    "autumnity:yellow_maple_leaves", "autumnity:maple_leaf_pile", "autumnity:maple_leaves", "autumnity:red_maple_leaf_pile",
    "autumnity:orange_maple_leaves",
    
    "autumnity:maple_log", "autumnity:maple_planks", "autumnity:maple_slab", "autumnity:maple_stairs",
    "autumnity:maple_wood", "autumnity:sappy_maple_log", "autumnity:sappy_maple_wood", "autumnity:stripped_maple_log",
    "autumnity:stripped_maple_wood", "autumnity:maple_fence",
    
    // Buzzier Bees
    "buzzier_bees:cupric_candle", "buzzier_bees:ender_candle", "buzzier_bees:soul_candle",

    "buzzier_bees:honey_lamp",
         
    "buzzier_bees:honeycomb_brick_stairs", "buzzier_bees:honeycomb_brick_wall", "buzzier_bees:honeycomb_bricks",
    "buzzier_bees:honeycomb_tile_slab", "buzzier_bees:honeycomb_tile_wall", "buzzier_bees:honeycomb_tiles",

    // Let's Do Camping
    "camping:tent_amber", "camping:tent_aqua", "camping:tent_beige", "camping:tent_black",
    "camping:tent_brown", "camping:tent_coral", "camping:tent_cyan", "camping:tent_forest", "camping:tent_ginger",
    "camping:tent_green", "camping:tent_indigo", "camping:tent_light_blue", "camping:tent_light_gray", "camping:tent_lime",
    "camping:tent_maroon", "camping:tent_mint", "camping:tent_navy", "camping:tent_olive", "camping:tent_orange",
    "camping:tent_purple", "camping:tent_red", "camping:tent_rose", "camping:tent_slate", "camping:tent_tan",
    "camping:tent_verdant", "camping:tent_white", "camping:tent_yellow",

    // Clayworks
    "clayworks:chiseled_bricks", "clayworks:glazed_terracotta",

    "clayworks:concrete_powder",

    "clayworks:blue_terracotta_bricks", "clayworks:brown_terracotta_bricks", "clayworks:cyan_terracotta_bricks",
    "clayworks:gray_terracotta_bricks", "clayworks:green_terracotta_bricks", "clayworks:light_gray_terracotta_bricks",
    "clayworks:lime_terracotta_bricks", "clayworks:orange_terracotta_bricks", "clayworks:pink_terracotta_bricks",
    "clayworks:purple_terracotta_bricks", "clayworks:red_terracotta_bricks", "clayworks:white_terracotta_bricks",
    "clayworks:yellow_terracotta_bricks",

    "clayworks:chiseled_blue_terracotta_bricks", "clayworks:chiseled_brown_terracotta_bricks", "clayworks:chiseled_cyan_terracotta_bricks",
    "clayworks:chiseled_gray_terracotta_bricks", "clayworks:chiseled_light_blue_terracotta_bricks", "clayworks:chiseled_orange_terracotta_bricks",
    "clayworks:chiseled_light_gray_terracotta_bricks", "clayworks:chiseled_lime_terracotta_bricks", "clayworks:chiseled_magenta_terracotta_bricks",
    "clayworks:chiseled_purple_terracotta_bricks", "clayworks:chiseled_red_terracotta_bricks", "clayworks:chiseled_terracotta_bricks",
    "clayworks:chiseled_white_terracotta_bricks", "clayworks:chiseled_yellow_terracotta_bricks",

    "clayworks:black_terracotta_brick_slab", "clayworks:blue_terracotta_brick_slab", "clayworks:brown_terracotta_brick_slab",
    "clayworks:cyan_terracotta_brick_slab", "clayworks:green_terracotta_brick_slab", "clayworks:light_blue_terracotta_brick_slab",
    "clayworks:light_gray_terracotta_brick_slab", "clayworks:lime_terracotta_brick_slab", "clayworks:magenta_terracotta_brick_slab",
    "clayworks:orange_terracotta_brick_slab", "clayworks:pink_terracotta_brick_slab", "clayworks:purple_terracotta_brick_slab",
    "clayworks:red_terracotta_brick_slab", "clayworks:terracotta_brick_slab", "clayworks:white_terracotta_brick_slab",
    "clayworks:yellow_terracotta_brick_slab",

    "clayworks:black_terracotta_brick_stairs", "clayworks:blue_terracotta_brick_stairs", "clayworks:gray_terracotta_brick_stairs",
    "clayworks:green_terracotta_brick_stairs", "clayworks:light_blue_terracotta_brick_stairs", "clayworks:light_gray_terracotta_brick_stairs",
    "clayworks:magenta_terracotta_brick_stairs", "clayworks:orange_terracotta_brick_stairs", "clayworks:purple_terracotta_brick_stairs",
    "clayworks:red_terracotta_brick_stairs", "clayworks:terracotta_brick_stairs", "clayworks:white_terracotta_brick_stairs",

    "clayworks:black_terracotta_brick_wall", "clayworks:blue_terracotta_brick_wall", "clayworks:brown_terracotta_brick_wall",
    "clayworks:cyan_terracotta_brick_wall", "clayworks:gray_terracotta_brick_wall", "clayworks:light_blue_terracotta_brick_wall",
    "clayworks:light_gray_terracotta_brick_wall", "clayworks:lime_terracotta_brick_wall", "clayworks:magenta_terracotta_brick_wall",
    "clayworks:orange_terracotta_brick_wall", "clayworks:pink_terracotta_brick_wall", "clayworks:red_terracotta_brick_wall",
    "clayworks:terracotta_brick_wall", "clayworks:white_terracotta_brick_wall", "clayworks:yellow_terracotta_brick_wall",

    "clayworks:black_terracotta_slab", "clayworks:blue_terracotta_slab", "clayworks:brown_terracotta_slab", "clayworks:cyan_terracotta_slab",
    "clayworks:gray_terracotta_slab", "clayworks:green_terracotta_slab", "clayworks:light_blue_terracotta_slab", "clayworks:light_gray_terracotta_slab",
    "clayworks:lime_terracotta_slab", "clayworks:magenta_terracotta_slab", "clayworks:orange_terracotta_slab", "clayworks:pink_terracotta_slab",
    "clayworks:purple_terracotta_slab", "clayworks:terracotta_slab", "clayworks:white_terracotta_slab", "clayworks:yellow_terracotta_slab",

    "clayworks:black_terracotta_stairs", "clayworks:brown_terracotta_stairs", "clayworks:cyan_terracotta_stairs", "clayworks:gray_terracotta_stairs",
    "clayworks:green_terracotta_stairs", "clayworks:light_blue_terracotta_stairs", "clayworks:lime_terracotta_stairs", "clayworks:magenta_terracotta_stairs",
    "clayworks:pink_terracotta_stairs", "clayworks:purple_terracotta_stairs", "clayworks:red_terracotta_stairs", "clayworks:terracotta_stairs",
    "clayworks:yellow_terracotta_stairs",

    "clayworks:black_terracotta_wall", "clayworks:blue_terracotta_wall", "clayworks:brown_terracotta_wall", "clayworks:cyan_terracotta_wall",
    "clayworks:green_terracotta_wall", "clayworks:light_blue_terracotta_wall", "clayworks:light_gray_terracotta_wall", "clayworks:lime_terracotta_wall",
    "clayworks:magenta_terracotta_wall", "clayworks:orange_terracotta_wall", "clayworks:pink_terracotta_wall", "clayworks:purple_terracotta_wall",
    "clayworks:red_terracotta_wall", "clayworks:terracotta_wall", "clayworks:white_terracotta_wall", "clayworks:yellow_terracotta_wall",

    "clayworks:blue_decorated_pot", "clayworks:brown_decorated_pot", "clayworks:cyan_decorated_pot", "clayworks:gray_decorated_pot",
    "clayworks:green_decorated_pot", "clayworks:light_gray_decorated_pot", "clayworks:lime_decorated_pot", "clayworks:orange_decorated_pot",
    "clayworks:pink_decorated_pot", "clayworks:purple_decorated_pot", "clayworks:red_decorated_pot", "clayworks:white_decorated_pot",
    "clayworks:yellow_decorated_pot",

    // Connected Glass
    "connectedglass:borderless_glass", "connectedglass:borderless_glass_amber", "connectedglass:borderless_glass_amber_pane", "connectedglass:borderless_glass_aqua", "connectedglass:borderless_glass_aqua_pane",
    "connectedglass:borderless_glass_beige_pane", "connectedglass:borderless_glass_black", "connectedglass:borderless_glass_black_pane", "connectedglass:borderless_glass_blue", "connectedglass:borderless_glass_blue_pane",
    "connectedglass:borderless_glass_brown_pane", "connectedglass:borderless_glass_coral", "connectedglass:borderless_glass_coral_pane", "connectedglass:borderless_glass_cyan", "connectedglass:borderless_glass_cyan_pane",
    "connectedglass:borderless_glass_forest_pane", "connectedglass:borderless_glass_ginger", "connectedglass:borderless_glass_ginger_pane", "connectedglass:borderless_glass_gray", "connectedglass:borderless_glass_gray_pane",
    "connectedglass:borderless_glass_green_pane", "connectedglass:borderless_glass_indigo", "connectedglass:borderless_glass_indigo_pane", "connectedglass:borderless_glass_light_blue", "connectedglass:borderless_glass_light_blue_pane",
    "connectedglass:borderless_glass_light_gray_pane", "connectedglass:borderless_glass_lime", "connectedglass:borderless_glass_lime_pane", "connectedglass:borderless_glass_magenta", "connectedglass:borderless_glass_magenta_pane",
    "connectedglass:borderless_glass_maroon_pane", "connectedglass:borderless_glass_mint", "connectedglass:borderless_glass_mint_pane", "connectedglass:borderless_glass_navy", "connectedglass:borderless_glass_navy_pane",
    "connectedglass:borderless_glass_olive_pane", "connectedglass:borderless_glass_orange", "connectedglass:borderless_glass_orange_pane", "connectedglass:borderless_glass_pane", "connectedglass:borderless_glass_pink",
    "connectedglass:borderless_glass_purple", "connectedglass:borderless_glass_purple_pane", "connectedglass:borderless_glass_red", "connectedglass:borderless_glass_red_pane", "connectedglass:borderless_glass_rose",
    "connectedglass:borderless_glass_slate", "connectedglass:borderless_glass_slate_pane", "connectedglass:borderless_glass_tan", "connectedglass:borderless_glass_tan_pane", "connectedglass:borderless_glass_teal",
    "connectedglass:borderless_glass_verdant", "connectedglass:borderless_glass_verdant_pane", "connectedglass:borderless_glass_white", "connectedglass:borderless_glass_white_pane", "connectedglass:borderless_glass_yellow",
    "connectedglass:clear_glass", "connectedglass:clear_glass_amber", "connectedglass:clear_glass_amber_pane", "connectedglass:clear_glass_aqua", "connectedglass:clear_glass_aqua_pane",
    "connectedglass:clear_glass_beige_pane", "connectedglass:clear_glass_black", "connectedglass:clear_glass_black_pane", "connectedglass:clear_glass_blue", "connectedglass:clear_glass_blue_pane",
    "connectedglass:clear_glass_brown_pane", "connectedglass:clear_glass_coral", "connectedglass:clear_glass_coral_pane", "connectedglass:clear_glass_cyan", "connectedglass:clear_glass_cyan_pane",
    "connectedglass:clear_glass_forest_pane", "connectedglass:clear_glass_ginger", "connectedglass:clear_glass_ginger_pane", "connectedglass:clear_glass_gray", "connectedglass:clear_glass_gray_pane",
    "connectedglass:clear_glass_green_pane", "connectedglass:clear_glass_indigo", "connectedglass:clear_glass_indigo_pane", "connectedglass:clear_glass_light_blue", "connectedglass:clear_glass_light_blue_pane",
    "connectedglass:clear_glass_light_gray_pane", "connectedglass:clear_glass_lime", "connectedglass:clear_glass_lime_pane", "connectedglass:clear_glass_magenta", "connectedglass:clear_glass_magenta_pane",
    "connectedglass:clear_glass_maroon_pane", "connectedglass:clear_glass_mint", "connectedglass:clear_glass_mint_pane", "connectedglass:clear_glass_navy", "connectedglass:clear_glass_navy_pane",
    "connectedglass:clear_glass_olive_pane", "connectedglass:clear_glass_orange", "connectedglass:clear_glass_orange_pane", "connectedglass:clear_glass_pane", "connectedglass:clear_glass_pink",
    "connectedglass:clear_glass_purple", "connectedglass:clear_glass_purple_pane", "connectedglass:clear_glass_red", "connectedglass:clear_glass_red_pane", "connectedglass:clear_glass_rose",
    "connectedglass:clear_glass_slate", "connectedglass:clear_glass_slate_pane", "connectedglass:clear_glass_tan", "connectedglass:clear_glass_tan_pane", "connectedglass:clear_glass_teal",
    "connectedglass:clear_glass_verdant", "connectedglass:clear_glass_verdant_pane", "connectedglass:clear_glass_white", "connectedglass:clear_glass_white_pane", "connectedglass:clear_glass_yellow",
    "connectedglass:scratched_glass", "connectedglass:scratched_glass_amber", "connectedglass:scratched_glass_amber_pane", "connectedglass:scratched_glass_aqua", "connectedglass:scratched_glass_aqua_pane",
    "connectedglass:scratched_glass_beige_pane", "connectedglass:scratched_glass_black", "connectedglass:scratched_glass_black_pane", "connectedglass:scratched_glass_blue", "connectedglass:scratched_glass_blue_pane",
    "connectedglass:scratched_glass_brown_pane", "connectedglass:scratched_glass_coral", "connectedglass:scratched_glass_coral_pane", "connectedglass:scratched_glass_cyan", "connectedglass:scratched_glass_cyan_pane",
    "connectedglass:scratched_glass_forest_pane", "connectedglass:scratched_glass_ginger", "connectedglass:scratched_glass_ginger_pane", "connectedglass:scratched_glass_gray", "connectedglass:scratched_glass_gray_pane",
    "connectedglass:scratched_glass_green_pane", "connectedglass:scratched_glass_indigo", "connectedglass:scratched_glass_indigo_pane", "connectedglass:scratched_glass_light_blue", "connectedglass:scratched_glass_light_blue_pane",
    "connectedglass:scratched_glass_light_gray_pane", "connectedglass:scratched_glass_lime", "connectedglass:scratched_glass_lime_pane", "connectedglass:scratched_glass_magenta", "connectedglass:scratched_glass_magenta_pane",
    "connectedglass:scratched_glass_maroon_pane", "connectedglass:scratched_glass_mint", "connectedglass:scratched_glass_mint_pane", "connectedglass:scratched_glass_navy", "connectedglass:scratched_glass_navy_pane",
    "connectedglass:scratched_glass_olive_pane", "connectedglass:scratched_glass_orange", "connectedglass:scratched_glass_orange_pane", "connectedglass:scratched_glass_pane", "connectedglass:scratched_glass_pink",
    "connectedglass:scratched_glass_purple", "connectedglass:scratched_glass_purple_pane", "connectedglass:scratched_glass_red", "connectedglass:scratched_glass_red_pane", "connectedglass:scratched_glass_rose",
    "connectedglass:scratched_glass_slate", "connectedglass:scratched_glass_slate_pane", "connectedglass:scratched_glass_tan", "connectedglass:scratched_glass_tan_pane", "connectedglass:scratched_glass_teal",
    "connectedglass:scratched_glass_verdant", "connectedglass:scratched_glass_verdant_pane", "connectedglass:scratched_glass_white", "connectedglass:scratched_glass_white_pane", "connectedglass:scratched_glass_yellow",
    "connectedglass:tinted_borderless_glass", "connectedglass:tinted_borderless_glass_amber", "connectedglass:tinted_borderless_glass_aqua", "connectedglass:tinted_borderless_glass_beige", "connectedglass:tinted_borderless_glass_black",
    "connectedglass:tinted_borderless_glass_brown", "connectedglass:tinted_borderless_glass_coral", "connectedglass:tinted_borderless_glass_cyan", "connectedglass:tinted_borderless_glass_forest", "connectedglass:tinted_borderless_glass_ginger",
    "connectedglass:tinted_borderless_glass_green", "connectedglass:tinted_borderless_glass_indigo", "connectedglass:tinted_borderless_glass_light_blue", "connectedglass:tinted_borderless_glass_light_gray", "connectedglass:tinted_borderless_glass_lime",
    "connectedglass:tinted_borderless_glass_maroon", "connectedglass:tinted_borderless_glass_mint", "connectedglass:tinted_borderless_glass_navy", "connectedglass:tinted_borderless_glass_olive", "connectedglass:tinted_borderless_glass_orange",
    "connectedglass:tinted_borderless_glass_purple", "connectedglass:tinted_borderless_glass_red", "connectedglass:tinted_borderless_glass_rose", "connectedglass:tinted_borderless_glass_slate", "connectedglass:tinted_borderless_glass_tan", 
    "connectedglass:tinted_borderless_glass_verdant", "connectedglass:tinted_borderless_glass_white", "connectedglass:tinted_borderless_glass_yellow",

    // Create
    "create:acacia_window", "create:bamboo_window", "create:birch_window", "create:crimson_window", "create:dark_oak_window",
    "create:jungle_window", "create:industrial_iron_window", "create:mangrove_window", "create:oak_window", "create:ornate_iron_window",
    "create:warped_window",

    "create:acacia_window_pane", "create:bamboo_window_pane", "create:birch_window_pane", "create:cherry_window_pane",
    "create:dark_oak_window_pane", "create:oak_window_pane", "create:ornate_iron_window_pane", "create:spruce_window_pane",

    "create:framed_glass", "create:horizontal_framed_glass_pane", "create:tiled_glass", "create:vertical_framed_glass", "create:vertical_framed_glass_pane",

    "create:andesite_bars", "create:brass_bars", "create:copper_bars",

    "create:copper_shingle_stairs", "create:copper_shingles", "create:exposed_copper_shingle_slab", "create:exposed_copper_shingle_stairs",
    "create:oxidized_copper_shingle_slab", "create:oxidized_copper_shingles", "create:waxed_copper_shingle_slab", "create:waxed_copper_shingle_stairs",
    "create:waxed_copper_shingles", "create:waxed_exposed_copper_shingle_slab", "create:waxed_exposed_copper_shingle_stairs", "create:waxed_exposed_copper_shingles",
    "create:waxed_oxidized_copper_shingle_slab", "create:waxed_oxidized_copper_shingle_stairs", "create:waxed_oxidized_copper_shingles",

    "create:copper_tile_slab", "create:copper_tile_stairs", "create:exposed_copper_tile_slab", "create:exposed_copper_tile_stairs",
    "create:exposed_copper_tiles", "create:oxidized_copper_tile_slab", "create:oxidized_copper_tile_stairs", "create:oxidized_copper_tiles",
    "create:waxed_copper_tile_slab", "create:waxed_copper_tiles", "create:waxed_exposed_copper_tile_slab", "create:waxed_exposed_copper_tiles",
    "create:waxed_oxidized_copper_tile_slab", "create:waxed_oxidized_copper_tiles",

    "create:flywheel", "create:placard", "create:metal_girder",

    "create:andesite_casing", "create:brass_casing", "create:industrial_iron_block", "create:railway_casing",
    "create:shadow_steel_casing",

    "create:copycat_panel", "create:copycat_step",

    "create:andesite_pillar", "create:cut_andesite", "create:cut_andesite_brick_slab", "create:cut_andesite_bricks",
    "create:cut_andesite_slab", "create:cut_andesite_brick_wall", "create:cut_andesite_stairs", "create:cut_andesite_wall",
    "create:layered_andesite", "create:polished_cut_andesite", "create:polished_cut_andesite_slab", "create:polished_cut_andesite_wall",
    "create:small_andesite_brick_slab", 

    "create:asurine_pillar", "create:cut_asurine_brick_slab", "create:cut_asurine_brick_stairs", "create:cut_asurine_brick_wall",
    "create:cut_asurine_bricks", "create:cut_asurine_slab", "create:cut_asurine_wall", "create:layered_asurine", "create:polished_cut_asurine",
    "create:polished_cut_asurine_slab", "create:polished_cut_asurine_stairs", "create:polished_cut_asurine_wall",
    "create:small_asurine_brick_slab", "create:small_asurine_brick_stairs", "create:small_asurine_brick_wall",

    "create:calcite_pillar", "create:cut_calcite", "create:cut_calcite_brick_slab", "create:cut_calcite_brick_stairs", "create:cut_calcite_brick_wall",
    "create:cut_calcite_slab", "create:cut_calcite_stairs", "create:cut_calcite_wall", "create:layered_calcite", "create:polished_cut_calcite_slab",
    "create:polished_cut_calcite_stairs", "create:polished_cut_calcite_wall", "create:small_calcite_brick_slab", "create:small_calcite_brick_stairs",
    "create:small_calcite_brick_wall", "create:small_calcite_bricks",

    "create:crimsite", "create:crimsite_pillar", "create:cut_crimsite", "create:cut_crimsite_brick_slab", "create:cut_crimsite_brick_wall",
    "create:cut_crimsite_bricks", "create:cut_crimsite_slab", "create:cut_crimsite_stairs", "create:cut_crimsite_wall", "create:polished_cut_crimsite",
    "create:polished_cut_crimsite_slab", "create:polished_cut_crimsite_wall", "create:small_crimsite_brick_slab", "create:small_crimsite_brick_wall",
    "create:small_crimsite_bricks",

    "create:cut_deepslate_brick_slab", "create:cut_deepslate_brick_stairs", "create:cut_deepslate_brick_wall", "create:cut_deepslate_bricks",
    "create:cut_deepslate_slab", "create:cut_deepslate_wall", "create:deepslate_pillar", "create:layered_deepslate", "create:polished_cut_deepslate",
    "create:polished_cut_deepslate_slab", "create:polished_cut_deepslate_stairs", "create:polished_cut_deepslate_wall", "create:small_deepslate_brick_slab",
    "create:small_deepslate_brick_stairs", "create:small_deepslate_brick_wall",

    "create:cut_diorite", "create:cut_diorite_brick_slab", "create:cut_diorite_brick_stairs", "create:cut_diorite_brick_wall", "create:cut_diorite_slab",
    "create:cut_diorite_stairs", "create:cut_diorite_wall", "create:diorite_pillar", "create:layered_diorite", "create:polished_cut_diorite_slab",
    "create:polished_cut_diorite_stairs", "create:polished_cut_diorite_wall", "create:small_diorite_brick_slab", "create:small_diorite_brick_stairs",
    "create:small_diorite_brick_wall", "create:small_diorite_bricks",

    "create:cut_dripstone", "create:cut_dripstone_brick_slab", "create:cut_dripstone_brick_wall", "create:cut_dripstone_bricks", "create:cut_dripstone_slab",
    "create:cut_dripstone_stairs", "create:cut_dripstone_wall", "create:layered_dripstone", "create:polished_cut_dripstone", "create:polished_cut_dripstone_slab",
    "create:polished_cut_dripstone_wall", "create:small_dripstone_brick_slab", "create:small_dripstone_brick_wall", "create:small_dripstone_bricks",

    "create:cut_granite_brick_slab", "create:cut_granite_brick_stairs", "create:cut_granite_brick_wall", "create:cut_granite_bricks", "create:cut_granite_slab",
    "create:cut_granite_wall", "create:granite_pillar", "create:layered_granite", "create:polished_cut_granite", "create:polished_cut_granite_slab",
    "create:polished_cut_granite_stairs", "create:polished_cut_granite_wall", "create:small_granite_brick_slab", "create:small_granite_brick_stairs",
    "create:small_granite_brick_wall",

    "create:cut_limestone", "create:cut_limestone_brick_slab", "create:cut_limestone_brick_stairs", "create:cut_limestone_brick_wall",
    "create:cut_limestone_slab", "create:cut_limestone_stairs", "create:cut_limestone_wall", "create:layered_limestone",
    "create:limestone", "create:limestone_pillar", "create:polished_cut_limestone_slab", "create:polished_cut_limestone_stairs",
    "create:polished_cut_limestone_wall", "create:small_limestone_brick_slab", "create:small_limestone_brick_stairs", "create:small_limestone_brick_wall",
    "create:small_limestone_bricks",

    "create:cut_ochrum", "create:cut_ochrum_brick_slab", "create:cut_ochrum_brick_wall", "create:cut_ochrum_bricks", "create:cut_ochrum_slab",
    "create:cut_ochrum_stairs", "create:cut_ochrum_wall", "create:ochrum", "create:ochrum_pillar", "create:polished_cut_ochrum",
    "create:polished_cut_ochrum_slab", "create:polished_cut_ochrum_wall", "create:small_ochrum_brick_slab", "create:small_ochrum_brick_wall",
    "create:small_ochrum_bricks",

    "create:cut_scorchia_brick_slab", "create:cut_scorchia_brick_stairs", "create:cut_scorchia_brick_wall", "create:cut_scorchia_bricks", "create:cut_scorchia_slab",
    "create:cut_scorchia_wall", "create:layered_scorchia", "create:polished_cut_scorchia", "create:polished_cut_scorchia_slab", "create:polished_cut_scorchia_stairs",
    "create:polished_cut_scorchia_wall", "create:scorchia", "create:scorchia_pillar", "create:small_scorchia_brick_slab", "create:small_scorchia_brick_stairs",
    "create:small_scorchia_bricks",

    "create:cut_scoria", "create:cut_scoria_brick_slab", "create:cut_scoria_brick_stairs", "create:cut_scoria_brick_wall", "create:cut_scoria_slab",
    "create:cut_scoria_stairs", "create:cut_scoria_wall", "create:layered_scoria", "create:polished_cut_scoria_slab", "create:polished_cut_scoria_stairs",
    "create:polished_cut_scoria_wall", "create:scoria", "create:scoria_pillar", "create:small_scoria_brick_slab", "create:small_scoria_brick_stairs",
    "create:small_scoria_brick_wall", "create:small_scoria_bricks",

    "create:cut_tuff", "create:cut_tuff_brick_slab", "create:cut_tuff_brick_wall", "create:cut_tuff_bricks", "create:cut_tuff_slab", "create:cut_tuff_stairs",
    "create:cut_tuff_wall", "create:layered_tuff", "create:polished_cut_tuff", "create:polished_cut_tuff_slab", "create:polished_cut_tuff_wall",
    "create:small_tuff_brick_stairs", "create:small_tuff_brick_wall", "create:small_tuff_bricks", "create:tuff_pillar",

    "create:cut_veridium_brick_slab", "create:cut_veridium_brick_stairs", "create:cut_veridium_brick_wall", "create:cut_veridium_bricks", "create:cut_veridium_slab",
    "create:cut_veridium_wall", "create:layered_veridium", "create:polished_cut_veridium", "create:polished_cut_veridium_slab", "create:polished_cut_veridium_stairs",
    "create:polished_cut_veridium_wall", "create:small_veridium_brick_slab", "create:small_veridium_brick_stairs", "create:small_veridium_bricks", "create:veridium",

    "create:rose_quartz_tiles", "create:small_rose_quartz_tiles",

    // Other
    "chimes:bamboo_chimes", "chimes:carved_bamboo_chimes", "chimes:copper_chimes", "chimes:glass_bells", "chimes:iron_chimes",

    "exposure:photograph_frame", "exposure:glass_photograph_frame"
    

];

// Blocks which are sources or condensed forms of material
let categoryMaterialBlock = [
    "architects_palette:charcoal_block", "architects_palette:bread_block", "architects_palette:cod_log",
    "architects_palette:cod_scales", "architects_palette:ender_pearl_block", "architects_palette:flint_block",
    "architects_palette:salmon_log", "architects_palette:salmon_scales", "architects_palette:scute_block",
    "architects_palette:spool", "architects_palette:unobtanium_block",

    "autumnity:foul_berry_basket", "autumnity:turkey_egg_crate", "autumnity:snail_shell_block", "autumnity:snail_goo_block",

    "create:bound_cardboard_block", "create:cardboard_block", "create:deepslate_zinc_ore", "create:experience_block",
    "create:raw_zinc_block", "create:rose_quartz_block",
];

// Blocks which serve some function, but not primarily for redstone or crafting
let categoryFunctionalBlock = [
    "another_furniture:acacia_drawer", "another_furniture:bamboo_drawer", "another_furniture:birch_drawer", "another_furniture:cherry_drawer",
    "another_furniture:crimson_drawer", "another_furniture:dark_oak_drawer", "another_furniture:jungle_drawer",
    "another_furniture:mangrove_drawer", "another_furniture:spruce_drawer", "another_furniture:warped_drawer", "another_furniture:oak_drawer",

    "apotheosis:ender_gem_case", "apotheosis:gem_case",

    "apothic_enchanting:beeshelf", "apothic_enchanting:blazing_hellshelf", "apothic_enchanting:crystal_seashelf",
    "apothic_enchanting:deepshelf", "apothic_enchanting:dormant_deepshelf", "apothic_enchanting:draconic_endshelf",
    "apothic_enchanting:echoing_sculkshelf", "apothic_enchanting:endshelf", "apothic_enchanting:geode_shelf",
    "apothic_enchanting:glowing_hellshelf", "apothic_enchanting:heart_seashelf", "apothic_enchanting:infused_hellshelf",
    "apothic_enchanting:melonshelf", "apothic_enchanting:pearl_endshelf", "apothic_enchanting:seashelf",
    "apothic_enchanting:sightshelf", "apothic_enchanting:sightshelf_t2", "apothic_enchanting:soul_touched_deepshelf",
    "apothic_enchanting:soul_touched_sculkshelf", "apothic_enchanting:treasure_shelf", "apothic_enchanting:ender_library",
    "apothic_enchanting:library",

    "architects_palette:twisted_door", "architects_palette:twisted_trapdoor",

    "autumnity:maple_beehive", "autumnity:maple_chest", "autumnity:maple_bookshelf", "autumnity:maple_sign",
    "autumnity:maple_hanging_sign", "autumnity:maple_ladder", "autumnity:maple_fence_gate", "autumnity:maple_trapdoor",

    "backpacked:acacia_backpack_shelf", "backpacked:backpack_dock", "backpacked:cherry_backpack_shelf",
    "backpacked:crimson_backpack_shelf", "backpacked:dark_oak_backpack_shelf", "backpacked:jungle_backpack_shelf",
    "backpacked:oak_backpack_shelf", "backpacked:warped_backpack_shelf",

    "bountiful:bountyboard",

    "buzzier_bees:honeycomb_door", "buzzier_bees:honeycomb_trapdoor",

    "camping:grill", "camping:sleeping_bag_amber", "camping:sleeping_bag_beige", "camping:sleeping_bag_black",
    "camping:sleeping_bag_blue", "camping:sleeping_bag_brown", "camping:sleeping_bag_coral",
    "camping:sleeping_bag_forest", "camping:sleeping_bag_ginger", "camping:sleeping_bag_gray",
    "camping:sleeping_bag_green", "camping:sleeping_bag_indigo", "camping:sleeping_bag_light_gray",
    "camping:sleeping_bag_lime", "camping:sleeping_bag_magenta", "camping:sleeping_bag_maroon",
    "camping:sleeping_bag_mint", "camping:sleeping_bag_olive", "camping:sleeping_bag_orange",
    "camping:sleeping_bag_pink", "camping:sleeping_bag_purple", "camping:sleeping_bag_red",
    "camping:sleeping_bag_slate", "camping:sleeping_bag_tan", "camping:sleeping_bag_teal",
    "camping:sleeping_bag_verdant", "camping:sleeping_bag_white",

    "clayworks:black_stained_glass_door", "clayworks:blue_stained_glass_door", "clayworks:brown_stained_glass_door",
    "clayworks:cyan_stained_glass_door", "clayworks:gray_stained_glass_door", "clayworks:green_stained_glass_door",
    "clayworks:light_blue_stained_glass_door", "clayworks:light_gray_stained_glass_door", "clayworks:lime_stained_glass_door",
    "clayworks:magenta_stained_glass_door", "clayworks:orange_stained_glass_door", "clayworks:pink_stained_glass_door",
    "clayworks:purple_stained_glass_door", "clayworks:white_stained_glass_door", "clayworks:yellow_stained_glass_door",

    "clayworks:black_stained_glass_trapdoor", "clayworks:brown_stained_glass_trapdoor", "clayworks:cyan_stained_glass_trapdoor",
    "clayworks:glass_trapdoor", "clayworks:gray_stained_glass_trapdoor", "clayworks:green_stained_glass_trapdoor",
    "clayworks:light_blue_stained_glass_trapdoor", "clayworks:lime_stained_glass_trapdoor", "clayworks:magenta_stained_glass_trapdoor",
    "clayworks:pink_stained_glass_trapdoor", "clayworks:purple_stained_glass_trapdoor", "clayworks:red_stained_glass_trapdoor",
    "clayworks:yellow_stained_glass_trapdoor", 

    "create:adjustable_chain_gearshift", "create:andesite_encased_cogwheel", "create:andesite_encased_large_cogwheel",
    "create:andesite_funnel", "create:blaze_burner", "create:crushing_wheel", "create:cuckoo_clock",
    "create:brass_encased_cogwheel", "create:brass_encased_large_cogwheel", "create:brass_encased_shaft",
    "create:brass_tunnel", "create:cart_assembler", "create:chain_conveyor", "create:clockwork_bearing",
    "create:clutch", "create:cogwheel", "create:contraption_controls", "create:controller_rail", "create:controls",
    "create:deployer", "create:display_board", "create:display_link", "create:elevator_pulley", "create:empty_blaze_burner",
    "create:encased_fan", "create:fluid_tank", "create:fluid_valve", "create:fluid_pipe", "create:factory_gauge",
    "create:gantry_carriage", "create:gantry_shaft", "create:gearbox", "create:hand_crank", "create:haunted_bell",
    "create:hose_pulley", "create:item_drain", "create:item_hatch", "create:item_vault", "create:large_cogwheel",
    "create:large_water_wheel", "create:linear_chassis", "create:mechanical_bearing", "create:mechanical_crafter",
    "create:mechanical_drill", "create:mechanical_harvester", "create:mechanical_plough", "create:mechanical_press",
    "create:mechanical_pump", "create:mechanical_roller", "create:mechanical_saw", "create:millstone",
    "create:nixie_tube", "create:mysterious_cuckoo_clock", "create:peculiar_bell", "create:packager",
    "create:piston_extension_pole", "create:portable_fluid_interface", "create:portable_storage_interface",
    "create:repackager", "create:rope_pulley", "create:sail_frame", "create:schematicannon",
    "create:sequenced_gearshift", "create:shaft", "create:smart_chute", "create:smart_fluid_pipe", "create:speedometer",
    "create:spout", "create:steam_engine", "create:steam_whistle", "create:sticker", "create:sticky_mechanical_piston",
    "create:stock_ticker", "create:stressometer", "create:track", "create:track_signal", "create:track_station",
    "create:turntable", "create:vertical_gearbox", "create:water_wheel",

    "create:andesite_door", "create:brass_door", "create:brass_ladder", "create:andesite_ladder", "create:copper_ladder",
    "create:copper_door", "create:andesite_scaffolding", "create:brass_scaffolding", "create:copper_scaffolding",
    "create:framed_glass_door", "create:framed_glass_trapdoor", "create:train_door",

    "create:aqua_seat", "create:beige_seat", "create:black_seat", "create:brown_seat", "create:coral_seat", "create:cyan_seat",
    "create:ginger_seat", "create:gray_seat", "create:green_seat", "create:light_gray_seat", "create:lime_seat",
    "create:magenta_seat", "create:maroon_seat", "create:orange_seat", "create:pink_seat", "create:purple_seat",
    "create:red_seat", "create:rose_seat", "create:slate_seat", "create:tan_seat", "create:teal_seat", "create:verdant_seat",

    "create:amber_postbox", "create:aqua_postbox", "create:beige_postbox", "create:black_postbox", "create:blue_postbox",
    "create:brown_postbox", "create:coral_postbox", "create:cyan_postbox", "create:forest_postbox", "create:ginger_postbox",
    "create:gray_postbox", "create:green_postbox", "create:indigo_postbox", "create:light_blue_postbox",
    "create:light_gray_postbox", "create:lime_postbox", "create:maroon_postbox", "create:mint_postbox",
    "create:navy_postbox", "create:olive_postbox", "create:orange_postbox", "create:pink_postbox", "create:purple_postbox",
    "create:red_postbox", "create:rose_postbox", "create:tan_postbox", 

    "create:amber_toolbox", "create:aqua_toolbox", "create:beige_toolbox", "create:blue_toolbox", "create:coral_toolbox",
    "create:cyan_toolbox", "create:forest_toolbox", "create:ginger_toolbox", "create:green_toolbox", "create:indigo_toolbox",
    "create:light_blue_toolbox", "create:light_gray_toolbox", "create:magenta_toolbox", "create:maroon_toolbox",
    "create:mint_toolbox", "create:navy_toolbox", "create:olive_toolbox", "create:orange_toolbox", "create:purple_toolbox",
    "create:rose_toolbox", "create:slate_toolbox", "create:tan_toolbox", "create:teal_toolbox", "create:verdant_toolbox",

    "create:amber_table_cloth", "create:andesite_table_cloth", "create:aqua_table_cloth", "create:beige_table_cloth",
    "create:black_table_cloth", "create:blue_table_cloth", "create:brass_table_cloth", "create:brown_table_cloth",
    "create:copper_table_cloth", "create:cyan_table_cloth", "create:forest_table_cloth", "create:ginger_table_cloth",
    "create:gray_table_cloth", "create:green_table_cloth", "create:indigo_table_cloth", "create:light_blue_table_cloth",
    "create:lime_table_cloth", "create:magenta_table_cloth", "create:maroon_table_cloth", "create:mint_table_cloth",
    "create:navy_table_cloth", "create:olive_table_cloth", "create:pink_table_cloth", "create:purple_table_cloth",
    "create:red_table_cloth", "create:rose_table_cloth", "create:slate_table_cloth", "create:tan_table_cloth",
    "create:teal_table_cloth", "create:verdant_table_cloth",

    "create:amber_valve_handle", "create:aqua_valve_handle", "create:beige_valve_handle", "create:black_valve_handle",
    "create:blue_valve_handle", "create:brown_valve_handle", "create:copper_valve_handle", "create:coral_valve_handle",
    "create:forest_valve_handle", "create:ginger_valve_handle", "create:gray_valve_handle", "create:indigo_valve_handle",
    "create:light_blue_valve_handle", "create:light_gray_valve_handle", "create:lime_valve_handle", "create:magenta_valve_handle",
    "create:maroon_valve_handle", "create:mint_valve_handle", "create:navy_valve_handle", "create:olive_valve_handle",
    "create:orange_valve_handle", "create:pink_valve_handle", "create: purple_valve_handle", "create:red_valve_handle",
    "create:rose_valve_handle", "create:slate_valve_handle", "create:tan_valve_handle", "create:teal_valve_handle",
    "create:verdant_valve_handle",
];

// Blocks which primarily have redstone functionality
let categoryRedstoneBlock = [
    "another_furniture:service_bell",

    "architects_palette:twisted_button", "architects_palette:twisted_pressure_plate",

    "autumnity:maple_button", "autumnity:maple_pressure_plate",

    "create:analog_lever", "create:desk_bell", "create:elevator_contact", "create:powered_latch",
    "create:pulse_extender", "create:pulse_repeater", "create:redstone_contact", "create:redstone_link",
    "create:redstone_requester", "create:stockpile_switch", "create:track_observer",
];

// Blocks which are used from crafting or processing
let categoryCraftingStation = [
    "apotheosis:augmenting_table", "apotheosis:salvaging_table", "apotheosis:reforging_table", "apotheosis:simple_reforging_table",
    
    "ancientreforging:ancient_reforging_table",

    "clayworks:kiln",

    "exposure:lightroom"
];


ServerEvents.tags("item", event => {
    
    for (let i in categoryUnused) {
        event.add("insurgence:category/unused", categoryUnused[i]);
    }

    for (let i in categoryCreativeMode) {
        event.add("insurgence:category/creative_mode", categoryCreativeMode[i]);
    }

    for (let i in categoryGuideBook) {
        event.add("insurgence:category/guide_book", categoryGuideBook[i]);
    }

    for (let i in categoryUnlockItem) {
        event.add("insurgence:category/unlock_item", categoryUnlockItem[i]);
    }

    for (let i in categoryCollectable) {
        event.add("insurgence:category/collectable", categoryCollectable[i]);
    }

    for (let i in categoryMaterial) {
        event.add("insurgence:category/material", categoryMaterial[i]);
    }

    for (let i in categoryTool) {
        event.add("insurgence:category/tool", categoryTool[i]);
    }

    for (let i in categoryAmmo) {
        event.add("insurgence:category/ammo", categoryAmmo[i]);
    }

    for (let i in categoryPlant) {
        event.add("insurgence:category/plant", categoryPlant[i]);
    }

    for (let i in categoryCrop) {
        event.add("insurgence:category/crop", categoryCrop[i]);
    }

    for (let i in categoryConsumable) {
        event.add("insurgence:category/consumable", categoryConsumable[i]);
    }

    for (let i in categoryCosmeticItem) {
        event.add("insurgence:category/cosmetic", categoryCosmeticItem[i]);
    }

    for (let i in categoryNaturalBlock) {
        event.add("insurgence:category/natural_block", categoryNaturalBlock[i]);
    }

    for (let i in categoryDecorativeBlock) {
        event.add("insurgence:category/decorative_block", categoryDecorativeBlock[i]);
    }

    for (let i in categoryMaterialBlock) {
        event.add("insurgence:category/material_block", categoryMaterialBlock[i]);
    }

    for (let i in categoryFunctionalBlock) {
        event.add("insurgence:category/functional_block", categoryFunctionalBlock[i]);
    }

    for (let i in categoryRedstoneBlock) {
        event.add("insurgence:category/redstone_block", categoryRedstoneBlock[i]);
    }

    for (let i in categoryCraftingStation) {
        event.add("insurgence:category/crafting_station", categoryCraftingStation[i]);
    }
});