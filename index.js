/** 
1. Recibir por la línea de comando los siguientes argumentos:
 */
const argumentos = process.argv.slice(2);
let nombreArchivo = argumentos[0];
let extencionArchivo = argumentos[1];
let indicadorEconomico = argumentos[2];
let cantidadPesos = Number(argumentos[3]);

console.log(argumentos);
console.log(nombreArchivo,extencionArchivo,indicadorEconomico,cantidadPesos);
/**  
2. Consultar la API con el módulo https y almacenar la respuesta en una variable.
*/

// Paso 1
const https = require('https')
// Paso 2
https
.get('https://mindicador.cl/api', (resp) => {
// Paso 3
resp.on('data', (data) => {
//console.log(JSON.parse(data));

let moneda = JSON.parse(data);
let convertir = moneda[indicadorEconomico];
let resultado = cantidadPesos/convertir.valor;
console.log(resultado);


/**
 3. Crear un archivo con el módulo fs cuyos datos están formados por los argumentos

recibidos por línea de comando y su contenido basado en el template de la
descripción.

A la fecha: Thu Sep 03 2020 18:41:00 GMT-0400 (GMT-04:00)
Fue realizada cotización con los siguientes datos:
Cantidad de pesos a convertir: 250000 pesos
Convertido a "dólar" da un total de:
$324,06
 */


const fs = require('fs')

let textoPublicar = `A la fecha: ${Date()}
Fue realizada cotización con los siguientes datos:
Cantidad de pesos a convertir: ${cantidadPesos} pesos
Convertido a "${indicadorEconomico}" da un total de:
$${resultado}`; 

fs.writeFile(`${nombreArchivo}.${extencionArchivo}`, textoPublicar, 'utf8', () => {
    console.log('Archivo creado con éxito')
    })

    fs.readFile(`${nombreArchivo}.${extencionArchivo}`, 'utf8', function(err, data){
     
        // Display the file content
        console.log(data);
    });
     
    console.log('readFile called');

/** 
 4. Enviar por consola el contenido del archivo luego de que haya sido creado.
 */





})
})
// Paso 4
.on('error', (err) => {
console.log('Error: ' + err.message)
})

