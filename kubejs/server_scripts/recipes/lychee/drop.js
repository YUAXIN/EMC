ServerEvents.recipes(event => {
    event.custom({
    "type": "lychee:item_inside",
    "post": [
      {
        "type": "drop_item",
        "contextual": [
            {
              "type": "chance",
              "chance": 0.8
            }
        ],
        "item": "ars_nouveau:sourcestone"
      }
    ],
    "item_in": [
      {
        "item": "minecraft:stone"
      },
    ],
    "tag": 'starbunclemania:source_fluid'
  })
  event.custom({
    "type": "lychee:item_inside",
    "post": [
      {
        "type": "drop_item",
        "contextual": [
            {
              "type": "chance",
              "chance": 1.0
            }
        ],
        "item": "mysticalagriculture:water_essence"
      }
    ],
    "item_in": [
      {
        "item": "mysticalagradditions:creative_essence"
      },
    ],
    "block_in": 'minecraft:water'
  })
  event.custom({
    "type": "lychee:item_inside",
    "post": [
      {
        "type": "drop_item",
        "item": "enderio:xp_juice_bucket"
      }
    ],
    "item_in": [
      {
        "item": "ars_nouveau:greater_experience_gem"
      },
      {
        "item": "minecraft:bucket"
      },
      {
        "item": "mysticalagriculture:blaze_essence"
      },
    ],
    "tag": 'starbunclemania:source_fluid'
  })
}) 