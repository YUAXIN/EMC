ServerEvents.recipes(event => {
  //create:andesite_casing
    event.custom({
        "type": "create:item_application",
  "ingredients": [
    {
      "tag": "forge:stripped_logs"
    },
    {
      "item": "create:andesite_alloy_block"
    }
  ],
  "results": [
    {
      "item": "create:andesite_casing"
    }
  ]
})
//create:encased_fan
event.custom({
  "type": "create:item_application",
"ingredients": [
{
"item": "create:andesite_casing"
},
{
"item": "mekanismgenerators:turbine_blade"
}
],
"results": [
{
"item": "create:encased_fan"
}
]
})

})