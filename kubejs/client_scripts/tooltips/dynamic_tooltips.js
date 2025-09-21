ItemEvents.dynamicTooltips('unique_items', event => {
    let trimIndex = -1
    let attributeIndex = -1
    
    for (let i in event.lines) {
        let line = event.lines[i].getString()

        if (attributeIndex == -1 && line.startsWith('+')) {
            //attributeIndex = i
        }
        // Replace the 'Upgrade:' text with 'Armor Trim:' 
        if (line == Component.translate('item.minecraft.smithing_template.upgrade').getString()) {
            event.lines.set(i, Component.translate('tooltip.insurgence.armor_trim'))

            if (event.lines[i-1].getString().startsWith('•')) { // Only apply spacer if affixes are immediately before
                trimIndex = i
            }
        }
    }

    // Add spacing before the armor trim
    if (trimIndex != -1) {
        event.lines.add(trimIndex, Component.literal(' '))
    }

    // Add spacing before attributes
    if (attributeIndex != -1) {
        event.lines.add(attributeIndex, Component.literal(' '))
    }
})