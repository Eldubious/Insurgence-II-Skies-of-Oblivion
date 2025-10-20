// Register Vault Keys and the Token of Renewal
StartupEvents.registry('item', event => {

    event.create('insurgence:token_of_renewal')
        .rarity('rare')
        .translationKey('item.insurgence.token_of_renewal')
        .tooltip(Component.translate('tooltip.insurgence.info.token_of_renewal').gray().italic())

    let keyTypes = ['battle_tower', 'ominous_battle_tower', 'mansion', 'ominous_mansion', 'forge', 'heavy_forge',
        'pyromancer', 'cryomancer', 'archevoker', 'priest', 'apothecarist', 'common_invader', 'uncommon_invader', 'rare_invader',
        'epic_invader', 'mythic_invader']
    for (let i in keyTypes) {
        event.create(`insurgence:${keyTypes[i]}_key`)
            .rarity('uncommon')
            .translationKey(`item.insurgence.${keyTypes[i]}_key`)
            .tag('insurgence:vault_keys')
    }
})