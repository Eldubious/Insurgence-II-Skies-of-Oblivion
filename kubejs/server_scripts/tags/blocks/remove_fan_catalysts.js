// Remove fan catalysts from tags
ServerEvents.tags("block", event => {
  event.removeAll("create:fan_processing_catalysts/blasting")
  event.removeAll("create:fan_processing_catalysts/smoking")
  event.removeAll("create:fan_processing_catalysts/haunting")
  event.removeAll("create:fan_processing_catalysts/splashing")
})

ServerEvents.tags("fluid", event => {
  event.removeAll("create:fan_processing_catalysts/blasting")
  event.removeAll("create:fan_processing_catalysts/splashing")
})