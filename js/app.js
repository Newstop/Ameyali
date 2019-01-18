// jQuery = non conflict mode
// $ = conflict mode
// inicializacion
// jQuery(document)
$(document).ready( ()=>{

    

} )

   

function imgLiquid(){
    
    $('.imgLiquid.imgLiquidFill').imgLiquid()
     $('.imgLiquid.imgLiquidNoFill').imgLiquid({
     fill:false,
})
      
    $('.imgLiquid.imgLiquidNoFillLeft').imgLiquid({
     fill:false,
    horizontalAlign:'left'
})
      $('.imgLiquid.imgLiquidNoFillRight').imgLiquid({
     fill:false,
    horizontalAlign:'right'
})

}