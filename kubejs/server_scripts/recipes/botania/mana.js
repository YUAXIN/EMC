ServerEvents.recipes(event => {
    event.custom({
            "type": "botania:mana_infusion",
            "input": {
              "item": "minecraft:iron_ingot"
            },
            "mana": 100,
            "output": {
              "item": "botania:manasteel_ingot"
            }
        })
        event.custom({
            "type": "botania:mana_infusion",
            "input": {
              "item": "minecraft:bucket"
            },
            "mana": 500,
            "output": {
              "item": "starbunclemania:source_fluid_bucket"
            }
        })
        event.custom({
            "type": "botania:mana_infusion",
            "input": {
              "item": "mysticalagriculture:prosperity_gemstone"
            },
            "mana": 50,
            "output": {
              "item": "ars_nouveau:source_gem"
            }
        })
        event.custom({
          "type": "botania:mana_infusion",
          "input": {
            "item": "ars_nouveau:experience_gem"
          },
          "mana": 50,
          "output": {
            "item": "minecraft:slime_ball"
          }
      })
      event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
          "type": "block",
          "block": "botania:conjuration_catalyst"
        },
        "input": {
          "item": "botania:mana_powder"
        },
        "mana": 1,
        "output": {
          "item": "minecraft:redstone"
        }
      })
      event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
          "type": "block",
          "block": "botania:alchemy_catalyst"
        },
        "input": {
          "item": "botania:rune_greed"
        },
        "mana": 500,
        "output": {
          "item": "botania:rune_lust"
        }
      })
      event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
          "type": "block",
          "block": "botania:conjuration_catalyst"
        },
        "input": {
          "item": "botania:manasteel_block"
        },
        "mana": 400,
        "output": {
          "item": "minecraft:lapis_block"
        }
      })
      event.custom({
        "type": "botania:mana_infusion",
        "catalyst": {
          "type": "block",
          "block": "botania:alchemy_catalyst"
        },
        "input": {
          "item": "minecraft:gold_nugget"
        },
        "mana": 400,
        "output": {
          "item": "botania:spark"
        }
      })
      event.custom({
        "type": "botania:mana_infusion",
        "input": {
          "item": "botania:black_lotus"
        },
        "mana": 500,
        "output": {
          "item": "botania:blacker_lotus"
        }
    })
    event.custom({
      "type": "botania:mana_infusion",
      "catalyst": {
        "type": "block",
        "block": "botania:conjuration_catalyst"
      },
      "input": {
        "item": "minecraft:beacon"
      },
      "mana": 1500,
      "output": {
        "item": "minecraft:nether_star"
      }
    })
    event.custom({
      "type": "botania:mana_infusion",
      "input": {
        "item": "ae2:chipped_budding_quartz"
      },
      "mana": 4000,
      "output": {
        "item": "ae2:flawed_budding_quartz"
      }
  })
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "minecraft:beacon"
  },
  "input": {
    "item": "botanypots:terracotta_botany_pot"
  },
  "mana": 8000,
  "output": {
    "item": "botanypots:terracotta_hopper_botany_pot"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "ae2:fluix_block"
  },
  "input": {
    "item": "minecraft:lightning_rod"
  },
  "mana": 8000,
  "output": {
    "item": "ars_nouveau:glyph_lightning"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "ae2:mysterious_cube"
  },
  "input": {
    "item": "ae2:logic_processor_press"
  },
  "mana": 1000,
  "output": {
    "item": "ae2:logic_processor_press",
  "count":4
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "ae2:mysterious_cube"
  },
  "input": {
    "item": "ae2:silicon_press"
  },
  "mana": 1000,
  "output": {
    "item": "ae2:silicon_press",
    "count":4
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "ae2:mysterious_cube"
  },
  "input": {
    "item": "ae2:engineering_processor_press"
  },
  "mana": 1000,
  "output": {
    "item": "ae2:engineering_processor_press",
    "count":4
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "ae2:mysterious_cube"
  },
  "input": {
    "item": "ae2:calculation_processor_press"
  },
  "mana": 1000,
  "output": {
    "item": "ae2:calculation_processor_press",
    "count":4
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "ae2:controller"
  },
  "input": {
    "item": "ae2:certus_quartz_dust"
  },
  "mana": 1000,
  "output": {
    "item": "ae2:formation_core",
    "count":4
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "ae2:controller"
  },
  "input": {
    "item": "ae2:fluix_dust"
  },
  "mana": 1000,
  "output": {
    "item": "ae2:annihilation_core",
    "count":4
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "refinedstorage:creative_controller"
  },
  "input": {
    "item": "ae2:certus_quartz_dust"
  },
  "mana": 1000,
  "output": {
    "item": "refinedstorage:construction_core",
    "count":4
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "refinedstorage:creative_controller"
  },
  "input": {
    "item": "ae2:fluix_dust"
  },
  "mana": 1000,
  "output": {
    "item": "refinedstorage:destruction_core",
    "count":4
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:conjuration_catalyst"
  },
  "input": {
    "item": "evilcraft:undead_log"
  },
  "mana": 3000,
  "output": {
    "item": "evilcraft:condensed_blood"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "botania:conjuration_catalyst"
  },
  "input": {
    "item": "evilcraft:promise_acceptor_diamond"
  },
  "mana": 8000,
  "output": {
    "item": "evilcraft:promise_tier_3"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "mysticalagriculture:diamond_essence"
  },
  "mana": 20000,
  "output": {
    "item": "minecraft:diamond_block"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "ae2:controller"
  },
  "input": {
    "item": "ae2:cell_component_1k"
  },
  "mana": 20000,
  "output": {
    "item": "ae2additions:super_cell_component_1k"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "alltheores:iron_dust"
  },
  "mana": 5000,
  "output": {
    "item": "mekanism:enriched_iron"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "mysticalagradditions:molten_supremium_bucket"
  },
  "mana": 500000,
  "output": {
    "item": "minecraft:lava_bucket"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "catalyst": {
    "type": "block",
    "block": "minecraft:beacon"
  },
  "input": {
    "item": "industrialforegoing:machine_frame_advanced"
  },
  "mana": 8000,
  "output": {
    "item": "industrialforegoing:machine_frame_supreme"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "minecraft:redstone_block"
  },
  "mana": 500000,
  "output": {
    "item": "mekanism:enriched_redstone"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "mekanism:hdpe_sheet"
  },
  "mana": 500000,
  "output": {
    "item": "mekanism:pellet_antimatter"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "ars_nouveau:drygmy_charm"
  },
  "mana": 500000,
  "output": {
    "item": "minecraft:leather"
  }
})
event.custom({
  "type": "botania:mana_infusion",
  "input": {
    "item": "cyclic:eye_teleport"
  },
  "mana": 500000,
  "output": {
    "item": "cyclic:ender_eye_reuse"
  }
})
    })