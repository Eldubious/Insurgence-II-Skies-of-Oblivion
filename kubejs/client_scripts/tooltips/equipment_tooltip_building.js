function getDividerComponent() {
    return Component.literal("   ----------------").color("#555555");
}

// Return the component which hints about the functions of SHIFT and ALT
function getKeypressComponent(shift, alt) {
    let color = "#AAAAAA";
    if (shift) {
        if (alt)
            return Component.translate("tooltip.insurgence.format.release_shift_and_alt").color(color);
        return Component.translate("tooltip.insurgence.format.press_both").color(color);
    }
    if (alt)
        return Component.translate("tooltip.insurgence.format.press_both").color(color);
    return Component.translate("tooltip.insurgence.format.press_shift_or_alt").color(color);
}

// Returns the text component which displays the durability of the item remaining
function getDurabilityComponent(item) {
    let maxDamage = item.getMaxDamage();
    let curDamage = item.getDamageValue();
    
    if (maxDamage == 0 || maxDamage == undefined || curDamage == undefined) {
        return Component.literal("DELETE_ME");
    }
    
    let remainingDamage = maxDamage - curDamage;
    return Component.translate("tooltip.insurgence.format.durability").color("#AAAAAA").append(
        Component.literal(`${remainingDamage}/${maxDamage}`).color("#74C774")
    );
}

// Returns the text component which displays all of the attribute modifiers on an item
function getAttributeComponent(attributes, shift) {
    let component = Component.empty();
    let attrList = [];
    if (attributes.length == 0) return Component.literal("DELETE_ME");
    
    for (let i in attributes) {
        let attr = attributes[i];
        let numberColor = "#417FCB";
        let nameColor = "#163760";
        
        if (attr.name == "attribute.name.generic.burning_time" || attr.name == "attribute.name.generic.fall_damage_multiplier" || attr.name == "attribute.name.malum.charge_duration" || attr.name == "attribute.aileron.cloudskipper_drag" || attr.name == "attribute.name.eternal_starlight.generic.enemy_follow_range_multiplier") {
            if (attr.operator == "+") {
                numberColor = "#A43F34";
                nameColor = "#5C130B";
            }
        }
        else if (attr.name == "attribute.name.generic.gravity" || attr.name == "attribute.name.generic.scale" || attr.name == "neoforge.name_tag_distance") {
            numberColor = "#56298D";
            nameColor = "#351161";
        }
        else if (attr.operator == "-") {
            numberColor = "#A43F34";
            nameColor = "#5C130B";
        }
        
        let attrComponent = Component.empty();
        if (attr.operator != "-") {
            attrComponent = Component.translate(attr.operator).color(numberColor).append(
                Component.literal(attr.number).color(numberColor)
            );
        }
        else {
            attrComponent = Component.literal(attr.number).color(numberColor);
        }

        if (shift) {  // Display name and icon if shift is pressed
            attrComponent.append(
                attributeMapping[attr.name]
            ).append(
                Component.translate(attr.name).color(nameColor)
            );
        }
        else {        // Display icon if shift is not pressed
            attrComponent.append(
                attributeMapping[attr.name]
            );
        }
        
        component.append(attrComponent).append(
            Component.literal("  ")
        );
    }
    return component;
}

