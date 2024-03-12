BlockEvents.rightClicked(event => {
  //mysticalagradditions:creative_essence
    const { block, hand, item, world, player } = event
    if (hand.name() != "MAIN_HAND") return
  
    if (event.block.id == 'allthemodium:piglich_heart_block' && event.item.id == 'ars_nouveau:archmage_spell_book' && (player.isCrouching() || player.isFake())) {
        let itemEntity = event.block.createEntity("item")
        itemEntity.item = 'mysticalagradditions:creative_essence'
        itemEntity.x+=0.5
        itemEntity.y+=1
        itemEntity.z+=0.5
        if (Math.random() < 0.99) {
          itemEntity.spawn()
      }
    }
    //mysticalagradditions:creative_essence
    if (hand.name() != "MAIN_HAND") return

    if (event.block.id == 'minecraft:dirt' && event.item.id == 'ars_nouveau:archmage_spell_book' && (player.isCrouching() || player.isFake())) {
      let itemEntity = event.block.createEntity("item")
      itemEntity.item = 'mysticalagriculture:dirt_essence'
      itemEntity.x+=0.5
      itemEntity.y+=1
      itemEntity.z+=0.5
      if (Math.random() < 0.99) {
        itemEntity.spawn()
    }
  }
  })
