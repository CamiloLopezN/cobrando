let operations = {
    sumar: function (valor1, valor2) {
        return console.log('El resultado de la suma es: ' + (valor1 + valor2));
    },
    dividir: function (valor1, valor2) {
        return console.log('El resultado de la resta es: ' + (valor1 - valor2));
    },
    restar: function (valor1, valor2) {
        return console.log('El resultado de la división es: ' + (valor1 / valor2));
    },
    multiplicar: function (valor1, valor2) {
        return console.log('El resultado de la multiplicación es: ' + (valor1 * valor2));
    }
}


let preguntas = ['Ingresa el primer valor: ', 'Ingresa el segundo valor: '];
let respuestas = [];


function pregunta(i) {
    process.stdout.write(preguntas[i]);
}

process.stdin.on('data', function (data) {
        respuestas.push(parseInt(data.toString().trim()));
        if (respuestas.length < preguntas.length) {
            pregunta(respuestas.length);
        } else {
            operations.multiplicar(respuestas[0], respuestas[1]);
            operations.dividir(respuestas[0], respuestas[1]);
            operations.sumar(respuestas[0], respuestas[1]);
            operations.restar(respuestas[0], respuestas[1]);

            process.exit()
        }
    }
);

pregunta(0);



