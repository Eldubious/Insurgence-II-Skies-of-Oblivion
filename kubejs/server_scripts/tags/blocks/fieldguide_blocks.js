const materialBlocks = [
    "minecraft:coal_block", "minecraft:coal_ore", "minecraft:deepslate_coal_ore",
    "minecraft:iron_block", "minecraft:iron_ore", "minecraft:deepslate_iron_ore", "minecraft:raw_iron_block",
    "minecraft:copper_block", "minecraft:exposed_copper", "minecraft:weathered_copper", "minecraft:oxidized_copper",
    "minecraft:copper_ore", "minecraft:deepslate_copper_ore", "minecraft:raw_copper_block",
    "minecraft:gold_block", "minecraft:gold_ore", "minecraft:deepslate_gold_ore", "minecraft:nether_gold_ore", "minecraft:raw_gold_block",
    "minecraft:diamond_block", "minecraft:diamond_ore", "minecraft:deepslate_diamond_ore",
    "minecraft:emerald_block", "minecraft:emerald_ore", "minecraft:deepslate_emerald_ore",
    "minecraft:lapis_block", "minecraft:lapis_ore", "minecraft:deepslate_lapis_ore",
    "minecraft:redstone_block", "minecraft:redstone_ore", "minecraft:deepslate_redstone_ore",
    "minecraft:netherite_block", "minecraft:ancient_debris", "minecraft:glowstone",
    "minecraft:amethyst_block", "minecraft:budding_amethyst", "minecraft:amethyst_cluster",
    "minecraft:small_amethyst_bud", "minecraft:medium_amethyst_bud", "minecraft:large_amethyst_bud",
    "minecraft:quartz_block", "minecraft:nether_quartz_ore", "minecraft:resin_block", "minecraft:resin_clump",
    "minecraft:sculk", "minecraft:sculk_vein", "minecraft:sculk_catalyst", "supplementaries:flint_block",
    "minecraft:prismarine", "minecraft:tube_coral_block", "minecraft:tube_coral", "minecraft:tube_coral_fan", "minecraft:tube_coral_wall_fan",
    "minecraft:dead_tube_coral_block", "minecraft:dead_tube_coral", "minecraft:dead_tube_coral_fan", "minecraft:dead_tube_coral_wall_fan",
    "minecraft:brain_coral_block", "minecraft:brain_coral", "minecraft:brain_coral_fan", "minecraft:brain_coral_wall_fan", "minecraft:dead_brain_coral_block",
    "minecraft:dead_brain_coral", "minecraft:dead_brain_coral_fan", "minecraft:dead_brain_coral_wall_fan", "minecraft:bubble_coral_block",
    "minecraft:bubble_coral", "minecraft:bubble_coral_fan", "minecraft:bubble_coral_wall_fan", "minecraft:dead_bubble_coral_block",
    "minecraft:dead_bubble_coral", "minecraft:dead_bubble_coral_fan", "minecraft:dead_bubble_coral_wall_fan",
    "minecraft:fire_coral_block", "minecraft:fire_coral", "minecraft:fire_coral_fan", "minecraft:fire_coral_wall_fan",
    "minecraft:dead_fire_coral_block", "minecraft:dead_fire_coral", "minecraft:dead_fire_coral_fan", "minecraft:dead_fire_coral_wall_fan",
    "minecraft:horn_coral_block", "minecraft:horn_coral", "minecraft:horn_coral_fan", "minecraft:horn_coral_wall_fan",
    "minecraft:dead_horn_coral_block", "minecraft:dead_horn_coral", "minecraft:dead_horn_coral_fan", "minecraft:dead_horn_coral_wall_fan",
    "upgrade_aquatic:acan_coral_block", "upgrade_aquatic:acan_coral", "upgrade_aquatic:acan_coral_fan", "upgrade_aquatic:acan_coral_wall_fan",
    "upgrade_aquatic:dead_acan_coral_block", "upgrade_aquatic:dead_acan_coral", "upgrade_aquatic:dead_acan_coral_fan", "upgrade_aquatic:dead_acan_coral_wall_fan",
    "upgrade_aquatic:finger_coral_block", "upgrade_aquatic:finger_coral", "upgrade_aquatic:finger_coral_fan", "upgrade_aquatic:finger_coral_wall_fan",
    "upgrade_aquatic:dead_finger_coral_block", "upgrade_aquatic:dead_finger_coral", "upgrade_aquatic:dead_finger_coral_fan", "upgrade_aquatic:dead_finger_coral_wall_fan",
    "upgrade_aquatic:star_coral_block", "upgrade_aquatic:star_coral", "upgrade_aquatic:star_coral_fan", "upgrade_aquatic:star_coral_wall_fan",
    "upgrade_aquatic:dead_star_coral_block", "upgrade_aquatic:dead_star_coral", "upgrade_aquatic:dead_star_coral_fan", "upgrade_aquatic:dead_star_coral_wall_fan",
    "upgrade_aquatic:moss_coral_block", "upgrade_aquatic:moss_coral", "upgrade_aquatic:moss_coral_fan", "upgrade_aquatic:moss_coral_wall_fan",
    "upgrade_aquatic:dead_moss_coral_block", "upgrade_aquatic:dead_moss_coral", "upgrade_aquatic:dead_moss_coral_fan", "upgrade_aquatic:dead_moss_coral_wall_fan",
    "upgrade_aquatic:petal_coral_block", "upgrade_aquatic:petal_coral", "upgrade_aquatic:petal_coral_fan", "upgrade_aquatic:petal_coral_wall_fan",
    "upgrade_aquatic:dead_petal_coral_block", "upgrade_aquatic:dead_petal_coral", "upgrade_aquatic:dead_petal_coral_fan", "upgrade_aquatic:dead_petal_coral_wall_fan",
    "upgrade_aquatic:branch_coral_block", "upgrade_aquatic:branch_coral", "upgrade_aquatic:branch_coral_fan", "upgrade_aquatic:branch_coral_wall_fan",
    "upgrade_aquatic:dead_branch_coral_block", "upgrade_aquatic:dead_branch_coral", "upgrade_aquatic:dead_branch_coral_fan", "upgrade_aquatic:dead_branch_coral_wall_fan",
    "upgrade_aquatic:rock_coral_block", "upgrade_aquatic:rock_coral", "upgrade_aquatic:rock_coral_fan", "upgrade_aquatic:rock_coral_wall_fan",
    "upgrade_aquatic:dead_rock_coral_block", "upgrade_aquatic:dead_rock_coral", "upgrade_aquatic:dead_rock_coral_fan", "upgrade_aquatic:dead_rock_coral_wall_fan",
    "upgrade_aquatic:pillow_coral_block", "upgrade_aquatic:pillow_coral", "upgrade_aquatic:pillow_coral_fan", "upgrade_aquatic:pillow_coral_wall_fan",
    "upgrade_aquatic:dead_pillow_coral_block", "upgrade_aquatic:dead_pillow_coral", "upgrade_aquatic:dead_pillow_coral_fan", "upgrade_aquatic:dead_pillow_coral_wall_fan",
    "upgrade_aquatic:silk_coral_block", "upgrade_aquatic:silk_coral", "upgrade_aquatic:silk_coral_fan", "upgrade_aquatic:silk_coral_wall_fan",
    "upgrade_aquatic:dead_silk_coral_block", "upgrade_aquatic:dead_silk_coral", "upgrade_aquatic:dead_silk_coral_fan", "upgrade_aquatic:dead_silk_coral_wall_fan",
    "upgrade_aquatic:chrome_coral_block", "upgrade_aquatic:chrome_coral", "upgrade_aquatic:chrome_coral_fan", "upgrade_aquatic:chrome_coral_wall_fan",
    "upgrade_aquatic:dead_chrome_coral_block", "upgrade_aquatic:dead_chrome_coral", "upgrade_aquatic:dead_chrome_coral_fan", "upgrade_aquatic:dead_chrome_coral_wall_fan",
    "upgrade_aquatic:prismarine_coral_block", "upgrade_aquatic:prismarine_coral", "upgrade_aquatic:prismarine_coral_fan", "upgrade_aquatic:prismarine_coral_wall_fan",
    "upgrade_aquatic:elder_prismarine_coral_block", "upgrade_aquatic:elder_prismarine_coral", "upgrade_aquatic:elder_prismarine_coral_fan", "upgrade_aquatic:elder_prismarine_coral_wall_fan",
    "upgrade_aquatic:prismarine_coral_shower", "upgrade_aquatic:elder_prismarine_coral_shower",
    "oreganized:lead_block", "oreganized:lead_ore", "oreganized:deepslate_lead_ore", "oreganized:raw_lead_block",
    "oreganized:silver_block", "oreganized:silver_ore", "oreganized:deepslate_silver_ore", "oreganized:raw_silver_block",
    "oreganized:electrum_block", "pigsteel:porkslag", "pigsteel:pigsteel_chunk_block",
    "productivemetalworks:meat_block", "architects_palette:entrails",
    "architects_palette:charcoal_block", "architects_palette:sunmetal_block", "architects_palette:nether_brass_block",
    "architects_palette:unobtanium_block", "architects_palette:oracle_block", "architects_palette:cerebral_block",
    "architects_palette:heliodor_rod", "architects_palette:monazite_rod", "architects_palette:ekanite_rod", "architects_palette:entwine_block",
    "enderscape:nebulite_block", "enderscape:nebulite_ore", "enderscape:mirestone_nebulite_ore",
    "enderscape:shadoline_block", "enderscape:shadoline_ore", "enderscape:mirestone_shadoline_ore", "enderscape:raw_shadoline_block",
    "create:zinc_block", "create:zinc_ore", "create:deepslate_zinc_ore", "create:raw_zinc_block",
    "create:andesite_alloy_block", "create:rose_quartz_block", "create:experience_block", "create:brass_block",
    "iss_magicfromtheeast:jade_ore", "iss_magicfromtheeast:deepslate_jade_ore", "iss_magicfromtheeast:jade_block",
    "iss_magicfromtheeast:refined_jade_block", "irons_spellbooks:mithril_ore", "irons_spellbooks:deepslate_mithril_ore",
    "psi:psidust_block", "psi:psimetal_block", "psi:psigem_block", "psi:ebony_psimetal_block", "psi:ivory_psimetal_block",
    "malum:block_of_arcane_charcoal", "malum:block_of_soulstone", "malum:soulstone_ore", "malum:deepslate_soulstone_ore",
    "malum:block_of_raw_soulstone", "malum:block_of_brilliance", "malum:brilliant_stone", "malum:brilliant_deepslate",
    "malum:blazing_quartz_ore", "malum:block_of_blazing_quartz", "malum:natural_quartz_ore", "malum:deepslate_quartz_ore",
    "malum:block_of_cthonic_gold", "malum:cthonic_gold_ore", "malum:block_of_soul_stained_steel", "malum:block_of_hallowed_gold",
    "eternal_starlight:starcore_block", "eternal_starlight:grimstone_starcore_ore", "eternal_starlight:voidstone_starcore_ore",
    "eternal_starlight:eternal_ice_starcore_ore", "eternal_starlight:haze_ice_starcore_ore", "eternal_starlight:red_starlight_crystal_block",
    "eternal_starlight:blue_starlight_crystal_block", "eternal_starlight:red_starlight_crystal_cluster",
    "eternal_starlight:blue_starlight_crystal_cluster", "eternal_starlight:blooming_red_starlight_crystal_cluster",
    "eternal_starlight:blooming_blue_starlight_crystal_cluster", "eternal_starlight:aethersent_block", "eternal_starlight:raw_aethersent_block",
    "eternal_starlight:grimstone_redstone_ore", "eternal_starlight:voidstone_redstone_ore", "eternal_starlight:eternal_ice_redstone_ore",
    "eternal_starlight:haze_ice_redstone_ore", "eternal_starlight:thermal_springstone", "eternal_starlight:glacite", "eternal_starlight:glacite_block",
    "eternal_starlight:deepsilver_block", "eternal_starlight:raw_deepsilver_block", "eternal_starlight:grimstone_deepsilver_ore",
    "eternal_starlight:voidstone_deepsilver_ore", "eternal_starlight:eternal_ice_deepsilver_ore",
    "eternal_starlight:haze_ice_deepsilver_ore", "eternal_starlight:nightfall_mud_deepsilver_ore",
    "eternal_starlight:packed_nightfall_mud_deepsilver_ore", "eternal_starlight:unrealium_block", "eternal_starlight:starlit_diamond_block",
    "eternal_starlight:grimstone_starlit_diamond_ore", "eternal_starlight:voidstone_starlit_diamond_ore",
    "eternal_starlight:eternal_ice_starlit_diamond_ore", "eternal_starlight:haze_ice_starlit_diamond_ore",
    "eternal_starlight:malarite_block", "eternal_starlight:grimstone_malarite_ore", "eternal_starlight:voidstone_malarite_ore",
    "eternal_starlight:nightfall_mud_malarite_ore", "eternal_starlight:packed_nightfall_mud_malarite_ore",
    "eternal_starlight:flowglaze", "eternal_starlight:raw_flowglaze", "eternal_starlight:saltpeter_block",
    "eternal_starlight:grimstone_saltpeter_ore", "eternal_starlight:voidstone_saltpeter_ore", "eternal_starlight:eternal_ice_saltpeter_ore",
    "eternal_starlight:haze_ice_saltpeter_ore", "eternal_starlight:raw_amaramber_block", "eternal_starlight:thioquartz_block",
    "eternal_starlight:budding_thioquartz", "eternal_starlight:thioquartz_cluster", "eternal_starlight:golem_steel_block", "eternal_starlight:oxidized_golem_steel_block"
];
const workstationBlocks = [
    "minecraft:crafting_table", "minecraft:furnace", "quark:deepslate_furnace", "quark:blackstone_furnace",
    "minecraft:smoker", "minecraft:blast_furnace"
];

// Add blocks as field guide entries by tag
ServerEvents.tags("block", event => {
    
    for (let i in materialBlocks) {
        let mat = materialBlocks[i];
        event.add("insurgence:fieldguide/material", mat);
    }
    
    for (let i in workstationBlocks) {
        let workstation = workstationBlocks[i];
        event.add("insurgence:fieldguide/workstation", workstation);
    }
})
