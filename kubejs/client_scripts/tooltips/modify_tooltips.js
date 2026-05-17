// Add the 'Unique' & rarity text to the tooltips of items
ItemEvents.modifyTooltips(event => {
  
  let uniqueItemTypes = [
    'sword', 'scythe', 'trident', 'mace', 'boomerang', 'knife', 'axe',
    'pickaxe', 'shovel', 'hoe', 'bow', 'crossbow', 'staff', 'wand', 'helmet', 'chestplate',
    'leggings', 'boots', 'elytra', 'ring', 'belt', 'necklace', 'curio', 'shield', 'club',
    'polearm', 'fishing_rod', 'shears', 'slingshot', 'relic', 'animal_armor', 'cloak', 'shoe', 'mask',
    'instrument', 'flay', 'accessory', 'firearm'
  ];
  for (let i in uniqueItemTypes) {
    event.modify(`#insurgence:unique_item/${uniqueItemTypes[i]}`, tooltip => {
      for (let i = 0; i < 30; i++) {
        tooltip.add(Component.literal("DELETE_ME"));
      }
      tooltip.dynamic('organize_equipment_tooltip');
      tooltip.removeText(Component.literal("DELETE_ME"));
    });
  }
  
  let craftedItemTypes = [
    'sword', 'scythe', 'knife', 'axe', 'pickaxe', 'shovel', 'hoe', 'helmet', 'chestplate', 'leggings',
    'boots', 'ring', 'necklace', 'curio', 'fishing_rod', 'slingshot', 'animal_armor', 'staff', 'brush',
    'mace', 'polearm', 'boomerang', 'flay', 'firearm'
  ];
  for (let i in craftedItemTypes) {
    event.modify(`#insurgence:crafted_item/${craftedItemTypes[i]}`, tooltip => {
      for (let i = 0; i < 30; i++) {
        tooltip.add(Component.literal("DELETE_ME"));
      }
      tooltip.dynamic('organize_equipment_tooltip');
      tooltip.removeText(Component.literal("DELETE_ME"));
    });
  }
  
  
  /*
  Apply informational tooltips on how to obtain certain items.
  */
  
  // Where to find armor trims
  event.modify('#minecraft:trim_templates', tooltip => {
    tooltip.insert(1, Component.empty());
    tooltip.insert(2, Component.empty());
    tooltip.insert(3, Component.empty());
    
    tooltip.dynamic('trim_template_information');
  })
  
  // Mark unused items
  event.modify('#insurgence:unused', tooltip => {
    tooltip.add(Component.translate("tooltip.insurgence.info.unused_item").red());
  })
  
  // Effects of debug tickets
  event.modify('insurgence:debug_ticket', tooltip => {
    tooltip.dynamic('debug_tickets');
  })
  
  /*
  Apply basic formatting changes to the tooltips of some items.
  */
  event.modify('#insurgence:tarot_cards', tooltip => {
    tooltip.insert(2, Component.empty());
  })
})
