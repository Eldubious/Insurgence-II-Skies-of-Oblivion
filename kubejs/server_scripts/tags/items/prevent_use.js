ServerEvents.tags("item", event => {

    let pocketDimPreventUse = [
        "gateways:gate_pearl", "enderscape:mirror", "minecraft:ender_pearl"
    ];
    for (let i in pocketDimPreventUse) {
        let item = pocketDimPreventUse[i];
        event.add("insurgence:pocket_dimension_prevent_use", item);
    };

    let preventUse = [
        "irons_spellbooks:scroll"
    ];
    for (let i in preventUse) {
        let item = preventUse[i];
        event.add("insurgence:prevent_use", item);
    };

});