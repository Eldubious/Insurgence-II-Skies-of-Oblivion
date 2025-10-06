// Remove unobtainable items from their tags
ServerEvents.tags('item', event => {

    event.removeAllTagsFrom(['occultism:silver_ingot', 'occultism:silver_nugget', 'occultism:silver_ore',
        'occultism:silver_ore_deepslate', 'occultism:raw_silver', 'occultism:raw_silver_block', 'occultism:silver_block',
        'silentgems:silver_ingot', 'silentgems:silver_nugget', 'silentgems:raw_silver', 'silentgems:silver_ore',
        'silentgems:deepslate_silver_ore', 'silentgems:silver_block', 'silentgems:ruby', 'silentgems:sapphire',
        'silentgems:peridot', 'silentgems:topaz', 'silentgems:garnet', 'silentgems:opal'])
})