// Returns the text component which displays the item's rarity. Takes into account apothic rarity
function getRarityComponent(item) {
    let rarityName = item.rarity.toString().toLowerCase();
    let rarityColor = 'white';
    let components = item.getComponents();
    
    if (components.has('apotheosis:rarity')) {   // Use Apotheosis rarity
        let apothRarity = components.get('apotheosis:rarity').toString().split(' ')[2];
        
        switch (apothRarity) {
            case 'apotheosis:common}':
            rarityName = 'common';
            rarityColor = '#808080';
            break;
            
            case 'apotheosis:uncommon}':
            rarityName = 'uncommon';
            rarityColor = '#33FF33';
            break;
            
            case 'apotheosis:rare}':
            rarityName = 'rare';
            rarityColor = '#5555FF';
            break;
            
            case 'apotheosis:epic}':
            rarityName = 'epic';
            rarityColor = '#BB00BB';
            break;
            
            case 'apotheosis:mythic}':
            rarityName = 'mythic';
            rarityColor = '#ED7014';
            break;
            
            case 'ancientreforging:ancient}':
            rarityName = 'ancient';
            rarityColor = '#FF55FF';
            break;
        }
    }
    else if (item.hasTag('insurgence:rarity_override')) { // Use custom rarity
        
        if (item.hasTag('insurgence:rarity_override/uncommon')) {
            rarityName = 'uncommon';
            rarityColor = '#FFFF55';
        }
        else if (item.hasTag('insurgence:rarity_override/rare')) {
            rarityName = 'rare';
            rarityColor = '#55FFFF';
        }
        else if (item.hasTag('insurgence:rarity_override/epic')) {
            rarityName = 'epic';
            rarityColor = '#FF55FF';
        }
        else if (item.hasTag('insurgence:rarity_override/legendary')) {
            rarityName = 'legendary';
            rarityColor = '#FFAA00';
        }
    }
    else {  // Use default rarity
        switch (rarityName) {
            case 'irons_spellbooks_rarity_cinderous':
            rarityName = 'legendary';
            rarityColor = '#FFAA00';
            break;
            
            case 'iss_magicfromtheeast_rarity_bloodful':
            rarityName = 'legendary';
            rarityColor = '#FFAA00';
            break;
            
            case 'iss_magicfromtheeast_rarity_jadelight':
            rarityName = 'legendary';
            rarityColor = '#FFAA00';
            break;
            
            case 'epic':
            rarityColor = 'light_purple';
            break;
            
            case 'rare':
            rarityColor = 'aqua';
            break;
            
            case 'uncommon':
            rarityColor = 'yellow';
            break;
            
            default:
            rarityColor = 'gray';
        }
    }
    //console.log(item.id + " " + rarityName)
    return Component.of({
        translate: `tooltip.insurgence.rarity.${rarityName}`,
        color: rarityColor,
        bold: true
    });
}

// Returns the affix ability header component
function getAffixAbilityComponent(shift, affixCount) {
    if (affixCount == 0)
        return Component.empty();
    if (shift) {
        if (affixCount == 1) {
            return Component.translate("tooltip.insurgence.format.affix_abilities_shift.singular").color("#FFAA00");
        }
        return Component.translate("tooltip.insurgence.format.affix_abilities_shift").color("#FFAA00");
    }
    
    if (affixCount == 1) {  // Adjust translation for singular
        return Component.of({
            translate: "tooltip.insurgence.format.affix_abilities.singular",
            color: "#FFAA00",
            with: [String(affixCount)]
        });
    }
    return Component.of({
        translate: "tooltip.insurgence.format.affix_abilities",
        color: "#FFAA00",
        with: [String(affixCount)]
    });
}

// Returns the text component which indicates a spell is imbued
function getSpellComponent(shift, hasSpell, spellName, spellLvl, isObfuscated) {
    let textColor = "#E761F1";
    let spellColor = "#E740C0";
    if (shift) {
        if (hasSpell) {
            return Component.translate("tooltip.insurgence.format.spell_imbued_shift").color(textColor);
        }
        else {
            return Component.translate("tooltip.insurgence.format.spell_capacity").color(textColor);
        }
    }
    else {
        if (hasSpell) {
            let spellNameComponent = {
                translate: spellName,
                color: spellColor
            };
            if (isObfuscated) {
                spellNameComponent.obfuscated = isObfuscated;
                spellNameComponent.font = "minecraft:alt";
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
            });
        }
        else {
            return Component.translate("tooltip.insurgence.format.spell_capacity").color(textColor);
        }
    }
}

