$(()=>{
    $("#boton-1").on("click", function(e){
        e.preventDefault();
        $(".manzana").toggle();
                    
    })
    $("#boton-4").on("click", function(e){
        e.preventDefault();
        $(".manzana2").toggle();
                    
    })

})