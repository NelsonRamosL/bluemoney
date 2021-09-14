/**
 * 
 * 5. Ejecutar la aplicación desde un archivo externo con el módulo child_process
enviando los argumentos correspondientes y devolviendo por consola el contenido
del archivo luego de que haya sido creado.

 */


const child_process = require('child_process')


function ejecutar(archivo) {
   
    return new Promise((resolve) => {
    
    child_process.exec(`node ${archivo}`, function (err, result) {
    resolve(result);
    })
    })
    }

    ejecutar('index.js archivoprueba txt dolar 5050').then((resultado) => {
        console.log(resultado);
    })