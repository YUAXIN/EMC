ServerEvents.recipes(event => {
    event.custom({
        "type": "lychee:block_crushing",
"post": [
  {
    "type": "drop_item",
    "item": "refinedstorage:silicon",
    "count": 1
  }
],
"item_in": [
  {
    "item": "cyclic:wax_bucket"
  }
],
"falling_block": "minecraft:sand",
"landing_block": "ae2:mysterious_cube"
})
})