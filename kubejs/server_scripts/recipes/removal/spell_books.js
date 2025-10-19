// Remove Spell Book Recipes from the game
ServerEvents.recipes(event => {
    
    event.remove([{id: 'irons_spellbooks:copper_spell_book'}, {id: 'irons_spellbooks:iron_spell_book'},
        {id: 'irons_spellbooks:gold_spell_book'}, {id: 'irons_spellbooks:diamond_spell_book'},
        {id: 'irons_spellbooks:netherite_spell_book'}, {id: 'irons_spellbooks:ice_spell_book'},
        {id: 'irons_spellbooks:cursed_doll_spell_book'}, {id: 'irons_spellbooks:druidic_spell_book'},
        {id: 'irons_spellbooks:dragonskin_spell_book'}, {id: 'alshanex_familiars:sound_spell_book'},
        {id: 'alshanex_familiars:familiar_spellbook'}
    ])
})