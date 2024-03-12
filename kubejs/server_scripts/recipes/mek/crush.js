ServerEvents.recipes(event => {
    //mekanism:dust_osmium
    event.custom({
        "type":"mekanism:crushing",
        "input":{"ingredient":{"item":"minecraft:amethyst_block"}},
        "output":{"item":"mekanism:dust_osmium"}
    })
    //elementalcraft:springaline_shard
    event.custom({
        "type":"mekanism:crushing",
        "input":{"ingredient":{"item":"elementalcraft:springaline_cluster"}},
        "output":{"item":"elementalcraft:springaline_shard",
    "count":4}
    })
})