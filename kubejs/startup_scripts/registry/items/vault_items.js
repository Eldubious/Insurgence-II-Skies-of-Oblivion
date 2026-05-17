// Register Vault Keys and the Token of Renewal
const keyTypes = ['pillager', 'ominous_pillager', 'swords_tower_zero']
StartupEvents.registry('item', event => {

    event.create('insurgence:token_of_renewal')
        .rarity('rare')
        .translationKey('item.insurgence.token_of_renewal')
        .tooltip(Component.translate('tooltip.insurgence.info.token_of_renewal').gray().italic())

    for (let i in keyTypes) {
        event.create(`insurgence:${keyTypes[i]}_key`)
            .rarity('uncommon')
            .translationKey(`item.insurgence.${keyTypes[i]}_key`)
            .tag('insurgence:vault_keys')
    }
})
