// Animates the hand swinging when certain items are used
ItemEvents.firstRightClicked("insurgence:debug_ticket", event => {if (event.hand == "MAIN_HAND") event.player.swing()})