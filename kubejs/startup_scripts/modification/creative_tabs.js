// Modify existing creative tabs
StartupEvents.modifyCreativeTab("kubejs:tab", event => {
    event.setDisplayName(Component.translate("creative_tab.insurgence.main"))
    event.setIcon("insurgence:nether_portal")

    for (let i in keyTypes) {
        event.remove(`insurgence:${keyTypes[i]}_key`)
    }

    for (let rarityIndex in rarities) {
        let rarity = rarities[rarityIndex]

        for (let suitIndex in suits) {
            let suit = suits[suitIndex]
            for (let rankIndex in ranks) {
                let rank = ranks[rankIndex]
                event.remove(`insurgence:${rarity}_${rank}_of_${suit}`)
            }
        }

        for (let i in swordArcana) {
            let arcana = swordArcana[i]
            event.remove(`insurgence:${rarity}_${arcana}`)
        }
        for (let i in staffArcana) {
            let arcana = staffArcana[i]
            event.remove(`insurgence:${rarity}_${arcana}`)
        }
        for (let i in cupArcana) {
            let arcana = cupArcana[i]
            event.remove(`insurgence:${rarity}_${arcana}`)
        }
        for (let i in ringArcana) {
            let arcana = ringArcana[i]
            event.remove(`insurgence:${rarity}_${arcana}`)
        }
    }
    event.remove("insurgence:the_champion")
    event.remove("insurgence:the_wisdom")
    event.remove("insurgence:the_peak")
    event.remove("insurgence:the_wealth")
    event.remove("insurgence:the_universe")
    event.remove("insurgence:debug_ticket")
})

StartupEvents.modifyCreativeTab("insurgence:collectors_cards", event => {
    event.add("collectorsalbum:album[custom_model_data=0]")
    event.add("collectorsalbum:album[custom_model_data=200]")
    event.add("collectorsalbum:album[custom_model_data=201]")
    event.add("collectorsalbum:album[custom_model_data=202]")
    event.add("collectorsalbum:album[custom_model_data=203]")
    event.add("collectorsalbum:album[custom_model_data=204]")
    event.add("collectorsalbum:album[custom_model_data=205]")
    event.add("collectorsalbum:album[custom_model_data=206]")
    event.add("collectorsalbum:album[custom_model_data=207]")
    event.add("collectorsalbum:album[custom_model_data=208]")
    event.add("collectorsalbum:album[custom_model_data=209]")
    event.add("collectorsalbum:album[custom_model_data=210]")
    event.add("collectorsalbum:album[custom_model_data=211]")
    event.add("collectorsalbum:album[custom_model_data=212]")
    event.add("collectorsalbum:album[custom_model_data=213]")
    event.add("collectorsalbum:album[custom_model_data=214]")
    event.add("collectorsalbum:album[custom_model_data=215]")
    event.add("collectorsalbum:album[custom_model_data=216]")

    for (let rarityIndex in rarities) {
        let rarity = rarities[rarityIndex]

        for (let suitIndex in suits) {
            let suit = suits[suitIndex]
            for (let rankIndex in ranks) {
                let rank = ranks[rankIndex]
                event.add(`insurgence:${rarity}_${rank}_of_${suit}`)
            }
        }

        for (let i in swordArcana) {
            let arcana = swordArcana[i]
            event.add(`insurgence:${rarity}_${arcana}`)
        }
        for (let i in staffArcana) {
            let arcana = staffArcana[i]
            event.add(`insurgence:${rarity}_${arcana}`)
        }
        for (let i in cupArcana) {
            let arcana = cupArcana[i]
            event.add(`insurgence:${rarity}_${arcana}`)
        }
        for (let i in ringArcana) {
            let arcana = ringArcana[i]
            event.add(`insurgence:${rarity}_${arcana}`)
        }
    }
})

StartupEvents.modifyCreativeTab("insurgence:debug_tickets", event => {
    event.add("insurgence:debug_ticket")
    event.add("insurgence:debug_ticket[custom_data={type:\"world_tier\",tier:\"haven\"}]")
    event.add("insurgence:debug_ticket[custom_data={type:\"world_tier\",tier:\"frontier\"}]")
    event.add("insurgence:debug_ticket[custom_data={type:\"world_tier\",tier:\"ascent\"}]")
    event.add("insurgence:debug_ticket[custom_data={type:\"world_tier\",tier:\"summit\"}]")
    event.add("insurgence:debug_ticket[custom_data={type:\"world_tier\",tier:\"pinnacle\"}]")
})