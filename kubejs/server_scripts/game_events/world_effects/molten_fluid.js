let moltenFluidTypes = [
    "insurgence:soul_lava",
    "insurgence:blazing_fuel",
    "insurgence:melted_common_material",
    "insurgence:melted_uncommon_material",
    "insurgence:melted_rare_material",
    "insurgence:melted_epic_material",
    "insurgence:melted_mythic_material"
];

function moltenFluidDamage(entity) {
    if (!entity.isLiving() || !entity.isAlive())
        return;

    for (let fluidType of moltenFluidTypes) {
        if (!entity.isInFluidType(fluidType))
            continue;

        entity.runCommandSilent("damage @s 4 minecraft:lava");
        entity.igniteForSeconds(15);
        return;
    }
}