// Returns the header text component for custom jewelry construction
function getJewelryComponent(shift, jewelryType, jewelryPattern) {
    let headerColor = "#5555FF";
    let dashColor = "#555555";
    let partColor = "#00AAAA";
    if (!shift) {
        let component = Component.translate(`tooltip.insurgence.format.${jewelryType}_construction`).color(headerColor).append(
            Component.literal(" ")
        );
        let parts = jewelryParts[jewelryPattern];
        for (let i in parts) {
            let p = parts[i];
            component.append(
                Component.translate(p).color(partColor)
            );
            
            if (i < parts.length - 1) {
                component.append(
                    Component.literal("—").color(dashColor)
                );
            }
        }
        return component;
    }
    return Component.translate(`tooltip.insurgence.format.${jewelryType}_construction`).color(headerColor);
}

// Returns the number of different parts a jewelry pattern has
function getJewelryPartCount(jewelryPattern) {
    return jewelryParts[jewelryPattern].length;
}

// Returns the additional info tooltip lines for an item id
function getAdditionalInfo(id, shift) {
    let retVal = [];
    if (additionalInfo[id] != undefined)
        retVal = additionalInfo[id];
    if (shift && additionalInfoShift[id] != undefined) {
        if (retVal.length == 0)
            retVal = additionalInfoShift[id];
        else
            retVal.concat(additionalInfoShift[id]);
    }
    return retVal;
}

