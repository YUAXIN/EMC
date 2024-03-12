ServerEvents.recipes(event => {
    //mekanism:ingot_osmium
    event.custom({
        "type":"mekanism:compressing",
        "chemicalInput":{"amount":1,"gas":"mekanism:osmium"},
        "itemInput":{"ingredient":{"item":"mysticalagriculture:prosperity_ingot"}},
        "output":{"item":"mekanism:ingot_osmium"}
    })
})