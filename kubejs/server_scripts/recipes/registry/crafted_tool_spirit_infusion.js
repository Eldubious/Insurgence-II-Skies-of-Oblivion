ServerEvents.recipes(event => {

    // Remove all of the original crafted item recipes before creating the new ones
    event.remove([
        {output: "#caverns_and_chasms:copper_swords"}, {output: "#caverns_and_chasms:copper_axes"},
        {output: "#caverns_and_chasms:copper_pickaxes"}, {output: "#caverns_and_chasms:copper_shovels"},
        {output: "#caverns_and_chasms:copper_hoes"}, {output: "#caverns_and_chasms:copper_helmets"},
        {output: "#caverns_and_chasms:copper_chestplates"}, {output: "#caverns_and_chasms:copper_leggings"},
        {output: "#caverns_and_chasms:copper_boots"}, {output: "caverns_and_chasms:silver_sword"},
        {output: "caverns_and_chasms:silver_axe"}, {output: "caverns_and_chasms:silver_pickaxe"},
        {output: "caverns_and_chasms:silver_shovel"}, {output: "caverns_and_chasms:silver_hoe"},
        {output: "caverns_and_chasms:silver_helmet"}, {output: "caverns_and_chasms:silver_chestplate"},
        {output: "caverns_and_chasms:silver_leggings"}, {output: "caverns_and_chasms:silver_boots"},
        {output: "caverns_and_chasms:silver_horse_armor"}
    ])



    function spiritInfusion(input, result, extraInputs, spirits) {

        let extraInputsJson = [];
        for (let ei of extraInputs) {
            let id = ei.getId();
            let count = ei.getCount();

            extraInputsJson.push({
                item: id,
                count: count
            });
        }

        let spiritsJson = [];
        for (let s of spirits) {
            let id = s.getId();
            let spiritType = getSpiritType(id);
            if (spiritType == null) {
                continue;
            }
            let count = s.getCount();

            spiritsJson.push({
                type: spiritType,
                count: count
            });
        }
        if (input.startsWith("#")) {
            event.custom({
                type: "malum:spirit_infusion",
                carryOverComponentData: true,
                extraInputs: extraInputsJson,
                spirits: spiritsJson,
                input: {
                    count: 1,
                    tag: input.slice(1)
                },
                result: {
                    count: 1,
                    id: result
                }
            });
        }
        else {
            event.custom({
                type: "malum:spirit_infusion",
                carryOverComponentData: true,
                extraInputs: extraInputsJson,
                spirits: spiritsJson,
                input: {
                    count: 1,
                    item: input
                },
                result: {
                    count: 1,
                    id: result
                }
            });
        }
        
    }

    function getSpiritType(spiritItemId) {
        switch (spiritItemId) {
            case "malum:earthen_spirit":
                return "malum:earthen";
            case "malum:wicked_spirit":
                return "malum:wicked";
            case "malum:eldritch_spirit":
                return "malum:eldritch";
            case "malum:sacred_spirit":
                return "malum:sacred";
            case "malum:arcane_spirit":
                return "malum:arcane";
            case "malum:aerial_spirit":
                return "malum:aerial";
            case "malum:aqueous_spirit":
                return "malum:aqueous";
            case "malum:infernal_spirit":
                return "malum:infernal";
            default:
                return null;
        }
    }
    
    spiritInfusion(
        "minecraft:wooden_sword", "caverns_and_chasms:copper_sword",
        [Item.of("minecraft:copper_ingot", 8)],
        [Item.of("malum:sacred_spirit", 4)]
    );
    spiritInfusion(
        "minecraft:wooden_axe", "caverns_and_chasms:copper_axe",
        [Item.of("minecraft:copper_ingot", 12)],
        [Item.of("malum:sacred_spirit", 4)]
    );
    spiritInfusion(
        "minecraft:wooden_pickaxe", "caverns_and_chasms:copper_pickaxe",
        [Item.of("minecraft:copper_ingot", 12)],
        [Item.of("malum:sacred_spirit", 4)]
    );
    spiritInfusion(
        "minecraft:wooden_shovel", "caverns_and_chasms:copper_shovel",
        [Item.of("minecraft:copper_ingot", 4)],
        [Item.of("malum:sacred_spirit", 4)]
    );
    spiritInfusion(
        "minecraft:wooden_hoe", "caverns_and_chasms:copper_hoe",
        [Item.of("minecraft:copper_ingot", 8)],
        [Item.of("malum:sacred_spirit", 4)]
    );
    spiritInfusion(
        "minecraft:leather", "caverns_and_chasms:copper_helmet",
        [Item.of("minecraft:copper_ingot", 20)],
        [Item.of("malum:sacred_spirit", 4)]
    );
    spiritInfusion(
        "minecraft:leather", "caverns_and_chasms:copper_chestplate",
        [Item.of("minecraft:copper_ingot", 32)],
        [Item.of("malum:sacred_spirit", 4)]
    );
    spiritInfusion(
        "minecraft:leather", "caverns_and_chasms:copper_leggings",
        [Item.of("minecraft:copper_ingot", 28)],
        [Item.of("malum:sacred_spirit", 4)]
    );
    spiritInfusion(
        "minecraft:leather", "caverns_and_chasms:copper_boots",
        [Item.of("minecraft:copper_ingot", 16)],
        [Item.of("malum:sacred_spirit", 4)]
    );
    spiritInfusion(
        "minecraft:leather_horse_armor", "caverns_and_chasms:copper_horse_armor",
        [Item.of("minecraft:copper_ingot", 28)],
        [Item.of("malum:sacred_spirit", 4)]
    );


    spiritInfusion(
        "#caverns_and_chasms:copper_swords", "caverns_and_chasms:silver_sword",
        [Item.of("caverns_and_chasms:silver_ingot", 4)],
        [Item.of("malum:arcane_spirit", 6)]
    );
    spiritInfusion(
        "#caverns_and_chasms:copper_axes", "caverns_and_chasms:silver_axe",
        [Item.of("caverns_and_chasms:silver_ingot", 6)],
        [Item.of("malum:arcane_spirit", 6)]
    );
    spiritInfusion(
        "#caverns_and_chasms:copper_pickaxes", "caverns_and_chasms:silver_pickaxe",
        [Item.of("caverns_and_chasms:silver_ingot", 6)],
        [Item.of("malum:arcane_spirit", 6)]
    );
    spiritInfusion(
        "#caverns_and_chasms:copper_shovels", "caverns_and_chasms:silver_shovel",
        [Item.of("caverns_and_chasms:silver_ingot", 2)],
        [Item.of("malum:arcane_spirit", 6)]
    );
    spiritInfusion(
        "#caverns_and_chasms:copper_hoes", "caverns_and_chasms:silver_hoe",
        [Item.of("caverns_and_chasms:silver_ingot", 4)],
        [Item.of("malum:arcane_spirit", 6)]
    );
    spiritInfusion(
        "#caverns_and_chasms:copper_helmets", "caverns_and_chasms:silver_helmet",
        [Item.of("caverns_and_chasms:silver_ingot", 10)],
        [Item.of("malum:arcane_spirit", 6)]
    );
    spiritInfusion(
        "#caverns_and_chasms:copper_chestplates", "caverns_and_chasms:silver_chestplate",
        [Item.of("caverns_and_chasms:silver_ingot", 16)],
        [Item.of("malum:arcane_spirit", 6)]
    );
    spiritInfusion(
        "#caverns_and_chasms:copper_leggings", "caverns_and_chasms:silver_leggings",
        [Item.of("caverns_and_chasms:silver_ingot", 14)],
        [Item.of("malum:arcane_spirit", 6)]
    );
    spiritInfusion(
        "#caverns_and_chasms:copper_boots", "caverns_and_chasms:silver_boots",
        [Item.of("caverns_and_chasms:silver_ingot", 8)],
        [Item.of("malum:arcane_spirit", 6)]
    );
    spiritInfusion(
        "#caverns_and_chasms:copper_horse_armors", "caverns_and_chasms:silver_horse_armor",
        [Item.of("caverns_and_chasms:silver_ingot", 14)],
        [Item.of("malum:arcane_spirit", 6)]
    );
});