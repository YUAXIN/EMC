ServerEvents.recipes(event => {
//#mysticalagriculture:fire_essence
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 8,
        "input": {
          "item": 'mysticalagriculture:stone_essence'
        },
        "output": 'mysticalagriculture:fire_essence',
        "pedestalItems": [],
        "source": 100
      })
      //#minecraft:iron_ingot
      event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 4,
        "input": {
          "item": 'mysticalagriculture:prosperity_ingot'
        },
        "output": 'minecraft:iron_ingot',
        "pedestalItems": [
          {
            "item": {
              "item": 'mysticalagriculture:fire_essence'
            }
          },
          {
            "item": {
              "item": 'mysticalagriculture:stone_essence'
            }
          },
         
        ],
        "source": 100
      })
      //minecraft:iron_block
      event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 2,
        "input": {
          "item": 'mysticalagriculture:iron_essence'
        },
        "output": 'minecraft:iron_block',
        "pedestalItems": [],
        "source": 500
      })
      //#mysticalagriculture:air_essence
      event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 8,
        "input": {
          "item": 'mysticalagriculture:dirt_essence'
        },
        "output": 'mysticalagriculture:air_essence',
        "pedestalItems": [],
        "source": 500
    })
    //minecraft:gold_ingot
    event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 4,
        "input": {
          "item": 'mysticalagriculture:prosperity_ingot'
        },
        "output": 'minecraft:gold_ingot',
        "pedestalItems": [
          {
            "item": {
              "item": 'mysticalagriculture:air_essence'
            }
          },
          {
            "item": {
              "item": 'mysticalagriculture:stone_essence'
            }
          },
         
        ],
        "source": 100
      })
      //minecraft:copper_ingot
      event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 4,
        "input": {
          "item": 'mysticalagriculture:prosperity_ingot'
        },
        "output": 'minecraft:copper_ingot',
        "pedestalItems": [
          {
            "item": {
              "item": 'mysticalagriculture:water_essence'
            }
          },
          {
            "item": {
              "item": 'mysticalagriculture:stone_essence'
            }
          },
         
        ],
        "source": 100
      })
      //mysticalagradditions:creative_essence
      event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 4,
        "input": {
          "item": 'ars_nouveau:archwood_planks'
        },
        "output": 'mysticalagradditions:creative_essence',
        "pedestalItems": [
          {
            "item": {
              "item": 'mysticalagriculture:fire_essence'
            }
          },
          {
            "item": {
              "item": 'mysticalagriculture:air_essence'
            }
          },
          {
            "item": {
              "item": 'mysticalagriculture:water_essence'
            }
          },
         
        ],
        "source": 100
      })
      //mysticalagradditions:insanium_essence
      event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 8,
        "input": {
          "item": 'mysticalagradditions:creative_essence'
        },
        "output": 'mysticalagradditions:insanium_essence',
        "pedestalItems": [
          {
            "item": {
              "item": 'mysticalagriculture:fire_essence'
            }
          },
          {
            "item": {
              "item": 'mysticalagriculture:air_essence'
            }
          },
          {
            "item": {
              "item": 'mysticalagriculture:water_essence'
            }
          },
          {
            "item": {
              "item": 'mysticalagriculture:wood_essence'
            }
          },
          {
            "item": {
              "item": 'mysticalagriculture:dirt_essence'
            }
          },
          {
            "item": {
              "item": 'mysticalagriculture:stone_essence'
            }
          },
         
        ],
        "source": 1000
      })
      //ars_nouveau:fire_essence
      event.custom({
        "type": "ars_nouveau:imbuement",
        "count": 4,
        "input": {
          "item": 'mysticalagriculture:fire_essence'
        },
        "output": 'ars_nouveau:fire_essence',
        "pedestalItems": [
          {
            "item": {
              "item": 'mysticalagradditions:insanium_essence'
            }
          }, 
          {
            "item": {
              "item": 'botania:endoflame'
            }
          }
        ],
        "source": 200
    })
    //botania:livingwood_log
  event.custom({
    "type": "ars_nouveau:imbuement",
    "count": 8,
    "input": {
      "item": 'ars_nouveau:red_archwood_log'
    },
    "output": 'botania:livingwood_log',
    "pedestalItems": [ 
      {
        "item": {
          "item": 'botania:pure_daisy'
        }
      }
    ],
    "source": 200
})
//botania:livingrock
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 8,
  "input": {
    "item": 'ars_nouveau:sourcestone'
  },
  "output": 'botania:livingrock',
  "pedestalItems": [ 
    {
      "item": {
        "item": 'botania:pure_daisy'
      }
    }
  ],
  "source": 200
})
//botania:manasteel_ingot
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 8,
  "input": {
    "item": 'minecraft:iron_ingot'
  },
  "output": 'botania:manasteel_ingot',
  "pedestalItems": [
    {
      "item": {
        "item": 'ars_nouveau:fire_essence'
      }
    }, 
    {
      "item": {
        "item": 'starbunclemania:source_fluid_bucket'
      }
    },
    {
      "item": {
        "item": 'botania:manasteel_ingot'
      }
    }
  ],
  "source": 200

})
//ars_nouveau:water_essence
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 4,
  "input": {
    "item": 'mysticalagriculture:water_essence'
  },
  "output": 'ars_nouveau:water_essence',
  "pedestalItems": [
    {
      "item": {
        "item": 'mysticalagradditions:insanium_essence'
      }
    }, 
    {
      "item": {
        "item": 'botania:hydroangeas'
      }
    }
  ],
  "source": 200
})
//ars_nouveau:air_essence
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 4,
  "input": {
    "item": 'mysticalagriculture:air_essence'
  },
  "output": 'ars_nouveau:air_essence',
  "pedestalItems": [
    {
      "item": {
        "item": 'mysticalagradditions:insanium_essence'
      }
    }, 
    {
      "item": {
        "item": 'botania:gourmaryllis'
      }
    }
  ],
  "source": 200
})
//ars_nouveau:earth_essence
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 4,
  "input": {
    "item": 'mysticalagriculture:earth_essence'
  },
  "output": 'ars_nouveau:earth_essence',
  "pedestalItems": [
    {
      "item": {
        "item": 'botania:blacker_lotus'
      }
    }, 
    {
      "item": {
        "item": 'botania:terrasteel_ingot'
      }
    }
  ],
  "source": 200
})
//botania:black_lotus
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 4,
  "input": {
    "item": 'mysticalagriculture:mystical_flower_essence'
  },
  "output": 'botania:black_lotus',
  "pedestalItems": [],
  "source": 200
})
//refinedstorage:quartz_enriched_iron
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 8,
  "input": {
    "item": 'minecraft:iron_ingot'
  },
  "output": 'refinedstorage:quartz_enriched_iron',
  "pedestalItems": [ 
    {
      "item": {
        "item": 'minecraft:soul_sand'
      }
    }
  ],
  "source": 200
})
//refinedstorage:quartz_enriched_iron_block
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 4,
  "input": {
    "item": 'minecraft:iron_block'
  },
  "output": 'refinedstorage:quartz_enriched_iron_block',
  "pedestalItems": [ 
    {
      "item": {
        "item": 'minecraft:soul_sand'
      }
    }
  ],
  "source": 900
})
//botania:natura_pylon
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 1,
  "input": {
    "item": 'botania:gaia_pylon'
  },
  "output": 'botania:natura_pylon',
  "pedestalItems": [ 
    {
      "item": {
        "item": 'ars_nouveau:earth_essence'
      }
    }
  ],
  "source": 2500
})
//minecraft:amethyst_block
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 1,
  "input": {
    "item": 'minecraft:amethyst_shard'
  },
  "output": 'minecraft:amethyst_block',
  "pedestalItems": [ 
    {
      "item": {
        "item": 'ars_nouveau:earth_essence'
      }
    }
  ],
  "source": 4000
})
//minecraft:gold_block
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 2,
  "input": {
    "item": 'mysticalagriculture:gold_essence'
  },
  "output": 'minecraft:gold_block',
  "pedestalItems": [ 
    {
      "item": {
        "item": 'ars_nouveau:earth_essence'
      }
    }
  ],
  "source": 1500
})
//minecraft:copper_block
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 2,
  "input": {
    "item": 'mysticalagriculture:copper_essence'
  },
  "output": 'minecraft:copper_block',
  "pedestalItems": [ 
    {
      "item": {
        "item": 'ars_nouveau:earth_essence'
      }
    }
  ],
  "source": 1500
})
//minecraft:wooden_pickaxe
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 1,
  "input": {
    "item": 'ars_nouveau:archwood_planks'
  },
  "output": 'minecraft:wooden_pickaxe',
  "pedestalItems": [
    {
      "item": {
        "item": 'mysticalagriculture:fire_essence'
      }
    },
    {
      "item": {
        "item": 'mysticalagriculture:air_essence'
      }
    },
    {
      "item": {
        "item": 'mysticalagriculture:water_essence'
      }
    },
    {
      "item": {
        "item": 'mysticalagriculture:wood_essence'
      }
    },
    {
      "item": {
        "item": 'mysticalagriculture:dirt_essence'
      }
    },
    {
      "item": {
        "item": 'mysticalagriculture:stone_essence'
      }
    },
   
  ],
  "source": 1000
})
//ae2:singularity
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 2,
  "input": {
    "item": 'mysticalagriculture:supremium_essence'
  },
  "output": 'ae2:singularity',
  "pedestalItems": [ 
    {
      "item": {
        "item": 'ars_nouveau:imbuement_chamber'
      }
    }
  ],
  "source": 1500
})
//ae2:singularity
event.custom({
  "type": "ars_nouveau:imbuement",
  "count": 2,
  "input": {
    "item": 'mysticalagriculture:enderium_essence'
  },
  "output": 'minecraft:ender_pearl',
  "source": 1500
})
})
