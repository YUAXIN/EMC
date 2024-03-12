ServerEvents.recipes(event => {
  //botania:apothecary_default
    event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'botania:apothecary_default'
        },
        "pedestalItems": [
          {
            "item": 'minecraft:cobblestone'
          },
          {
            "item": 'minecraft:iron_ingot'
          }
        ],
        "reagent": [
          {
            "item": 'mysticalagradditions:insanium_essence'
          }
        ],
        "sourceCost": 0
      })
      //mysticalagriculture:earth_essence
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'mysticalagriculture:earth_essence',
          "count": 16,
        },
        "pedestalItems": [
          {
            "item": 'minecraft:dirt'
          },
          {
            "item": 'minecraft:stone'
          }
        ],
        "reagent": [
          {
            "item": 'mysticalagradditions:insanium_essence'
          }
        ],
        "sourceCost": 0
      })
      //mysticalagriculture:mystical_flower_essence
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'mysticalagriculture:mystical_flower_essence'
        },
        "pedestalItems": [
          {
            "item": 'mysticalagriculture:earth_essence'
          },
        ],
        "reagent": [
          {
            "item": 'botania:fertilizer'
          }
        ],
        "sourceCost": 0
      })
      //botania:twig_wand
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'botania:twig_wand'
        },
        "pedestalItems": [
          {
            "item": 'mysticalagriculture:earth_essence'
          },
          {
            "item": 'botania:white_petal'
          },
        ],
        "reagent": [
          {
            "item": 'botania:livingwood_log'
          }
        ],
        "sourceCost": 0
      })
      //botania:runic_altar
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'botania:runic_altar'
        },
        "pedestalItems": [
          {
            "item": 'mysticalagradditions:insanium_essence'
          },
          {
            "item": 'ars_nouveau:air_essence'
          },
          {
            "item": 'ars_nouveau:fire_essence'
          },
          {
            "item": 'ars_nouveau:water_essence'
          },
          {
          "item": 'botania:manasteel_ingot'
          },
          {
            "item": 'ars_nouveau:novice_spell_book'
            },
          ],
        "reagent": [
          {
            "item": 'botania:livingrock'
          }
        ],
        "sourceCost": 0
      })
      //ars_nouveau:ritual_containment
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'ars_nouveau:ritual_containment'
        },
        "pedestalItems": [
          {
            "item": 'ars_nouveau:drygmy_charm'
          },
        ],
        "reagent": [
          {
            "item": 'ars_nouveau:blank_glyph'
          }
        ],
        "sourceCost": 1000
      })
      //minecraft:piston
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'minecraft:piston'
        },
        "pedestalItems": [
          {
            "item": 'minecraft:nether_star'
          },
        ],
        "reagent": [
          {
            "item": 'minecraft:redstone'
          }
        ],
        "sourceCost": 1000
      })
      //ae2:certus_quartz_crystal
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'ae2:certus_quartz_crystal'
        },
        "pedestalItems": [
          {
            "item": 'botania:mana_diamond'
          },
        ],
        "reagent": [
          {
            "item": 'minecraft:nether_star'
          }
        ],
        "sourceCost": 2000
      })
      //ae2:chipped_budding_quartz
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'ae2:chipped_budding_quartz'
        },
        "pedestalItems": [
          {
            "item": 'ae2:damaged_budding_quartz'
          },
          {
            "item": 'ae2:damaged_budding_quartz'
          },
          {
            "item": 'ae2:damaged_budding_quartz'
          },
          {
            "item":'ae2:damaged_budding_quartz'
          },
        ],
        "reagent": [
          {
            "item": 'ae2:damaged_budding_quartz'
          }
        ],
        "sourceCost": 1000
      })
      //botanypots:terracotta_botany_pot
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'botanypots:terracotta_botany_pot'
        },
        "pedestalItems": [
          {
           "item": 'ars_nouveau:earth_essence'
          },
        ],
        "reagent": [
          {
          "item": 'ars_nouveau:imbuement_chamber'
          }
        ],
        "sourceCost": 2000
      })
      //occultism:spirit_fire
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'occultism:spirit_fire'
        },
        "pedestalItems": [
          {
           "item": 'mysticalagradditions:insanium_essence'
          },
        ],
        "reagent": [
          {
          "item": 'starbunclemania:source_fluid_bucket'
          }
        ],
        "sourceCost": 5000
      })
      //ae2:charger
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'ae2:charger'
        },
        "pedestalItems": [
          {
           "item": 'minecraft:nether_star'
          },
        ],
        "reagent": [
          {
          "item": 'ars_nouveau:enchanting_apparatus'
          }
        ],
        "sourceCost": 8000
      })
      //ae2:creative_energy_cell
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'ae2:creative_energy_cell'
        },
        "pedestalItems": [
          {
           "item": 'minecraft:nether_star'
          },
          {
           "item": 'botania:gaia_ingot'
          },
          {
            "item": 'ars_nouveau:apprentice_spell_book'
           },
           {
            "item": 'mysticalagradditions:creative_essence'
           },
           {
            "item": 'ae2:fluix_crystal'
           },
           {
            "item": 'ae2:certus_quartz_crystal'
           },
        ],
        "reagent": [
          {
          "item": 'ae2:energy_cell'
          }
        ],
        "sourceCost": 10000
      })
      //evilcraft:undead_sapling
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'evilcraft:undead_sapling'
        },
        "pedestalItems": [
          {
            "item": 'minecraft:wither_skeleton_skull'
          },
          {
            "item": 'evilcraft:blood_stain'
          },
        ],
        "reagent": [
          {
            "item": 'botania:pure_daisy'
          }
        ],
        "sourceCost": 1000
      })
      //evilcraft:bucket_blood
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'evilcraft:bucket_blood'
        },
        "pedestalItems": [
          {
            "item": 'evilcraft:condensed_blood'
          },
        ],
        "reagent": [
          {
            "item": 'minecraft:bucket'
          }
        ],
        "sourceCost": 1000
      })
      //evilcraft:blood_infuser
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'evilcraft:blood_infuser'
        },
        "pedestalItems": [
          {
            "item": 'evilcraft:blood_infusion_core'
          },
          {
            "item": 'evilcraft:hardened_blood'
          },
          {
            "item": 'extendedcrafting:luminessence'
          },
        ],
        "reagent": [
          {
            "item": 'botania:mana_pool'
          }
        ],
        "sourceCost": 10000
      })
      //create:mechanical_press
        event.custom({
          "type": "ars_nouveau:enchanting_apparatus",
          "keepNbtOfReagent": true,
          "output": {
            "item": 'create:mechanical_press'
          },
          "pedestalItems": [
            {
              "item": 'create:andesite_alloy_block'
            },
            {
              "item": 'create:shaft'
            },
            {
              "item": 'minecraft:iron_block'
            },
          ],
          "reagent": [
            {
              "item": 'create:andesite_casing'
            }
          ],
          "sourceCost": 10000
        })
      //immersiveengineering:mold_gear
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'immersiveengineering:mold_gear'
        },
        "pedestalItems": [
          {
            "item": 'alltheores:steel_ingot'
          },
          {
            "item": 'alltheores:steel_ingot'
          },
          {
            "item": 'alltheores:steel_ingot'
          },
        ],
        "reagent": [
          {
            "item": 'ars_nouveau:blank_glyph'
          }
        ],
        "sourceCost": 10000
      })
      //minecraft:stone_pickaxe
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'minecraft:stone_pickaxe'
        },
        "pedestalItems": [
          {
            "item": 'mysticalagriculture:prosperity_ingot'
          },
          {
            "item": 'mysticalagriculture:prosperity_ingot'
          },
          {
            "item": 'minecraft:stone'
          },
          {
            "item": 'minecraft:stone'
          },
          {
            "item": 'minecraft:cobblestone'
          },
          {
            "item": 'minecraft:cobblestone'
          },
          {
            "item": 'ars_nouveau:novice_spell_book'
          },
          {
            "item": 'mysticalagriculture:stone_essence'
          },
        ],
        "reagent": [
          {
            "item": 'minecraft:wooden_pickaxe'
          }
        ],
        "sourceCost": 10000
      })
      //mekanism:basic_control_circuit
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'mekanism:basic_control_circuit'
        },
        "pedestalItems": [
          {
            "item": 'mekanism:enriched_redstone'
          },
        ],
        "reagent": [
          {
            "item": 'mysticalagriculture:emerald_essence'
          }
        ],
        "sourceCost": 1000
      })
      //mekanism:crusher
      event.custom({
        "type": "ars_nouveau:enchanting_apparatus",
        "keepNbtOfReagent": true,
        "output": {
          "item": 'mekanism:crusher'
        },
        "pedestalItems": [
          {
            "item": 'mekanism:steel_casing'
          },
          {
            "item": 'mekanism:steel_casing'
          },
          {
            "item": 'mekanism:steel_casing'
          },
          {
            "item": 'mysticalagriculture:imperium_essence'
          },
        ],
        "reagent": [
          {
            "item": 'create:millstone'
          }
        ],
        "sourceCost": 1000
      })
      })