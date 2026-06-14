// Categorize every item in the game into distinct categories.
// "unique" and "crafted" items are an extension of this and thus excluded from the categorization.
// Used mainly for tooltips.

// Items which are unused in this modpack
let categoryUnused = [
    "apothic_enchanting:boots_tome", "apothic_enchanting:chestplate_tome", "apothic_enchanting:extraction_tome",
    "apothic_enchanting:fishing_tome", "apothic_enchanting:helmet_tome", "apothic_enchanting:improved_scrap_tome",
    "apothic_enchanting:leggings_tome", "apothic_enchanting:other_tome", "apothic_enchanting:pickaxe_tome",
    "apothic_enchanting:weapon_tome",
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

// Items which are used as unlocks for content (loot, recipes, etc.)
let categoryUnlockItem = [
    "backpacked:unlock_token",

    "bountiful:decree",
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
    "apotheosis:diamond_upgrade_smithing_template", "apotheosis:gold_upgrade_smithing_template",
    "apotheosis:iron_upgrade_smithing_template", "apotheosis:sigil_of_malice", "apotheosis:sigil_of_rebirth",
    "apotheosis:sigil_of_socketing", "apotheosis:sigil_of_supremacy", "apotheosis:sigil_of_unnaming",
    "apothic_enchanting:prismatic_web",
    
    "apotheosis:epic_material", "apotheosis:gem", "apotheosis:gem_dust", "apotheosis:gem_fused_slate",
    "apotheosis:mythic_material", "apotheosis:rare_material", "apotheosis:uncommon_material",
    "apothic_enchanting:inert_trident", "apothic_enchanting:infused_breath", "apothic_enchanting:warden_tendril",

    "architects_palette:algal_blend", "architects_palette:algal_brick", "architects_palette:entwine_rod",
    "architects_palette:nether_brass_ingot", "architects_palette:oracle_jelly", "architects_palette:sunmetal_brick",
    "architects_palette:sunmetal_blend", "architects_palette:unobtanium", "architects_palette:wardstone_blend",
    "architects_palette:withered_bone",

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

    "exposure:black_and_white_film", "exposure:color_film", "exposure:high_sensitivity_black_and_white_film",
    "exposure:high_sensitivity_color_film", "exposure_polaroid:instant_black_and_white_slide",
    "exposure_polaroid:instant_color_slide", "exposure_polaroid:high_sensitivity_instant_black_and_white_slide",
    "exposure_polaroid:high_sensitivity_instant_color_slide"
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

    "architects_palette:cerebral_block", "architects_palette:cerebral_pillar", "architects_palette:cerebral_plate",
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

    // Other
    "exposure:photograph_frame", "exposure:glass_photograph_frame"

];

// Blocks which are sources or condensed forms of material
let categoryMaterialBlock = [
    "architects_palette:charcoal_block", "architects_palette:bread_block", "architects_palette:cod_log",
    "architects_palette:cod_scales", "architects_palette:ender_pearl_block", "architects_palette:flint_block",
    "architects_palette:salmon_log", "architects_palette:salmon_scales", "architects_palette:scute_block",
    "architects_palette:spool", "architects_palette:unobtanium_block",

    "autumnity:foul_berry_basket", "autumnity:turkey_egg_crate", "autumnity:snail_shell_block", "autumnity:snail_goo_block",
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
];

// Blocks which primarily have redstone functionality
let categoryRedstoneBlock = [
    "another_furniture:service_bell",

    "architects_palette:twisted_button", "architects_palette:twisted_pressure_plate",

    "autumnity:maple_button", "autumnity:maple_pressure_plate",
];

// Blocks which are used from crafting or processing
let categoryCraftingStation = [
    "apotheosis:augmenting_table", "apotheosis:salvaging_table", "apotheosis:reforging_table", "apotheosis:simple_reforging_table",

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