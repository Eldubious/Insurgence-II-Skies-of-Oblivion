function getDividerComponent() {
  return Component.literal("   ----------------").color("#555555")
}

// Return the component which hints about the functions of SHIFT and ALT
function getKeypressComponent(shift, alt) {
  let color = "#AAAAAA"
  if (shift) {
    if (alt) return Component.translate("tooltip.insurgence.format.release_shift_and_alt").color(color)
      return Component.translate("tooltip.insurgence.format.press_both").color(color)
  }
  if (alt) return Component.translate("tooltip.insurgence.format.press_both").color(color)
    return Component.translate("tooltip.insurgence.format.press_shift_or_alt").color(color)
}

// Returns the text component which displays the durability of the item remaining
function getDurabilityComponent(item) {
  let maxDamage = item.getMaxDamage()
  let curDamage = item.getDamageValue()
  
  if (maxDamage == 0 || maxDamage == undefined || curDamage == undefined) {
    return Component.literal("DELETE_ME")
  }
  
  let remainingDamage = maxDamage - curDamage
  return Component.translate("tooltip.insurgence.format.durability").color("#AAAAAA").append(
    Component.literal(`${remainingDamage}/${maxDamage}`).color("#74C774")
  )
}

// Returns the text component which displays all of the attribute modifiers on an item
function getAttributeComponent(attributes, shift) {
  let component = Component.empty()
  let attrList = []
  if (attributes.length == 0) return Component.literal("DELETE_ME")
    
  for (let i in attributes) {
    let attr = attributes[i]
    let numberColor = "#417FCB"
    let nameColor = "#163760"
    
    if (attr.name == "attribute.name.generic.burning_time" || attr.name == "attribute.name.generic.fall_damage_multiplier" || attr.name == "attribute.name.malum.charge_duration" || attr.name == "attribute.aileron.cloudskipper_drag" || attr.name == "attribute.name.eternal_starlight.generic.enemy_follow_range_multiplier") {
      numberColor = "#A43F34"
      nameColor = "#5C130B"
    }
    else if (attr.name == "attribute.name.generic.gravity" || attr.name == "attribute.name.generic.scale" || attr.name == "neoforge.name_tag_distance") {
      numberColor = "#56298D"
      nameColor = "#351161"
    }
    
    let attrComponent = Component.translate(attr.operator).color(numberColor).append(
      Component.literal(attr.number).color(numberColor)
    )
    if (shift) {  // Display name and icon if shift is pressed
      attrComponent.append(
        attributeMapping[attr.name]
      ).append(
        Component.translate(attr.name).color(nameColor)
      )
    }
    else {        // Display icon if shift is not pressed
      attrComponent.append(
        attributeMapping[attr.name]
      )
    }
    
    component.append(attrComponent).append(
      Component.literal("  ")
    )
  }
  return component
}

// Returns the text component which displays the item's rarity. Takes into account apothic rarity
function getRarityComponent(item) {
  let rarityName = item.rarity.toString().toLowerCase()
  let rarityColor = 'white'
  let components = item.getComponents()
  
  if (components.has('apotheosis:rarity')) {   // Use Apotheosis rarity
    let apothRarity = components.get('apotheosis:rarity').toString().split(' ')[2]
    
    switch (apothRarity) {
      case 'apotheosis:common}':
        rarityName = 'common'
        rarityColor = '#808080'
        break
      
      case 'apotheosis:uncommon}':
        rarityName = 'uncommon'
        rarityColor = '#33FF33'
        break
      
      case 'apotheosis:rare}':
        rarityName = 'rare'
        rarityColor = '#5555FF'
        break
      
      case 'apotheosis:epic}':
        rarityName = 'epic'
        rarityColor = '#BB00BB'
        break
      
      case 'apotheosis:mythic}':
        rarityName = 'mythic'
        rarityColor = '#ED7014'
        break
      
      case 'ancientreforging:ancient}':
        rarityName = 'ancient'
        rarityColor = '#FF55FF'
        break
    }
  }
  else if (item.hasTag('insurgence:rarity_override')) { // Use custom rarity
    
    if (item.hasTag('insurgence:rarity_override/uncommon')) {
      rarityName = 'uncommon'
      rarityColor = '#FFFF55'
    }
    else if (item.hasTag('insurgence:rarity_override/rare')) {
      rarityName = 'rare'
      rarityColor = '#55FFFF'
    }
    else if (item.hasTag('insurgence:rarity_override/epic')) {
      rarityName = 'epic'
      rarityColor = '#FF55FF'
    }
    else if (item.hasTag('insurgence:rarity_override/legendary')) {
      rarityName = 'legendary'
      rarityColor = '#FFAA00'
    }
  }
  else {  // Use default rarity
    switch (rarityName) {
      case 'irons_spellbooks_rarity_cinderous':
      rarityName = 'legendary'
      rarityColor = '#FFAA00'
      break
      
      case 'iss_magicfromtheeast_rarity_bloodful':
      rarityName = 'legendary'
      rarityColor = '#FFAA00'
      break
      
      case 'epic':
      rarityColor = 'light_purple'
      break
      
      case 'rare':
      rarityColor = 'aqua'
      break
      
      case 'uncommon':
      rarityColor = 'yellow'
      break
      
      default:
      rarityColor = 'gray'
    }
  }
  //console.log(item.id + " " + rarityName)
  return Component.of({
    translate: `tooltip.insurgence.rarity.${rarityName}`,
    color: rarityColor,
    bold: true
  })
}

