// Organize items into tags if they aren't already
ServerEvents.tags('item', event => {

    // Add more modded music discs to the music disc tag
    let music_discs = ['vanillabackport:music_disc_tears', 'vanillabackport:music_disc_lava_chicken',
        'apothic_enchanting:music_disc_eterna', 'apothic_enchanting:music_disc_quanta',
        'apothic_enchanting:music_disc_arcana', 'apotheosis:music_disc_flash',
        'apotheosis:music_disc_glimmer', 'apotheosis:music_disc_shimmer',
        'irons_spellbooks:music_disc_dead_king_lullaby', 'irons_spellbooks:music_disc_flame_still_burns']
    for (let i in music_discs) {
        event.add('c:music_discs', music_discs[i])
    }

    // Add opals to the opal tag
    let opal_gems = ['opalescence:opal_crystal', 'opalescence:moonlit_opal_crystal', 'opalescence:unpleasant_opal_crystal']
    for (let i in opal_gems) {
        event.add('c:gems/opal', opal_gems[i])
        event.add('c:gems', opal_gems[i])
    }

    // Add gems which can be stored in the gem bag
    let silent_gem_bag_items = ['iss_magicfromtheeast:jade', 'opalescence:opal_crystal', 'opalescence:moonlit_opal_crystal',
        'opalescence:unpleasant_opal_crystal']
    for (let i in silent_gem_bag_items) {
        event.add('silentgems:gem_bag_can_store', silent_gem_bag_items[i])
    }
})