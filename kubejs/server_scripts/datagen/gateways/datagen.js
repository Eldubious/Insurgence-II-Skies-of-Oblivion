let worldTiers = ["haven", "frontier", "ascent", "summit", "pinnacle"]
let shrineWaveTime = 1200
let shrineSetupTime = 60
let shrineSetupTimeScaleFactor = 20

// Generate gate pearls for each shrine type, with all permutations for each world tier.
ServerEvents.generateData("last", event => {

  gateways.forEach(gateway => {
    if (gateway.type == "shrine_encounter") {
      for (let tierIdx in worldTiers) {
        let tier = worldTiers[tierIdx]
        let json = {
          size: gateway.size,
          color: gateway.color,
          waves: [],
          rewards: [
            {
              type: "gateways:command",
              command: "function insurgence:gameplay/gateway_shrine_reward",
              desc: "gateway_reward.insurgence.place_waystone.desc"
            },
          ],
          failures: [
            {
              type: "gateways:command",
              command: "function insurgence:gameplay/failed_gateway_shrine",
              desc: "gateway_failure.insurgence.failed_gateway_shrine.desc"
            }
          ]
        }

        for (let waveIdx = 0; j < gateway.waveCount; j++) {  // Append wave info to gateway json
          let waveJson = {
            entities: [],
            modifiers: [],
            rewards: [],
            max_wave_time: shrineWaveTime,  
            setup_time: Math.max([0, shrineSetupTime - (waveIdx * shrineSetupTimeScaleFactor)])
          }

          for (let enemyIdx in gateway.entities) {  // Append enemy info to wave json
            let entity = gateway.entities[enemyIdx]
            let entityJson = {
              entity: entity.id,
              count: entity.initCount + (waveIdx * entity.scaleFactor),
              finalize_spawn: false,
              modifiers: [],
              nbt: {}
            }

            if (entity.modifiers.length > 0) {  // Append enemy's attributes to its json
              for (let modifierIdx in entity.modifiers) {
                let modifier = gatewayModifiers[entity.modifiers[modifierIdx]]
                let modifierJson = {
                  attribute: modifier.id,
                  value: Math.max([0, modifier.baseValue + ((tierIdx + waveIdx) * modifier.scaleFactor)]),
                  operation: modifier.operation
                }

                entityJson.modifiers.push(modifierJson)
              }
            }

            if (entity.effects.length > 0) {    // Append enemy's potion effects to its json
              let effectsList = []

              for (let effectIdx in entity.effects) {
                let effect = gatewayEffects[entity.effects[effectIdx]]
                let effectJson = {
                  id: effect.id,
                  amplifier: Math.max([0, Math.floor(effect.baseAmplifier + ((tierIdx + waveIdx) * effect.scaleFactor))]),
                  duration: effect.duration
                }
                effectsList.push(effectJson)
              }

              entityJson.nbt.active_effects = effectsList
            }

            waveJson.entities.push(entityJson)
          }

          for (let rewardIdx in gateway.rewards) {  // Append wave rewards to wave json
            let reward = gateway.rewards[rewardIdx]
            let rewardJson = {
              type: "gateways:stack",
              stack: {
                id: reward.item,
                count: reward.baseCount + ((tierIdx + waveIdx) * reward.scaleFactor)
              }
            }
            waveJson.rewards.push(rewardJson)
          }

          json.waves.push(waveJson)
        }

        event.json(`insurgence:gateways/shrine/${gateway.name}_${tier}`, json)
        event.getGenerated(`insurgence:gateways/shrine/${gateway.name}_${tier}`)
      }
    }
    
  })
})