// Returns the affix ability header component
function getAffixAbilityComponent(shift, affixCount) {
  if (affixCount == 0) return Component.empty()
  if (shift) {
    if (affixCount == 1) {
      return Component.translate("tooltip.insurgence.format.affix_abilities_shift.singular").color("#FFAA00")
    }
    return Component.translate("tooltip.insurgence.format.affix_abilities_shift").color("#FFAA00")
  }

  if (affixCount == 1) {  // Adjust translation for singular
    return Component.of({
      translate: "tooltip.insurgence.format.affix_abilities.singular",
      color: "#FFAA00",
      with: [String(affixCount)]
    })
  }
  return Component.of({
    translate: "tooltip.insurgence.format.affix_abilities",
    color: "#FFAA00",
    with: [String(affixCount)]
  })
}

// Returns the text component which indicates a spell is imbued
function getSpellComponent(shift, hasSpell, spellName, spellLvl, isObfuscated) {
  let textColor = "#E761F1"
  let spellColor = "#E740C0"
  if (shift) {
    if (hasSpell) {
      return Component.translate("tooltip.insurgence.format.spell_imbued_shift").color(textColor)
    }
    else {
      return Component.translate("tooltip.insurgence.format.spell_capacity").color(textColor)
    }
  }
  else {
    if (hasSpell) {
      let spellNameComponent = {
        translate: spellName,
        color: spellColor
      }
      if (isObfuscated) {
        spellNameComponent.obfuscated = isObfuscated
        spellNameComponent.font = "minecraft:alt"
      }

      return Component.of({
        translate: "tooltip.insurgence.format.spell_imbued",
        color: textColor,
        with: [
          spellNameComponent,
          {
            translate: `enchantment.level.${spellLvl}`,
            color: "#FFFFFF"
          }
        ]
      })
    }
    else {
      return Component.translate("tooltip.insurgence.format.spell_capacity").color(textColor)
    }
  }
}

// Returns the header text component for custom jewelry construction
function getJewelryComponent(shift, jewelryType, jewelryPattern) {
  let headerColor = "#5555FF"
  let dashColor = "#555555"
  let partColor = "#00AAAA"
  if (!shift) {
    let component = Component.translate(`tooltip.insurgence.format.${jewelryType}_construction`).color(headerColor).append(
      Component.literal(" ")
    )
    let parts = jewelryParts[jewelryPattern]
    for (let i in parts) {
      let p = parts[i]
      component.append(
        Component.translate(p).color(partColor)
      )

      if (i < parts.length - 1) {
        component.append(
          Component.literal("—").color(dashColor)
        )
      }
    }
    return component
  }
  return Component.translate(`tooltip.insurgence.format.${jewelryType}_construction`).color(headerColor)
}

// Returns the number of different parts a jewelry pattern has
function getJewelryPartCount(jewelryPattern) {
  return jewelryParts[jewelryPattern].length
}

