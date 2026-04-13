// Register new cutting board recipes
ServerEvents.recipes(event => {

    function cuttingBoardToolAction(ingredient, result, count, actionType) {
        event.custom({
            type: "farmersdelight:cutting",
            ingredients: [
                {
                    item: ingredient
                }
            ],
            result: [
                {
                  item: {
                    count: count,
                    id: result
                  }
                }
            ],
            tool: {
                type: "farmersdelight:item_ability",
                action: actionType
            }
        })
    }

    cuttingBoardToolAction("minecraft:cobblestone", "minecraft:gravel", 1, "pickaxe_dig")
})