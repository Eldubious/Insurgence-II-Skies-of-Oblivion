
PlayerEvents.tick(event => {
    let player = event.player

    if (player.shiftKeyDown) {
        let result = player.rayTrace()

        console.log('distance: ' + result.distance)
        console.log('result type: ' + result.type)
    }


})