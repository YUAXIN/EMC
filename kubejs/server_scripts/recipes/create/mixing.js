ServerEvents.recipes(event => {
    //Molten_iron_1
    event.custom({
        "type": "create:mixing",
        "ingredients": [
          {
            "item": "mysticalagriculture:fire_essence"
          },
          {
            "item": "minecraft:iron_ingot"
          }
        ],
        "results": [
          {
            "amount": 100,
            "fluid": "minecraft:lava"
          }
        ]
    })
    //pink_slime
    event.custom({
      "type": "create:mixing",
      "ingredients": [
        {
          "amount": 1000,
          "fluid": "starbunclemania:source_fluid"
        },
        {
          "amount": 1000,
          "fluid": "cyclic:slime"
        }
      ],
      "results": [
        {
          "amount": 1000,
          "fluid": "industrialforegoing:pink_slime"
        }
      ]
  })
  //steel
  event.custom({
    "type": "create:mixing",
    "ingredients": [
      {
        "amount": 1000,
        "fluid": "starbunclemania:source_fluid"
      },
      {
        "item": "alltheores:steel_dust"
      }
    ],
    "results": [
      {
        "item": "alltheores:steel_ingot"
      }
    ]
})
//dryrubber
event.custom({
  "type": "create:mixing",
  "ingredients": [
    {
      "amount": 1000,
      "fluid": "mysticalagradditions:molten_supremium"
    },
    {
      "item": "refinedstorage:silicon"
    }
  ],
  "results": [
    {
      "item": "industrialforegoing:dryrubber"
    }
  ]
})
})