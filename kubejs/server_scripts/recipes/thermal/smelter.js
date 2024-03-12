ServerEvents.recipes(event => {
    //extendedcrafting:crystaltine_ingot
    event.custom({
        "type": "thermal:smelter",
  "ingredients": [
    {
      "item": "elementalcraft:springaline_shard",
      "count": 3
    },
    {
        "item": "minecraft:nether_star",
      "count": 1
    }
  ],
  "result": [
    {
      "item": "extendedcrafting:crystaltine_ingot",
      "count": 4
    }
  ],
  "energy": 500
})
//extendedcrafting:crystaltine_ingot
event.custom({
  "type": "thermal:smelter",
"ingredients": [
{
"item": "mysticalagriculture:niotic_crystal_essence",
"count": 1
},
{
  "item": "mysticalagriculture:amethyst_essence",
"count": 1
}
],
"result": [
{
"item": "extendedcrafting:crystaltine_ingot",
"count": 8
}
],
"energy": 100
})
//extendedcrafting:crystaltine_ingot
event.custom({
  "type": "thermal:smelter",
"ingredients": [
{
"item": "mekanism:alloy_infused",
"count": 1
},
{
  "item": "minecraft:copper_ingot",
"count": 1
}
],
"result": [
{
"item": "thermal:signalum_ingot",
"count": 4
}
],
"energy": 100
})
})