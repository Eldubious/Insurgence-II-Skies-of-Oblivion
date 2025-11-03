// Organize items into tags if they aren't already
ServerEvents.tags('item', event => {

    // Add more modded music discs to the music disc tag
    let musicDiscs = ['vanillabackport:music_disc_tears', 'vanillabackport:music_disc_lava_chicken',
        'apothic_enchanting:music_disc_eterna', 'apothic_enchanting:music_disc_quanta',
        'apothic_enchanting:music_disc_arcana', 'apotheosis:music_disc_flash',
        'apotheosis:music_disc_glimmer', 'apotheosis:music_disc_shimmer',
        'irons_spellbooks:music_disc_dead_king_lullaby', 'irons_spellbooks:music_disc_flame_still_burns']
    for (let i in musicDiscs) {
        event.add('c:music_discs', musicDiscs[i])
    }

    // Add opals to the opal tag
    let opalGems = ['opalescence:opal_crystal', 'opalescence:moonlit_opal_crystal', 'opalescence:unpleasant_opal_crystal']
    for (let i in opalGems) {
        event.add('c:gems/opal', opalGems[i])
        event.add('c:gems', opalGems[i])
    }

    // Add gems which can be stored in the gem bag
    let silentGemBagItems = ['iss_magicfromtheeast:jade', 'opalescence:opal_crystal', 'opalescence:moonlit_opal_crystal',
        'opalescence:unpleasant_opal_crystal']
    for (let i in silentGemBagItems) {
        event.add('silentgems:gem_bag_can_store', silentGemBagItems[i])
    }

    // Add trim templates from the More Armor Trims mod to the template tag
    let trimPatterns = ['storm', 'ram', 'myth', 'greed', 'beast', 'fever', 'wraith', 'nihility', 'horizon', 'origin']
    for (let i in trimPatterns) {
        event.add('minecraft:trim_templates', `more_armor_trims:${trimPatterns[i]}_armor_trim_smithing_template`)
    }

    // Add vault keys to their own tag
    let vaultKeys = ['minecraft:trial_key', 'minecraft:ominous_trial_key', 'enderscape:end_city_key']
    for (let i in vaultKeys) {
        event.add('insurgence:vault_keys', vaultKeys[i])
    }

    // Add new color foundry blocks to the correct tags
    let newDyeColors = ['maroon', 'rose', 'coral', 'ginger', 'tan', 'beige', 'amber', 'olive', 'forest', 'verdant', 'teal', 'mint',
        'aqua', 'slate', 'navy', 'indigo']
    for (let i in newDyeColors) {
        event.add('productivemetalworks:fire_bricks', `productivemetalworks:${newDyeColors[i]}_fire_bricks`)
        event.add('productivemetalworks:foundry_controllers', `productivemetalworks:${newDyeColors[i]}_foundry_controller`)
        event.add('productivemetalworks:foundry_drains', `productivemetalworks:${newDyeColors[i]}_foundry_drain`)
        event.add('productivemetalworks:foundry_capacitors', `productivemetalworks:${newDyeColors[i]}_foundry_capacitor`)
        event.add('productivemetalworks:foundry_tanks', `productivemetalworks:${newDyeColors[i]}_foundry_tank`)
        event.add('productivemetalworks:foundry_windows', `productivemetalworks:${newDyeColors[i]}_foundry_window`)
    }
})