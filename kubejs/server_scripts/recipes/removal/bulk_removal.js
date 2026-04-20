// Remove recipes based on mod id or recipe type
ServerEvents.recipes(event => {

  event.remove([
    {mod: "waystones"}, {type: "create:cutting"}, {type: "create:crushing"}, {type: "create:mechanical_crafting"},
    {type: "create:haunting"}, {type: "create:splashing"}, {type: "create:pressing"},
    {type: "create:mixing"}, {type: "create:deploying"}, {type: "create:milling"}, {type: "create:sequenced_assembly"},
    {type: "create_jetpack:copy_components_mechanical_crafting"}, {type: "create:sandpaper_polishing"},
    {type: "plushie_buddies:workbench"}
  ])
})