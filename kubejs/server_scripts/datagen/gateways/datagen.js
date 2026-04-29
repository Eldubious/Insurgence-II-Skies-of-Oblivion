let worldTiers = ["haven", "frontier", "ascent", "summit", "pinnacle"]
let shrineWaveTime = 1200
let shrineSetupTime = 60
let towerColors = ["red", "green", "blue", "yellow", "purple", "pink"]

ServerEvents.generateData("last", event => {

  gateways.forEach(gateway => {
    // Generate gateways for use in waystone shrines
    if (gateway.type == "shrine_encounter") {
      for (let k in worldTiers) {
        let worldTier = worldTiers[k]
        let json = {
          size: gateway.size,
          color: gateway.color,
          waves: [],
          rewards: [
            {
              type: "gateways:command",
              command: "function insurgence:gameplay/gateway_shrine_reward",
              desc: "gateway_reward.insurgence.place_waystone.desc"
            }
          ],
          failures: [
            {
              type: "gateways:command",
              command: "function insurgence:gameplay/failed_gateway_shrine",
              desc: "gateway_failure.insurgence.failed_gateway_shrine.desc"
            }
          ]
        }

        // Add each wave to json
        for (let i = 0; i < gateway.waveCount; i++) {
          let waveJson = {
            max_wave_time: shrineWaveTime,
            setup_time: shrineSetupTime,
            entities: [],
            modifiers: [],
            rewards: []
          }

          // Add entities to wave
          for (let j in gateway.entities) {
            let entity = gateway.entities[j]
            let entityJson = {
              id: entity.id,
              count: entity.initCount + (entity.scaleFactor * i) + (entity.scaleFactor * k),
              finalize_spawn: false
            }
            waveJson.entities.push(entityJson)
          }

          // Add rewards to wave
          for (let j in gateway.rewards) {
            let reward = gateway.rewards[j]
            let rewardJson = {
              type: "gateways:stack",
              stack: {
                id: reward.item,
                count: reward.baseCount + (reward.scaleFactor * i) + (reward.scaleFactor * k)
              }
            }
            waveJson.rewards.push(rewardJson)
          }

          json.waves.push(waveJson)
        }

        event.json(`insurgence:gateways/shrine/${gateway.name}_${worldTier}`, json)
        event.getGenerated(`insurgence:gateways/shrine/${gateway.name}_${worldTier}`)
      }
    }
    // Generate gateways for use in towers of staves
    else if (gateway.type == "staves_tower") {
      for (let i = 1; i <= 14; i++) { // Create a gateway for each possible digit
        for (let j in towerColors) {  // For each possible room color
          let color = towerColors[j]
          let json = {
            size: gateway.size,
            color: gateway.color,
            waves: [],
            rewards: [],
            failures: []
          }

          json.waves.push({
            entities: [
              {
                entity: gateway.entity.id,
                count: i
              },
              {
                entity: gateway.entity.id,
                count: 14 - i
              }
            ]
          })
          console.log(json)
          //event.json(`insurgence:gateways/staves_tower/${gateway.name}/${color}_${i}`, json)
          //event.getGenerated(`insurgence:gateways/staves_tower/${gateway.name}/${color}_${i}`)
        }
      }
    }
  })
})