
ServerEvents.generateData("last", event => {

    let categoryJson = {
        sort_index: 10,
        icon: "insurgence:textures/gui/field_guide/category/structures.png",
        contents: []
    };

    for (i in fgStructureData) {
        let structData = fgStructureData[i];
        let name = structData.name;
        let structures = structData.structures;
        let icon = structData.icon;
        let itemIcon = structData.item_icon;
        let nbt = structData.nbt;

        let advancementJson = {
            parent: "insurgence:fg_structs/root",
            display: {
                title: {
                    translate: `advancements.insurgence.fg_structs.${name}.title`
                },
                description: {
                    translate: `advancements.insurgence.fg_structs.$${name}.desc`
                },
                icon: {
                    count: 1,
                    item: itemIcon
                },
                frame: "task",
                announce_to_chat: false,
                show_toast: false,
                hidden: false
            },
            criteria: {
                in_structure: {
                    trigger: "minecraft:location",
                    conditions: {
                        player: [
                            {
                                condition: "minecraft:entity_properties",
                                entity: "this",
                                predicate: {
                                    location: {
                                        structures: structures
                                    }
                                }
                            }
                        ]
                    }
                },
                requirements: [
                    [
                        "in_structure"
                    ]
                ]
            },
            rewards: {
                function: `insurgence:advancements/unlock_field_guide_entry/${name}`
            }
        };
        event.json(`insurgence:advancement/fg_structs/${name}`, advancementJson);
        event.getGenerated(`insurgence:advancement/fg_structs/${name}`);

        let fieldguideEntry = {
            type: "virtual_entry",
            id: `insurgence:${name}`,
            virtual_type: "tutorial",
            icon: icon
        };
        categoryJson.contents.push(fieldguideEntry);


    }
    event.json("insurgence:fieldguide/categories/structures", categoryJson);
    event.getGenerated("insurgence:fieldguide/categories/structures");
});