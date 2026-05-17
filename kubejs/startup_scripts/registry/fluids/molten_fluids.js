// Register molten fluids for the foundry
StartupEvents.registry("fluid", event => {
    
    // type may be 'thick' or 'thin'
    function registerFluid(id, type, color, tags) {
        event.create(id, type)
            .translationKey(`fluid.insurgence.${id}`)
            .tint(color)
            .tag(tags)
            .slopeFindDistance(2)
            .type(type => type
                .density(3000)
                .viscosity(6000)
                .lightLevel(14)
                .supportsBoating(false)
                .canPushEntity(true)
            );
    }

    // Fuels
    registerFluid("insurgence:soul_lava", "thick", "#80ECFF", ["create:bottomless/allow"]);
    registerFluid("insurgence:blazing_fuel", "thick", "#F5BE0A", ["create:bottomless/allow"]);

    // Molten materials
    registerFluid("insurgence:melted_common_material", "thick", "#808080", []);
    registerFluid("insurgence:melted_uncommon_material", "thick", "#33FF33", []);
    registerFluid("insurgence:melted_rare_material", "thick", "#5555FF", []);
    registerFluid("insurgence:melted_epic_material", "thick", "#BB00BB", []);
    registerFluid("insurgence:melted_mythic_material", "thick", "#ED7014", []);
})