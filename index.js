//instalamos la dependecia de desarrollo nodemon
//***************************************************************** */

const express = require('express');
const app = express();//intanciamos en app
const puerto = 5000;

//http://localhost:5000/
app.get('/', (requerimiento, respuesta)=>{
    respuesta.send('Visitaste la página de inicio');
})

//http://localhost:5000/iris
app.get('/iris', (requerimiento, respuesta)=>{
    respuesta.send('Visitaste la página de Iris');
})

app.listen(puerto,()=>console.log('Funcionando 😋'));