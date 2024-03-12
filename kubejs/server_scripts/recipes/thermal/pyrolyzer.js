ServerEvents.recipes(event => {
    //thermal:constantan_ingot
    event.custom({
        "type": "thermal:pyrolyzer",
  "ingredient": {
    "item": "thermal:signalum_ingot"
  },
  "result": [
    {
      "item": "thermal:constantan_ingot"
    },
    {
      "item": "alltheores:constantan_gear",
      "chance": 0.25
    }
  ],
  "experience": 0.15
})
})