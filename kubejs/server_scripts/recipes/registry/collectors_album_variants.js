// Register crafting table and smithing table recipes for the variants of the collectors album
ServerEvents.recipes(event => {

    function albumRecipes(modelData, itemIngredient) {
        event.shaped(`collectorsalbum:album[custom_model_data=${modelData}]`,
            [
                'PLP',
                'PAP',
                'PLP'
            ],
            {
                P: 'minecraft:paper',
                L: '#insurgence:book_binding',
                A: itemIngredient
            }
        )
        event.smithing(`collectorsalbum:album[custom_model_data=${modelData}]`,
            '#insurgence:book_binding', 'collectorsalbum:album', itemIngredient
        )
    }


    // Default Album
    event.remove({id: 'collectorsalbum:album'})
    albumRecipes(0, 'minecraft:purple_dye')

    // Copper Spell Book
    albumRecipes(200, 'minecraft:copper_ingot')

    // Iron Spell Book
    albumRecipes(201, 'minecraft:iron_ingot')

    // Gold Spell Book
    albumRecipes(202, 'minecraft:gold_ingot')

    // Diamond Spell Book
    albumRecipes(203, 'minecraft:diamond')

    // Netherite Spell Book
    albumRecipes(204, 'minecraft:echo_shard')

    // Rotten Spell Book
    albumRecipes(205, 'minecraft:rotten_flesh')

    // Necronomicon Spell Book
    albumRecipes(206, 'supplementaries:antique_ink')

    // Blaze Spell Book
    albumRecipes(207, 'minecraft:blaze_powder')

    // Villager Spell Book
    albumRecipes(208, 'minecraft:emerald')

    // Druidic Spell Book
    albumRecipes(209, 'minecraft:moss_block')

    // Dragonskin Spell Book
    albumRecipes(210, 'irons_spellbooks:dragonskin')

    // Evoker Spell Book
    albumRecipes(211, 'minecraft:blackstone')

    // Cursed Doll Spell Book
    albumRecipes(212, 'irons_spellbooks:bloody_vellum')

    // Ice Spell Book
    albumRecipes(213, 'minecraft:snowball')

    // Ritual Orihon
    albumRecipes(214, 'iss_magicfromtheeast:crystallized_soul')

    // Familiar Spell Book
    albumRecipes(215, 'alshanex_familiars:memory_fragment')

    // Sound Spell Book
    albumRecipes(216, 'minecraft:note_block')
})