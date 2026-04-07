// Create ore blocks for some new stone types
StartupEvents.registry("block", event => {

  function createOre(stone, material, reqMiningLvl) {
    event.create(`insurgence:${stone}_${material}_ore`)
      .translationKey(`block.insurgence.nether_${material}_ore`)
  }

  createOre("nether", "diamond", "iron")
})