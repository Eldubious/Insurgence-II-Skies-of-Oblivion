const ApotheosisGenContext = Java.loadClass("dev.shadowsoffire.apotheosis.tiers.GenContext")
const ApotheosisGemRegistry = Java.loadClass("dev.shadowsoffire.apotheosis.socket.gem.GemRegistry")

const VEIN_RESONANCE_THRESHOLDS = [0, 10, 8, 6]
const VEIN_RESONANCE_TIMEOUT = 200
const VEIN_RESONANCE_SPEED_PER_STACK = 0.1
const PROSPECTOR_CHANCE = 0.25

BlockEvents.broken(event => {
  let player = event.player
  let server = event.server
  let data = player.persistentData
  let tool = player.mainHandItem
  let level = insurgenceEnchantmentLevel(server, tool, "insurgence:vein_resonance")

  if (level <= 0 || !event.block.hasTag("c:ores")) {
    resetVeinResonance(server, player, data)
    return
  }

  let tick = server.tickCount
  let blockId = event.block.id
  let previousBlock = data.getString(INSURGENCE_ENCHANTMENT_STATE.veinBlock)
  let previousTick = data.getLong(INSURGENCE_ENCHANTMENT_STATE.veinTick)
  let count = 1

  if (previousBlock == blockId && tick - previousTick <= VEIN_RESONANCE_TIMEOUT)
    count = data.getInt(INSURGENCE_ENCHANTMENT_STATE.veinCount) + 1

  let threshold = VEIN_RESONANCE_THRESHOLDS[level]
  count = Math.min(count, threshold)

  data.putString(INSURGENCE_ENCHANTMENT_STATE.veinBlock, blockId)
  data.putInt(INSURGENCE_ENCHANTMENT_STATE.veinCount, count)
  data.putLong(INSURGENCE_ENCHANTMENT_STATE.veinTick, tick)
  data.putInt(INSURGENCE_ENCHANTMENT_STATE.veinLevel, level)
  data.putInt(INSURGENCE_ENCHANTMENT_STATE.veinSlot, player.inventory.selected)
  applyVeinResonanceSpeed(server, player, count)

  if (count >= threshold) {
    let fortune = insurgenceEnchantmentLevel(server, tool, "minecraft:fortune")
    let effectiveFortune = Math.max(fortune, level)
    if (effectiveFortune > fortune) {
      data.putString(INSURGENCE_ENCHANTMENT_STATE.veinDropPos, `${event.block.x},${event.block.y},${event.block.z}`)
      data.putString(INSURGENCE_ENCHANTMENT_STATE.veinDropDimension, event.block.dimension.toString())
      data.putInt(INSURGENCE_ENCHANTMENT_STATE.veinDropFortune, effectiveFortune)
    }
  }
})

BlockEvents.drops(event => {
  let player = event.entity
  if (player == null || !player.isPlayer())
    return

  let server = event.server
  let data = player.persistentData
  let position = `${event.block.x},${event.block.y},${event.block.z}`
  let dimension = event.block.dimension.toString()

  if (data.getString(INSURGENCE_ENCHANTMENT_STATE.veinDropPos) == position &&
      data.getString(INSURGENCE_ENCHANTMENT_STATE.veinDropDimension) == dimension) {
    let fortuneLevel = data.getInt(INSURGENCE_ENCHANTMENT_STATE.veinDropFortune)
    clearPendingVeinDrop(data)

    let lootTool = event.tool.copy()
    lootTool.enchant(insurgenceEnchantmentHolder(server, "minecraft:fortune"), fortuneLevel)
    let replacementDrops = event.block.getDrops(player, lootTool)
    event.itemEntities.clear()
    replacementDrops.forEach(stack => event.addItem(stack))
  }

  let prospectorLevel = insurgenceEnchantmentLevel(server, event.tool, "insurgence:prospector")
  if (prospectorLevel > 0 && event.block.hasTag("insurgence:prospector_ores") && event.level.random.nextFloat() < PROSPECTOR_CHANCE) {
    let context = ApotheosisGenContext.forPlayerAtPos(event.level.random, player, event.block.pos)
    let gem = ApotheosisGemRegistry.createRandomGemStack(context)
    if (!gem.isEmpty())
      event.addItem(gem)
  }
})

PlayerEvents.loggedOut(event => {
  let player = event.player
  resetVeinResonance(event.server, player, player.persistentData)
})

function applyVeinResonanceSpeed(server, player, stacks) {
  server.runCommandSilent(`attribute ${player.uuid} minecraft:player.block_break_speed modifier remove ${INSURGENCE_ENCHANTMENT_MODIFIERS.veinSpeed}`)
  if (stacks > 0) {
    let amount = stacks * VEIN_RESONANCE_SPEED_PER_STACK
    server.runCommandSilent(`attribute ${player.uuid} minecraft:player.block_break_speed modifier add ${INSURGENCE_ENCHANTMENT_MODIFIERS.veinSpeed} ${amount} add_multiplied_total`)
  }
}

function clearPendingVeinDrop(data) {
  data.remove(INSURGENCE_ENCHANTMENT_STATE.veinDropPos)
  data.remove(INSURGENCE_ENCHANTMENT_STATE.veinDropDimension)
  data.remove(INSURGENCE_ENCHANTMENT_STATE.veinDropFortune)
}

function resetVeinResonance(server, player, data) {
  data.remove(INSURGENCE_ENCHANTMENT_STATE.veinBlock)
  data.remove(INSURGENCE_ENCHANTMENT_STATE.veinCount)
  data.remove(INSURGENCE_ENCHANTMENT_STATE.veinTick)
  data.remove(INSURGENCE_ENCHANTMENT_STATE.veinLevel)
  data.remove(INSURGENCE_ENCHANTMENT_STATE.veinSlot)
  clearPendingVeinDrop(data)
  applyVeinResonanceSpeed(server, player, 0)
}
