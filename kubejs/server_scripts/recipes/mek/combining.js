ServerEvents.recipes(event => {
    //thermal:constantan_ingot
    event.custom({
        "type":"mekanism:combining",
        "extraInput":{"ingredient":{"item":"refinedstorage:silicon"}},
        "mainInput":{"amount":4,"ingredient":{"item":"mekanism:hdpe_pellet"}},
        "output":{"item":"mekanism:hdpe_sheet"}
    })
})