ServerEvents.recipes(event => {

    
    event.remove([{id: "enchantinginfuser:enchanting_infuser"}, {id: "enchantinginfuser:advanced_enchanting_infuser"}]);
    event.shaped("enchantinginfuser:enchanting_infuser",
        [
            " A ",
            "BCB",
            "CDC"
        ],
        {
            A: "minecraft:book",
            B: "apotheosis:gem_dust",
            C: "minecraft:crying_obsidian",
            D: "apotheosis:common_material"
        }
    )
    event.shaped("enchantinginfuser:advanced_enchanting_infuser",
        [
            " A ",
            "BCB",
            "CDC"
        ],
        {
            A: "irons_spellbooks:chronicle",
            B: "minecraft:netherite_ingot",
            C: "apotheosis:rare_material",
            D: "enchantinginfuser:enchanting_infuser"
        }
    )
})