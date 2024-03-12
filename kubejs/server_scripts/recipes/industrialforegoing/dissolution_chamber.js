ServerEvents.recipes(event => {
    //中级机器框架
    event.custom({
      "type": "industrialforegoing:dissolution_chamber",
  "input": [
    {
      "tag": "forge:plastic"
    },
    {
      "tag": "industrialforegoing:machine_frame/pity"
    },
    {
      "tag": "forge:plastic"
    },
    {
      "item": "minecraft:nether_brick"
    },
    {
      "item": "minecraft:nether_brick"
    },
    {
      "tag": "forge:ingots/iron"
    },
    {
      "tag": "forge:gears/gold"
    },
    {
      "tag": "forge:ingots/iron"
    }
  ],
  "inputFluid": "{Amount:500,FluidName:\"mysticalagradditions:molten_supremium\"}",
  "output": {
    "count": 1,
    "item": "industrialforegoing:machine_frame_simple"
  },
  "processingTime": 300
})
})