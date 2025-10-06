// Create item tags
ServerEvents.tags('item', event => {

    function craftedItemTags(itemType, itemName) {
        event.add('insurgence:crafted_item', itemName)
        event.add(`insurgence:crafted_item/${itemType}`, itemName)
    }


    let craftedSwords = ['silentgear:sword', 'silentgear:katana', 'silentgear:machete']
    for (let i in craftedSwords) {
        craftedItemTags('sword', craftedSwords[i])
    }

    let craftedScythes = ['silentgear:sickle']
    for (let i in craftedScythes) {
        craftedItemTags('scythe', craftedScythes[i])
    }

    let craftedTridents = ['silentgear:trident']
    for (let i in craftedTridents) {
        craftedItemTags('trident', craftedTridents[i])
    }

    let craftedPolearms = ['silentgear:spear']
    for (let i in craftedPolearms) {
        craftedItemTags('polearm', craftedPolearms[i])
    }

    let craftedMaces = ['silentgear:mace']
    for (let i in craftedMaces) {
        craftedItemTags('mace', craftedMaces[i])
    }

    let craftedKnives = ['silentgear:knife', 'silentgear:dagger']
    for (let i in craftedKnives) {
        craftedItemTags('knife', craftedKnives[i])
    }

    let craftedAxes = ['silentgear:axe', 'silentgear:saw']
    for (let i in craftedAxes) {
        craftedItemTags('axe', craftedAxes[i])
    }

    let craftedPickaxes = ['silentgear:pickaxe', 'occultism:infused_pickaxe']
    for (let i in craftedPickaxes) {
        craftedItemTags('pickaxe', craftedPickaxes[i])
    }

    let craftedHammers = ['silentgear:hammer', 'silentgear:prospector_hammer']
    for (let i in craftedHammers) {
        craftedItemTags('hammer', craftedHammers[i])
    }

    let craftedPaxels = ['silentgear:paxel']
    for (let i in craftedPaxels) {
        craftedItemTags('paxel', craftedPaxels[i])
    }

    let craftedShovels = ['silentgear:shovel', 'silentgear:excavator']
    for (let i in craftedShovels) {
        craftedItemTags('shovel', craftedShovels[i])
    }

    let craftedHoes = ['silentgear:hoe', 'silentgear:mattock']
    for (let i in craftedHoes) {
        craftedItemTags('hoe', craftedHoes[i])
    }

    let craftedBows = ['silentgear:bow']
    for (let i in craftedBows) {
        craftedItemTags('bow', craftedBows[i])
    }

    let craftedCrossbows = ['silentgear:crossbow']
    for (let i in craftedCrossbows) {
        craftedItemTags('crossbow', craftedCrossbows[i])
    }

    let craftedSlingshots = ['silentgear:slingshot']
    for (let i in craftedSlingshots) {
        craftedItemTags('slingshot', craftedSlingshots[i])
    }

    let craftedHelmets = ['silentgear:helmet']
    for (let i in craftedHelmets) {
        craftedItemTags('helmet', craftedHelmets[i])
    }

    let craftedChestplates = ['silentgear:chestplate']
    for (let i in craftedChestplates) {
        craftedItemTags('chestplate', craftedChestplates[i])
    }

    let craftedLeggings = ['silentgear:leggings']
    for (let i in craftedLeggings) {
        craftedItemTags('leggings', craftedLeggings[i])
    }

    let craftedBoots = ['silentgear:boots']
    for (let i in craftedBoots) {
        craftedItemTags('boots', craftedBoots[i])
    }

    let craftedElytra = ['silentgear:elytra']
    for (let i in craftedElytra) {
        craftedItemTags('elytra', craftedElytra[i])
    }

    let craftedRings = ['silentgear:ring', 'occultism:familiar_ring', 'irons_jewelry:ring']
    for (let i in craftedRings) {
        craftedItemTags('ring', craftedRings[i])
    }

    let craftedBracelets = ['silentgear:bracelet']
    for (let i in craftedBracelets) {
        craftedItemTags('bracelet', craftedBracelets[i])
    }

    let craftedNecklaces = ['silentgear:necklace', 'irons_jewelry:necklace']
    for (let i in craftedNecklaces) {
        craftedItemTags('necklace', craftedNecklaces[i])
    }

    let craftedCurios = ['occultism:otherworld_goggles', 'occultism:true_sight_staff', 'occultism:storage_remote',
        'apotheosis:potion_charm']
    for (let i in craftedCurios) {
        craftedItemTags('curio', craftedCurios[i])
    }

    let craftedShields = ['silentgear:shield']
    for (let i in craftedShields) {
        craftedItemTags('shield', craftedShields[i])
    }

    let craftedFishingRods = ['silentgear:fishing_rod']
    for (let i in craftedFishingRods) {
        craftedItemTags('fishing_rod', craftedFishingRods[i])
    }

    let craftedShears = ['silentgear:shears']
    for (let i in craftedShears) {
        craftedItemTags('shears', craftedShears[i])
    }
})