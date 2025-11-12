// Register new totem items
StartupEvents.registry("item", event => {

    // Totem to teleport home
    event.create('insurgence:totem_of_return')
        .translationKey('item.insurgence.totem_of_return')
        .rarity('rare')
        /*.component('irons_spellbooks:spell_container', {
            maxSpells: 1,
            locked: true,
            spellWheel: true,
            mustEquip: false,
            data: [
                {
                    index: 0,
                    level: 1,
                    id: 'irons_spellbooks:recall'
                }
            ]
        })*/


    // Totem to give night vision
    event.create('insurgence:totem_of_vision')
        .translationKey('item.insurgence.totem_of_vision')
        .rarity('uncommon')
        
})