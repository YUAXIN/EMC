ServerEvents.recipes(event => {
    //涡轮叶片
    event.custom({
        "type": "create:filling",
  "ingredients": [
    {
      "item": "create:andesite_alloy"
    },
    {
      "amount": 1000,
      "fluid": "minecraft:lava",
      "nbt": {}
    }
  ],
  "results": [
    {
      "item": "mekanismgenerators:turbine_blade"
    }
  ]
    })
    //安山合金块
    event.custom({
        "type": "create:filling",
  "ingredients": [
    {
      "item": "embers:ember_crystal"
    },
    {
      "amount": 1000,
      "fluid": "embers:molten_iron",
      "nbt": {}
    }
  ],
  "results": [
    {
      "item": "create:andesite_alloy_block"
    }
  ]
    })
    //魔王书
    event.custom({
        "type": "create:filling",
  "ingredients": [
    {
      "item": "minecraft:emerald"
    },
    {
      "amount": 1000,
      "fluid": "enderio:xp_juice",
      "nbt": {}
    }
  ],
  "results": [
    {
      "item": "occultism:book_of_binding_marid"
    }
  ]
    })
    //minecraft:emerald
    event.custom({
      "type": "create:filling",
"ingredients": [
  {
    "item": "mysticalagriculture:emerald_essence"
  },
  {
    "amount": 1000,
    "fluid": "cyclic:slime",
    "nbt": {}
  }
],
"results": [
  {
    "item": "minecraft:emerald"
  }
]
  })
})