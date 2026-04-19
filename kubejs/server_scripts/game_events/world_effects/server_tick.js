// Handle all server tick related events
ServerEvents.tick(event => {
  let server = event.getServer()
  let svrData = server.getPersistentData()
  let time = server.getTickCount()
  let entityList = server.getEntities()
  let markerList = entityList.filter(e => e.type == "minecraft:marker")

  // First iterate on all marker entities and create effects
  for (let i in markerList) {
    let marker = markerList[i]
    markerHandler(server, svrData, marker)
  }

  // Only cleanup entity tags every 20 ticks/1 second
  if (time % 20 == 0) {
    cleanupEntityTags(server, svrData, entityList)
  }
})

// Decides which function the server will execute on the marker's behalf
function markerHandler(server, svrData, marker) {
  let nbtData = marker.getNbt().data
  if (nbtData == null) return

  switch (nbtData.type) {
    case null:
      break

    case "place_effect":
      switch (nbtData.effect) {
        case null:
          break

        case "nether_portal_area":
          createNetherPortal(server, svrData, marker)
          break
      }
  }
}

// Cleanup entity tags from inactive events
function cleanupEntityTags(server, svrData, entityList) {
  let tagsRemovedCount = 0
  let activeEvents = svrData.get("active_events")
  if (activeEvents == null) {
    svrData.put("active_events", [])
    return
  }
  else activeEvents = activeEvents.toArray()

  for (let i in entityList) {
    let entity = entityList[i]
    let tags = entity.getTags().toArray()
    if (tags.length == 0) continue

    for (let j in tags) {
      let t = tags[j].split('\\+')    // All temporary event tags are marked as "event_name+uuid"
      if (t.length <= 1) continue

      let eventIsActive = false
      for (let k in activeEvents) {   // Check if the tag's event uuid is currently active
        let uuid = activeEvents[k].toString().split("\\+")
        if (uuid.length > 1) uuid = uuid[1]
        else continue

        if (t[1] == uuid) {   // Event is ongoing; do not remove tag yet
          eventIsActive = true
          break
        }
      }
      if (!eventIsActive) { // Event has ended; remove tag
        entity.removeTag(tags[j])
        tagsRemovedCount++
      }
    }
  }

  if (tagsRemovedCount > 0) console.log(`Cleaned up ${tagsRemovedCount} entity tags`)
}