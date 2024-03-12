ServerEvents.recipes(event => {
  //botania:terrasteel_ingot
    event.custom({
      "type": "botania:terra_plate",
  "ingredients": [
    {
      "item": "botania:manasteel_ingot"
    },
    {
      "item": "ars_nouveau:source_gem"
    },
    {
      "item": "mysticalagriculture:earth_essence"
    }
  ],
  "mana": 40000,
  "result": {
    "item": "botania:terrasteel_ingot"
  }
})
//ars_nouveau:drygmy_charm
event.custom({
  "type": "botania:terra_plate",
"ingredients": [
{
  "item": "botania:terrasteel_ingot"
},
{
  "item": "ars_nouveau:source_gem"
},
{
  "item": "mysticalagriculture:earth_essence"
}
,
{
  "item": "botania:rune_greed"
},
],
"mana": 50000,
"result": {
"item": "ars_nouveau:drygmy_charm"
}
})
//botania:gaia_pylon
event.custom({
  "type": "botania:terra_plate",
"ingredients": [
{
  "item": "botania:terrasteel_ingot"
},
{
  "item": "ars_nouveau:fire_essence"
},
{
  "item": "ars_nouveau:air_essence"
}
,
{
  "item": "ars_nouveau:water_essence"
},
{
  "item": "ars_nouveau:earth_essence"
}
],
"mana": 20000,
"result": {
"item": "botania:gaia_pylon"
}
})
//ae2:flawless_budding_quartz
event.custom({
  "type": "botania:terra_plate",
"ingredients": [
{
  "item": "ae2:flawed_budding_quartz"
},
{
  "item": "ae2:certus_quartz_crystal"
},
{
  "item": "minecraft:nether_star"
}
,
{
  "item": "botania:gaia_pylon"
},
],
"mana": 20000,
"result": {
"item": "ae2:flawless_budding_quartz"
}
})
//ae2:energy_cell
event.custom({
  "type": "botania:terra_plate",
"ingredients": [
{
  "item": "minecraft:nether_star"
},
{
  "item": "ae2:certus_quartz_dust"
},
{
  "item": "botania:terra_plate"
}
],
"mana": 5000,
"result": {
"item": "ae2:energy_cell"
}
})
//botania:alfheim_portal
event.custom({
  "type": "botania:terra_plate",
"ingredients": [
{
  "item": "botania:livingwood_log"
},
{
  "item": "botania:mana_pearl"
},
{
  "item": "botania:mana_diamond"
},
{
  "item": "botania:gaia_ingot"
}
],
"mana": 5000,
"result": {
"item": "botania:alfheim_portal"
}
})
//minecraft:blaze_rod
event.custom({
  "type": "botania:terra_plate",
"ingredients": [
{
  "item": "minecraft:nether_star"
},
{
  "item": "occultism:afrit_essence"
},
{
  "item": "evilcraft:promise_acceptor_iron"
}
],
"mana": 25000,
"result": {
"item": "minecraft:blaze_rod"
}
})
//minecraft:iron_pickaxe
event.custom({
  "type": "botania:terra_plate",
"ingredients": [
{
  "item": "minecraft:stone_pickaxe"
},
{
  "item": "minecraft:nether_star"
},
{
  "item": "botania:terrasteel_block"
}
],
"mana": 500000,
"result": {
"item": "minecraft:iron_pickaxe"
}
})
})
