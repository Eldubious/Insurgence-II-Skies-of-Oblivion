// Register all custom cards for the Collector's Album
const cards = [
    {
        card: 'oak_sapling',
        rarity: 'common'
    },
    {
        card: 'birch_sapling',
        rarity: 'common'
    },
    {
        card: 'spruce_sapling',
        rarity: 'common'
    },
    {
        card: 'jungle_sapling',
        rarity: 'common'
    },
    {
        card: 'dark_oak_sapling',
        rarity: 'common'
    },
    {
        card: 'acacia_sapling',
        rarity: 'common'
    },
    {
        card: 'bamboo',
        rarity: 'common'
    },
    {
        card: 'mangrove_propagule',
        rarity: 'uncommon'
    },
    {
        card: 'cork_sapling',
        rarity: 'uncommon'
    },
    {
        card: 'river_sapling',
        rarity: 'uncommon'
    },
    {
        card: 'hawberry_sapling',
        rarity: 'uncommon'
    },
    {
        card: 'lychee_sapling',
        rarity: 'uncommon'
    },
    {
        card: 'mango_sapling',
        rarity: 'uncommon'
    },
    {
        card: 'persimmon_sapling',
        rarity: 'uncommon'
    },
    {
        card: 'apple_sapling',
        rarity: 'uncommon'
    },
    {
        card: 'bayberry_sapling',
        rarity: 'uncommon'
    },
    {
        card: 'warped_fungus',
        rarity: 'rare'
    },
    {
        card: 'crimson_fungus',
        rarity: 'rare'
    },
    {
        card: 'pale_oak_sapling',
        rarity: 'rare'
    },
    {
        card: 'netherwood_sapling',
        rarity: 'rare'
    },
    {
        card: 'pear_sapling',
        rarity: 'rare'
    },
    {
        card: 'peach_sapling',
        rarity: 'rare'
    },
    {
        card: 'avocado_sapling',
        rarity: 'epic'
    },
    {
        card: 'orange_sapling',
        rarity: 'epic'
    },
    {
        card: 'kiwi_sapling',
        rarity: 'epic'
    },
    {
        card: 'fig_sapling',
        rarity: 'epic'
    },
    {
        card: 'cherry_sapling',
        rarity: 'epic'
    },
    {
        card: 'mangosteen_sapling',
        rarity: 'common'
    },
    {
        card: 'twisted_sapling',
        rarity: 'legendary'
    },
    {
        card: 'veiled_sapling',
        rarity: 'legendary'
    },
    {
        card: 'otherworld_sapling',
        rarity: 'legendary'
    }
]

StartupEvents.registry('item', event => {

    for (let i in cards) {
        let name = cards[i].card
        let rarity = cards[i].rarity

        event.create(`insurgence:${rarity}_${name}_card`)
            .translationKey(`item.insurgence.card.${rarity}_${name}`)
            .tag('insurgence:collectors_cards')
            .tag(`insurgence:collectors_cards/${rarity}`)
    }

})