ServerEvents.recipes(event => {
    //中级精华
    event.custom({
        "type": "thermal:centrifuge",
        "ingredient": {
          "item": "mysticalagriculture:imperium_essence"
        },
        "result": [
          {
            "item": "mysticalagriculture:tertium_essence",
            "count": 3
          }
        ],
        "energy": 600,
        "experience": 0.1
    })
})