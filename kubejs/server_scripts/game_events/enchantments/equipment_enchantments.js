const EnchantmentDataComponents = Java.loadClass("net.minecraft.core.component.DataComponents")
const EnchantmentMob = Java.loadClass("net.minecraft.world.entity.Mob")

const BANQUET_EFFECTS = [
  "absorption",
  "regeneration",
  "resistance",
  "speed",
  "strength",
  "night_vision"
]

ItemEvents.foodEaten(event => {
  let player = event.entity
  if (player == null || !player.isPlayer())
    return

  let server = event.server
  let level = insurgenceEnchantmentLevel(server, player.headArmorItem, "insurgence:banquet")
  if (level <= 0)
    return

  let food = event.item.get(EnchantmentDataComponents.FOOD)
  let nutrition = food == null ? 0 : food.nutrition()
  let matchingEffects = BANQUET_EFFECTS.filter(effect => event.item.hasTag(`insurgence:banquet_effect/${effect}`))
  if (nutrition <= 8 && matchingEffects.length == 0)
    return

  let duration = 90 + 30 * (level - 1)
  let amplifier = level >= 6 ? 1 : 0
  matchingEffects.forEach(effect => {
    insurgenceRunFunction(server, player, `insurgence:enchantment/banquet/${effect}`, `{duration:${duration},amplifier:${amplifier}}`)
  })
})

EntityEvents.afterHurt(event => {
  let attacker = event.source.entity
  if (attacker != null && attacker.isPlayer())
    event.server.runCommandSilent(`effect clear ${attacker.uuid} irons_spellbooks:true_invisibility`)
})

function updateUmbralReprieve(server, player, data) {
  let cooldown = data.getInt(INSURGENCE_ENCHANTMENT_STATE.umbralCooldown)
  if (cooldown > 0) {
    cooldown = Math.max(0, cooldown - 10)
    data.putInt(INSURGENCE_ENCHANTMENT_STATE.umbralCooldown, cooldown)
  }

  let trueInvisibility = insurgenceRegistryHolder(server, EnchantmentRegistries.MOB_EFFECT, "irons_spellbooks:true_invisibility")
  let invisible = trueInvisibility != null && player.potionEffects.isActive(trueInvisibility)
  if (invisible)
    restoreUmbralBossTargets(server, player)
  else if (data.getBoolean(INSURGENCE_ENCHANTMENT_STATE.umbralActive)) {
    clearUmbralBossTags(server, player)
    data.putBoolean(INSURGENCE_ENCHANTMENT_STATE.umbralActive, false)
  }

  let level = insurgenceEnchantmentLevel(server, player.chestArmorItem, "insurgence:umbral_reprieve")
  if (level <= 0 || cooldown > 0 || invisible || player.health >= player.maxHealth * 0.25 || player.block.blockLight != 0)
    return

  data.putInt(INSURGENCE_ENCHANTMENT_STATE.umbralCooldown, 6000)
  data.putBoolean(INSURGENCE_ENCHANTMENT_STATE.umbralActive, true)
  insurgenceRunFunction(server, player, "insurgence:enchantment/umbral_reprieve/activate", null)
  clearUmbralTargets(server, player)
}

function clearUmbralTargets(server, player) {
  server.entities.forEach(entity => {
    if (!(entity instanceof EnchantmentMob) || entity.level.dimension != player.level.dimension || entity.distanceTo(player) > 64 || entity.target != player)
      return

    if (isUmbralBoss(entity))
      entity.addTag(`insurgence_umbral_${player.uuid}`)
    else
      entity.setTarget(null)
  })
}

function restoreUmbralBossTargets(server, player) {
  let targetTag = `insurgence_umbral_${player.uuid}`
  server.entities.forEach(entity => {
    if (entity instanceof EnchantmentMob && entity.tags.contains(targetTag))
      entity.setTarget(player)
  })
}

function clearUmbralBossTags(server, player) {
  let targetTag = `insurgence_umbral_${player.uuid}`
  server.entities.forEach(entity => {
    if (entity.tags.contains(targetTag))
      entity.removeTag(targetTag)
  })
}

function isUmbralBoss(entity) {
  if (entity.type == "minecraft:wither" || entity.type == "minecraft:ender_dragon" || entity.persistentData.getBoolean("apoth_boss"))
    return true

  return entity.tags.toArray().some(tag => tag.endsWith("_boss") || tag.endsWith("_boss_ominous"))
}
