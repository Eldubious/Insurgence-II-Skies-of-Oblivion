// Remove the affix and gem loot injection from Apotheosis
LootJS.modifiers(event => {

    event.removeGlobalModifiers("apotheosis:gem_loot_injection")
    //event.removeGlobalModifiers("apotheosis:affix_loot_injection")
})