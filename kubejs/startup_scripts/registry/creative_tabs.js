// Register new creative tabs to help with organization
StartupEvents.registry("creative_mode_tab", event => {

    
    event.create("insurgence:vaults_and_keys")
        .translationKey("creative_tab.insurgence.vault_keys")
        .icon(() => "minecraft:ominous_trial_key")

    event.create("insurgence:collectors_cards")
        .translationKey("creative_tab.insurgence.collectors_cards")
        .icon(() => "insurgence:common_two_of_swords")

    event.create("insurgence:debug_tickets")
        .translationKey("creative_tab.insurgence.debug_tickets")
        .icon(() => "insurgence:debug_ticket")
})
