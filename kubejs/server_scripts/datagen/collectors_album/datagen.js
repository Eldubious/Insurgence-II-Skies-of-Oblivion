// Generate all the JSON files for the cards in the collector's album
ServerEvents.generateData("last", event => {
  let currPageOrder = 0
  let currIndex = 1

  for (let catIndex in cardDefinitions) {
    let category = cardDefinitions[catIndex]
    // Register the category
    let json = {
      type: "collectorsalbum:category",
      id: `${category.namespace}:${category.id}`,
      display: {
        name: `album.category.${category.namespace}.${category.id}`,
        translate: true,
        styles: [
          "blue"
        ],
        padeOrder: currPageOrder
      },
      template: {
        bookmarkItem: category.tabItem
      },
      cards: getCardList(category, true)
    }
    currPageOrder++

    event.json(`${category.namespace}:album/categories/${category.id}`, json)
    event.getGenerated(`${category.namespace}:album/categories/${category.id}`)

    // Register number cards if necessary
    if (category.hasNumberCards) {
      for (let rankIndex in ranks) {
        let rank = ranks[rankIndex]
        for (let rarityIndex in rarities) {
          let rarity = rarities[rarityIndex]

          let json = {
            type: "collectorsalbum:rarity_card",
            id: `${category.namespace}:${rarity}_${rank}_of_${category.id}`,
            rarity: rarity.toUpperCase(),
            item: `${category.namespace}:${rarity}_${rank}_of_${category.id}`,
            category: `${category.namespace}:${category.id}`,
            number: currIndex
          }
          currIndex++

          event.json(`${category.namespace}:album/cards/${rarity}_${rank}_of_${category.id}`, json)
          event.getGenerated(`${category.namespace}:album/cards/${rarity}_${rank}_of_${category.id}`)
        }
      }
    }

    // Register the other cards in the category
    for (let cIndex in category.cards) {
      let card = category.cards[cIndex]
      if (card.hasRarity) {
        for (let rarityIndex in rarities) {
          let rarity = rarityIndex

          let json = {
            type: "collectorsalbum:rarity_card",
            id: `${card.namespace}:${rarity}_${card.id}`,
            rarity: rarity.toUpperCase(),
            item: `${card.namespace}:${rarity}_${card.id}`,
            category: `${category.namespace}:${category.id}`,
            number: currIndex
          }
          currIndex++

          event.json(`${card.namespace}:album/cards/${rarity}_${card.id}`, json)
          event.getGenerated(`${card.namespace}:album/cards/${rarity}_${card.id}`)
        }
      }
      else {

      }
    }
  }

})

// Returns a list of all card's item ids as strings
function getCardList(category, generateNumberCards) {
  let retVal = []

  if (generateNumberCards) {
    for (let rankIndex in ranks) {
      let rank = ranks[rankIndex]
      for (let rarityIndex in rarities) {
        let rarity = rarities[rarityIndex]
        retVal.push(`${category.namespace}:${rarity}_${rank}_of_${category.id}`)
      }
    }
  }

  for (let cIndex in category.cards) {
    let card = category.cards[cIndex]
    if (card.hasRarity) {
      for (let rarityIndex in rarities) {
        let rarity = rarities[rarityIndex]
        retVal.push(`${card.namespace}:${rarity}_${card.id}`)
      }
    }
    else {
      retVal.push(`${card.namespace}:${card.id}`)
    }
  }
  return retVal
}