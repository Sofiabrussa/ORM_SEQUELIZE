//Creo todo lo que tiene que ver con el servidor o nucleo de nuestra aplicacion de express

const express = require("express")  //esta línea de código es esencial para utilizar Express.js en tu aplicación de Node.js. Al cargar el módulo Express.js de esta manera, 
//puedes acceder a todas las funciones y objetos proporcionados por Express para configurar y desarrollar aplicaciones web 
const morgan = require("morgan")
const router = require("../router/product.router") 

const app = express()  //app representa la aplicación Express.

app.use(morgan("dev"))  // se tiene que colocar antes de una ruta porq lee las peticiones http que se envian a las rutas que siguen 

app.get("/", (req, res) => {    //req es lo que recibo y res lo que respondo
    res.send("This is express")   //configuración típica en una aplicación Express.js para manejar solicitudes GET en la ruta de la raíz ("/")
})


app.use("/api/v1", router) 


module.exports = app;  //exportamos app a index

