// Remove Spell Book Recipes from the game
ServerEvents.recipes(event => {

    // Spell books
    event.remove([
        {id: 'irons_spellbooks:copper_spell_book'}, {id: 'irons_spellbooks:iron_spell_book'},
        {id: 'irons_spellbooks:gold_spell_book'}, {id: 'irons_spellbooks:diamond_spell_book'},
        {id: 'irons_spellbooks:netherite_spell_book'}, {id: 'irons_spellbooks:ice_spell_book'},
        {id: 'irons_spellbooks:cursed_doll_spell_book'}, {id: 'irons_spellbooks:druidic_spell_book'},
        {id: 'irons_spellbooks:dragonskin_spell_book'}, {id: 'alshanex_familiars:sound_spell_book'},
        {id: 'alshanex_familiars:familiar_spellbook'}
    ]);

    // Unobtainable structure blocks
    event.remove([
        {output: "supplementaries:gold_door"}, {output: "supplementaries:gold_trapdoor"},
        {output: "architects_palette:ancient_plating"}, {output: "architects_palette:ancient_plating_slab"},
        {output: "architects_palette:ancient_plating_stairs"}, {output: "architects_palette:ancient_plating_fence"},
        {output: "architects_palette:ancient_plating_wall"}, {output: "architects_palette:plating_block"},
        {output: "architects_palette:plating_slab"}, {output: "architects_palette:plating_stairs"},
        {output: "architects_palette:plating_wall"}, {output: "architects_palette:plating_nub"}
    ]);
});
