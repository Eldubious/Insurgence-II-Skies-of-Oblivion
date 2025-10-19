// Remove unobtainable items from their tags
ServerEvents.tags('item', event => {

    event.removeAllTagsFrom(['occultism:silver_ingot', 'occultism:silver_nugget', 'occultism:silver_ore',
        'occultism:silver_ore_deepslate', 'occultism:raw_silver', 'occultism:raw_silver_block', 'occultism:silver_block',
        'silentgems:silver_ingot', 'silentgems:silver_nugget', 'silentgems:raw_silver', 'silentgems:silver_ore',
        'silentgems:deepslate_silver_ore', 'silentgems:silver_block', 'silentgems:ruby', 'silentgems:sapphire',
        'silentgems:peridot', 'silentgems:topaz', 'silentgems:garnet', 'silentgems:opal'])

    event.removeAllTagsFrom(['irons_spellbooks:copper_spell_book', 'irons_spellbooks:iron_spell_book',
        'irons_spellbooks:gold_spell_book', 'irons_spellbooks:diamond_spell_book', 'irons_spellbooks:netherite_spell_book',
        'irons_spellbooks:evoker_spell_book', 'irons_spellbooks:necronomicon_spell_book', 'irons_spellbooks:rotten_spell_book',
        'irons_spellbooks:blaze_spell_book', 'irons_spellbooks:dragonskin_spell_book', 'irons_spellbooks:villager_spell_book',
        'irons_spellbooks:druidic_spell_book', 'irons_spellbooks:cursed_doll_spell_book', 'irons_spellbooks:ice_spell_book',
        'alshanex_familiars:sound_spell_book', 'alshanex_familiars:familiar_spellbook', 'iss_magicfromtheeast:ritual_orihon'])
})