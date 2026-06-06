const Int = Java.loadClass("java.lang.Integer");

let worldTiers = ["haven", "frontier", "ascent", "summit", "pinnacle"];
let shrineWaveTime = 1200;
let shrineSetupTime = 60;
let towerColors = ["red", "green", "blue", "yellow", "purple", "pink"];

ServerEvents.generateData("last", event => {
    gateways.forEach(gateway => {
        // Generate gateways for use in waystone shrines
        if (gateway.type == "shrine_encounter") {
            for (let k in worldTiers) {
                let worldTier = worldTiers[k];
                let json = {
                    type: "apotheosis:tiered",
                    settings: {
                        tier: worldTier,
                        size: gateway.size,
                        color: gateway.color,
                    },
                    boss_event: {
                        mode: "boss_bar",
                        fog: false
                    },
                    waves: [],
                    rewards: [
                        {
                            type: "gateways:command",
                            command: "function insurgence:gameplay/gateway_shrine_reward",
                            desc: "gateway_reward.insurgence.place_waystone.desc"
                        },
                        {
                            type: "gateways:stack",
                            stack: {
                                id: "insurgence:token_of_renewal",
                                count: 1
                            }
                        }
                    ],
                    failures: [
                        {
                            type: "gateways:command",
                            command: "function insurgence:gameplay/failed_gateway_shrine",
                            desc: "gateway_failure.insurgence.failed_gateway_shrine.desc"
                        }
                    ],
                    rules: {
                        requires_nearby_player: true
                    }
                };
                
                // Add each wave to json
                for (let i = 0; i < gateway.waveCount; i++) {
                    let waveJson = {
                        max_wave_time: Int.valueOf(shrineWaveTime),
                        setup_time: Int.valueOf(shrineSetupTime),
                        entities: [],
                        modifiers: [],
                        rewards: []
                    };
                    
                    // Add entities to wave
                    for (let j in gateway.entities) {
                        let entity = gateway.entities[j];
                        let entityJson = {
                            type: "gateways:standard",
                            entity: entity.id,
                            count: Int.valueOf(Math.floor(entity.initCount + (entity.scaleFactor * i) + (entity.scaleFactor * k))),
                            finalize_spawn: false
                        };

                        // Add a description for entity
                        if (entity.desc != undefined) {
                            entityJson.desc = entity.desc;
                        }
                        
                        // Add custom nbt to entity
                        if (entity.customNbt != undefined) {
                            entityJson.nbt = entity.customNbt;
                        }
                        
                        // Add effects to the entity
                        if (entity.effects.length > 0) {
                            let nbtJson = {
                                active_effects: []
                            };
                            
                            for (let l in entity.effects) {
                                let effect = gatewayEffects[entity.effects[l]];
                                let effectJson = {
                                    id: effect.id,
                                    amplifier: Int.valueOf(Math.floor(effect.baseAmplifier + (effect.scaleFactor * k) + (effect.scaleFactor * i))),
                                    duration: Int.valueOf(effect.duration)
                                };
                                nbtJson.active_effects.push(effectJson);
                            };
                            
                            if (entity.customNbt != undefined) {    // Nbt was already defined; add effects to preexisting nbt
                                entityJson.nbt.active_effects = nbtJson.active_effects;
                            }
                            else {
                                entityJson.nbt = nbtJson;     
                            }
                        }
                        
                        // Add attribute modifiers to the entity
                        if (entity.modifiers.length > 0) {
                            entityJson.modifiers = [];
                            for (let l in entity.modifiers) {
                                let modifier = gatewayModifiers[entity.modifiers[l]];
                                let modifierJson = {
                                    attribute: modifier.id,
                                    operation: modifier.operation,
                                    value: Math.floor((modifier.baseValue + (modifier.scaleFactor * k) + (modifier.scaleFactor * i)) * 100) / 100
                                };
                                entityJson.modifiers.push(modifierJson);
                            }
                        }
                        
                        // Add gear set modifiers to the entity
                        if (entity.gearSet != undefined) {
                            if (entityJson.modifiers == undefined)
                                entityJson.modifiers = [];
                            let gearJson = {
                                type: "gateways:gear_set",
                                gear_set: `${entity.gearSet}/${worldTier}`
                            };
                            entityJson.modifiers.push(gearJson);
                        }

                        // Add loot table to the entity
                        if (entity.lootTable != undefined) {
                            if (entityJson.modifiers == undefined)
                                entityJson.modifiers = [];
                            let lootJson = {
                                type: "gateways:loot_table",
                                loot_table: entity.lootTable
                            };
                            entityJson.modifiers.push(lootJson);
                        }

                        // Add a passenger to the entity
                        if (entity.passenger != undefined) {
                            if (entityJson.modifiers == undefined)
                                entityJson.modifiers = [];
                            let passengerJson = {
                                type: "apotheosis:passenger",
                                entity: {
                                    type: "gateways:standard",
                                    entity: entity.passenger.id,
                                    finalize_spawn: false,
                                    modifiers: []
                                }
                            };

                            if (entity.passenger.gearSet != undefined) {
                                passengerJson.entity.modifiers.push({
                                    type: "gateways:gear_set",
                                    gear_set: `insurgence:${entity.passenger.gearSet}/${worldTier}`
                                });
                            }
                            if (entity.passenger.lootTable != undefined) {
                                passengerJson.entity.modifiers.push({
                                    type: "gateways:loot_table",
                                    loot_table: entity.passenger.lootTable
                                });
                            }
                            if (entity.passenger.customNbt != undefined) {
                                passengerJson.entity.nbt = entity.passenger.customNbt;
                            }

                            entityJson.modifiers.push(passengerJson);
                        }
                        
                        waveJson.entities.push(entityJson);
                    };
                    
                    // Add modifiers to wave
                    for (let j in gateway.modifiers) {
                        let modifier = gatewayModifiers[gateway.modifiers[j]];
                        let modifierJson = {
                            attribute: modifier.id,
                            operation: modifier.operation,
                            value: Math.floor((modifier.baseValue + (modifier.scaleFactor * k) + (modifier.scaleFactor * i)) * 100) / 100
                        };
                        waveJson.modifiers.push(modifierJson);
                    }
                    
                    // Add rewards to wave
                    for (let j in gateway.rewards) {
                        let reward = gateway.rewards[j];
                        let rewardJson = {
                            type: "gateways:stack",
                            stack: {
                                id: reward.item,
                                count: Int.valueOf(reward.baseCount + (reward.scaleFactor * i) + (reward.scaleFactor * k))
                            }
                        };
                        waveJson.rewards.push(rewardJson);
                    };
                    
                    json.waves.push(waveJson);
                }
                console.log(json);
                event.json(`insurgence:gateways/shrine/${gateway.name}_${worldTier}`, json);
                event.getGenerated(`insurgence:gateways/shrine/${gateway.name}_${worldTier}`);
            };
        }
        // Generate gateways for use in towers of staves
        else if (gateway.type == "staves_tower") {
            for (let i = 1; i <= 14; i++) { // Create a gateway for each possible digit
                for (let j in towerColors) {  // For each possible room color
                    let color = towerColors[j];
                    let json = {
                        size: gateway.size,
                        color: gateway.color,
                        waves: [],
                        rewards: [],
                        failures: []
                    };
                    
                    //console.log(json);
                    //event.json(`insurgence:gateways/staves_tower/${gateway.name}/${color}_${i}`, json);
                    //event.getGenerated(`insurgence:gateways/staves_tower/${gateway.name}/${color}_${i}`);
                };
            };
        };
    });
});