// Returns the additional info tooltip lines if they are not ability related
function getAdditionalLore(id) {
    if (additionalLore[id] == undefined)
        return [];
    else
        return additionalLore[id];
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
};

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
    "attribute.name.player.sweeping_damage_ratio": Component.literal("\uDBA0\uDC24").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.zombie.spawn_reinforcements": Component.literal("\uDB80\uDD13").font("minecraft:include/info").color("#FFFFFF"),
    "attribute.irons_rpg_tweaks.natural_regen_speed": Component.literal("\uDB80\uDD92").font("minecraft:include/magic").color("#FFEE00"),
    "attribute.irons_rpg_tweaks.natural_regen_amount": Component.literal("\uDB80\uDD97").font("minecraft:include/magic").color("#FFEE00"),
    "attribute.irons_spellbooks.max_mana": Component.literal("\uDBC7\uDF58").font("minecraft:include/smithing").color("#FFFFFF"),
    "attribute.irons_spellbooks.mana_regen": Component.literal("\uDBC7\uDF53").font("minecraft:include/smithing").color("#FFFFFF"),
    "attribute.irons_spellbooks.cooldown_reduction": Component.literal("\uDBC7\uDF5B").font("minecraft:include/smithing").color("#FFFFFF"),
    "attribute.irons_spellbooks.spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#505050"),
    "attribute.irons_spellbooks.spell_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#505050"),
    "attribute.irons_spellbooks.cast_time_reduction": Component.literal("\uDBC7\uDF51").font("minecraft:include/smithing").color("#FFFFFF"),
    "attribute.irons_spellbooks.summon_damage": Component.literal("\uDB80\uDDA9").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.irons_spellbooks.casting_movespeed": Component.literal("\uDBC7\uDF56").font("minecraft:include/smithing").color("#FFFFFF"),
    "attribute.irons_spellbooks.fire_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#F17209"),
    "attribute.irons_spellbooks.ice_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#B1F0F5"),
    "attribute.irons_spellbooks.lightning_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#56CEF3"),
    "attribute.irons_spellbooks.holy_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#FFFFFF"),
    "attribute.irons_spellbooks.ender_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#D20FE4"),
    "attribute.irons_spellbooks.blood_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#A10C0C"),
    "attribute.irons_spellbooks.evocation_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#24D414"),
    "attribute.irons_spellbooks.nature_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#76E96C"),
    "attribute.irons_spellbooks.eldritch_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#144A52"),
    "attribute.irons_spellbooks.fire_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#F17209"),
    "attribute.irons_spellbooks.ice_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#B1F0F5"),
    "attribute.irons_spellbooks.lightning_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#56CEF3"),
    "attribute.irons_spellbooks.holy_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#FFFFFF"),
    "attribute.irons_spellbooks.ender_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#D20FE4"),
    "attribute.irons_spellbooks.blood_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#A10C0C"),
    "attribute.irons_spellbooks.evocation_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#24D414"),
    "attribute.irons_spellbooks.nature_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#76E96C"),
    "attribute.irons_spellbooks.eldritch_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#144A52"),
    "attribute.name.player.sub_level_punch_strength": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "attribute.name.player.sub_level_punch_cooldown": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "attribute.oreganized.kinetic_damage": Component.literal("\uDB80\uDDAC").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.lodestone.magic_resistance": Component.literal("\uDB80\uDD89").font("minecraft:include/magic").color("#FF0037"),
    "attribute.name.lodestone.magic_proficiency": Component.literal("\uDBC7\uDF54").font("minecraft:include/smithing").color("#FF0037"),
    "attribute.name.lodestone.magic_damage": Component.literal("\uDBC7\uDF52").font("minecraft:include/smithing").color("#FF0037"),
    "attribute.name.malum.scythe_proficiency": Component.literal("\uDB80\uDD02").font("minecraft:include/info").color("#FFFFFF"),
    "attribute.name.malum.spirit_spoils": Component.literal("\uDBA0\uDC23").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.malum.arcane_resonance": Component.literal("\uDBC7\uDF53").font("minecraft:include/smithing").color("#FF0037"),
    "attribute.name.malum.healing_received": Component.literal("\uDB80\uDD97").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.malum.soul_ward_integrity": Component.literal("\uDBA0\uDC1B").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.malum.soul_ward_recovery_rate": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "attribute.name.malum.soul_ward_recovery_gain": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "attribute.name.malum.soul_ward_capacity": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "attribute.name.malum.charge_duration": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "attribute.name.malum.charge_capacity": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "attribute.name.malum.charge_recovery_rate": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "attribute.name.malum.geas_limit": Component.literal("\uDBC7\uDF54").font("minecraft:include/smithing").color("#FFFFFF"),
    "attribute.name.malum.malignant_conversion": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "attribute.name.malum.malignant_aegis_recovery_rate": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "attribute.name.malum.malignant_aegis_recovery_gain": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "attribute.name.malum.malignant_aegis_capacity": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "attribute.aileron.cloudskipper_drag": Component.literal("\uDB80\uDD9A").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.aileron.smokestack_capacity": Component.literal("\uDB80\uDDAE").font("minecraft:include/magic").color("#929292"),
    "attribute.name.combat_roll.count": Component.literal("\uDBA0\uDC21").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.combat_roll.recharge": Component.literal("\uDBA0\uDC29").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.combat_roll.distance": Component.literal("\uDBA0\uDC1F").font("minecraft:include/magic").color("#FFFFFF"),
    "neoforge.swim_speed": Component.literal("\uDB80\uDD8E").font("minecraft:include/magic").color("#FFFFFF"),
    "neoforge.name_tag_distance": Component.literal("\uDB80\uDD14").font("minecraft:include/info").color("#FFFFFF"),
    "neoforge.creative_flight": Component.literal("\uDB80\uDD9A").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.generic.illager_resistance": Component.literal("\uDB80\uDDA1").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.psi.regen": Component.literal("\uDBC7\uDF52").font("minecraft:include/smithing").color("#FFFFFF"),
    "attribute.psi.total_psi": Component.literal("\uDBC7\uDF5E").font("minecraft:include/smithing").color("#FFFFFF"),
    "caelus.fallFlying": Component.literal("\uDBA0\uDC21").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.eternal_starlight.generic.thrown_potion_distance": Component.literal("\uDBEC\uDD2C").font("minecraft:include/bee").color("#FFFFFF"),
    "attribute.name.eternal_starlight.generic.ether_resistance": Component.literal("\uDB80\uDD89").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.eternal_starlight.generic.fire_resistance": Component.literal("\uDBA0\uDC0B").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.eternal_starlight.generic.meteor_counterattack_chance": Component.literal("\uDB80\uDDFD").font("minecraft:include/firework").color("#C74EBD"),
    "attribute.name.eternal_starlight.generic.heal_multiplier": Component.literal("\uDB80\uDD97").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.eternal_starlight.generic.enemy_follow_range_multiplier": Component.literal("\uDB80\uDD8A").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.eternal_starlight.player.fog_vision": Component.literal("\uDB80\uDD9E").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.iss_magicfromtheeast.symmetry_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#0E9170"),
    "attribute.iss_magicfromtheeast.spirit_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#19ABD8"),
    "attribute.iss_magicfromtheeast.dune_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#F0B616"),
    "attribute.iss_magicfromtheeast.symmetry_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#0E9170"),
    "attribute.iss_magicfromtheeast.spirit_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#19ABD8"),
    "attribute.iss_magicfromtheeast.dune_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#F0B616"),
    "apothic_attributes:armor_pierce": Component.literal("\uDBFF\uDFCC").font("minecraft:include/smithing").color("#FFFFFF"),
    "apothic_attributes:armor_shred": Component.literal("\uDBFF\uDFCE").font("minecraft:include/smithing").color("#FFFFFF"),
    "apothic_attributes:arrow_damage": Component.literal("\uDBA0\uDC18").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:arrow_velocity": Component.literal("\uDBA0\uDC17").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:cold_damage": Component.literal("\uDB80\uDE02").font("minecraft:include/firework").color("#FFFFFF"),
    "apothic_attributes:crit_chance": Component.literal("\uDB80\uDDA8").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:crit_damage": Component.literal("\uDBA0\uDC20").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:current_hp_damage": Component.literal("\uDB80\uDD96").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:dodge_chance": Component.literal("\uDBA0\uDC09").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:draw_speed": Component.literal("\uDBA0\uDC1D").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:experience_gained": Component.literal("\uDBA0\uDC16").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:fire_damage": Component.literal("\uDBA0\uDC2D").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:ghost_health": Component.literal("").font("minecraft:include/").color("#FFFFFF"),
    "apothic_attributes:healing_received": Component.literal("\uDB80\uDD97").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:life_steal": Component.literal("\uDBA0\uDC01").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:mining_speed": Component.literal("\uDB80\uDD91").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:overheal": Component.literal("\uDB80\uDD92").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:projectile_damage": Component.literal("\uDBA0\uDC19").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:prot_pierce": Component.literal("\uDBA0\uDC04").font("minecraft:include/magic").color("#FFFFFF"),
    "apothic_attributes:prot_shred": Component.literal("\uDBA0\uDC04").font("minecraft:include/magic").color("#41D4E7"),
    "apothic_attributes:elytra_flight": Component.literal("\uDB80\uDCAB").font("minecraft:include/statistics").color("#FFFFFF"),
    "attribute.name.bounciness": Component.literal("\uDB80\uDD9F").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.air_drag_modifier": Component.literal("\uDBA0\uDC1F").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.friction_modifier": Component.literal("\uDBA0\uDC0E").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.stardew_fishing.bar_size": Component.literal("\uDBC0\uDEFE").font("minecraft:include/banner_pattern").color("#FFFFFF"),
    "attribute.name.stardew_fishing.exp_multiplier": Component.literal("\uDBA0\uDC16").font("minecraft:include/magic").color("#FFFFFF"),
    "attribute.name.stardew_fishing.golden_chest_bonus": Component.literal("\uDBA0\uDC14").font("minecraft:include/magic").color("#F0CC00"),
    "attribute.name.stardew_fishing.line_strength": Component.literal("\uDBC0\uDEDD").font("minecraft:include/banner_pattern").color("#FFFFFF"),
    "attribute.name.stardew_fishing.treasure_chance_bonus": Component.literal("\uDB80\uDDD3").font("minecraft:include/gui").color("#FFFFFF"),
    "attribute.tunes_n_tomes.melody_spell_power": Component.literal("\uDB80\uDDFF").font("minecraft:include/firework").color("#B8FCA7"),
    "attribute.tunes_n_tomes.melody_magic_resist": Component.literal("\uDB80\uDE00").font("minecraft:include/firework").color("#B8FCA7")
};

