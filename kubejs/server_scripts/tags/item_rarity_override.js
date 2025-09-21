// Add tags which modify an item's rarity only in tooltips
ServerEvents.tags('item', event => {

    let uncommonItems = ['irons_spellbooks:uncommon_ink']
    for (let i in uncommonItems) {
        event.add('insurgence:rarity_override', uncommonItems[i])
        event.add('insurgence:rarity_override/uncommon', uncommonItems[i])
    }

    let rareItems = ['irons_spellbooks:rare_ink']
    for (let i in rareItems) {
        event.add('insurgence:rarity_override', rareItems[i])
        event.add('insurgence:rarity_override/rare', rareItems[i])
    }

    let epicItems = ['irons_spellbooks:epic_ink']
    for (let i in epicItems) {
        event.add('insurgence:rarity_override', epicItems[i])
        event.add('insurgence:rarity_override/epic', epicItems[i])
    }

    let legendaryItems = ['irons_spellbooks:legendary_ink']
    for (let i in legendaryItems) {
        event.add('insurgence:rarity_override', legendaryItems[i])
        event.add('insurgence:rarity_override/legendary', legendaryItems[i])
    }

})