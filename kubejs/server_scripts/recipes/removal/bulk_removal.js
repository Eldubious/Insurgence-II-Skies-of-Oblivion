// Remove recipes based on mod id, recipe type, or output item
ServerEvents.recipes(event => {
    
    // Remove recipes by mod
    event.remove([
        {mod: "waystones"}, {mod: "rsinfinitybooster"}, {mod: "refinedstorage"}, {mod: "gamediscs"}
    ]);

    // Remove recipes by recipe type
    event.remove([
        {type: "create:cutting"}, {type: "create:crushing"}, {type: "create:mechanical_crafting"},
        {type: "create:haunting"}, {type: "create:splashing"}, {type: "create:pressing"},
        {type: "create:mixing"}, {type: "create:deploying"}, {type: "create:milling"}, {type: "create:sequenced_assembly"},
        {type: "create_jetpack:copy_components_mechanical_crafting"}, {type: "create:sandpaper_polishing"},
        {type: "plushie_buddies:workbench"}
    ]);

    // Remove recipes by output item
    event.remove([
        {output: "#insurgence:unique_item"}
    ]);
})
