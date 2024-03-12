ServerEvents.recipes(event => {
    //ars_caelum:ritual_conjure_island_sculk
    event.custom({
        "type": "apotheosis:keep_nbt_enchanting",
	"conditions": [{
		"type": "apotheosis:module",
		"module": "enchantment"
	}],
	"input": {
		"item": "mysticalagriculture:amethyst_essence"
	},
	"requirements": {
		"eterna": 0,
		"quanta": 0,
		"arcana": 0
	},
	"max_requirements": {
		"eterna": 50,
		"quanta": 100,
		"arcana": 100
	},
	"result": {
		"item": "ars_caelum:ritual_conjure_island_sculk",
		"count": 1
	}
})
//minecraft:ender_eye
event.custom({
    "type": "apotheosis:keep_nbt_enchanting",
"conditions": [{
    "type": "apotheosis:module",
    "module": "enchantment"
}],
"input": {
    "item": "botania:mana_pearl"
},
"requirements": {
    "eterna": 0,
    "quanta": 0,
    "arcana": 0
},
"max_requirements": {
    "eterna": 50,
    "quanta": 100,
    "arcana": 100
},
"result": {
    "item": "minecraft:ender_eye",
    "count": 1
}
})
})