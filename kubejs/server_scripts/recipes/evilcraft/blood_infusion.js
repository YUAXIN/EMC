ServerEvents.recipes((event) => {
    event.custom({
    "type": "evilcraft:blood_infuser",
    "item": "botania:terrasteel_block",
    "fluid": {
      "fluid": "evilcraft:blood",
      "amount": 2500
    },
    "result": {
      "item": "evilcraft:promise_acceptor_iron"
    },
    "duration": 50,
    "xp": 0.5
})
event.custom({
    "type": "evilcraft:blood_infuser",
    "item": "mysticalagriculture:blaze_essence",
    "fluid": {
      "fluid": "evilcraft:blood",
      "amount": 100
    },
    "result": {
      "item": "minecraft:blaze_rod"
    },
    "duration": 10,
    "xp": 0.5
})
event.custom({
  "type": "evilcraft:blood_infuser",
  "item": "evilcraft:potentia_sphere",
  "fluid": {
    "fluid": "evilcraft:blood",
    "amount": 1000
  },
  "result": {
    "item": "evilcraft:promise_tier_1"
  },
  "duration": 200,
  "xp": 0.5
})
event.custom({
  "type": "evilcraft:blood_infuser",
  "item": "evilcraft:promise_acceptor_gold",
  "fluid": {
    "fluid": "evilcraft:blood",
    "amount": 8000
  },
  "result": {
    "item": "evilcraft:promise_tier_2"
  },
  "duration": 200,
  "xp": 0.5,
  "tier":1
})
  event.custom({
    "type": "evilcraft:blood_infuser",
    "item": "mysticalagriculture:iron_seeds",
    "fluid": {
      "fluid": "evilcraft:blood",
      "amount": 8000
    },
    "result": {
      "item": "mysticalagriculture:gold_seeds"
    },
    "duration": 500,
    "xp": 0.5,
    "tier":2
})
event.custom({
  "type": "evilcraft:blood_infuser",
  "item": "botania:mana_diamond_block",
  "fluid": {
    "fluid": "evilcraft:blood",
    "amount": 8000
  },
  "result": {
    "item": "mysticalagriculture:diamond_seeds"
  },
  "duration": 500,
  "xp": 0.5,
  "tier":3
})
event.custom({
  "type": "evilcraft:blood_infuser",
  "item": "minecraft:black_dye",
  "fluid": {
    "fluid": "evilcraft:blood",
    "amount": 40000
  },
  "result": {
    "item": "extendedcrafting:black_iron_block"
  },
  "duration": 200,
  "xp": 0.5,
  "tier":1
})
})