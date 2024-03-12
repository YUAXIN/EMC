ServerEvents.recipes(event => {
   //occultism:otherworld_ashes
    event.custom({
    "type": "lychee:item_inside",
    "post": [
      {
        "type": "drop_item",
        "item": "occultism:otherworld_ashes"
      }
    ],
    "item_in": [
      {
        "item": "occultism:burnt_otherstone"
      }
    ],
    "block_in": "minecraft:water"
  })
  //andesite_alloy_block
  event.custom({
    "type": "lychee:item_inside",
    "post": [
      {
        "type": "drop_item",
        "item": "create:andesite_alloy_block"
      }
    ],
    "item_in": [
      {
        "item": "mysticalagradditions:insanium_essence"
      },
      {
        "item": "minecraft:iron_block"
      }
    ],
    "block_in": "minecraft:water"
  })

})