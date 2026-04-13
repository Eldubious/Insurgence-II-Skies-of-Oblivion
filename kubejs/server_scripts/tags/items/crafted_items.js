// Create item tags
ServerEvents.tags('item', event => {

    function craftedItemTags(itemType, itemName) {
        event.add('insurgence:crafted_item', itemName)
        event.add(`insurgence:crafted_item/${itemType}`, itemName)
    }


    let craftedSwords = []
    for (let i in craftedSwords) {
        craftedItemTags('sword', craftedSwords[i])
    }

    let craftedScythes = []
    for (let i in craftedScythes) {
        craftedItemTags('scythe', craftedScythes[i])
    }

    let craftedTridents = []
    for (let i in craftedTridents) {
        craftedItemTags('trident', craftedTridents[i])
    }

    let craftedPolearms = []
    for (let i in craftedPolearms) {
        craftedItemTags('polearm', craftedPolearms[i])
    }

    let craftedMaces = []
    for (let i in craftedMaces) {
        craftedItemTags('mace', craftedMaces[i])
    }

    let craftedKnives = ['farmersdelight:flint_knife']
    for (let i in craftedKnives) {
        craftedItemTags('knife', craftedKnives[i])
    }

    let craftedAxes = []
    for (let i in craftedAxes) {
        craftedItemTags('axe', craftedAxes[i])
    }

    let craftedPickaxes = ['occultism:infused_pickaxe']
    for (let i in craftedPickaxes) {
        craftedItemTags('pickaxe', craftedPickaxes[i])
    }

    let craftedHammers = []
    for (let i in craftedHammers) {
        craftedItemTags('hammer', craftedHammers[i])
    }

    let craftedPaxels = []
    for (let i in craftedPaxels) {
        craftedItemTags('paxel', craftedPaxels[i])
    }

    let craftedShovels = []
    for (let i in craftedShovels) {
        craftedItemTags('shovel', craftedShovels[i])
    }

    let craftedHoes = []
    for (let i in craftedHoes) {
        craftedItemTags('hoe', craftedHoes[i])
    }

    let craftedBows = []
    for (let i in craftedBows) {
        craftedItemTags('bow', craftedBows[i])
    }

    let craftedCrossbows = []
    for (let i in craftedCrossbows) {
        craftedItemTags('crossbow', craftedCrossbows[i])
    }

    let craftedSlingshots = []
    for (let i in craftedSlingshots) {
        craftedItemTags('slingshot', craftedSlingshots[i])
    }

    let craftedHelmets = []
    for (let i in craftedHelmets) {
        craftedItemTags('helmet', craftedHelmets[i])
    }

    let craftedChestplates = []
    for (let i in craftedChestplates) {
        craftedItemTags('chestplate', craftedChestplates[i])
    }

    let craftedLeggings = []
    for (let i in craftedLeggings) {
        craftedItemTags('leggings', craftedLeggings[i])
    }

    let craftedBoots = []
    for (let i in craftedBoots) {
        craftedItemTags('boots', craftedBoots[i])
    }

    let craftedElytra = []
    for (let i in craftedElytra) {
        craftedItemTags('elytra', craftedElytra[i])
    }

    let craftedRings = ['occultism:familiar_ring', 'irons_jewelry:ring']
    for (let i in craftedRings) {
        craftedItemTags('ring', craftedRings[i])
    }

    let craftedBracelets = []
    for (let i in craftedBracelets) {
        craftedItemTags('bracelet', craftedBracelets[i])
    }

    let craftedNecklaces = ['irons_jewelry:necklace']
    for (let i in craftedNecklaces) {
        craftedItemTags('necklace', craftedNecklaces[i])
    }

    let craftedCurios = ['occultism:otherworld_goggles', 'occultism:true_sight_staff', 'occultism:storage_remote',
        'apotheosis:potion_charm']
    for (let i in craftedCurios) {
        craftedItemTags('curio', craftedCurios[i])
    }

    let craftedShields = []
    for (let i in craftedShields) {
        craftedItemTags('shield', craftedShields[i])
    }

    let craftedFishingRods = []
    for (let i in craftedFishingRods) {
        craftedItemTags('fishing_rod', craftedFishingRods[i])
    }

    let craftedShears = []
    for (let i in craftedShears) {
        craftedItemTags('shears', craftedShears[i])
    }
})