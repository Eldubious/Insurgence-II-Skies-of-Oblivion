ServerEvents.tags("item", event => {

    let pocketDimPreventUse = [
        "gateways:gate_pearl", "enderscape:mirror", "minecraft:ender_pearl"
    ];
    for (let i in pocketDimPreventUse) {
        let item = pocketDimPreventUse[i];
        event.add("insurgence:pocket_dimension_prevent_use", item);
    };

});