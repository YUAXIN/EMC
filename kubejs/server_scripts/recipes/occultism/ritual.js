  ServerEvents.recipes((event) => {
  const id_prefix = 'emc/occultism/ritual/';
  const recipes = [
{
  output: 'ae2:cell_component_1k',
  activation_item: 'ae2:certus_quartz_crystal',
  inputs: [
      'minecraft:redstone',
      'ae2:logic_processor',
  ],
  ritual_dummy: 'kubejs:ritual_storage',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:storage',
  duration: 10,
  id: `${id_prefix}ritual_storage`
},
{
  output: '4x mekanism:dust_obsidian',
  count:4,
  activation_item: 'occultism:spirit_attuned_crystal',
  inputs: [
      'mysticalagriculture:awakened_supremium_essence',
      'ars_nouveau:water_essence',
  ],
  ritual_dummy: 'kubejs:ritual_dust',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:dust',
  duration: 5,
  id: `${id_prefix}ritual_dust`
},
{
  output: '8x extendedcrafting:luminessence',
  activation_item: 'minecraft:nether_star',
  inputs: [
      'mysticalagriculture:silicon_essence',
      'mysticalagriculture:fluix_essence',
      'mysticalagriculture:certus_quartz_essence',
  ],
  ritual_dummy: 'kubejs:ritual_chalk_glyph',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:chalk_glyph',
  duration: 5,
  id: `${id_prefix}ritual_chalk_glyph_9`
},
{
  output: 'occultism:chalk_gold_impure',
  activation_item: 'occultism:chalk_white',
  inputs: [
      'extendedcrafting:luminessence',
      'minecraft:gold_ingot',
      'minecraft:glowstone_dust',
  ],
  ritual_dummy: 'kubejs:ritual_chalk_glyph',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:chalk_glyph',
  duration: 5,
  id: `${id_prefix}ritual_chalk_glyph_6`
},
{
  output: 'occultism:chalk_purple_impure',
  activation_item: 'occultism:chalk_white',
  inputs: [
      'occultism:spirit_fire',
      'occultism:spirit_attuned_gem',
      'ae2:fluix_crystal',
      'mekanism:dust_obsidian',
  ],
  ritual_dummy: 'kubejs:ritual_chalk_glyph',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:chalk_glyph',
  duration: 5,
  id: `${id_prefix}ritual_chalk_glyph_2`
},
{
  output: '4x mysticalagriculture:amethyst_essence',
  activation_item: 'occultism:chalk_purple',
  inputs: [
    'mysticalagriculture:prosperity_gemstone'],
  ritual_dummy: 'kubejs:ritual_dust',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:dust',
  duration: 20,
  id: `${id_prefix}ritual_dust_1`
},
{
  output: 'minecraft:skeleton_skull',
  activation_item: 'minecraft:wither_skeleton_skull',
  inputs: [
      'botania:pure_daisy',
  ],
  ritual_dummy: 'kubejs:ritual_dust',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:dust',
  duration: 5,
  id: `${id_prefix}ritual_dust_2`
},
{
  output: 'evilcraft:blood_stain',
  activation_item: 'ars_nouveau:drygmy_charm',
  inputs: [
      'ae2:inscriber',
  ],
  ritual_dummy: 'kubejs:ritual_dust',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:dust',
  duration: 5,
  id: `${id_prefix}ritual_dust_3`
},
{
  output: 'evilcraft:dark_power_gem',
  activation_item: 'evilcraft:dark_gem',
  inputs: [
      'evilcraft:bucket_blood',
  ],
  ritual_dummy: 'kubejs:ritual_charger',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:charger',
  duration: 5,
  id: `${id_prefix}ritual_charger`
},
{
  output: 'mysticalagriculture:blaze_seeds',
  activation_item: 'minecraft:blaze_rod',
  inputs: [
      'ae2:certus_quartz_crystal',
      'botania:mana_pearl',
  ],
  ritual_dummy: 'kubejs:ritual_dust',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:dust',
  duration: 5,
  id: `${id_prefix}ritual_dust_4`
},
{
  output: 'occultism:chalk_red_impure',
  activation_item: 'occultism:chalk_white',
  inputs: [
      'extendedcrafting:luminessence',
      'minecraft:blaze_rod',
      'evilcraft:condensed_blood',
  ],
  ritual_dummy: 'kubejs:ritual_chalk_glyph',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:chalk_glyph',
  duration: 5,
  id: `${id_prefix}ritual_chalk_glyph_3`
},
{
  output: 'mysticalagriculture:iron_seeds',
  activation_item: 'minecraft:iron_ingot',
  inputs: [
      'botania:terrasteel_ingot',
      'ars_nouveau:earth_essence',
      'botania:manasteel_ingot',
  ],
  ritual_dummy: 'kubejs:ritual_chalk_glyph',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:chalk_glyph',
  duration: 5,
  id: `${id_prefix}ritual_chalk_glyph_4`
},
{
  output: 'evilcraft:promise_acceptor_gold',
  activation_item: 'occultism:chalk_gold',
  inputs: [
      'minecraft:gold_block',
      'evilcraft:dark_gem',
  ],
  ritual_dummy: 'kubejs:ritual_charger',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:charger',
  duration: 5,
  id: `${id_prefix}ritual_charger_1`
},
{
  output: 'mysticalagriculture:awakened_supremium_block',
  activation_item: 'extendedcrafting:black_iron_block',
  inputs: [
      'mysticalagriculture:awakened_supremium_essence',
      
  ],
  ritual_dummy: 'kubejs:ritual_charger',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:charger',
  duration: 40,
  id: `${id_prefix}ritual_charger_2`
},
{
  output: 'ae2additions:super_cell_component_4k',
  activation_item: 'ae2additions:super_cell_component_1k',
  inputs: [
      'extendedcrafting:luminessence',
      'minecraft:netherrack'
      
  ],
  ritual_dummy: 'kubejs:ritual_charger',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:charger',
  duration: 40,
  id: `${id_prefix}ritual_charger_3`
},
{
  output: 'megacells:cell_component_1m',
  activation_item: 'ae2additions:super_cell_component_256k',
  inputs: [
      'extendedcrafting:luminessence',
      'extendedcrafting:luminessence',
      'extendedcrafting:luminessence',
      'evilcraft:dark_power_gem',
      'evilcraft:dark_power_gem',
      'evilcraft:dark_power_gem',
      'ae2:cell_component_256k',
      'ae2:cell_component_256k',
      'ae2:cell_component_256k',
      'mysticalagriculture:awakened_supremium_block',
      'mysticalagriculture:awakened_supremium_block',
      'mysticalagriculture:awakened_supremium_block',
     
  ],
  ritual_dummy: 'kubejs:ritual_storage',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:storage',
  duration: 40,
  id: `${id_prefix}ritual_storage_3`
},
{
  output: 'extendedcrafting:basic_table',
  activation_item: 'extendedcrafting:frame',
  inputs: [
      'extendedcrafting:basic_catalyst',
      'extendedcrafting:basic_catalyst',
      'extendedcrafting:basic_catalyst',
      'extendedcrafting:basic_catalyst',
      'minecraft:crafting_table',
      'ars_nouveau:glyph_craft',
      'ae2:crafting_terminal',
     
  ],
  ritual_dummy: 'kubejs:ritual_basic',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:basic',
  duration: 40,
  id: `${id_prefix}ritual_basic_1`
},
{
  output: 'industrialforegoing:machine_frame_advanced',
  activation_item: 'industrialforegoing:machine_frame_simple',
  inputs: [
      'industrialforegoing:pink_slime_bucket',
      'extendedcrafting:black_iron_block',
      "industrialforegoing:plastic",
      "industrialforegoing:plastic",
      "industrialforegoing:diamond_gear",
      "industrialforegoing:diamond_gear",
      "industrialforegoing:diamond_gear",
      

  ],
  ritual_dummy: 'kubejs:ritual_storage',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:storage',
  duration: 10,
  id: `${id_prefix}ritual_storage_8`
},
{
  output: 'evilcraft:blood_stain',
  activation_item: 'ars_nouveau:drygmy_charm',
  inputs: [
      'ae2:inscriber',
  ],
  ritual_dummy: 'kubejs:ritual_dust',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:dust',
  duration: 5,
  id: `${id_prefix}ritual_dust_5`
},
{
  output: 'minecraft:iron_ore',
  activation_item: 'minecraft:stone',
  inputs: [
      'mysticalagriculture:iron_essence',
      'mysticalagriculture:iron_essence',
      'mysticalagriculture:iron_essence',
      'mysticalagriculture:iron_essence',
  ],
  ritual_dummy: 'kubejs:ritual_chalk_glyph',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:chalk_glyph',
  duration: 5,
  id: `${id_prefix}ritual_chalk_glyph_114514`
},
{
  output: 'occultism:book_of_binding_afrit',
  activation_item: 'ars_nouveau:blank_glyph',
  inputs: [
      'occultism:afrit_essence',
      'occultism:afrit_essence',
      'occultism:afrit_essence',
      'occultism:afrit_essence',
  ],
  ritual_dummy: 'occultism:summon_wild_afrit',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:summon_wild_afrit',
  duration: 5,
  id: `${id_prefix}ritual_summon_afrit_114514`
},
{
  output: 'minecraft:diamond_pickaxe',
  activation_item: 'minecraft:iron_pickaxe',
  inputs: [
      'mysticalagriculture:diamond_essence',
      'mysticalagriculture:diamond_essence',
      'mysticalagriculture:diamond_essence',
      'occultism:spirit_attuned_gem',
      'occultism:spirit_attuned_gem',
      'occultism:spirit_attuned_gem',
  ],
  ritual_dummy: 'occultism:craft_marid',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:craft_marid',
  duration: 5,
  id: `${id_prefix}ritual_craft_marid_114514`
},
{
  output: 'extendedcrafting:advanced_table',
  activation_item: 'extendedcrafting:basic_table',
  inputs: [
      'extendedcrafting:advanced_component',
      'extendedcrafting:advanced_component',
      'extendedcrafting:advanced_component',
      'extendedcrafting:advanced_component',
      'extendedcrafting:advanced_catalyst',
      'extendedcrafting:luminessence_block',    
  ],
  ritual_dummy: 'kubejs:ritual_advanced',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:advanced',
  duration: 40,
  id: `${id_prefix}ritual_advanced_1`
},
{
  output: 'mekanism:ultimate_energy_cube',
  activation_item: 'mekanism:elite_energy_cube',
  inputs: [
      'mysticalagriculture:imperium_essence',
      'mysticalagriculture:imperium_essence',
      'mysticalagriculture:imperium_essence',
      'mysticalagriculture:imperium_essence',
      'mysticalagriculture:imperium_essence',
      'mysticalagriculture:imperium_essence',    
      'mysticalagriculture:imperium_essence',
      'mysticalagriculture:imperium_essence',
  ],
  ritual_dummy: 'kubejs:ritual_advanced',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:advanced',
  duration: 40,
  id: `${id_prefix}ritual_advanced_2`
},
{
  output: 'extendedcrafting:elite_table',
  activation_item: 'extendedcrafting:advanced_table',
  inputs: [
      'extendedcrafting:crystaltine_component',
      'extendedcrafting:crystaltine_component',
      'extendedcrafting:crystaltine_component',
      'extendedcrafting:crystaltine_component',
      'extendedcrafting:crystaltine_catalyst',
      'extendedcrafting:crystaltine_block',    
  ],
  ritual_dummy: 'kubejs:ritual_elite',
  ritual_type: 'occultism:craft',
  pentacle_id: 'occultism:elite',
  duration: 40,
  id: `${id_prefix}ritual_elite_1`
},
]
recipes.forEach((recipe) => {
  recipe.type = 'occultism:ritual';
  recipe.activation_item = recipe.activation_item.startsWith('#')
      ? { tag: recipe.activation_item.slice(1) }
      : { item: recipe.activation_item };

  if (recipe.item_to_use)
      recipe.item_to_use = recipe.item_to_use.startsWith('#')
          ? { tag: recipe.item_to_use.slice(1) }
          : { item: recipe.item_to_use };

  recipe.ritual_dummy = Item.of(recipe.ritual_dummy).toJson();
  recipe.ingredients = recipe.inputs.map((input) =>
      input.startsWith('#') ? { tag: input.slice(1) } : { item: input }
  );
  recipe.result = Item.of(recipe.output).toJson();
  event.custom(recipe).id(recipe.id);
});
})
