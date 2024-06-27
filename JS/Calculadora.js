function Calcular(operacion) {
    var val1 = parseFloat(document.getElementById("V1").value);
    var val2 = parseFloat(document.getElementById("V2").value);
    var res = document.getElementById("Resultado");
    var resultado = 0;

    if (isNaN(val1) || isNaN(val2)) {
        res.innerHTML = "Datos nulos o incorrectos";
        if (isNaN(val1)) {
            document.getElementById("V1").focus();
        } else {
            document.getElementById("V2").focus();
        }
        return;
    }

    switch (operacion) {
        case 'suma':
            resultado = val1 + val2;
            break;
        case 'resta':
            resultado = val1 - val2;
            break;
        case 'multiplicacion':
            resultado = val1 * val2;
            break;
        case 'division':
            if (val2 === 0) {
                res.innerHTML = "No se puede dividir por cero";
                return;
            }
            resultado = val1 / val2;
            break;
    }

    res.innerHTML = resultado;
}
