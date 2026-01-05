// Register the items for all the minor and major arcana
const rarities = ['common', 'uncommon', 'rare', 'epic', 'legendary', 'mythical']
const suits = ['swords', 'staves', 'cups', 'rings']
const ranks = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'twenty_one', 'fifty_five']
const swordArcana = ['the_phantasm', 'the_undead']
const staffArcana = ['the_ancient']
const cupArcana = ['the_creator', 'the_destructor', 'the_tower']
const ringArcana = ['the_brilliance', 'the_mine', 'the_alloy', 'the_spectrum']

StartupEvents.registry("item", event => {

  // Register all of the minor arcana
  for (let i in suits) {
    let suit = suits[i]
    for (let j in ranks) {
      let rank = ranks[j]
      for (let k in rarities) {
        let rarity = rarities[k]
        event.create(`insurgence:${rarity}_${rank}_of_${suit}`)
          .translationKey(`item.insurgence.${rank}_of_${suit}`)
          .tooltip(Component.translate(`tooltip.insurgence.lore.card_of_${suit}`).gray())
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

  // Register all the major arcana
  for (let i in rarities) {
    let rarity = rarities[i]
    for (let j in swordArcana) {
      let arcana = swordArcana[j]
      event.create(`insurgence:${rarity}_${arcana}`)
        .translationKey(`item.insurgence.${arcana}`)
        .tooltip(Component.translate(`tooltip.insurgence.lore.${arcana}`).gray())
        .texture(`insurgence:item/tarot_cards/${arcana}`)
        .rarity('rare')
        .tag('insurgence:tarot_cards')
        .tag('insurgence:tarot_cards/major_arcana')
        .tag('insurgence:tarot_cards/swords')
    }
    for (let j in staffArcana) {
      let arcana = staffArcana[j]
      event.create(`insurgence:${rarity}_${arcana}`)
        .translationKey(`item.insurgence.${arcana}`)
        .tooltip(Component.translate(`tooltip.insurgence.lore.${arcana}`).gray())
        .texture(`insurgence:item/tarot_cards/${arcana}`)
        .rarity('rare')
        .tag('insurgence:tarot_cards')
        .tag('insurgence:tarot_cards/major_arcana')
        .tag('insurgence:tarot_cards/staves')
    }
    for (let j in cupArcana) {
      let arcana = cupArcana[j]
      event.create(`insurgence:${rarity}_${arcana}`)
        .translationKey(`item.insurgence.${arcana}`)
        .tooltip(Component.translate(`tooltip.insurgence.lore.${arcana}`).gray())
        .texture(`insurgence:item/tarot_cards/${arcana}`)
        .rarity('rare')
        .tag('insurgence:tarot_cards')
        .tag('insurgence:tarot_cards/major_arcana')
        .tag('insurgence:tarot_cards/cups')
    }
    for (let j in ringArcana) {
      let arcana = ringArcana[j]
      event.create(`insurgence:${rarity}_${arcana}`)
        .translationKey(`item.insurgence.${arcana}`)
        .tooltip(Component.translate(`tooltip.insurgence.lore.${arcana}`).gray())
        .texture(`insurgence:item/tarot_cards/${arcana}`)
        .rarity('rare')
        .tag('insurgence:tarot_cards')
        .tag('insurgence:tarot_cards/major_arcana')
        .tag('insurgence:tarot_cards/rings')
    }
  }
  
  // Register the five ultimate arcana
  event.create('insurgence:the_champion') // Ultimate sword arcana
    .translationKey('item.insurgence.the_champion')
    .tooltip(Component.translate('tooltip.insurgence.lore.the_champion').gray())
    .texture('insurgence:item/tarot_cards/the_champion')
    .rarity('epic')
    .tag('insurgence:tarot_cards')
    .tag('insurgence:tarot_cards/ultimate_arcana')
    .tag('insurgence:tarot_cards/swords')

  event.create('insurgence:the_wisdom') // Ultimate staff arcana
    .translationKey('item.insurgence.the_wisdom')
    .tooltip(Component.translate('tooltip.insurgence.lore.the_wisdom').gray())
    .texture('insurgence:item/tarot_cards/the_wisdom')
    .rarity('epic')
    .tag('insurgence:tarot_cards')
    .tag('insurgence:tarot_cards/ultimate_arcana')
    .tag('insurgence:tarot_cards/staves')

  event.create('insurgence:the_peak') // Ultimate cup arcana
    .translationKey('item.insurgence.the_peak')
    .tooltip(Component.translate('tooltip.insurgence.lore.the_peak').gray())
    .texture('insurgence:item/tarot_cards/the_peak')
    .rarity('epic')
    .tag('insurgence:tarot_cards')
    .tag('insurgence:tarot_cards/ultimate_arcana')
    .tag('insurgence:tarot_cards/cups')

  event.create('insurgence:the_wealth') // Ultimate ring arcana
    .translationKey('item.insurgence.the_wealth')
    .tooltip(Component.translate('tooltip.insurgence.lore.the_wealth').gray())
    .texture('insurgence:item/tarot_cards/the_wealth')
    .rarity('epic')
    .tag('insurgence:tarot_cards')
    .tag('insurgence:tarot_cards/ultimate_arcana')
    .tag('insurgence:tarot_cards/rings')

  event.create('insurgence:the_universe') // Ultimate arcana
    .translationKey('item.insurgence.the_universe')
    .tooltip(Component.translate('tooltip.insurgence.lore.the_universe').gray())
    .texture('insurgence:item/tarot_cards/the_universe')
    .rarity('epic')
    .tag('insurgence:tarot_cards')
    .tag('insurgence:tarot_cards/ultimate_arcana')
})