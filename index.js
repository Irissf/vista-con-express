//instalamos la dependecia de desarrollo nodemon
//***************************************************************** */

//lo necesitamos para crear un documento de texto fileSystem
const fs = require('fs');

const express = require('express');
const res = require('express/lib/response');
const app = express();//intanciamos en app
const puerto = 5000;

//meddleware, se ejecuta antes de las respuestas
app.use(express.static("public"));

//un middleware, para poder leer lo que nos llega a traves del body, json,raw, text, urlancoded
app.use(express.urlencoded({extended:true})); //lo necesitamos para el post, o no leerá los datos

//http://localhost:5000/
app.get('/', (requerimiento, respuesta)=>{
    respuesta.send('Visitaste la página de inicio');
})

// //http://localhost:5000/formulario
// app.get('/formulario', (requerimiento, respuesta)=>{
//     console.log(requerimiento.query);
//     respuesta.send('formulario enviado...' + requerimiento.query.nombre);
// })

//http://localhost:5000/formulario
app.post('/formulario', (requerimiento, respuesta)=>{
    //el post viaja a través del cuerpo del mensaje y no de la url
    console.log(requerimiento.body);

    //destructuramos
    const{nombre, apellido} = requerimiento.body;
    if(!nombre || !apellido) {
        return respuesta.send("no existen los datos")
    }
    fs.writeFile(`archivos/${nombre}.txt`,apellido,(err)=>{
        if(err) {
            return respuesta.send("Falló al crear el archivo");
        }
        respuesta.send("se creó el archivo");
    });
})

app.listen(puerto,()=>console.log('Funcionando 😋'));