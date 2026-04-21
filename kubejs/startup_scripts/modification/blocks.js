// Modify the properties of certain blocks
BlockEvents.modification(event => {
  
  // Make all these blocks indestructible
  event.modify("architects_palette:plating_block", block => {
    block.destroySpeed = -1
  })
  event.modify("architects_palette:plating_slab", block => {
    block.destroySpeed = -1
  })
  event.modify("architects_palette:plating_vertical_slab", block => {
    block.destroySpeed = -1
  })
  event.modify("architects_palette:plating_stairs", block => {
    block.destroySpeed = -1
  })
  event.modify("architects_palette:plating_nub", block => {
    block.destroySpeed = -1
  })
  event.modify("architects_palette:plating_wall", block => {
    block.destroySpeed = -1
  })
  event.modify("architects_palette:ancient_plating", block => {
    block.destroySpeed = -1
  })
  event.modify("architects_palette:ancient_plating_slab", block => {
    block.destroySpeed = -1
  })
  event.modify("architects_palette:ancient_plating_vertical_slab", block => {
    block.destroySpeed = -1
  })
  event.modify("architects_palette:ancient_plating_stairs", block => {
    block.destroySpeed = -1
  })
  event.modify("architects_palette:ancient_plating_wall", block => {
    block.destroySpeed = -1
  })
  event.modify("architects_palette:ancient_plating_fence", block => {
    block.destroySpeed = -1
  })
  event.modify("create:creative_motor", block => {
    block.destroySpeed = -1
  })
})