const EnchantmentRegistries = Java.loadClass("net.minecraft.core.registries.Registries")
const EnchantmentResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")

const INSURGENCE_ENCHANTMENT_STATE = {
  veinBlock: "insurgence.vein_resonance.block",
  veinCount: "insurgence.vein_resonance.count",
  veinTick: "insurgence.vein_resonance.tick",
  veinLevel: "insurgence.vein_resonance.level",
  veinSlot: "insurgence.vein_resonance.slot",
  veinDropPos: "insurgence.vein_resonance.drop_pos",
  veinDropDimension: "insurgence.vein_resonance.drop_dimension",
  veinDropFortune: "insurgence.vein_resonance.drop_fortune",
  umbralCooldown: "insurgence.umbral_reprieve.cooldown",
  umbralActive: "insurgence.umbral_reprieve.active"
}

const INSURGENCE_ENCHANTMENT_MODIFIERS = {
  veinSpeed: "insurgence:vein_resonance"
}

function insurgenceEnchantmentHolder(server, enchantmentId) {
  return insurgenceRegistryHolder(server, EnchantmentRegistries.ENCHANTMENT, enchantmentId)
}

function insurgenceRegistryHolder(server, registryKey, valueId) {
  let registry = server.registryAccess().registryOrThrow(registryKey)
  return registry.getHolder(EnchantmentResourceLocation.parse(valueId)).orElse(null)
}

function insurgenceEnchantmentLevel(server, stack, enchantmentId) {
  if (stack == null || stack.isEmpty())
    return 0

  let holder = insurgenceEnchantmentHolder(server, enchantmentId)
  return holder == null ? 0 : stack.enchantments.getLevel(holder)
}

function insurgenceRunFunction(server, player, functionId, arguments) {
  let command = `execute as ${player.uuid} at @s run function ${functionId}`
  if (arguments != null)
    command += ` ${arguments}`
  server.runCommandSilent(command)
}