// Store the number of different parts a jewelry pattern has
const jewelryParts = {
  "unknown": [],
  "undefined": [],
  "pattern.irons_jewelry.simple_amulet.item": ["part.irons_jewelry.chain_simple_amulet", "part.irons_jewelry.gem_simple_amulet"],
  "pattern.irons_jewelry.simple_band.item": ["part.irons_jewelry.band_simple"],
  "pattern.irons_jewelry.gemset_ring.item": ["part.irons_jewelry.band_gem", "part.irons_jewelry.gem_round"],
  "pattern.irons_jewelry.simple_chain.item": ["part.irons_jewelry.chain_simple"],
  "pattern.irons_jewelry.sharpshooter_loop.item": ["part.irons_jewelry.band_gem_thin", "part.irons_jewelry.gem_pointy"],
  "pattern.irons_jewelry.stalwart_ring.item": ["part.irons_jewelry.band_stalwart"],
  "pattern.irons_jewelry.rhinestone_amulet.item": ["part.irons_jewelry.chain_rhinestone", "part.irons_jewelry.gem_rhinestone_a", "part.irons_jewelry.gem_rhinestone_b", "part.irons_jewelry.gem_rhinestone_c"],
  "pattern.irons_jewelry.improved_gemset_ring.item": ["part.irons_jewelry.band_gem", "part.irons_jewelry.gem_pointy"],
  "pattern.irons_jewelry.tearstone_ring.item": ["part.irons_jewelry.band_tearstone", "part.irons_jewelry.gem_tearstone"],
  "pattern.irons_jewelry.amulet_of_protection.item": ["part.irons_jewelry.chain_amulet_of_protection", "part.irons_jewelry.gem_amulet_of_protection"],
  "pattern.irons_jewelry.barbed_band.item": ["part.irons_jewelry.band_barbed", "part.irons_jewelry.gem_band_barbed"],
  "pattern.irons_spellbooks.rune_inscribed_ring.item": ["part.irons_spellbooks.band_rune_inscribed", "part.irons_spellbooks.rune_inscription"],
  "pattern.irons_jewelry.bane_ring.item": ["part.irons_jewelry.band_bane_ring", "part.irons_jewelry.skull_bane_ring"],
  "pattern.irons_jewelry.haggler_ring.item": ["part.irons_jewelry.band_gem", "part.irons_jewelry.haggler_stone"],
  "superior_gemset_ring": ["part.irons_jewelry.band_gem_superior", "part.irons_jewelry.gems_side", "part.irons_jewelry.gem_pointy"],
  "piglin_signet": ["part.irons_jewelry.piglin_signet_band", "part.irons_jewelry.piglin_signet"]
}

