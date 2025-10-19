// Add items to tags to allow them to be used for the same recipe(s)
ServerEvents.tags("item", event => {

    event.add('insurgence:book_binding', 'minecraft:leather')
    event.add('insurgence:book_binding', 'farmersdelight:canvas')
})