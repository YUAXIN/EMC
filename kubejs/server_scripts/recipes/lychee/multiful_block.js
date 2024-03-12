ServerEvents.recipes(event => {
  //botania:creative_pool
    event.custom({
        "type": "lychee:block_interacting",
        "contextual": [
          {
            "type": "and",
            "contextual": [
                //buttom
                //0
                {
                    "type": "execute",
                    "command": "execute if block ~ ~ ~-1 botania:glimmering_livingwood"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~ ~ ~-2 botania:alfheim_portal"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~ ~ ~1 botania:glimmering_livingwood"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~ ~ ~2 botania:alfheim_portal"
                  },
                    //1
                  {
                    "type": "execute",
                    "command": "execute if block ~1 ~ ~-1 botania:mana_diamond_block"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~1 ~ ~-2 botania:conjuration_catalyst"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~1 ~ ~ botania:glimmering_livingwood"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~1 ~ ~1 botania:mana_diamond_block"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~1 ~ ~2 botania:alchemy_catalyst"
                  },
                    //2
                  {
                    "type": "execute",
                    "command": "execute if block ~2 ~ ~-1 botania:alchemy_catalyst"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~2 ~ ~-2 botania:livingrock"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~2 ~ ~ botania:alfheim_portal"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~2 ~ ~1 botania:conjuration_catalyst"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~2 ~ ~2 botania:livingrock"
                  },
                    //-1
                  {
                    "type": "execute",
                    "command": "execute if block ~-1 ~ ~-1 botania:mana_diamond_block"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~-1 ~ ~-2 botania:alchemy_catalyst"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~-1 ~ ~ botania:glimmering_livingwood"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~-1 ~ ~1 botania:mana_diamond_block"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~-1 ~ ~2 botania:conjuration_catalyst"
                  },
                    //-2
                  {
                    "type": "execute",
                    "command": "execute if block ~-2 ~ ~-1 botania:conjuration_catalyst"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~-2 ~ ~-2 botania:livingrock"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~-2 ~ ~ botania:alfheim_portal"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~-2 ~ ~1 botania:alchemy_catalyst"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~-2 ~ ~2 botania:livingrock"
                  },
                  //first
              //2
              {
                "type": "execute",
                "command": "execute if block ~2 ~1 ~2 botania:natura_pylon"
              },
              {
                "type": "execute",
                "command": "execute if block ~2 ~1 ~-2 botania:natura_pylon"
              },
                //1
                {
                  "type": "execute",
                  "command": "execute if block ~1 ~1 ~-1 botania:terra_plate"
                },
                {
                  "type": "execute",
                  "command": "execute if block ~1 ~1 ~1 botania:terra_plate"
                },
                  //-1
                  {
                    "type": "execute",
                    "command": "execute if block ~-1 ~1 ~-1 botania:terra_plate"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~-1 ~1 ~1 botania:terra_plate"
                  },  
              //-2
              {
                "type": "execute",
                "command": "execute if block ~-2 ~1 ~2 botania:natura_pylon"
              },
              {
                "type": "execute",
                "command": "execute if block ~-2 ~1 ~-2 botania:natura_pylon"
              },
            ]
          }
        ],
        "post": [
          {
            "type": "drop_item",
            "item": 'botania:creative_pool',
            "count":1
          }
        ],
        "item_in": {
          "item": 'mysticalagriculture:awakened_supremium_essence'
        },
        "block_in": 'botania:alfheim_portal'
      })
      //
      event.custom({
        "type": "lychee:block_interacting",
        "contextual": [
          {
            "type": "and",
            "contextual": [
                //buttom
                //0
                {
                    "type": "execute",
                    "command": "execute if block ~ ~ ~-1 occultism:chalk_glyph_purple"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~ ~ ~1 occultism:chalk_glyph_purple"
                  },
                    //1
                  {
                    "type": "execute",
                    "command": "execute if block ~1 ~ ~-1 occultism:chalk_glyph_gold"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~1 ~ ~ occultism:chalk_glyph_purple"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~1 ~ ~1 occultism:chalk_glyph_gold"
                  },
                    //-1
                  {
                    "type": "execute",
                    "command": "execute if block ~-1 ~ ~-1 occultism:chalk_glyph_gold"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~-1 ~ ~ occultism:chalk_glyph_purple"
                  },
                  {
                    "type": "execute",
                    "command": "execute if block ~-1 ~ ~1 occultism:chalk_glyph_gold"
                  },
                ]
              }
            ],
            "post": [
              {
                "type": "drop_item",
                "item": 'create:deployer',
                "count":1
              }
            ],
            "item_in": {
              "item": 'botania:spark'
            },
            "block_in": 'ars_nouveau:rune'
          }
          )
    })