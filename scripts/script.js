$(()=>{
//Animación imagen principal
$(".imagenPrincipal").slideUp(1500)
                    .slideDown(1500)
                    .animate({
                        width: '+=5.5rem',
                        height: '+=3.5rem'
                    }, "slow");

    

        //Función para escoger los números           
        let n = 89 //Valor hasta que numero sortear
        let arr = new Array(n);
            for (let i = 0; i < n; i++) {
                arr[i] = i + 1;
            }

        arr.push(arr.sort(() => Math.random() > 0.5 ? 1 : -1));
        let loteria = arr;
        console.log(loteria);

    //Click en el botón de sorteo    
    //Variable para ir mostrando los números del array
    let p = 0;
    //Variable para cortar con el temporizador
    let intervalo = 0;
    
    $("#sorteo").on("click", function(e){
        e.preventDefault();
        //Botón disabled
        document.getElementById('sorteo').disabled = true;

        
        //Animación desde el botón de sorteo hasta los números                
        $('html,body').animate({
            scrollTop: $(".numeroSorteo").offset().top
        }, 2000);

        //Mostrar div contenedor de "número del sorteo"
            $(".tituloSorteo").append(`
            <div class="lds-default">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            `)
            .css({
                "margin":'1rem'
                
            })

            //Temporizador para que muestre los números cada 4 segundos
         intervalo = setInterval(()=>{
                $(".numeroSorteo").append(`<li>${loteria[p]} - </li>`)
                                    .css({
                                    "font-family":'Cambria, Cochin, Georgia, Times, "Times New Roman", serif',
                                    "font-size": '2rem',
                                    "color": "aquamarine"
                                    
                                })
            
        
            p++;

           
        },4000);

        setTimeout(()=>{
            return clearInterval(intervalo);    
        },350000);
               
    })  
     

    //Remover el array
    $("#volverAJugar").on("click", function(e){
        e.preventDefault();
        //Volver a activar el boton sorteo
        document.getElementById('sorteo').disabled = false;

        // Parar el temporizaador 
             clearInterval(intervalo);
        
        //Remover el contenedor "los números son"
        $(".tituloSorteo").children().remove();
        //Remover los números
        $(".numeroSorteo").children().remove();
        //Volver a formar un array con números nuevos
        p = 0;
        let arr = new Array(n);
            for (let i = 0; i < n; i++) {
                arr[i] = i + 1;
            }

        arr.push(arr.sort(() => Math.random() > 0.5 ? 1 : -1));
        loteria = arr;
        console.log(loteria);
        

    })

    // Reloj
    const addZeros = n => {
        if (n.toString().length < 2) return "0".concat(n);
        return n;
    }
    
    const actualizarHora = () => {
    const time = new Date();
    let hora = addZeros(time.getHours());
    let minutos = addZeros(time.getMinutes());
    let segundos = addZeros(time.getSeconds());
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = minutos;
    document.querySelector(".seg").textContent = segundos;
    }

    actualizarHora();
    setInterval(actualizarHora,1000);

})