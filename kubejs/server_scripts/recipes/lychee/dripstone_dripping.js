ServerEvents.recipes(event => {
    event.custom({
        "type": "lychee:dripstone_dripping",
        "source_block": "lava",
        "target_block": "stone",
        "post": [
            {
                "type": "place",
                "block": "netherrack"
            }
        ]
      })
    }) 