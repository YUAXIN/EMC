ServerEvents.recipes(event => {
    //mekanism:enriched_diamond
        event.custom({
            "type":"mekanism:enriching",
            "input":{
                "ingredient":{
                    "item":"mysticalagriculture:diamond_essence"
                }},
            "output":{"item":"mekanism:enriched_diamond"}
        })
        //extradisks:advanced_machine_casing
        event.custom({
            "type":"mekanism:enriching",
            "input":{
                "ingredient":{
                    "item":"mekanism:steel_casing"
                }},
            "output":{"item":"extradisks:advanced_machine_casing"}
        })
        //minecraft:obsidian
        event.custom({
            "type":"mekanism:enriching",
            "input":{
                "ingredient":{
                    "item":"mekanism:dust_obsidian"
                }},
            "output":{"item":"minecraft:obsidian"}
        })    
        //mekanism:creative_energy_cube
        event.custom({
        "type":"mekanism:enriching",
        "input":{
            "ingredient":{
                "item":"mekanism:ultimate_energy_cube"
            }},
        "output":{"item":"mekanism:creative_energy_cube",
    "nbt":{
        "mekData": {
          "EnergyContainers": [
            {
              "Container": "0b",
              "stored": "18446744073709551615.9999"
            }
          ],
          "componentConfig": {
            "config0": {
              "side0": 4,
              "side1": 4,
              "side2": 4,
              "side3": 4,
              "side4": 4,
              "side5": 4
            }
          }
        }
      }
    }
    })})
