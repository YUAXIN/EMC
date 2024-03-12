ServerEvents.recipes(event => {
    event.shaped(Item.of('24x minecraft:oak_log'),
  [ 
      'AAA', 
      'ABA',  
      'AAA'    
  ],
  {
    A: 'mysticalagriculture:wood_essence',
    B: 'mysticalagradditions:creative_essence'
  })
    event.shaped(Item.of('32x minecraft:cobblestone'),
  [ 
    'AAA', 
    'A A',
    'AAA'  
  ],
  {
  A: 'mysticalagriculture:stone_essence'
})
event.shaped(Item.of('8x minecraft:stone'),
  [ 
    'AAA', 
    'ABA',
    'AAA'  
  ],
  {
  A: 'mysticalagriculture:stone_essence',
  B: 'mysticalagradditions:creative_essence'
})
event.shaped(Item.of('4x ars_nouveau:red_archwood_log'),
  [ 
    'AAA', 
    'ABA',
    'AAA'  
  ],
  {
  A: 'mysticalagriculture:wood_essence',
  B: 'ars_nouveau:novice_spell_book'
})
event.shaped(Item.of('ars_nouveau:novice_spell_book'),
  [ 
    'A A', 
    ' B ',
    'A A'  
  ],
  {
  A: 'mysticalagriculture:wood_essence',
  B: 'mysticalagriculture:dirt_essence'
})
event.shaped(Item.of('4x mysticalagriculture:prosperity_ingot'),
  [ 
    ' A ', 
    'A A',
    ' A '  
  ],
  {
  A: 'mysticalagriculture:stone_essence',
})
event.shaped(Item.of('ars_nouveau:arcane_platform'),
  [ 
    'AAA', 
    'B B',
    '   '  
  ],
  {
  A: 'ars_nouveau:archwood_slab',
  B: 'mysticalagriculture:dirt_essence'
})
event.shaped(Item.of('ars_nouveau:imbuement_chamber'),
  [ 
    ' A ', 
    'ABA',
    ' A '  
  ],
  {
  A: 'ars_nouveau:archwood_planks',
  B: 'mysticalagradditions:creative_essence'
})
event.shaped(Item.of('ars_nouveau:enchanting_apparatus'),
  [ 
    'BAB', 
    'A A',
    'BAB'     
  ],
  {
  A: 'ars_nouveau:blank_glyph',
  B: 'ars_nouveau:archwood_planks'
})
event.shaped(Item.of('ars_nouveau:arcane_core'),
  [ 
    'AAA', 
    'AAA',
    'AAA'     
  ],
  {
  A: 'ars_nouveau:blank_glyph',
})
event.shaped(Item.of('botania:fertilizer'),
  [ 
    'A  ', 
    'A  ',
    '   '     
  ],
  {
  A: 'mysticalagriculture:earth_essence',

})
event.shaped(Item.of('botania:mana_pool'),
  [ 
    'A A', 
    'ABA',
    '   '         
  ],
  {
  A: 'botania:livingrock',
  B:'mysticalagriculture:earth_essence'
})
event.shaped(Item.of('botania:mana_spreader'),
  [ 
    'AAA', 
    'AB ',
    'AAA'         
  ],
  {
  A: 'botania:livingwood_log',
  B:'ars_nouveau:blank_glyph'
})
event.shaped(Item.of('ars_nouveau:ritual_brazier'),
  [ 
    'BBB', 
    'BAB',
    'BBB'         
  ],
  {
  A:'ars_nouveau:arcane_platform',
  B:'ars_nouveau:blank_glyph'
})
event.shaped(Item.of('minecraft:enchanting_table'),
  [ 
    ' C ', 
    'ABA',
    'BBB'         
  ],
  {
  A:'botania:mana_diamond_block',
  B:'minecraft:obsidian',
  c:'mysticalagriculture:prudentium_essence'
})
event.shaped(Item.of('create:spout'),
  [ 
    'A  ', 
    'B  ',
    '   '     
  ],
  {
  A: 'mysticalagriculture:earth_essence',
 B:'minecraft:bucket'
})
event.shapeless(Item.of('4x ars_nouveau:drygmy_charm'),['ars_nouveau:drygmy_charm'])
event.shapeless(Item.of('refinedstorage:creative_controller'),['ae2:controller','ae2:creative_energy_cell'])
event.shapeless(Item.of('evilcraft:potentia_sphere'),['minecraft:slime_block','evilcraft:promise_acceptor_iron'])
event.shapeless(Item.of('4x minecraft:dirt'),['mysticalagradditions:creative_essence','3x mysticalagriculture:water_essence'])
event.shapeless(Item.of('3x immersiveengineering:blastbrick'),['occultism:afrit_essence','3x botania:livingrock'])
event.shapeless(Item.of('32x minecraft:sand'),['2x ars_nouveau:fire_essence','2x mysticalagriculture:stone_essence'])
})