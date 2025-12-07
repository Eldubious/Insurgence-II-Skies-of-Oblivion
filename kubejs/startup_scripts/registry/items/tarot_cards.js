// Register the items for all the minor and major arcana
const rarities = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythical']
const suits = ['swords', 'staves', 'cups', 'rings']
const ranks = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'twenty_one', 'fifty_five']

StartupEvents.registry("item", event => {

  // Register all of the minor arcana
  for (let suit in suits) {
    for (let rank in ranks) {
      for (let rarity in rarities) {
        event.create(`insurgence:${rarity}_${rank}_of_${suit}`)
          .translationKey(`item.insurgence.${rank}_of_${suit}`)
          .tooltip(Component.translate(`tooltip.insurgence.card_of_${suit}`).gray())
          .texture(`insurgence:item/tarot_cards/${rank}_of_${suit}`)  // or *.png
          .rarity('uncommon')
          .tag('insurgence:tarot_cards')
          .tag('insurgence:tarot_cards/minor_arcana')
          .tag(`insurgence:tarot_cards/${rank}_of_${suit}`)
          .tag(`insurgence:tarot_cards/${suit}`)
          .tag(`insurgence:tarot_cards/${rank}`)
          .tag(`insurgence:tarot_cards/${rarity}`)
      }
    }
  }
  
})