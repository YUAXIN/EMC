ServerEvents.recipes(event => {
    //thermal:constantan_ingot
    event.custom({
        "type":"mekanism:purifying",
        "chemicalInput":{"amount":1,"gas":"mekanism:oxygen"},
        "itemInput":{"ingredient":{"item":"mysticalagriculture:tertium_essence"}},
        "output":{"item":"mekanism:hdpe_pellet"}
    })
})