// Removes entity tags if an event/effect is no longer active
let tagCleanupTick = 0
ServerEvents.tick(event => {
    if (tagCleanupTick == 20) {
        let tagsRemovedCount = 0
        let entityList = event.server.getEntities()
        for (let i in entityList) {
            let entity = entityList[i]
            let tags = entity.getTags().toArray()
            if (tags.length == 0) continue
            else {
                for (let j in tags) {
                    let t = tags[j].split('\\+')    // All temporary event tags are marked as "event_name+uuid"
                    if (t.length <= 1) continue
                    
                    let eventIsActive = false
                    let activeEvents = event.server.persistentData.get("active_events").toArray()
                    for (let k in activeEvents) {
                        let uuid = activeEvents[k].toString().split("\\+")
                        if (uuid.length > 1) uuid = uuid[1]
                        else continue

                        if (uuid == t[1]) { // Event is ongoing; do not remove tag yet
                            eventIsActive = true
                            break
                        }
                    }
                    if (!eventIsActive) {
                        entity.removeTag(tags[j])
                        tagsRemovedCount++
                    }


                    console.log(t)
                }
            }
            
        }
        if (tagsRemovedCount > 0) console.log(`Cleaned up ${tagsRemovedCount} entity tags`)
        tagCleanupTick = 0
    }
    else {
        tagCleanupTick++
    }
})