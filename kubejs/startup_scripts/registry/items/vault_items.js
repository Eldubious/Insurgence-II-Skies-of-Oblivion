// Register Vault Keys and the Token of Renewal
const keyTypes = [
    'pillager', 'ominous_pillager', 'sword_tower', 'staff_tower', 'cup_tower',
    'ring_tower'
];
StartupEvents.registry('item', event => {

    // Token of Renewal
    event.create('insurgence:token_of_renewal')
        .rarity('rare')
        .translationKey('item.insurgence.token_of_renewal')
        .tooltip(Component.translate('tooltip.insurgence.info.token_of_renewal').gray().italic());

    // Vault keys
    for (let i in keyTypes) {
        event.create(`insurgence:${keyTypes[i]}_key`)
            .rarity('uncommon')
            .translationKey(`item.insurgence.${keyTypes[i]}_key`)
            .texture(`insurgence:item/vault_keys/${keyTypes[i]}_key`)
            .tag('insurgence:vault_keys');
    }

    // Tower of Rings reward coins
    for (let i = 0; i <= 10; i++) {
        event.create(`insurgence:reward_coin_${i}`)
            .rarity('uncommon')
            .translationKey(`item.insurgence.reward_coin_${i}`)
            .texture(`insurgence:item/reward_coins/reward_coin_${i}`)
            .tag('insurgence:reward_coins');
    }
});
