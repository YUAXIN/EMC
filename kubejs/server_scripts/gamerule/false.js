LevelEvents.loaded(event =>{
  //doTraderSpawning
  if(event.getLevel().getGameRules().get('doTraderSpawning')==="true"){
    event.server.runCommandSilent(`gamerule doTraderSpawning false`)
  }

    //doMobLoot
    if(event.getLevel().getGameRules().get('doMobLoot')==="true"){
      event.server.runCommandSilent(`gamerule doMobLoot false`)
    }

    //doMobSpawning
    if(event.getLevel().getGameRules().get('doMobSpawning')==="true"){
      event.server.runCommandSilent(`gamerule doMobSpawning false`)
    }

    //mobGriefing
    if(event.getLevel().getGameRules().get('mobGriefing')==='true'){
      event.server.runCommandSilent(`gamerule mobGriefing false`)
    }
})

LevelEvents.tick(event =>{
    //doTraderSpawning
  if(event.getLevel().getGameRules().get('doTraderSpawning')==='true'){
    event.server.runCommandSilent(`gamerule doTraderSpawning false`)
    event.server.runCommandSilent(`tellraw @a "\u00a7c你不能打开这个游戏规则"`)
    event.server.runCommandSilent(`tellraw @a "游戏规则doTraderSpawning已被设为：false"`)
  }

    //doMobLoot
    if(event.getLevel().getGameRules().get('doMobLoot')==='true'){
      event.server.runCommandSilent(`gamerule doMobLoot false`)
      event.server.runCommandSilent(`tellraw @a "\u00a7c你不能打开这个游戏规则"`)
      event.server.runCommandSilent(`tellraw @a "游戏规则doMobLoot已被设为：false"`)
    }

    //doMobSpawning
    if(event.getLevel().getGameRules().get('doMobSpawning')==='true'){
      event.server.runCommandSilent(`gamerule doMobSpawning false`)
      event.server.runCommandSilent(`tellraw @a "\u00a7c你不能打开这个游戏规则"`)
      event.server.runCommandSilent(`tellraw @a "游戏规则doMobSpawning已被设为：false"`)
    }

    //mobGriefing
    if(event.getLevel().getGameRules().get('mobGriefing')==='true'){
      event.server.runCommandSilent(`gamerule mobGriefing false`)
      event.server.runCommandSilent(`tellraw @a "\u00a7c你不能打开这个游戏规则"`)
      event.server.runCommandSilent(`tellraw @a "游戏规则mobGriefing已被设为：false"`)
    }
})