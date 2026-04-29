// Remove unobtainable items from their tags
ServerEvents.tags('item', event => {

    let unusedItems = [
        'irons_spellbooks:copper_spell_book', 'irons_spellbooks:iron_spell_book',
        'irons_spellbooks:gold_spell_book', 'irons_spellbooks:diamond_spell_book', 'irons_spellbooks:netherite_spell_book',
        'irons_spellbooks:evoker_spell_book', 'irons_spellbooks:necronomicon_spell_book', 'irons_spellbooks:rotten_spell_book',
        'irons_spellbooks:blaze_spell_book', 'irons_spellbooks:dragonskin_spell_book', 'irons_spellbooks:villager_spell_book',
        'irons_spellbooks:druidic_spell_book', 'irons_spellbooks:cursed_doll_spell_book', 'irons_spellbooks:ice_spell_book',
        'iss_magicfromtheeast:ritual_orihon'
    ]

    for (let i in unusedItems) {
        let item = unusedItems[i]
        event.removeAllTagsFrom(item)
        event.add("insurgence:unused", item)
    }
    
})