ServerEvents.recipes(event => {
    //下级精华种子
    event.custom({
        "type":"extendedcrafting:shaped_table",
        "pattern":[
            "AABCDCBAA",
            "ACDDDDDCA",
            "AECFGFCEA",
            "AFHCECHFA",
            "AIGEBEGIA",
            "AFHCECHFA",
            "AECFGFCEA",
            "ACDDDDDCA",
            "AABCDCBAA"
        ],
        "key":{
            "A":{
                "item":'mysticalagriculture:inferium_essence'
            },
            "B":{
                "item":'mysticalagriculture:prosperity_seed_base'
            },
            "C":{
                "item":'mysticalagradditions:insanium_essence'
            },
            "D":{
                "item":'mysticalagriculture:imperium_essence'
            },
            "E":{
                "item":'mysticalagriculture:tertium_essence'
            },
            "F":{
                "item":'mysticalagriculture:supremium_essence'
            },
            "G":{
                "item":'mysticalagriculture:awakened_supremium_essence'
            },
            "H":{
                "item":'mysticalagriculture:prudentium_essence'
            },
            "I":{
                "item":'mysticalagradditions:creative_essence'
            },
        },
        "result":{
            "item":'mysticalagriculture:inferium_seeds'
        }
    })
})