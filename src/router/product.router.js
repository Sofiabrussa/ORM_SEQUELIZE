//os routers son especialmente útiles en aplicaciones web para gestionar las rutas o URLs a las que los usuarios pueden acceder. 
//Puedes definir rutas específicas y asociarlas con funciones o controladores que se ejecutarán cuando se acceda a esas rutas.

const router = require("express").Router()

router.get("/products", (req, res) =>  {
    res.send("i am a Router")
})

module.exports = router;