const additionalInfo = {
    "endermanoverhaul:snowy_hood": [
        Component.translate("tooltip.endermanoverhaul.hood").color("#586A86")
    ],
    "endermanoverhaul:savanna_hood": [
        Component.translate("tooltip.endermanoverhaul.hood").color("#586A86")
    ],
    "endermanoverhaul:badlands_hood": [
        Component.translate("tooltip.endermanoverhaul.hood").color("#586A86")
    ],
    "endermanoverhaul:corrupted_blade": [
        Component.translate("tooltip.endermanoverhaul.corrupted_blade").color("#586A86")
    ],
    "endermanoverhaul:corrupted_shield": [
        Component.translate("tooltip.endermanoverhaul.corrupted_shield").color("#586A86")
    ],
    "tide:starlight_bow": [
        Component.translate("item.tide.starlight_bow.desc_0").color("#F1EA80"),
        Component.translate("item.tide.starlight_bow.desc_1").color("#F1EA80")
    ],
    "iss_magicfromtheeast:spirit_crusher": [
        Component.translate("item.iss_magicfromtheeast.spirit_crusher.description", [Component.literal(2).white()]).color("#97FAFA")
    ],
    "iss_magicfromtheeast:soul_breaker": [
        Component.translate("item.iss_magicfromtheeast.soul_breaker.description", [Component.literal(3).white()]).color("#97FAFA")
    ],
    "tide:netherite_fishing_rod": [
        Component.translate("text.tide.rod_tooltip.netherite_bonus").color("#FFFF55")
    ],
    "tide:diamond_fishing_rod": [
        Component.translate("text.tide.rod_tooltip.diamond_bonus").color("#FFFF55")
    ],
    "tide:golden_fishing_rod": [
        Component.translate("text.tide.rod_tooltip.gold_bonus").color("#FFFF55")
    ],
    "tide:crystal_fishing_rod": [
        Component.translate("text.tide.rod_tooltip.crystal_bonus").color("#FFFF55")
    ],
    "tide:midas_fishing_rod": [
        Component.translate("text.tide.rod_tooltip.gold_bonus").color("#FFFF55"),
        Component.translate("text.tide.rod_tooltip.midas_bonus").color("#FFFF55")
    ],
    "iss_magicfromtheeast:elemental_commander_chestplate": [
        Component.translate("tooltip.irons_spellbooks.passive_ability", [Component.literal("15s").color("#FF55FF")]).color("#AA00AA"),
        Component.translate("item.iss_magicfromtheeast.elemental_commander_chestplate.description").color("#F598F5")
    ],
    "iss_magicfromtheeast:mist_boots": [
        Component.translate("tooltip.irons_spellbooks.passive_ability", [Component.literal("15s").color("#FF55FF")]).color("#AA00AA"),
        Component.translate("item.iss_magicfromtheeast.mist_boots.description").color("#F598F5")
    ]
};

