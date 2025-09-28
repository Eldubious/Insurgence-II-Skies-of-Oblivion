// Create item tags
ServerEvents.tags('item', event => {

    function uniqueItemTags(itemType, itemName) {
        event.add('insurgence:unique_item', itemName)
        event.add(`insurgence:unique_item/${itemType}`, itemName)
    }

    let uniqueSwords = ['minecraft:wooden_sword', 'minecraft:stone_sword', 'minecraft:iron_sword',
        'minecraft:golden_sword', 'minecraft:diamond_sword', 'minecraft:netherite_sword',
        'eidolon_repraised:silver_sword', 'eidolon_repraised:sapping_sword', 'eidolon_repraised:athame',
        'irons_spellbooks:magehunter', 'irons_spellbooks:spellbreaker', 'irons_spellbooks:amethyst_rapier',
        'irons_spellbooks:boreal_blade', 'irons_spellbooks:keeper_flamberge', 'irons_spellbooks:legionnaire_flamberge']
    for (let i in uniqueSwords) {
        uniqueItemTags('sword', uniqueSwords[i])
    }

    let uniqueScythes = ['irons_spellbooks:decrepit_scythe', 'irons_spellbooks:hellrazor',
        'eidolon_repraised:reaper_scythe', 'eidolon_repraised:deathbringer_scythe']
    for (let i in uniqueScythes) {
        uniqueItemTags('scythe', uniqueScythes[i])
    }

    let uniqueTridents = ['minecraft:trident', 'irons_spellbooks:twilight_gale']
    for (let i in uniqueTridents) {
        uniqueItemTags('trident', uniqueTridents[i])
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
        'farmersdelight:diamond_knife', 'farmersdelight:netherite_knife']
    for (let i in uniqueKnives) {
        uniqueItemTags('knife', uniqueKnives[i])
    }

    let uniqueAxes = ['minecraft:wooden_axe', 'minecraft:stone_axe', 'minecraft:iron_axe',
        'minecraft:golden_axe', 'minecraft:diamond_axe', 'minecraft:netherite_axe',
        'eidolon_repraised:cleaving_axe', 'eidolon_repraised:silver_axe']
    for (let i in uniqueAxes) {
        uniqueItemTags('axe', uniqueAxes[i])
    }

    let uniquePickaxes = ['minecraft:wooden_pickaxe', 'minecraft:stone_pickaxe', 'minecraft:iron_pickaxe',
        'minecraft:golden_pickaxe', 'minecraft:diamond_pickaxe', 'minecraft:netherite_pickaxe',
        'eidolon_repraised:silver_pickaxe', 'eidolon_repraised:reversal_pick']
    for (let i in uniquePickaxes) {
        uniqueItemTags('pickaxe', uniquePickaxes[i])
    }

    let uniqueShovels = ['minecraft:wooden_shovel', 'minecraft:stone_shovel', 'minecraft:iron_shovel',
        'minecraft:golden_shovel', 'minecraft:diamond_shovel', 'minecraft:netherite_shovel',
        'eidolon_repraised:silver_shovel']
    for (let i in uniqueShovels) {
        uniqueItemTags('shovel', uniqueShovels[i])
    }

    let uniqueHoes = ['minecraft:wooden_hoe', 'minecraft:stone_hoe', 'minecraft:iron_hoe',
        'minecraft:golden_hoe', 'minecraft:diamond_hoe', 'minecraft:netherite_hoe',
        'eidolon_repraised:silver_hoe']
    for (let i in uniqueHoes) {
        uniqueItemTags('hoe', uniqueHoes[i])
    }

    let uniqueBows = ['minecraft:bow']
    for (let i in uniqueBows) {
        uniqueItemTags('bow', uniqueBows[i])
    }

    let uniqueCrossbows = ['minecraft:crossbow', 'irons_spellbooks:autoloader_crossbow']
    for (let i in uniqueCrossbows) {
        uniqueItemTags('crossbow', uniqueCrossbows[i])
    }

    let uniqueStaves = ['irons_spellbooks:blood_staff', 'irons_spellbooks:graybeard_staff', 'irons_spellbooks:ice_staff',
        'irons_spellbooks:artificer_cane', 'irons_spellbooks:lightning_rod', 'irons_spellbooks:pyrium_staff',
        'eidolon_repraised:summoning_staff']
    for (let i in uniqueStaves) {
        uniqueItemTags('staff', uniqueStaves[i])
    }

    let uniqueWands = ['irons_spellbooks:hither_thither_wand', 'eidolon_repraised:soulfire_wand', 'eidolon_repraised:bonechill_wand']
    for (let i in uniqueWands) {
        uniqueItemTags('wand', uniqueWands[i])
    }

    let uniqueHelmets = ['minecraft:leather_helmet', 'minecraft:chainmail_helmet', 'minecraft:iron_helmet',
        'minecraft:golden_helmet', 'minecraft:diamond_helmet', 'minecraft:netherite_helmet', 'minecraft:turtle_helmet',
        'goated:barbaric_helmet', 'alshanex_familiars:bard_helmet', 'irons_spellbooks:wandering_magician_helmet',
        'irons_spellbooks:pumpkin_helmet', 'irons_spellbooks:pyromancer_helmet', 'irons_spellbooks:electromancer_helmet',
        'irons_spellbooks:netherite_mage_helmet', 'irons_spellbooks:wizard_helmet', 'irons_spellbooks:plagued_helmet',
        'irons_spellbooks:priest_helmet', 'irons_spellbooks:shadowwalker_helmet', 'irons_spellbooks:cryomancer_helmet',
        'irons_spellbooks:cultist_helmet', 'irons_spellbooks:archevoker_helmet', 'eidolon_repraised:bonelord_helm',
        'eidolon_repraised:top_hat', 'eidolon_repraised:warlock_hat', 'irons_spellbooks:tarnished_helmet',
        'productivebees:bee_nest_diamond_helmet', 'friendsandfoes:wildfire_crown']
    for (let i in uniqueHelmets) {
        uniqueItemTags('helmet', uniqueHelmets[i])
    }

    let uniqueChestplates = ['irons_spellbooks:pumpkin_chestplate', 'irons_spellbooks:wandering_magician_chestplate',
        'alshanex_familiars:bard_chestplate', 'minecraft:netherite_chestplate', 'minecraft:diamond_chestplate',
        'minecraft:golden_chestplate', 'minecraft:iron_chestplate', 'minecraft:chainmail_chestplate',
        'minecraft:leather_chestplate', 'eidolon_repraised:bonelord_chestplate', 'eidolon_repraised:warlock_cloak',
        'irons_spellbooks:paladin_chestplate', 'irons_spellbooks:infernal_sorcerer_chestplate',
        'irons_spellbooks:netherite_mage_chestplate', 'irons_spellbooks:wizard_chestplate','irons_spellbooks:plagued_chestplate',
        'irons_spellbooks:priest_chestplate', 'irons_spellbooks:shadowwalker_chestplate', 'irons_spellbooks:cryomancer_chestplate',
        'irons_spellbooks:cultist_chestplate', 'irons_spellbooks:archevoker_chestplate', 'irons_spellbooks:electromancer_chestplate',
        'irons_spellbooks:pyromancer_chestplate']
    for (let i in uniqueChestplates) {
        uniqueItemTags('chestplate', uniqueChestplates[i])
    }

    let uniqueLeggings = ['irons_spellbooks:wandering_magician_leggings', 'alshanex_familiars:bard_leggings',
        'enderscape:drift_leggings', 'minecraft:netherite_leggings', 'minecraft:diamond_leggings',
        'minecraft:golden_leggings', 'minecraft:iron_leggings', 'minecraft:chainmail_leggings',
        'minecraft:leather_leggings', 'eidolon_repraised:bonelord_greaves', 'irons_spellbooks:wizard_leggings',
        'irons_spellbooks:netherite_mage_leggings', 'irons_spellbooks:plagued_leggings',
        'irons_spellbooks:priest_leggings', 'irons_spellbooks:shadowwalker_leggings', 'irons_spellbooks:cryomancer_leggings',
        'irons_spellbooks:cultist_leggings', 'irons_spellbooks:archevoker_leggings',
        'irons_spellbooks:electromancer_leggings', 'irons_spellbooks:pyromancer_leggings',
        'irons_spellbooks:pumpkin_leggings']
    for (let i in uniqueLeggings) {
        uniqueItemTags('leggings', uniqueLeggings[i])
    }

    let uniqueBoots = ['irons_spellbooks:pumpkin_boots', 'irons_spellbooks:wandering_magician_boots',
        'alshanex_familiars:bard_boots', 'minecraft:netherite_boots', 'minecraft:diamond_boots',
        'minecraft:golden_boots', 'minecraft:iron_boots', 'minecraft:chainmail_boots', 'minecraft:leather_boots',
        'eidolon_repraised:warlock_boots', 'irons_spellbooks:speed_boots', 'irons_spellbooks:wizard_boots',
        'irons_spellbooks:netherite_mage_boots', 'irons_spellbooks:plagued_boots', 'irons_spellbooks:priest_boots',
        'irons_spellbooks:shadowwalker_boots', 'irons_spellbooks:cryomancer_boots', 'irons_spellbooks:cultist_boots',
        'irons_spellbooks:archevoker_boots', 'irons_spellbooks:electromancer_boots', 'irons_spellbooks:pyromancer_boots']
    for (let i in uniqueBoots) {
        uniqueItemTags('boots', uniqueBoots[i])
    }

    let uniqueElytra = ['minecraft:elytra']
    for (let i in uniqueElytra) {
        uniqueItemTags('elytra', uniqueElytra[i])
    }

    let uniqueRings = ['relics:bastion_ring', 'relics:chorus_inhibitor', 'relics:leafy_ring',
        'irons_spellbooks:affinity_ring', 'irons_spellbooks:expulsion_ring', 'irons_spellbooks:invisibility_ring',
        'irons_spellbooks:visibility_ring', 'eidolon_repraised:enervating_ring', 'irons_spellbooks:betrayer_signet',
        'eidolon_repraised:angels_sight', 'irons_spellbooks:mana_ring', 'irons_spellbooks:silver_ring',
        'irons_spellbooks:cooldown_ring', 'irons_spellbooks:cast_time_ring', 'eidolon_repraised:basic_ring',
        'irons_spellbooks:poisonward_ring', 'irons_spellbooks:frostward_ring', 'irons_spellbooks:fireward_ring',
        'irons_spellbooks:emerald_stoneplate_ring']
    for (let i in uniqueRings) {
        uniqueItemTags('ring', uniqueRings[i])
    }

    let uniqueBelts = ['relics:drowned_belt', 'relics:leather_belt', 'relics:hunter_belt',
        'eidolon_repraised:basic_belt', 'eidolon_repraised:gravity_belt', 'eidolon_repraised:resolute_belt']
    for (let i in uniqueBelts) {
        uniqueItemTags('belt', uniqueBelts[i])
    }

    let uniqueNecklaces = ['irons_spellbooks:heavy_chain_necklace', 'eidolon_repraised:void_amulet',
        'eidolon_repraised:basic_amulet', 'eidolon_repraised:sanguine_amulet', 'eidolon_repraised:soulbone_amulet',
        'eidolon_repraised:glass_hand', 'eidolon_repraised:terminus_mirror', 'irons_spellbooks:teleportation_amulet',
        'irons_spellbooks:amethyst_resonance_charm', 'irons_spellbooks:conjurers_talisman',
        'irons_spellbooks:greater_conjurers_talisman', 'irons_spellbooks:concentration_amulet',
        'relics:reflection_necklace', 'relics:jellyfish_necklace', 'relics:holy_locket']
    for (let i in uniqueNecklaces) {
        uniqueItemTags('necklace', uniqueNecklaces[i])
    }

    let uniqueCurios = ['alshanex_familiars:cleric_trinket', 'alshanex_familiars:scorcher_trinket',
        'alshanex_familiars:illusionist_trinket', 'alshanex_familiars:archmage_trinket', 'alshanex_familiars:mage_trinket',
        'alshanex_familiars:summoner_trinket', 'alshanex_familiars:necromancer_trinket', 'alshanex_familiars:hunter_trinket',
        'alshanex_familiars:forest_trinket', 'eidolon_repraised:prestigious_palm', 'eidolon_repraised:mind_shielding_plate',
        'eidolon_repraised:raven_cloak', 'alshanex_familiars:healing_curio', 'alshanex_familiars:evasion_curio',
        'alshanex_familiars:invisibility_curio', 'alshanex_familiars:statue_curio', 'alshanex_familiars:pandora_box',
        'alshanex_familiars:frostling_trinket', 'alshanex_familiars:bard_trinket', 'alshanex_familiars:plague_trinket',
        'relics:magma_walker', 'relics:aqua_walker', 'relics:midnight_robe', 'relics:rage_glove', 'relics:ice_skates',
        'relics:shadow_glaive', 'relics:roller_skates', 'relics:spore_sack', 'relics:ice_breaker', 'relics:springy_boot',
        'relics:phantom_boot', 'relics:elytra_booster', 'relics:enders_hand', 'relics:amphibian_boot', 'relics:wool_mitten',
        'eidolon_repraised:warded_mail']
    for (let i in uniqueCurios) {
        uniqueItemTags('curio', uniqueCurios[i])
    }

    let uniqueShields = ['minecraft:shield', 'wan_ancient_beasts:reinforced_shield', 'enderscape:kurodite_rubble_shield',
        'enderscape:mirestone_rubble_shield', 'enderscape:veradite_rubble_shield', 'enderscape:end_stone_rubble_shield']
    for (let i in uniqueShields) {
        uniqueItemTags('shield', uniqueShields[i])
    }
})