BlockEvents.rightClicked(event => {
  const recipes = [
//thermal:copper_gear
    {
      block:'minecraft:copper_block',
      item_in:'immersiveengineering:mold_gear',
      output:'thermal:copper_gear',
      consum_material:'minecraft:copper_ingot',
    },
    //industrialforegoing:diamond_gear
    {
      block:'botania:mana_diamond_block',
      item_in:'immersiveengineering:mold_gear',
      output:'industrialforegoing:diamond_gear',
      consum_material:'botania:mana_diamond',
    },
  //industrialforegoing:gold_gear
  {
    block:'minecraft:gold_block',
    item_in:'immersiveengineering:mold_gear',
    output:'industrialforegoing:gold_gear',
    consum_material:'minecraft:gold_ingot',
  },
  //industrialforegoing:iron_gear
  {
    block:'minecraft:iron_block',
    item_in:'immersiveengineering:mold_gear',
    output:'industrialforegoing:iron_gear',
    consum_material:'minecraft:iron_ingot',
  }]

    recipes.forEach(recipe =>{
    const { block, hand, item, world, player } = event
    if (hand.name() != "MAIN_HAND") return
  
    if (event.block.id == recipe.block && event.item.id == recipe.item_in && (player.isCrouching() || player.isFake())) {
      let itemEntity = event.block.createEntity("item")
      itemEntity.item = recipe.output
      itemEntity.x+=0.5
      itemEntity.y+=1
      itemEntity.z+=0.5
        if(event.player.inventory.contains(Item.of(recipe.consum_material))){
          itemEntity.spawn()
          event.server.runCommandSilent(`clear @p ${recipe.consum_material} 1`)
        }
    }
  })
})

ServerEvents.recipes(event =>{
  const id_prefix = 'emc:recipes/right_click/'
  const recipes = [
    {
      block:'minecraft:copper_block',
      item_in:'immersiveengineering:mold_gear',
      output:'thermal:copper_gear',
      consum_material:'minecraft:copper_ingot',
      id:`${id_prefix}copper_gear`
    },
    {
      block:'botania:mana_diamond_block',
      item_in:'immersiveengineering:mold_gear',
      output:'industrialforegoing:diamond_gear',
      consum_material:'botania:mana_diamond',
      id:`${id_prefix}diamond_gear`
    },
    {
      block:'minecraft:gold_block',
      item_in:'immersiveengineering:mold_gear',
      output:'industrialforegoing:gold_gear',
      consum_material:'minecraft:gold_ingot',
      id:`${id_prefix}gold_gear`
    },
    {
      block:'minecraft:iron_block',
      item_in:'immersiveengineering:mold_gear',
      output:'industrialforegoing:iron_gear',
      consum_material:'minecraft:iron_ingot',
      id:`${id_prefix}iron_gear`
    }]

  recipes.forEach(recipe =>{
    event.custom({
      "type":"lychee:block_interacting",
      "ghost":true,
      "contextual":[{"type":"is_sneaking"}],
      "post":[{"type":"drop_item","item":recipe.output,"count": 1}],
      "item_in":[{"item":recipe.item_in},{"item":recipe.consum_material}],
      "block_in":recipe.block
    }).id(recipe.id)
  })
})