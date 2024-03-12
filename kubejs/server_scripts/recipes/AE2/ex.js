ServerEvents.recipes(event => {
  //ars_nouveau:blank_glyph
    event.custom({
      "type": "ae2:transform",
      "circumstance": {
        "type": "explosion"
      },
      "ingredients": [
        {
          "item": 'ars_nouveau:red_archwood_log'
        },
      ],
      "result": {
        "count": 16,
        "item": 'ars_nouveau:blank_glyph'
      }
    })
    //mysticalagriculture:dirt_essence
    event.custom({
      "type": "ae2:transform",
      "circumstance": {
        "type": "explosion"
      },
      "ingredients": [
        {
          "item": 'mysticalagriculture:dirt_essence'
        },
      ],
      "result": {
        "count": 16,
        "item": 'mysticalagriculture:dirt_essence'
      }
    })
})