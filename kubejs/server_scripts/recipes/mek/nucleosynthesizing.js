ServerEvents.recipes(event => {
    //thermal:constantan_ingot
    event.custom({
        "type":"mekanism:nucleosynthesizing",
        "duration":500,
        "gasInput":{"amount":2,"gas":"mekanism:antimatter"},
        "itemInput":{"ingredient":{"item":"mysticalagriculture:tertium_essence"}},
        "output":{"item":"mysticalagriculture:prudentium_essence"}
    })
})