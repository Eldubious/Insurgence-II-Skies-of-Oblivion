// Create item tags
ServerEvents.tags('item', event => {

    function uniqueItemTags(itemType, itemName) {
        event.add('insurgence:unique_item', itemName)
        event.add(`insurgence:unique_item/${itemType}`, itemName)
    }

    let uniqueSwords = [ 
        'minecraft:stone_sword', 'minecraft:iron_sword', 'minecraft:golden_sword', 'minecraft:diamond_sword',
        'minecraft:netherite_sword', 'irons_spellbooks:magehunter', 'irons_spellbooks:spellbreaker', 'irons_spellbooks:amethyst_rapier',
        'irons_spellbooks:boreal_blade', 'irons_spellbooks:keeper_flamberge', 'irons_spellbooks:legionnaire_flamberge',
        'iss_magicfromtheeast:taiji_sword', 'iss_magicfromtheeast:soul_breaker', 'iss_magicfromtheeast:muramasa',
        'iss_magicfromtheeast:soul_katana', 'irons_spellbooks:misery', 'oreganized:electrum_sword',
        'endermanoverhaul:corrupted_blade', 'reliquary:mercy_cross'
    ];
    for (let i in uniqueSwords) uniqueItemTags('sword', uniqueSwords[i]);

    let uniqueScythes = [
        'irons_spellbooks:decrepit_scythe', 'irons_spellbooks:hellrazor'
    ];
    for (let i in uniqueScythes) uniqueItemTags('scythe', uniqueScythes[i]);

    let uniqueTridents = [
        'minecraft:trident'
    ];
    for (let i in uniqueTridents) uniqueItemTags('trident', uniqueTridents[i]);

    let uniquePolearms = [
        'iss_magicfromtheeast:jade_guandao', 'irons_spellbooks:twilight_gale'
    ];
    for (let i in uniquePolearms) uniqueItemTags('polearm', uniquePolearms[i]);

    let uniqueMaces = [
        'minecraft:mace'
    ];
    for (let i in uniqueMaces) uniqueItemTags('mace', uniqueMaces[i]);

    let uniqueBoomerangs = [
        'quark:pickarang', 'quark:flamerang'
    ];
    for (let i in uniqueBoomerangs) uniqueItemTags('boomerang', uniqueBoomerangs[i]);

    let uniqueClubs = [
        'wan_ancient_beasts:ancient_club', 'iss_magicfromtheeast:spirit_crusher'
    ];
    for (let i in uniqueClubs) uniqueItemTags('club', uniqueClubs[i]);

    let uniqueKnives = [
        'farmersdelight:iron_knife', 'farmersdelight:golden_knife', 'farmersdelight:diamond_knife',
        'farmersdelight:netherite_knife', 'oreganized:electrum_knife'
    ];
    for (let i in uniqueKnives) uniqueItemTags('knife', uniqueKnives[i]);

    let uniqueAxes = [ 
      'minecraft:stone_axe', 'minecraft:iron_axe', 'minecraft:golden_axe', 'minecraft:diamond_axe',
      'minecraft:netherite_axe', 'oreganized:electrum_axe'
    ];
    for (let i in uniqueAxes) uniqueItemTags('axe', uniqueAxes[i]);

    let uniquePickaxes = [ 
        'minecraft:stone_pickaxe', 'minecraft:iron_pickaxe', 'minecraft:golden_pickaxe', 'minecraft:diamond_pickaxe',
        'minecraft:netherite_pickaxe', 'oreganized:electrum_pickaxe'
    ];
    for (let i in uniquePickaxes) uniqueItemTags('pickaxe', uniquePickaxes[i]);

    let uniqueShovels = [ 
        'minecraft:stone_shovel', 'minecraft:iron_shovel', 'minecraft:golden_shovel', 'minecraft:diamond_shovel',
        'minecraft:netherite_shovel', 'oreganized:electrum_shovel'
    ];
    for (let i in uniqueShovels) uniqueItemTags('shovel', uniqueShovels[i]);

    let uniqueHoes = [ 
        'minecraft:stone_hoe', 'minecraft:iron_hoe', 'minecraft:golden_hoe', 'minecraft:diamond_hoe',
        'minecraft:netherite_hoe', 'oreganized:electrum_hoe'
    ];
    for (let i in uniqueHoes) uniqueItemTags('hoe', uniqueHoes[i]);

    let uniqueBows = [
        'minecraft:bow', 'iss_magicfromtheeast:soulpiercer', 'enderzoology:hunting_bow',
        'tide:starlight_bow'
    ];
    for (let i in uniqueBows) uniqueItemTags('bow', uniqueBows[i]);

    let uniqueCrossbows = [
        'minecraft:crossbow', 'irons_spellbooks:autoloader_crossbow',
        'iss_magicfromtheeast:repeating_crossbow'
    ];
    for (let i in uniqueCrossbows) uniqueItemTags('crossbow', uniqueCrossbows[i]);

    let uniqueSlingshots = [

    ];
    for (let i in uniqueSlingshots) uniqueItemTags('slingshot', uniqueSlingshots[i]);

    let uniqueStaves = [
        'irons_spellbooks:blood_staff', 'irons_spellbooks:graybeard_staff', 'irons_spellbooks:ice_staff',
        'irons_spellbooks:artificer_cane', 'irons_spellbooks:lightning_rod', 'irons_spellbooks:pyrium_staff'
    ];
    for (let i in uniqueStaves) uniqueItemTags('staff', uniqueStaves[i]);

    let uniqueWands = [
        'irons_spellbooks:hither_thither_wand', 'minecraft:debug_stick', 'relics:chorus_staff'
    ];
    for (let i in uniqueWands) uniqueItemTags('wand', uniqueWands[i]);

    let uniqueInstruments = [
        'tunes_n_tomes:bard_harp'
    ];
    for (let i in uniqueInstruments) uniqueItemTags('instrument', uniqueInstruments[i]);

    let uniqueHelmets = [
        'minecraft:leather_helmet', 'minecraft:chainmail_helmet', 'minecraft:iron_helmet',
        'minecraft:golden_helmet', 'minecraft:diamond_helmet', 'minecraft:netherite_helmet', 'minecraft:turtle_helmet',
        'goated:barbaric_helmet', 'nirvana:deerstalker', 'irons_spellbooks:wandering_magician_helmet',
        'irons_spellbooks:pumpkin_helmet', 'irons_spellbooks:pyromancer_helmet', 'irons_spellbooks:electromancer_helmet',
        'irons_spellbooks:netherite_mage_helmet', 'irons_spellbooks:wizard_helmet', 'irons_spellbooks:plagued_helmet',
        'irons_spellbooks:priest_helmet', 'irons_spellbooks:shadowwalker_helmet', 'irons_spellbooks:cryomancer_helmet',
        'irons_spellbooks:cultist_helmet', 'irons_spellbooks:archevoker_helmet', 'irons_spellbooks:tarnished_helmet',
        'galosphere:sterling_helmet', 'friendsandfoes:wildfire_crown', 'iss_magicfromtheeast:taoist_helmet',
        'iss_magicfromtheeast:jade_pagoda_helmet', 'iss_magicfromtheeast:onmyoji_helmet', 'iss_magicfromtheeast:jiangshi_hat',
        'quark:forgotten_hat', 'oreganized:electrum_helmet', 'tunes_n_tomes:bard_helmet'
    ];
    for (let i in uniqueHelmets) uniqueItemTags('helmet', uniqueHelmets[i]);

    let uniqueChestplates = [
      'irons_spellbooks:pumpkin_chestplate', 'irons_spellbooks:wandering_magician_chestplate',
        'galosphere:sterling_chestplate', 'minecraft:netherite_chestplate', 'minecraft:diamond_chestplate',
        'minecraft:golden_chestplate', 'minecraft:iron_chestplate', 'minecraft:chainmail_chestplate',
        'minecraft:leather_chestplate', 'irons_spellbooks:paladin_chestplate', 'irons_spellbooks:infernal_sorcerer_chestplate',
        'irons_spellbooks:netherite_mage_chestplate', 'irons_spellbooks:wizard_chestplate','irons_spellbooks:plagued_chestplate',
        'irons_spellbooks:priest_chestplate', 'irons_spellbooks:shadowwalker_chestplate', 'irons_spellbooks:cryomancer_chestplate',
        'irons_spellbooks:cultist_chestplate', 'irons_spellbooks:archevoker_chestplate', 'irons_spellbooks:electromancer_chestplate',
        'irons_spellbooks:pyromancer_chestplate', 'iss_magicfromtheeast:taoist_chestplate', 'iss_magicfromtheeast:jade_pagoda_chestplate',
        'iss_magicfromtheeast:onmyoji_chestplate', 'oreganized:electrum_chestplate', 'iss_magicfromtheeast:elemental_commander_chestplate',
        'endermanoverhaul:snowy_hood', 'endermanoverhaul:savanna_hood', 'endermanoverhaul:badlands_hood',
        'tunes_n_tomes:bard_chestplate'
    ];
    for (let i in uniqueChestplates) uniqueItemTags('chestplate', uniqueChestplates[i]);

    let uniqueLeggings = [
        'irons_spellbooks:wandering_magician_leggings', 'oreganized:electrum_leggings',
        'enderscape:drift_leggings', 'minecraft:netherite_leggings', 'minecraft:diamond_leggings',
        'minecraft:golden_leggings', 'minecraft:iron_leggings', 'minecraft:chainmail_leggings',
        'minecraft:leather_leggings', 'irons_spellbooks:wizard_leggings', 'galosphere:sterling_leggings',
        'irons_spellbooks:netherite_mage_leggings', 'irons_spellbooks:plagued_leggings',
        'irons_spellbooks:priest_leggings', 'irons_spellbooks:shadowwalker_leggings', 'irons_spellbooks:cryomancer_leggings',
        'irons_spellbooks:cultist_leggings', 'irons_spellbooks:archevoker_leggings',
        'irons_spellbooks:electromancer_leggings', 'irons_spellbooks:pyromancer_leggings',
        'irons_spellbooks:pumpkin_leggings', 'iss_magicfromtheeast:taoist_leggings', 'iss_magicfromtheeast:jade_pagoda_leggings',
        'iss_magicfromtheeast:onmyoji_leggings', 'tunes_n_tomes:bard_leggings'
    ];
    for (let i in uniqueLeggings) uniqueItemTags('leggings', uniqueLeggings[i]);

    let uniqueBoots = [
        'irons_spellbooks:pumpkin_boots', 'irons_spellbooks:wandering_magician_boots',
        'galosphere:sterling_boots', 'minecraft:netherite_boots', 'minecraft:diamond_boots',
        'minecraft:golden_boots', 'minecraft:iron_boots', 'minecraft:chainmail_boots', 'minecraft:leather_boots',
        'irons_spellbooks:speed_boots', 'irons_spellbooks:wizard_boots', 'oreganized:electrum_boots',
        'irons_spellbooks:netherite_mage_boots', 'irons_spellbooks:plagued_boots', 'irons_spellbooks:priest_boots',
        'irons_spellbooks:shadowwalker_boots', 'irons_spellbooks:cryomancer_boots', 'irons_spellbooks:cultist_boots',
        'irons_spellbooks:archevoker_boots', 'irons_spellbooks:electromancer_boots', 'irons_spellbooks:pyromancer_boots',
        'iss_magicfromtheeast:taoist_boots', 'iss_magicfromtheeast:jade_pagoda_boots', 'iss_magicfromtheeast:onmyoji_boots',
        'iss_magicfromtheeast:mist_boots', 'tunes_n_tomes:bard_boots', 'tide:dragonfin_boots'
    ];
    for (let i in uniqueBoots) uniqueItemTags('boots', uniqueBoots[i]);

    let uniqueElytra = [
        'minecraft:elytra'
    ];
    for (let i in uniqueElytra) uniqueItemTags('elytra', uniqueElytra[i]);

    let uniqueRings = [
        'irons_spellbooks:affinity_ring', 'irons_spellbooks:expulsion_ring', 'irons_spellbooks:invisibility_ring',
        'irons_spellbooks:visibility_ring', 'irons_spellbooks:betrayer_signet', 'irons_spellbooks:mana_ring',
        'irons_spellbooks:silver_ring', 'irons_spellbooks:cooldown_ring', 'irons_spellbooks:cast_time_ring',
        'irons_spellbooks:poisonward_ring', 'irons_spellbooks:frostward_ring', 'irons_spellbooks:fireward_ring',
        'irons_spellbooks:emerald_stoneplate_ring', 'iss_magicfromtheeast:soulward_ring', 'relics:ring_of_the_seven_deadly_sins'
    ];
    for (let i in uniqueRings) uniqueItemTags('ring', uniqueRings[i]);

    let uniqueBelts = [
        'relics:kinetic_belt', 'relics:hunting_belt'
    ];
    for (let i in uniqueBelts) uniqueItemTags('belt', uniqueBelts[i]);

    let uniqueNecklaces = [
        'irons_spellbooks:heavy_chain_necklace', 'irons_spellbooks:teleportation_amulet',
        'irons_spellbooks:amethyst_resonance_charm', 'irons_spellbooks:conjurers_talisman',
        'irons_spellbooks:greater_conjurers_talisman', 'irons_spellbooks:concentration_amulet',
        'relics:jellyfish_necklace', 'relics:reflective_necklace'
    ];
    for (let i in uniqueNecklaces) uniqueItemTags('necklace', uniqueNecklaces[i]);

    let uniqueCloaks = [
        'relics:leafy_mantle', 'relics:midnight_mantle'
    ];
    for (let i in uniqueCloaks) uniqueItemTags('cloak', uniqueCloaks[i]);

    let uniqueMasks = [
        'relics:piglin_mask'
    ];
    for (let i in uniqueMasks) uniqueItemTags('mask', uniqueMasks[i]);

    let uniqueShoes = [
        'relics:springy_boot', 'relics:roller_skate', 'relics:cut_glass_boot'
    ];
    for (let i in uniqueShoes) uniqueItemTags('shoe', uniqueShoes[i]);

    let uniqueCurios = [
        'iss_magicfromtheeast:bagua_mirror', 'iss_magicfromtheeast:coins_sword', 'iss_magicfromtheeast:rusted_coins_sword',
        'iss_magicfromtheeast:jade_pendant', 'relics:chef_hat', 'relics:experience_disperser'
    ];
    for (let i in uniqueCurios) uniqueItemTags('curio', uniqueCurios[i]);

    let uniqueShields = [
        'minecraft:shield', 'wan_ancient_beasts:reinforced_shield', 'enderscape:kurodite_rubble_shield',
        'enderscape:mirestone_rubble_shield', 'enderscape:veradite_rubble_shield', 'enderscape:end_stone_rubble_shield',
      'endermanoverhaul:corrupted_shield'
    ];
    for (let i in uniqueShields) uniqueItemTags('shield', uniqueShields[i]);

    let uniqueFishingRods = [
        'tide:midas_fishing_rod'
    ];
    for (let i in uniqueFishingRods) uniqueItemTags('fishing_rod', uniqueFishingRods[i]);

    let uniqueShears = [
        'minecraft:shears'
    ];
    for (let i in uniqueShears) uniqueItemTags('shears', uniqueShears[i]);

    let uniqueAnimalArmor = [
        'minecraft:iron_horse_armor', 'minecraft:golden_horse_armor', 'minecraft:diamond_horse_armor',
      'galosphere:sterling_horse_armor', 'iss_magicfromtheeast:jade_pagoda_horse_armor'
    ];
    for (let i in uniqueAnimalArmor) uniqueItemTags('animal_armor', uniqueAnimalArmor[i]);

    let uniqueRelics = [
        'relics:clot_of_time', 'relics:rider_flute', 'relics:sphere_of_self_sacrifice'
    ];
    for (let i in uniqueRelics) uniqueItemTags('relic', uniqueRelics[i]);

    let uniqueAccessories = [
        'eternal_starlight:battleaxe_pendant', 'eternal_starlight:warhammer_pendant',
        'eternal_starlight:butterfly_wings_amulet', 'eternal_starlight:fungus_amulet',
        'eternal_starlight:pearl_necklace', 'eternal_starlight:crescent_pendant'
    ];
    for (let i in uniqueAccessories) uniqueItemTags('accessory', uniqueAccessories[i]);
});
