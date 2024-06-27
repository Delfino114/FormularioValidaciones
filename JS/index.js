var edad=0

function saludo(){
    if(edad>18)
        {alert("Eres mayor de edad...")}
    else{
        alert("Eres menor de edad")
    }
}

function capturaEdad(){
    edad=prompt("ingresa tu edad...")
}

const saludo2=()=>{
    if(edad>18)
        {alert("Eres mayor de edad... desde la flecha")}
    else{
        alert("Eres menor de edad... desde la flecha")
    }
}