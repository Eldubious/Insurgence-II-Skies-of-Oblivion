const materialItems = [
    "minecraft:prismarine_crystals", "irons_jewelry:ruby", "irons_jewelry:sapphire", "irons_jewelry:topaz",
    "irons_jewelry:moonstone", "irons_jewelry:peridot", "irons_jewelry:onyx", "irons_jewelry:garnet",
    "create:refined_radiance", "create:shadow_steel", "iss_magicfromtheeast:crystallized_soul",
    "refinedstorage:silicon", "refinedstorage:quartz_enriched_copper", "refinedstorage:quartz_enriched_iron",
    "productivemetalworks:shiny_meat_ingot", "eternal_starlight:starfire", "eternal_starlight:dusted_shard",
    "eternal_starlight:soul_dew", "eternal_starlight:shivering_gel", "irons_spellbooks:arcane_ingot",
    "irons_spellbooks:permafrost_shard", "irons_spellbooks:divine_soulshard", "irons_spellbooks:pyrium_ingot",
    "malum:rotting_essence", "malum:grim_talc", "malum:astral_weave", "malum:wind_nucleus", "malum:warp_flux",
    "malum:hex_ash", "malum:living_flesh", "malum:alchemical_calx", "malum:soulwoven_silk"
];

// Adds fieldguide entries for items
ServerEvents.tags("item", event => {

    for (let i in materialItems) {
        let mat = materialItems[i];
        event.add("insurgence:fieldguide/material", mat);
    }
});