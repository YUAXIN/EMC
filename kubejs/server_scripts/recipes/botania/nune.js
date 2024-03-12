ServerEvents.recipes(event => {
    event.custom({
        "type": "botania:runic_altar",
  "ingredients": [
    {
      "item": "ars_nouveau:air_essence"
    },
    {
      "tag": "botania:manasteel_ingots"
    },
    {
      "item": "botania:gourmaryllis"
    },
  ],
  "mana": 4000,
  "output": {
    "count": 3,
    "item": "botania:rune_air"
  }
})
event.custom({
    "type": "botania:runic_altar",
"ingredients": [
{
  "item": "ars_nouveau:water_essence"
},
{
  "tag": "botania:manasteel_ingots"
},
{
  "item": "botania:hydroangeas"
},
],
"mana": 4000,
"output": {
"count": 3,
"item": "botania:rune_water"
}
})
event.custom({
  "type": "botania:runic_altar",
"ingredients": [
{
"item": "ars_nouveau:fire_essence"
},
{
"tag": "botania:manasteel_ingots"
},
{
"item": "botania:endoflame"
},
],
"mana": 4000,
"output": {
"count": 3,
"item": "botania:rune_fire"
}
})
event.custom({
  "type": "botania:runic_altar",
"ingredients": [
{
"item": "botania:rune_fire"
},
{
"item": "botania:rune_water"
},
{
"item": "botania:rune_air"
},
{
"tag": "botania:manasteel_ingots"
},
{
"item": "botania:shulk_me_not"
},
],
"mana": 10000,
"output": {
"count": 3,
"item": "botania:rune_greed"
}
})
event.custom({
  "type": "botania:runic_altar",
"ingredients": [
{
"item": "botania:rune_fire"
},
{
"item": "botania:rune_water"
},
{
"item": "botania:rune_air"
},
{
"item": "botania:rune_greed"
},
{ 
"item": "botania:rune_lust"
}
],
"mana": 5000,
"output": {
"count": 2,
"item": "botania:terra_plate"
}
})
event.custom({
  "type": "botania:runic_altar",
"ingredients": [
{
"item": "ae2:quartz_block"
},
],
"mana": 4000,
"output": {
"count": 5,
"item": "ae2:damaged_budding_quartz"
}
})
event.custom({
  "type": "botania:runic_altar",
"ingredients": [
{
"item": "occultism:book_of_binding_bound_afrit"
},
{
  "item": "minecraft:diamond_pickaxe"
  },
  {
    "item": "minecraft:iron_ore"
    },
    {
      "item": "minecraft:iron_ore"
      },
      {
        "item": "industrialforegoing:diamond_gear"
        },
        {
          "item": "industrialforegoing:diamond_gear"
          },
          {
            "item": "industrialforegoing:machine_frame_advanced"
            },
],
"mana": 40000,
"output": {
"item": "industrialforegoing:ore_laser_base"
}
})

})