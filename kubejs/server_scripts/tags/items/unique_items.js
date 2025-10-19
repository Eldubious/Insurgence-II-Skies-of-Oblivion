// Create item tags
ServerEvents.tags('item', event => {

    function uniqueItemTags(itemType, itemName) {
        event.add('insurgence:unique_item', itemName)
        event.add(`insurgence:unique_item/${itemType}`, itemName)
    }

    let uniqueSwords = ['minecraft:wooden_sword', 'minecraft:stone_sword', 'minecraft:iron_sword',
        'minecraft:golden_sword', 'minecraft:diamond_sword', 'minecraft:netherite_sword',
        'irons_spellbooks:magehunter', 'irons_spellbooks:spellbreaker', 'irons_spellbooks:amethyst_rapier',
        'irons_spellbooks:boreal_blade', 'irons_spellbooks:keeper_flamberge', 'irons_spellbooks:legionnaire_flamberge',
        'iss_magicfromtheeast:taiji_sword', 'iss_magicfromtheeast:soul_breaker', 'iss_magicfromtheeast:muramasa',
        'iss_magicfromtheeast:soul_katana']
    for (let i in uniqueSwords) {
        uniqueItemTags('sword', uniqueSwords[i])
    }

    let uniqueScythes = ['irons_spellbooks:decrepit_scythe', 'irons_spellbooks:hellrazor']
    for (let i in uniqueScythes) {
        uniqueItemTags('scythe', uniqueScythes[i])
    }

    let uniqueTridents = ['minecraft:trident', 'irons_spellbooks:twilight_gale']
    for (let i in uniqueTridents) {
        uniqueItemTags('trident', uniqueTridents[i])
    }

    let uniquePolearms = ['iss_magicfromtheeast:jade_guandao']
    for (let i in uniquePolearms) {
        uniqueItemTags('polearm', uniquePolearms[i])
    }

    let uniqueMaces = ['minecraft:mace']
    for (let i in uniqueMaces) {
        uniqueItemTags('mace', uniqueMaces[i])
    }

    let uniqueHarps = ['alshanex_familiars:bard_harp']
    for (let i in uniqueHarps) {
        uniqueItemTags('harp', uniqueHarps[i])
    }

    let uniqueClubs = ['wan_ancient_beasts:ancient_club']
    for (let i in uniqueClubs) {
        uniqueItemTags('club', uniqueClubs[i])
    }

    let uniqueKnives = ['farmersdelight:flint_knife', 'farmersdelight:iron_knife', 'farmersdelight:golden_knife',
        'farmersdelight:diamond_knife', 'farmersdelight:netherite_knife', 'occultism:butcher_knife']
    for (let i in uniqueKnives) {
        uniqueItemTags('knife', uniqueKnives[i])
    }

    let uniqueAxes = ['minecraft:wooden_axe', 'minecraft:stone_axe', 'minecraft:iron_axe',
        'minecraft:golden_axe', 'minecraft:diamond_axe', 'minecraft:netherite_axe']
    for (let i in uniqueAxes) {
        uniqueItemTags('axe', uniqueAxes[i])
    }

    let uniquePickaxes = ['minecraft:wooden_pickaxe', 'minecraft:stone_pickaxe', 'minecraft:iron_pickaxe',
        'minecraft:golden_pickaxe', 'minecraft:diamond_pickaxe', 'minecraft:netherite_pickaxe', 'occultism:iesnium_pickaxe']
    for (let i in uniquePickaxes) {
        uniqueItemTags('pickaxe', uniquePickaxes[i])
    }

    let uniqueShovels = ['minecraft:wooden_shovel', 'minecraft:stone_shovel', 'minecraft:iron_shovel',
        'minecraft:golden_shovel', 'minecraft:diamond_shovel', 'minecraft:netherite_shovel']
    for (let i in uniqueShovels) {
        uniqueItemTags('shovel', uniqueShovels[i])
    }

    let uniqueHoes = ['minecraft:wooden_hoe', 'minecraft:stone_hoe', 'minecraft:iron_hoe',
        'minecraft:golden_hoe', 'minecraft:diamond_hoe', 'minecraft:netherite_hoe']
    for (let i in uniqueHoes) {
        uniqueItemTags('hoe', uniqueHoes[i])
    }

    let uniqueBows = ['minecraft:bow', 'iss_magicfromtheeast:soulpiercer', 'enderzoology:hunting_bow']
    for (let i in uniqueBows) {
        uniqueItemTags('bow', uniqueBows[i])
    }

    let uniqueCrossbows = ['minecraft:crossbow', 'irons_spellbooks:autoloader_crossbow',
        'iss_magicfromtheeast:repeating_crossbow']
    for (let i in uniqueCrossbows) {
        uniqueItemTags('crossbow', uniqueCrossbows[i])
    }

    let uniqueSlingshots = ['supplementaries:slingshot']
    for (let i in uniqueSlingshots) {
        uniqueItemTags('slingshot', uniqueSlingshots[i])
    }

    let uniqueStaves = ['irons_spellbooks:blood_staff', 'irons_spellbooks:graybeard_staff', 'irons_spellbooks:ice_staff',
        'irons_spellbooks:artificer_cane', 'irons_spellbooks:lightning_rod', 'irons_spellbooks:pyrium_staff']
    for (let i in uniqueStaves) {
        uniqueItemTags('staff', uniqueStaves[i])
    }

    let uniqueWands = ['irons_spellbooks:hither_thither_wand']
    for (let i in uniqueWands) {
        uniqueItemTags('wand', uniqueWands[i])
    }

    let uniqueHelmets = ['minecraft:leather_helmet', 'minecraft:chainmail_helmet', 'minecraft:iron_helmet',
        'minecraft:golden_helmet', 'minecraft:diamond_helmet', 'minecraft:netherite_helmet', 'minecraft:turtle_helmet',
        'goated:barbaric_helmet', 'alshanex_familiars:bard_helmet', 'irons_spellbooks:wandering_magician_helmet',
        'irons_spellbooks:pumpkin_helmet', 'irons_spellbooks:pyromancer_helmet', 'irons_spellbooks:electromancer_helmet',
        'irons_spellbooks:netherite_mage_helmet', 'irons_spellbooks:wizard_helmet', 'irons_spellbooks:plagued_helmet',
        'irons_spellbooks:priest_helmet', 'irons_spellbooks:shadowwalker_helmet', 'irons_spellbooks:cryomancer_helmet',
        'irons_spellbooks:cultist_helmet', 'irons_spellbooks:archevoker_helmet', 'irons_spellbooks:tarnished_helmet',
        'productivebees:bee_nest_diamond_helmet', 'friendsandfoes:wildfire_crown', 'iss_magicfromtheeast:taoist_helmet',
        'iss_magicfromtheeast:jade_pagoda_helmet', 'iss_magicfromtheeast:onmyoji_helmet', 'iss_magicfromtheeast:jiangshi_hat',
        'elixirum:alchemist_eye', 'usefulslime:slime_helmet']
    for (let i in uniqueHelmets) {
        uniqueItemTags('helmet', uniqueHelmets[i])
    }

    let uniqueChestplates = ['irons_spellbooks:pumpkin_chestplate', 'irons_spellbooks:wandering_magician_chestplate',
        'alshanex_familiars:bard_chestplate', 'minecraft:netherite_chestplate', 'minecraft:diamond_chestplate',
        'minecraft:golden_chestplate', 'minecraft:iron_chestplate', 'minecraft:chainmail_chestplate',
        'minecraft:leather_chestplate', 'irons_spellbooks:paladin_chestplate', 'irons_spellbooks:infernal_sorcerer_chestplate',
        'irons_spellbooks:netherite_mage_chestplate', 'irons_spellbooks:wizard_chestplate','irons_spellbooks:plagued_chestplate',
        'irons_spellbooks:priest_chestplate', 'irons_spellbooks:shadowwalker_chestplate', 'irons_spellbooks:cryomancer_chestplate',
        'irons_spellbooks:cultist_chestplate', 'irons_spellbooks:archevoker_chestplate', 'irons_spellbooks:electromancer_chestplate',
        'irons_spellbooks:pyromancer_chestplate', 'iss_magicfromtheeast:taoist_chestplate', 'iss_magicfromtheeast:jade_pagoda_chestplate',
        'iss_magicfromtheeast:onmyoji_chestplate', 'usefulslime:slime_chestplate']
    for (let i in uniqueChestplates) {
        uniqueItemTags('chestplate', uniqueChestplates[i])
    }

    let uniqueLeggings = ['irons_spellbooks:wandering_magician_leggings', 'alshanex_familiars:bard_leggings',
        'enderscape:drift_leggings', 'minecraft:netherite_leggings', 'minecraft:diamond_leggings',
        'minecraft:golden_leggings', 'minecraft:iron_leggings', 'minecraft:chainmail_leggings',
        'minecraft:leather_leggings', 'irons_spellbooks:wizard_leggings',
        'irons_spellbooks:netherite_mage_leggings', 'irons_spellbooks:plagued_leggings',
        'irons_spellbooks:priest_leggings', 'irons_spellbooks:shadowwalker_leggings', 'irons_spellbooks:cryomancer_leggings',
        'irons_spellbooks:cultist_leggings', 'irons_spellbooks:archevoker_leggings',
        'irons_spellbooks:electromancer_leggings', 'irons_spellbooks:pyromancer_leggings',
        'irons_spellbooks:pumpkin_leggings', 'iss_magicfromtheeast:taoist_leggings', 'iss_magicfromtheeast:jade_pagoda_leggings',
        'iss_magicfromtheeast:onmyoji_leggings', 'usefulslime:slime_leggings']
    for (let i in uniqueLeggings) {
        uniqueItemTags('leggings', uniqueLeggings[i])
    }

    let uniqueBoots = ['irons_spellbooks:pumpkin_boots', 'irons_spellbooks:wandering_magician_boots',
        'alshanex_familiars:bard_boots', 'minecraft:netherite_boots', 'minecraft:diamond_boots',
        'minecraft:golden_boots', 'minecraft:iron_boots', 'minecraft:chainmail_boots', 'minecraft:leather_boots',
        'irons_spellbooks:speed_boots', 'irons_spellbooks:wizard_boots',
        'irons_spellbooks:netherite_mage_boots', 'irons_spellbooks:plagued_boots', 'irons_spellbooks:priest_boots',
        'irons_spellbooks:shadowwalker_boots', 'irons_spellbooks:cryomancer_boots', 'irons_spellbooks:cultist_boots',
        'irons_spellbooks:archevoker_boots', 'irons_spellbooks:electromancer_boots', 'irons_spellbooks:pyromancer_boots',
        'iss_magicfromtheeast:taoist_boots', 'iss_magicfromtheeast:jade_pagoda_boots', 'iss_magicfromtheeast:onmyoji_boots',
        'usefulslime:slime_boots']
    for (let i in uniqueBoots) {
        uniqueItemTags('boots', uniqueBoots[i])
    }

    let uniqueElytra = ['minecraft:elytra']
    for (let i in uniqueElytra) {
        uniqueItemTags('elytra', uniqueElytra[i])
    }

    let uniqueRings = ['relics:bastion_ring', 'relics:chorus_inhibitor', 'relics:leafy_ring',
        'irons_spellbooks:affinity_ring', 'irons_spellbooks:expulsion_ring', 'irons_spellbooks:invisibility_ring',
        'irons_spellbooks:visibility_ring', 'irons_spellbooks:betrayer_signet', 'irons_spellbooks:mana_ring',
        'irons_spellbooks:silver_ring', 'irons_spellbooks:cooldown_ring', 'irons_spellbooks:cast_time_ring',
        'irons_spellbooks:poisonward_ring', 'irons_spellbooks:frostward_ring', 'irons_spellbooks:fireward_ring',
        'irons_spellbooks:emerald_stoneplate_ring', 'iss_magicfromtheeast:soulward_ring']
    for (let i in uniqueRings) {
        uniqueItemTags('ring', uniqueRings[i])
    }

    let uniqueBelts = ['relics:drowned_belt', 'relics:leather_belt', 'relics:hunter_belt']
    for (let i in uniqueBelts) {
        uniqueItemTags('belt', uniqueBelts[i])
    }

    let uniqueNecklaces = ['irons_spellbooks:heavy_chain_necklace', 'irons_spellbooks:teleportation_amulet',
        'irons_spellbooks:amethyst_resonance_charm', 'irons_spellbooks:conjurers_talisman',
        'irons_spellbooks:greater_conjurers_talisman', 'irons_spellbooks:concentration_amulet',
        'relics:reflection_necklace', 'relics:jellyfish_necklace', 'relics:holy_locket']
    for (let i in uniqueNecklaces) {
        uniqueItemTags('necklace', uniqueNecklaces[i])
    }

    let uniqueCurios = ['alshanex_familiars:cleric_trinket', 'alshanex_familiars:scorcher_trinket',
        'alshanex_familiars:illusionist_trinket', 'alshanex_familiars:archmage_trinket', 'alshanex_familiars:mage_trinket',
        'alshanex_familiars:summoner_trinket', 'alshanex_familiars:necromancer_trinket', 'alshanex_familiars:hunter_trinket',
        'alshanex_familiars:forest_trinket', 'alshanex_familiars:healing_curio', 'alshanex_familiars:evasion_curio',
        'alshanex_familiars:invisibility_curio', 'alshanex_familiars:statue_curio', 'alshanex_familiars:pandora_box',
        'alshanex_familiars:frostling_trinket', 'alshanex_familiars:bard_trinket', 'alshanex_familiars:plague_trinket',
        'relics:magma_walker', 'relics:aqua_walker', 'relics:midnight_robe', 'relics:rage_glove', 'relics:ice_skates',
        'relics:shadow_glaive', 'relics:roller_skates', 'relics:spore_sack', 'relics:ice_breaker', 'relics:springy_boot',
        'relics:phantom_boot', 'relics:elytra_booster', 'relics:enders_hand', 'relics:amphibian_boot', 'relics:wool_mitten',
        'iss_magicfromtheeast:bagua_mirror', 'iss_magicfromtheeast:coins_sword', 'iss_magicfromtheeast:rusted_coins_sword',
        'iss_magicfromtheeast:jade_pendant', 'occultism:satchel']
    for (let i in uniqueCurios) {
        uniqueItemTags('curio', uniqueCurios[i])
    }

    let uniqueShields = ['minecraft:shield', 'wan_ancient_beasts:reinforced_shield', 'enderscape:kurodite_rubble_shield',
        'enderscape:mirestone_rubble_shield', 'enderscape:veradite_rubble_shield', 'enderscape:end_stone_rubble_shield']
    for (let i in uniqueShields) {
        uniqueItemTags('shield', uniqueShields[i])
    }

    let uniqueFishingRods = ['minecraft:fishing_rod']
    for (let i in uniqueFishingRods) {
        uniqueItemTags('fishing_rod', uniqueFishingRods[i])
    }

    let uniqueShears = ['minecraft:shears']
    for (let i in uniqueShears) {
        uniqueItemTags('shears', uniqueShears[i])
    }
})