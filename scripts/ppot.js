//Piedra papel o tijera

//Boton jugar
$("#jugar").on("click", function(e){
    e.preventDefault();
    let numeroRandom = Math.ceil(Math.random()*3);
    console.log(numeroRandom);

    //Botón disabled para no mostrar otra imagen
    document.getElementById("jugar").disabled = true;

    //Qué imagen mostrar
    if (numeroRandom==1){
        $(".imagenes").append(`<img src="/img/piedra.jpg" alt="">`);

    }else if (numeroRandom==2){
        $(".imagenes").append(`<img src="/img/papel.jpg" alt="">`);

    }else{
        $(".imagenes").append(`<img src="/img/tijera.jpg" alt="">`);
    }

})

//Remover la imagen para jugar de nuevo
$("#deNuevo").on("click", function(e){
    e.preventDefault();
    $(".imagenes").children().remove();

    //Sacar el disabled del botón jugar
    document.getElementById("jugar").disabled = false;

})
