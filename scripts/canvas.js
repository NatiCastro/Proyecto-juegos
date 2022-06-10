//Variables y arrays
let arrayCosas = ["un ELEFANTE", "un PERRO", "una VENTANA", "un MATE", "una BANANA", "una COCINA"]



$(".comienzoJuego").on("click", function(e){
    e.preventDefault();

    let eligeRandom = Math.ceil(Math.random()*6);

    if (eligeRandom == 1){

    $("#dibujo").append(`<p>${arrayCosas[0]}</p>`)

    } else if (eligeRandom == 2) {

        $("#dibujo").append(`<p>${arrayCosas[1]}</p>`)

    } else if (eligeRandom == 3) {
        
        $("#dibujo").append(`<p>${arrayCosas[2]}</p>`)

    } else if (eligeRandom == 4) {

        $("#dibujo").append(`<p>${arrayCosas[3]}</p>`)

    } else if (eligeRandom == 5) {

        $("#dibujo").append(`<p>${arrayCosas[4]}</p>`)

    } else if (eligeRandom == 6) {

        $("#dibujo").append(`<p>${arrayCosas[5]}</p>`)  
    }

    //Aparecer botón

    $(".limpiarModal").on("click", function(e){
        e.preventDefault();
        $("#dibujo").children().remove();

    })
})

class Temporizador {
    constructor() {
        this.tiempo = 5;
        this.interval;
        
    }
    getTime() {
        return this.tiempo;
    }

    init() {
        this.interval = setInterval(() => {
        this.tiempo--;
        document.getElementById('countdown').innerHTML = this.tiempo;
        console.log(this.tiempo)
        }, 1000);
        //Botón disabled mientras corre el tiempo
        document.getElementById('countdown').disabled = true;
        //this.stop1();
    }

    stop1() {
        setTimeout(() => {
            $("#countdown")
                    .text('Tiempo!')
                    .css({"background-color": 'red',
                            'animation-name': 'cambia-color-boton',
                            'animation-duration': '2s',
                            'animation-iteration-count': '10s'
                        });
        alert("Se acabó el tiempo!")
        clearInterval(this.interval);
        }, 5000);

    }

    reset() {
        clearInterval(this.interval);
        this.tiempo = 5;
        document.getElementById('countdown').disabled = false;
    }
  
}


//Temporizador
let timer = new Temporizador();
//Click en el botón del tiempo
$("#countdown").on("click", function(e){
    e.preventDefault();

timer.init();
timer.stop1();

    
})



//Sección canvas - dibujo
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');
let rect = canvas.getBoundingClientRect();
let x=0;
let y=0;
let dibujando = false;
let color = 'black';
let grosor = 1;

    //elegir el color
    let ec = document.getElementById("color");
    ec.addEventListener("change", function(e){
        e.preventDefault();
        let eligecolor = document.getElementById("color").value;
        color = eligecolor;
    });
    //elegir el grosor
    let eg = document.getElementById("grosor");
    eg.addEventListener("change", function(e){
        e.preventDefault();
        let eligegrosor = document.getElementById("grosor").value;
        grosor = eligegrosor;
    });


     // Primer evento, click donde va a empezar a dibujar 
    canvas.addEventListener('mousedown', function(e){
        x=e.clientX - rect.left;
        y=e.clientY - rect.top;
        dibujando=true;
 
    });
    // Evento mientras se mueve el mouse
    canvas.addEventListener('mousemove', function(e){
        if (dibujando===true){
        dibujar (x, y, e.clientX - rect.left, e.clientY - rect.top);
        x= e.clientX - rect.left;
        y= e.clientY - rect.top;
        }
    });
     // Cuando suelta el click
    canvas.addEventListener('mouseup', function(e){
        if (dibujando===true){
        dibujar(x, y, e.clientX - rect.left, e.clientY - rect.top);
        x=0;
        y=0;
        dibujando=false;
        }
    });
    // Función dibujar
    function dibujar (x1, y1, x2, y2){
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= grosor;
        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
        ctx.closePath();
    };


     //Resetear el canvas
    let limpiar = document.getElementById("limpiarCanvas");

    limpiar.addEventListener("click", function(e){
        e.preventDefault();
        //Hoja en blanco
        ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        //Resetear el temporizador
        timer.reset();
        $("#countdown")
                    .text('Comenzar tiempo')
                    .css({"background-color":'rgb(191, 141, 238)'
                        
                    })
    })