const additionalInfoShift = {
    "iss_magicfromtheeast:elemental_commander_chestplate": [
        Component.translate("item.iss_magicfromtheeast.elemental_commander_chestplate.effect_bonus", [Component.literal(25)]).color("#FF55FF"),
        Component.literal("  * ").color("#FF5555").append(Component.translate("item.iss_magicfromtheeast.elemental_commander_chestplate.flag_red")),
        Component.literal("  * ").color("#55FF55").append(Component.translate("item.iss_magicfromtheeast.elemental_commander_chestplate.flag_green")),
        Component.literal("  * ").color("#5555FF").append(Component.translate("item.iss_magicfromtheeast.elemental_commander_chestplate.flag_white")),
        Component.literal("  * ").color("#55FFFF").append(Component.translate("item.iss_magicfromtheeast.elemental_commander_chestplate.flag_black")),
        Component.literal("  * ").color("#FFFF55").append(Component.translate("item.iss_magicfromtheeast.elemental_commander_chestplate.flag_yellow"))
    ],
    "iss_magicfromtheeast:repeating_crossbow": [
        Component.translate("item.iss_magicfromtheeast.repeating_crossbow.desc").color("#FFFF55")
    ],
    "irons_spellbooks:autoloader_crossbow": [
        Component.translate("item.irons_spellbooks.autoloader_crossbow.desc").color("#FFFF55")
    ]
};

const additionalLore = {
    "irons_spellbooks:teleportation_amulet": [
        Component.translate("item.irons_spellbooks.teleportation_amulet.desc.alt").italic().color("#777777")
    ],
};
