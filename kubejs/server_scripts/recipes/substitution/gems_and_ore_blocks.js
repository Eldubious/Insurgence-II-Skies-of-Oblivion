// Substitute the gems and ingots for certain ore blocks
ServerEvents.recipes(event => {

    event.replaceInput({id: 'silentgems:ruby_from_block'},
        'silentgems:ruby',
        'irons_jewelry:ruby'
    )
    event.shapeless('9x irons_jewelry:ruby', ['silentgems:ruby_block'])

    event.replaceInput({id: 'silentgems:topaz_from_block'},
        'silentgems:topaz',
        'irons_jewelry:topaz'
    )
    event.shapeless('9x irons_jewelry:topaz', ['silentgems:topaz_block'])

    event.replaceInput({id: 'silentgems:sapphire_from_block'},
        'silentgems:sapphire',
        'irons_jewelry:sapphire'
    )
    event.shapeless('9x irons_jewelry:sapphire', ['silentgems:sapphire_block'])

    event.replaceInput({id: 'silentgems:peridot_from_block'},
        'silentgems:peridot',
        'irons_jewelry:peridot'
    )
    event.shapeless('9x irons_jewelry:peridot', ['silentgems:peridot_block'])

    event.replaceInput({id: 'silentgems:garnet_from_block'},
        'silentgems:garnet',
        'irons_jewelry:garnet'
    )
    event.shapeless('9x irons_jewelry:garnet', ['silentgems:garnet_block'])

    event.replaceInput({id: 'silentgems:opal_from_block'},
        'silentgems:opal',
        'opalescence:opal_crystal'
    )
    event.shapeless('9x opalescence:opal_crystal', ['silentgems:opal_block'])
})