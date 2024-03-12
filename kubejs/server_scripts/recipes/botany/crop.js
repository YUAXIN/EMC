ServerEvents.recipes(event => {
    //64K
    event.custom({
      type: "botanypots:crop",
      seed: { item: "ae2:cell_component_16k" },
      categories: ["dirt","farmland"],
      growthTicks: 1200,
      display: {
        type: "botanypots:aging",
        block: "ae2:16k_crafting_storage",
      },
      drops: [
        {
          chance: 1.0,
          output: { item: "ae2:cell_component_64k" },
          minRolls: 1,
          maxRolls: 2,
        },
        {
          chance: 0.15,
          output: { item: "ae2:cell_component_64k" },
          minRolls: 1,
          maxRolls: 2,
        },
      ],
    });
    //64K 更好的植物盆栽
    event.custom({
      type: "botanypots:crop",
      seed: { item: "ae2:cell_component_16k" },
      categories: ["dirt","farmland"],
      growthTicks: 1200,
      display: {
        type: "botanypots:aging",
        block: "ae2:16k_crafting_storage",
      },
      drops: [
        {
          chance: 1.0,
          output: { item: "ae2:cell_component_64k" },
          minRolls: 1,
          maxRolls: 2,
        },
        {
          chance: 0.15,
          output: { item: "ae2:cell_component_64k" },
          minRolls: 1,
          maxRolls: 2,
        },
      ],
    });
})
  
  