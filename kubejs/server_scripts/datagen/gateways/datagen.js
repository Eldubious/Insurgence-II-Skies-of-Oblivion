let worldTiers = ["haven", "frontier", "ascent", "summit", "pinnacle"]
let shrineWaveTime = 1200
let shrineSetupTime = 60
let shrineSetupTimeScaleFactor = 20

// Generate gate pearls for each shrine type, with all permutations for each world tier.
ServerEvents.generateData("last", event => {

  gateways.forEach(gateway => {
    if (gateway.type == "shrine_encounter") {
      
    }
  })
})