// Map the translation keys of attributes to components containing their associated icon
const attributeMapping = {
  "attribute.name.generic.armor": Component.literal("\uDB80\uDD03").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.armor_toughness": Component.literal("\uDB80\uDD04").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.attack_damage": Component.literal("\uDB80\uDCFF").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.attack_knockback": Component.literal("\uDB80\uDD01").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.attack_speed": Component.literal("\uDB80\uDD00").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.block_interaction_range": Component.literal("\uDB80\uDD0C").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.burning_time": Component.literal("\uDB80\uDD06").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.entity_interaction_range": Component.literal("\uDB80\uDD0C").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.explosion_knockback_resistance": Component.literal("\uDB80\uDD07").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.fall_damage_multiplier": Component.literal("\uDB80\uDD0D").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.flying_speed": Component.literal("\uDB80\uDCAB").font("minecraft:include/statistics").color("#FFFFFF"),
  "attribute.name.generic.follow_range": Component.literal("\uDB80\uDD14").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.gravity": Component.literal("\uDB80\uDD11").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.jump_strength": Component.literal("\uDB80\uDD0A").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.knockback_resistance": Component.literal("\uDB80\uDD05").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.luck": Component.literal("\uDB80\uDD12").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.max_absorption": Component.literal("\uDB80\uDCFE").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.max_health": Component.literal("\uDB80\uDCFD").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.movement_efficiency": Component.literal("\uDBA0\uDC2F").font("minecraft:include/magic").color("#FFFFFF"),
  "attribute.name.generic.movement_speed": Component.literal("\uDB80\uDD09").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.oxygen_bonus": Component.literal("\uDB80\uDD08").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.safe_fall_distance": Component.literal("\uDB80\uDD0E").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.scale": Component.literal("\uDB80\uDD0F").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.step_height": Component.literal("\uDB80\uDD10").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.generic.water_movement_efficiency": Component.literal("\uDB80\uDD15").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.horse.jump_strength": Component.literal("\uDB80\uDD0A").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.player.block_break_speed": Component.literal("\uDBA0\uDC08").font("minecraft:include/magic").color("#FFFFFF"),
  "attribute.name.player.block_interaction_range": Component.literal("\uDB80\uDD0C").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.player.entity_interaction_range": Component.literal("\uDB80\uDD0C").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.player.mining_efficiency": Component.literal("\uDB80\uDD0B").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.player.sneaking_speed": Component.literal("\uDBA0\uDC2E").font("minecraft:include/magic").color("#FFFFFF"),
  "attribute.name.player.submerged_mining_speed": Component.literal("\uDBA0\uDC00").font("minecraft:include/magic").color("#FFFFFF"),
  "attribute.name.player.sweeping_damage_ratio": Component.literal("\uDB80\uDD02").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.name.zombie.spawn_reinforcements": Component.literal("\uDB80\uDD13").font("minecraft:include/info").color("#FFFFFF"),
  "attribute.irons_rpg_tweaks.natural_regen_speed": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_rpg_tweaks.natural_regen_amount": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.max_mana": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.mana_regen": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.cooldown_reduction": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.spell_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.cast_time_reduction": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.summon_damage": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.casting_movespeed": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.fire_magic_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.ice_magic_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.lightning_magic_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.holy_magic_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.ender_magic_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.blood_magic_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.evocation_magic_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.nature_magic_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.eldritch_magic_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.fire_spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.ice_spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.lightning_spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.holy_spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.ender_spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.blood_spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.evocation_spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.nature_spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.irons_spellbooks.eldritch_spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.player.sub_level_punch_strength": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.player.sub_level_punch_cooldown": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.oreganized.kinetic_damage": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.lodestone.magic_resistance": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.lodestone.magic_proficiency": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.lodestone.magic_damage": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.scythe_proficiency": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.spirit_spoils": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.arcane_resonance": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.healing_received": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.soul_ward_integrity": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.soul_ward_recovery_rate": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.soul_ward_recovery_gain": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.soul_ward_capacity": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.charge_duration": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.charge_capacity": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.charge_recovery_rate": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.geas_limit": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.malignant_conversion": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.malignant_aegis_recovery_rate": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.malignant_aegis_recovery_gain": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.malum.malignant_aegis_capacity": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.aileron.cloudskipper_drag": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.aileron.smokestack_capacity": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.combat_roll.count": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.combat_roll.recharge": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.combat_roll.distance": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "neoforge.swim_speed": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "neoforge.name_tag_distance": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "neoforge.creative_flight": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.generic.illager_resistance": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.psi.regen": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.psi.total_psi": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "caelus.fallFlying": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.eternal_starlight.generic.thrown_potion_distance": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.eternal_starlight.generic.ether_resistance": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.eternal_starlight.generic.fire_resistance": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.eternal_starlight.generic.meteor_counterattack_chance": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.eternal_starlight.generic.heal_multiplier": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.eternal_starlight.generic.enemy_follow_range_multiplier": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.name.eternal_starlight.player.fog_vision": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.iss_magicfromtheeast.symmetry_magic_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.iss_magicfromtheeast.spirit_magic_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.iss_magicfromtheeast.dune_magic_resist": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.iss_magicfromtheeast.symmetry_spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.iss_magicfromtheeast.spirit_spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "attribute.iss_magicfromtheeast.dune_spell_power": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:armor_pierce": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:armor_shred": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:arrow_damage": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:arrow_velocity": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:cold_damage": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:crit_chance": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:crit_damage": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:current_hp_damage": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:dodge_chance": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:draw_speed": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:experience_gained": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:fire_damage": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:ghost_health": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:healing_received": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:life_steal": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:mining_speed": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:overheal": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:projectile_damage": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:prot_pierce": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:prot_shred": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
  "apothic_attributes:elytra_flight": Component.literal("").font("minecraft:include/").color("#FFFFFF")
}