ServerEvents.recipes(event => {
    //mekanism:osmium
        event.custom({
            "type":"mekanism:gas_conversion",
            "input":{"ingredient":{"item":"mekanism:dust_osmium"}},
            "output":{"amount":100,"gas":"mekanism:osmium"}
        })
        //mekanism:oX
        event.custom({
            "type":"mekanism:gas_conversion",
            "input":{"ingredient":{"item":"ars_nouveau:air_essence"}},
            "output":{"amount":100,"gas":"mekanism:oxygen"}
        })
    })