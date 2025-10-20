// Register new creative tabs to help with organization
StartupEvents.registry("creative_mode_tab", event => {

    event.create("insurgence:vault_keys")
        .translationKey("creative_tab.insurgence.vault_keys")
        .icon(() => "minecraft:ominous_trial_key")
        .content(() => [
            'minecraft:vault', 'enderscape:end_vault', 'insurgence:token_of_renewal',
            'minecraft:trial_key', 'minecraft:ominous_trial_key', 'enderscape:end_city_key',
            'insurgence:common_invader_key', 'insurgence:uncommon_invader_key', 'insurgence:rare_invader_key',
            'insurgence:epic_invader_key', 'insurgence:mythic_invader_key', 'insurgence:battle_tower_key',
            'insurgence:ominous_battle_tower_key', 'insurgence:mansion_key', 'insurgence:ominous_mansion_key',
            'insurgence:forge_key', 'insurgence:heavy_forge_key', 'insurgence:pyromancer_key',
            'insurgence:cryomancer_key', 'insurgence:priest_key', 'insurgence:archevoker_key',
            'insurgence:apothecarist_key'
        ]
    )
})