ItemEvents.rightClicked(event => {
    let player = event.getPlayer();
    let dimension = event.level.getDimension();
    let item = player.getOffHandItem();
    if (event.hand == "MAIN_HAND") {
        item = player.getMainHandItem();
    }

    let itemTags = item.getTags();
    for (let i in itemTags) {
        let tag = itemTags[i];
        
        if (tag == "insurgence:category/unused") {
            event.cancel();
        }   
        else if (tag == "insurgence:pocket_dimension_prevent_use" && dimension == "irons_spellbooks:pocket_dimension") {
            event.cancel();
        }
    }
});

BlockEvents.rightClicked(event => {
    let player = event.getPlayer();
    let dimension = event.level.getDimension();
    let item = player.getOffHandItem();
    if (event.hand == "MAIN_HAND") {
        item = player.getMainHandItem();
    }

    let itemTags = item.getTags();
    for (let i in itemTags) {
        let tag = itemTags[i];
        
        if (tag == "insurgence:category/unused") {
            event.cancel();
        }   
        else if (tag == "insurgence:pocket_dimension_prevent_use" && dimension == "irons_spellbooks:pocket_dimension") {
            event.cancel();
        }
    }
});