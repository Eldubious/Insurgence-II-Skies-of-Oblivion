const DEBUG = true
let lastLoggedItem = "" // DEBUG make sure to only log tooltip if new item is hovered over

const item_modifier_tooltips = [Component.translate('item.modifiers.any').getString(), Component.translate('item.modifiers.armor').getString(),
  Component.translate('item.modifiers.body').getString(), Component.translate('item.modifiers.chest').getString(),
  Component.translate('item.modifiers.feet').getString(), Component.translate('item.modifiers.hand').getString(),
  Component.translate('item.modifiers.head').getString(), Component.translate('item.modifiers.legs').getString(),
  Component.translate('item.modifiers.mainhand').getString(), Component.translate('item.modifiers.offhand').getString(),
  Component.translate('item.modifiers.saddle').getString()]
  
  /*
  Apply equipment-specific tooltip modifications.
  */
  ItemEvents.dynamicTooltips('organize_equipment_tooltip', event => {
    if (event.shift && event.alt) { // Keep original tooltip if both shift and alt are held
      event.lines.set(event.lines.size() - 1, getKeypressComponent(event.shift, event.alt))
      return
    }
    let item = event.item

    let affixCount = 0
    let firstAffixIdx = -1
    let gemSocketIdx = -1
    let spellImbueMarkerIdx = -1
    let selectedSpellStart = -1
    let currentlyCountingSpellLineCount = false
    let selectedSpellLineCount = 0
    let currentlyReadingAttributes = false
    let attributes = []
    let unconventionalAttr = []
    let enchantments = []
    let itemIdIdx = -1
    let currentlyReadingUpgrades = false
    let materialIdx = -1
    let patternIdx = -1
    let runicEtchIdx = -1
    let curioSlotIdx = -1
    let jewelryHeaderIdx = -1
    
    // DEBUG log entire tooltip
    //console.log(`${event.item.id} | ${lastLoggedItem}`)
    if (DEBUG && item.id != lastLoggedItem) console.log(`Tooltip for ${event.item.id}:`)
      
    for (let i in event.lines) {  // Scan the entire tooltip first
      let line = event.lines[i]
      let tKey = line.getContents().key
      let siblings = line.getSiblings()
      let args = line.getContents().args

      if (DEBUG && item.id != lastLoggedItem) { // DEBUG
        console.log(`Line ${i}\n${event.lines[i]}\n${event.lines[i].getString()}\nKey: ${event.lines[i].getContents().key}\n
          Siblings: ${event.lines[i].getSiblings()}`)
      }
      
      if (line.getString() == "APOTH_SOCKET_MARKER") gemSocketIdx = i

      // Advanced tooltips are on; found item id line
      if (line.getString() == item.id) {
        itemIdIdx = i
        if (currentlyCountingSpellLineCount || currentlyReadingAttributes) {
          currentlyCountingSpellLineCount = false
          currentlyReadingAttributes = false
        }
      }
      // Count the number of lines the selected spell takes up
      if (currentlyCountingSpellLineCount && selectedSpellStart > -1) {
        if (tKey == undefined && siblings.size() > 0) selectedSpellLineCount += 1
        else if (tKey != undefined) selectedSpellLineCount += 1
        else currentlyCountingSpellLineCount = false
      }
      // Attribute is not from a modifier or is not an attribute
      if (currentlyReadingAttributes && tKey == undefined) {
        if (siblings.length > 0) {
          let sKey = siblings[0].getContents().key
          let sArgs = siblings[0].getContents().args

          if (sArgs != undefined && sArgs.length >= 2) {
            if (event.shift) {  // Check for duplicate attribute listings when holding shift due to stat breakdown when holding
              let isDupeAttr = false
              for (let j in attributes) {
                if (attributes[j].name == sArgs[1].getContents().key) {
                  isDupeAttr = true
                }
              }
              if (isDupeAttr) continue
            }
            
            let attribute = {
              name: sArgs[1].getContents().key,
              idx: i,
              operator: "",
              number: String(sArgs[0])
            }
            attributes.push(attribute)
          }
          else {  // Bonus is unconventional
            unconventionalAttr.push(line)
          }
        }
        else {
          currentlyReadingAttributes = false
        }
      }
      else if (currentlyReadingUpgrades && tKey == undefined) {
        let sKey = siblings[0].getContents().key
        let splitSKey = String(sKey).split(".")
        if (splitSKey.length >= 2) {
          if (splitSKey[0] == "trim_pattern") {
            patternIdx = i
          }
          else if (splitSKey[0] == "trim_material") {
            materialIdx = i
          }
          else if (splitSKey[0] == "rune" && splitSKey[1] == "quark") {
            runicEtchIdx = i
          }
        }
        else currentlyReadingUpgrades = false
      }

      // Parse translation keys
      if (tKey != undefined) {
        let splitKey = String(tKey).split(".")

        if (splitKey.length > 0) {

          // Line is enchantment
          if (splitKey[0] == "enchantment") {
            enchantments.push({
              name: tKey,
              desc: String(tKey) + ".desc",
              idx: i
            })
          }
          
          // Following lines are attributes
          if (splitKey[0] == "curios" && splitKey[1] == "modifiers") {
            currentlyReadingAttributes = true
            continue
          }
          // Following lines are attributes
          else if (splitKey[0] == "item" && splitKey[1] == "modifiers") {
            currentlyReadingAttributes = true
            continue
          }

          if (currentlyReadingAttributes) {
            // Current line is attribute
            if (splitKey[0] == "neoforge" && splitKey[1] == "modifier") {
              if (args != undefined && args.length >= 2) {
                if (event.shift) {  // Check for duplicate attribute listings when holding shift due to stat breakdown when holding
                  let isDupeAttr = false
                  for (let j in attributes) {
                    if (attributes[j].name == args[1].getContents().key) {
                      isDupeAttr = true
                    }
                  }
                  if (isDupeAttr) continue
                }

                let op = '+'
                if (tKey == "neoforge.modifier.take") op = ''
                let attribute = {
                  name: args[1].getContents().key,
                  idx: i,
                  operator: op,
                  number: args[0].getString()
                }
                attributes.push(attribute)
              }
              else {  // Line is unconventional bonus
                unconventionalAttr.push(line)
              }
              
            }
            else {
              currentlyReadingAttributes = false
            }
          }

          if (currentlyReadingUpgrades) currentlyReadingUpgrades = false
        }

        // Armor Trim header
        if (tKey == "item.minecraft.smithing_template.upgrade") {
          currentlyReadingUpgrades = true
          continue
        }
        // Beginning of an apotheosis affix
        else if (tKey == "text.apotheosis.dot_prefix") {  
          if (affixCount == 0) firstAffixIdx = i
          affixCount += 1
        }
        // Can be imbued (?/?)
        else if (tKey == "tooltip.irons_spellbooks.can_be_imbued_frame") { 
          spellImbueMarkerIdx = i
        }
        // Header for selected spell
        else if (spellImbueMarkerIdx > -1 && tKey == "tooltip.irons_spellbooks.imbued_tooltip" && selectedSpellStart == -1) {
          selectedSpellStart = i
          currentlyCountingSpellLineCount = true
        }
        // Curio slot id
        else if (tKey == "curios.tooltip.slot") {
          curioSlotIdx = i
        }
        // Iron's jewelry header
        else if (tKey == "tooltip.irons_jewelry.hold_shift") {
          jewelryHeaderIdx = i
        }
      }
    }

    /* Setup tooltips according to this schema:
        (Skip lines if item doesn't have relevant info)

      Item Name
      ---------
      Rarity
      Durability
      Attributes
      Gem sockets
      Curio Slot
      --------- (ALT is not pressed)
      Item description

      Affix Abilities

      Enchantments

      Spells
      -------- (ALT is pressed)
      Trim

      Runic Etching

      All other information
    */
    let linesCopy = event.lines.toArray()
    for (let i in event.lines) event.lines.set(i, Component.literal("DELETE_ME")) // Wipe the tooltip clean

    // Item name
    event.lines.set(0, linesCopy[0])
    let currIdx = 1
    // Rarity
    event.lines.set(currIdx, getRarityComponent(item))
    currIdx += 1
    // Durability
    event.lines.set(currIdx, getDurabilityComponent(item))
    currIdx += 1
    // Attributes
    event.lines.set(currIdx, getAttributeComponent(attributes, event.shift))
    currIdx += 1
    // Gem Sockets
    if (gemSocketIdx > -1) {
      event.lines.set(currIdx, Component.literal("APOTH_SOCKET_MARKER"))
      currIdx += 1
    }
    // Any non-standard attribute bonuses
    for (let i in unconventionalAttr) {
      event.lines.set(currIdx, unconventionalAttr[i])
      currIdx += 1
    }
    
    event.lines.set(currIdx, getDividerComponent())
    currIdx += 1

    if (!event.alt) {  // Hide these categories when pressing alt
      // Curio slot id
      if (curioSlotIdx > -1) {
        event.lines.set(currIdx, linesCopy[curioSlotIdx])
        currIdx += 1
        event.lines.set(currIdx, Component.empty())
        currIdx += 1
      }
      // Jewelry Construction
      if (jewelryHeaderIdx > -1) {
        let jewelryType = "ring"
        if (item.id == "irons_jewelry:necklace") jewelryType = "necklace"
        let jewelryPattern = "unknown"
        let jewelrySibl = linesCopy[0].getSiblings()
        if (jewelrySibl.length > 0) jewelryPattern = jewelrySibl[0].getContents().key
        // Item might still be superior gemset or signet ring which for whatever reason don't use translation keys
        if (jewelryPattern == undefined) {  
          let nameLiteral = linesCopy[0].getString()
          if (nameLiteral.includes("Piglin Signet")) jewelryPattern = "piglin_signet"
          else if (nameLiteral.includes("Superior") && nameLiteral.includes("Ring")) jewelryPattern = "superior_gemset_ring"
        }

        event.lines.set(currIdx, getJewelryComponent(event.shift, jewelryType, jewelryPattern))
        currIdx += 1
        if (event.shift) {
          let jewelryPartCount = getJewelryPartCount(jewelryPattern)
          for (let i = parseInt(jewelryHeaderIdx) + 1; i < event.lines.length && i < (parseInt(jewelryHeaderIdx) + (parseInt(jewelryPartCount) * 2)); i++) {
            event.lines.set(currIdx, linesCopy[i])
            currIdx += 1
          }
        }

        event.lines.set(currIdx, Component.empty())
        currIdx += 1
      }
      // Affix Abilities
      if (firstAffixIdx > -1) {
        event.lines.set(currIdx, getAffixAbilityComponent(event.shift, affixCount))
        currIdx += 1
        if (affixCount > 0 && event.shift) {  // Show abilities when holding shift
          for (let i = parseInt(firstAffixIdx); i < parseInt(firstAffixIdx) + parseInt(affixCount); i++) {
            if (i >= event.lines.length) break
            event.lines.set(currIdx, linesCopy[i])
            currIdx += 1
          }
        }
        event.lines.set(currIdx, Component.empty())
        currIdx += 1
      }
      // Enchantments
      for (let i in enchantments) {
        event.lines.set(currIdx, linesCopy[enchantments[i].idx])
        currIdx += 1
        if (event.shift) {
          event.lines.set(currIdx, Component.translate(enchantments[i].desc).color("#555555").italic())
          currIdx += 1
        }
      }
      if (enchantments.length > 0) {
        event.lines.set(currIdx, Component.empty())
        currIdx += 1
      }

      // Spells
      if (spellImbueMarkerIdx > -1) {
        let spellLvl = -1
        let spellName = ""
        let isObfuscated = false
        if (selectedSpellStart > -1) {
          let spellData = linesCopy[parseInt(selectedSpellStart) + 1].getSiblings()[0].getContents().args
          spellName = spellData[0].getContents().key
          isObfuscated = spellData[0].getStyle().obfuscated
          spellLvl = spellData[1].getString()
        }
        
        event.lines.set(currIdx, getSpellComponent(event.shift, (selectedSpellStart > -1 && selectedSpellLineCount > 0), spellName, spellLvl, isObfuscated))
        currIdx += 1
      }
      if (selectedSpellStart > -1 && selectedSpellLineCount > 0 && event.shift) {  // Add all spell details when shift is held
        if (parseInt(selectedSpellStart) + parseInt(selectedSpellLineCount) + 1 < event.lines.length) {
          for (let i = parseInt(selectedSpellStart) + 1; i < parseInt(selectedSpellStart) + parseInt(selectedSpellLineCount) + 1; i++) {
            event.lines.set(currIdx, linesCopy[i])
            currIdx += 1
          }
        }
      }
      if (spellImbueMarkerIdx > -1) {
        event.lines.set(currIdx, Component.empty())
        currIdx += 1
      }
    }
    else {          // Show these categories when pressing alt
      // Armor Trim
      if (materialIdx > -1 && patternIdx > -1) {
        event.lines.set(currIdx, Component.translate("tooltip.insurgence.format.armor_trim"))
        currIdx += 1

        let patternName = linesCopy[patternIdx].getSiblings()[0].getContents().key
        let patternColor = linesCopy[patternIdx].getSiblings()[0].getStyle().color
        let materialName = linesCopy[materialIdx].getSiblings()[0].getContents().key
        let materialColor = linesCopy[materialIdx].getSiblings()[0].getStyle().color

        event.lines.set(currIdx, Component.translate(patternName).color(patternColor))
        currIdx += 1
        event.lines.set(currIdx, Component.translate(materialName).color(materialColor))
        currIdx += 1

        event.lines.set(currIdx, Component.empty())
        currIdx += 1
      }

      // Runic Etching
      if (runicEtchIdx > -1) {
        let runeName = linesCopy[runicEtchIdx].getSiblings()[0].getContents().key
        let runeColor = linesCopy[runicEtchIdx].getSiblings()[0].getStyle().color
        event.lines.set(currIdx, Component.translate(runeName).color(runeColor))
        currIdx += 1

        event.lines.set(currIdx, Component.empty())
        currIdx += 1
      }
    }
    
    // Other information
    event.lines.set(currIdx, getKeypressComponent(event.shift, event.alt))
    currIdx += 1

    if (itemIdIdx > -1) event.lines.set(currIdx, linesCopy[itemIdIdx])
    
    if (DEBUG && item.id != lastLoggedItem) {
      lastLoggedItem = item.id
    }
  })
  
  /*
  Apply trim template informational tooltips.
  */
  ItemEvents.dynamicTooltips('trim_template_information', event => {
    let patternName = event.item.id.toString().split(':')[1].split('_')[0]
    
    event.lines.set(1, Component.translate(`tooltip.insurgence.info.${patternName}_pattern_1`).gray().italic())
    event.lines.set(2, Component.translate(`tooltip.insurgence.info.${patternName}_pattern_2`).gray().italic())
  })
  
  /*
  Apply information about debug ticket effects.
  */
  ItemEvents.dynamicTooltips('debug_tickets', event => {
    let type = event.item.customData.get('type')
    if (type != null) type = type.getAsString()
      
    if (type == 'world_tier') {
      let tier = event.item.customData.get('tier')
      if (tier != null) tier = tier.getAsString().toString()
        
      if (tier == 'haven' || tier == 'frontier' || tier == 'ascent' || tier == 'summit' || tier == 'pinnacle') {
        event.lines.set(1, Component.translate(`tooltip.insurgence.debug_ticket.world_tier_${tier}`).gold().italic())
      }
    }
    else if (type == 'place_effect') {
      let effectType = event.item.customData.get('effect')
      if (effectType != null) effectType = effectType.getAsString().toString()
        
      event.lines.set(1, Component.translate(`tooltip.insurgence.debug_ticket.place_effect_${effectType}`).gold().italic())
    }
  })