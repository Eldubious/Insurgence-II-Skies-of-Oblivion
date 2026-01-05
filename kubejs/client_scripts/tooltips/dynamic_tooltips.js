const item_modifier_tooltips = [Component.translate('item.modifiers.any').getString(), Component.translate('item.modifiers.armor').getString(),
    Component.translate('item.modifiers.body').getString(), Component.translate('item.modifiers.chest').getString(),
    Component.translate('item.modifiers.feet').getString(), Component.translate('item.modifiers.hand').getString(),
    Component.translate('item.modifiers.head').getString(), Component.translate('item.modifiers.legs').getString(),
    Component.translate('item.modifiers.mainhand').getString(), Component.translate('item.modifiers.offhand').getString(),
    Component.translate('item.modifiers.saddle').getString()]

/*
    Apply equipment-specific tooltip modifications.
*/
ItemEvents.dynamicTooltips('equipment_items', event => {
    let trimIndex = -1
    let attributeIndex = -1
    let modifiedAttributeLine = false
    
    for (let i in event.lines) {
        let line = event.lines[i].getString()

        if (attributeIndex == -1 && line.startsWith('+')) {
            //attributeIndex = i
        }
        // Replace the 'Upgrade:' text with 'Trim:' 
        if (line == Component.translate('item.minecraft.smithing_template.upgrade').getString()) {
            event.lines.set(i, Component.translate('tooltip.insurgence.armor_trim').gray())

            if (event.lines[i-1].getString().startsWith('•')) { // Only apply spacer if affixes are immediately before
                trimIndex = i
            }
        }

        // Make the spacer before attributes show again, but only the first spacer
        if (!modifiedAttributeLine && item_modifier_tooltips.indexOf(line) != -1) {
            event.lines.set(i, Component.translate('tooltip.insurgence.attributes').gray())
            modifiedAttributeLine = true
            attributeIndex = i
        }
    }

    // Add spacing before the armor trim
    if (trimIndex != -1) {
        event.lines.add(trimIndex, Component.literal(' '))
    }

    // Remove the "Can be Imbued" line
    if (event.item.componentMap.get("irons_spellbooks:spell_container") != null) {
        event.lines.remove(5)
        event.lines.set(3, Component.literal('§kA§r').color('#64EBF0').append(
            Component.literal(' ').withStyle().append(
            Component.translate('tooltip.insurgence.spell_imbued').color('#64EBF0'))))
    }
    else {
        event.lines.remove(3)   // Remove the temporary spell marker line
    }
})

/*
    Apply item rarity text to the tooltip.
*/
ItemEvents.dynamicTooltips('item_rarity', event => {
    let rarityName = event.item.rarity.toString().toLowerCase()
    let rarityColor = 'white'

    if (event.item.components.has('apotheosis:rarity')) {   // Use Apotheosis rarity
        let rarityName = event.item.components.get('apotheosis:rarity').toString().split(' ')[2]

        switch (rarityName) {
            case 'apotheosis:common}':
                rarityName = 'common'
                rarityColor = '#808080'
                break

            case 'apotheosis:uncommon}':
                rarityName = 'uncommon'
                rarityColor = '#33FF33'
                break
            
            case 'apotheosis:rare}':
                rarityName = 'rare'
                rarityColor = '#5555FF'
                break

            case 'apotheosis:epic}':
                rarityName = 'epic'
                rarityColor = '#BB00BB'
                break

            case 'apotheosis:mythic}':
                rarityName = 'mythic'
                rarityColor = '#ED7014'
                break

            case 'ancientreforging:ancient}':
                rarityName = 'ancient'
                rarityColor = '#FF55FF'
                break
        }
        event.lines.set(2, Component.translate(`tooltip.insurgence.rarity.${rarityName}`).color(rarityColor).bold())
    }
    else if (event.item.hasTag('insurgence:rarity_override')) { // Use custom rarity

        if (event.item.hasTag('insurgence:rarity_override/uncommon')) {
            rarityName = 'uncommon'
            rarityColor = '#FFFF55'
        }
        else if (event.item.hasTag('insurgence:rarity_override/rare')) {
            rarityName = 'rare'
            rarityColor = '#55FFFF'
        }
        else if (event.item.hasTag('insurgence:rarity_override/epic')) {
            rarityName = 'epic'
            rarityColor = '#FF55FF'
        }
        else if (event.item.hasTag('insurgence:rarity_override/legendary')) {
            rarityName = 'legendary'
            rarityColor = '#FFAA00'
        }
        event.lines.set(2, Component.translate(`tooltip.insurgence.rarity.${rarityName}`).color(rarityColor).bold())
    }
    else {  // Use default rarity
        switch (rarityName) {
            case 'irons_spellbooks_rarity_cinderous':
                rarityName = 'legendary'
                rarityColor = '#FFAA00'
                break

            case 'iss_magicfromtheeast_rarity_bloodful':
                rarityName = 'legendary'
                rarityColor = '#FFAA00'
                break
            
            case 'epic':
                rarityColor = 'light_purple'
                break

            case 'rare':
                rarityColor = 'aqua'
                break

            case 'uncommon':
                rarityColor = 'yellow'
                break

            default:
                rarityColor = 'gray'
        }
        event.lines.set(2, Component.translate(`tooltip.insurgence.rarity.${rarityName}`).color(rarityColor).bold())
    }
})

/*
    Apply trim template informational tooltips.
*/
ItemEvents.dynamicTooltips('trim_template_information', event => {
    let patternName = event.item.id.toString().split(':')[1].split('_')[0]

    event.lines.set(1, Component.translate(`tooltip.insurgence.info.${patternName}_pattern_1`).gray().italic())
    event.lines.set(2, Component.translate(`tooltip.insurgence.info.${patternName}_pattern_2`).gray().italic())
})

/*
    Apply information about debug ticket effects.
*/
ItemEvents.dynamicTooltips('debug_tickets', event => {
    let type = event.item.customData.get('type')
    if (type != null) type = type.getAsString()

    if (type == 'world_tier') {
        let tier = event.item.customData.get('tier')
        if (tier != null) tier = tier.getAsString()
        
        if (tier == 'haven' || tier == 'frontier' || tier == 'ascent' || tier == 'summit' || tier == 'pinnacle') {
            event.lines.set(1, Component.translate(`tooltip.insurgence.debug_ticket.world_tier_${tier.substring(1, tier.length - 1)}`).gold().italic())
        }
    }
})