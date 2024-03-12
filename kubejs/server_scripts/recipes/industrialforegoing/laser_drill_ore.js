ServerEvents.recipes((event) => {
    event.custom({
        "type": "industrialforegoing:laser_drill_ore",
  "catalyst": {
    "item": "industrialforegoing:laser_lens15"
  },
  "output": {
    "item": "occultism:raw_iesnium"
  },
  "rarity": [
    {
      "blacklist": {
        "type": "minecraft:worldgen/biome",
        "values": [
          "minecraft:the_end",
          "minecraft:the_void",
          "minecraft:small_end_islands",
          "minecraft:end_barrens",
          "minecraft:end_highlands",
          "minecraft:end_midlands"
        ]
      },
      "depth_max": 255,
      "depth_min": 0,
      "weight": 100,
      "whitelist": {}
    }
],
})
})