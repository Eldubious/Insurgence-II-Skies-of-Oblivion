const EnchantmentAttackEntityEvent = Java.loadClass("net.neoforged.neoforge.event.entity.player.AttackEntityEvent")
const EnchantmentEventPriority = Java.loadClass("net.neoforged.bus.api.EventPriority")
const EnchantmentAttributeModifier = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier")
const EnchantmentAttributeOperation = Java.loadClass("net.minecraft.world.entity.ai.attributes.AttributeModifier$Operation")
const EnchantmentALAttributes = Java.loadClass("dev.shadowsoffire.apothic_attributes.api.ALObjects$Attributes")
const EnchantmentMobEffectInstance = Java.loadClass("net.minecraft.world.effect.MobEffectInstance")

const EXECUTIONER_CRIT_CHANCE_MODIFIER = EnchantmentResourceLocation.parse("insurgence:executioner_crit_chance")
const EXECUTIONER_CRIT_DAMAGE_MODIFIER = EnchantmentResourceLocation.parse("insurgence:executioner_crit_damage")
const EXECUTIONER_CONSUME_CHANCE = [0, 1.0, 0.85, 0.70, 0.55]
const executionerPendingHits = new Map()

NativeEvents.onEvent(EnchantmentEventPriority.HIGHEST, EnchantmentAttackEntityEvent, event => {
  let player = event.entity
  let target = event.target
  if (player == null || target == null || !target.isLiving())
    return

  let server = player.server
  let level = insurgenceEnchantmentLevel(server, player.mainHandItem, "insurgence:executioner")
  let glowing = insurgenceRegistryHolder(server, EnchantmentRegistries.MOB_EFFECT, "minecraft:glowing")
  if (level <= 0 || glowing == null)
    return

  let glowingInstance = target.potionEffects.getActive(glowing)
  if (glowingInstance == null)
    return

  clearExecutionerModifiers(player)
  let critChance = player.getAttribute(EnchantmentALAttributes.CRIT_CHANCE)
  let critDamage = player.getAttribute(EnchantmentALAttributes.CRIT_DAMAGE)
  let glowingLevel = glowingInstance.amplifier + 1
  let chanceIncrease = Math.max(0, 1.0 - critChance.value)

  critChance.addTransientModifier(new EnchantmentAttributeModifier(
    EXECUTIONER_CRIT_CHANCE_MODIFIER,
    chanceIncrease,
    EnchantmentAttributeOperation.ADD_VALUE
  ))
  critDamage.addTransientModifier(new EnchantmentAttributeModifier(
    EXECUTIONER_CRIT_DAMAGE_MODIFIER,
    0.10 * glowingLevel,
    EnchantmentAttributeOperation.ADD_VALUE
  ))

  let targetId = target.uuid.toString()
  executionerPendingHits.set(targetId, {
    player: player,
    level: level,
    glowing: glowing,
    duration: glowingInstance.duration,
    amplifier: glowingInstance.amplifier,
    ambient: glowingInstance.ambient,
    visible: glowingInstance.visible,
    showIcon: glowingInstance.showIcon
  })

  server.scheduleInTicks(1, () => {
    let pending = executionerPendingHits.get(targetId)
    if (pending != null && pending.player.uuid == player.uuid) {
      clearExecutionerModifiers(player)
      executionerPendingHits.delete(targetId)
    }
  })
})

EntityEvents.afterHurt(event => {
  let targetId = event.entity.uuid.toString()
  let pending = executionerPendingHits.get(targetId)
  if (pending == null || event.source.entity == null || event.source.entity.uuid != pending.player.uuid)
    return

  clearExecutionerModifiers(pending.player)
  executionerPendingHits.delete(targetId)

  if (event.entity.random.nextFloat() >= EXECUTIONER_CONSUME_CHANCE[pending.level])
    return

  event.entity.removeEffect(pending.glowing)
  if (pending.amplifier > 0) {
    event.entity.addEffect(new EnchantmentMobEffectInstance(
      pending.glowing,
      pending.duration,
      pending.amplifier - 1,
      pending.ambient,
      pending.visible,
      pending.showIcon
    ))
  }
})

PlayerEvents.loggedOut(event => {
  clearExecutionerModifiers(event.player)
})

function clearExecutionerModifiers(player) {
  let critChance = player.getAttribute(EnchantmentALAttributes.CRIT_CHANCE)
  let critDamage = player.getAttribute(EnchantmentALAttributes.CRIT_DAMAGE)
  if (critChance != null)
    critChance.removeModifier(EXECUTIONER_CRIT_CHANCE_MODIFIER)
  if (critDamage != null)
    critDamage.removeModifier(EXECUTIONER_CRIT_DAMAGE_MODIFIER)
}
