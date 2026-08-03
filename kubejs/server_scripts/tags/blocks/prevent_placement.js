ServerEvents.tags("block", event => {

    let pocketDimPreventPlacement = [
        "minecraft:lodestone", "create:schematicannon",
        "custommachinery:custom_machine_item",
        "#insurgence:gateway_shrines"
    ];
    for (let i in pocketDimPreventPlacement) {
        let item = pocketDimPreventPlacement[i];
        event.add("irons_spellbooks:pocket_dimension_prevent_placement", item);
    };
});