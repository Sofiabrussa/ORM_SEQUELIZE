//Los routers son especialmente útiles en aplicaciones web para gestionar las rutas o URLs a las que los usuarios pueden acceder. 
//Puedes definir rutas específicas y asociarlas con funciones o controladores que se ejecutarán cuando se acceda a esas rutas.

const router = require("express").Router()
const Products = require("../model/product.model")

router.get("/products", (req, res) =>  {  //Un get para llamar a todos mis productos
    res.send("i am a Router")
});

router.get("/products", (req, res) =>  {  //Otro get para traer un solo producto
    res.send("i am a Router")
})

router.post("/products", (req, res) =>  { //Para crear nuevos productos
    res.send("i am a Router")
});

router.put("/products", (req, res) =>  {  //Para actualizar productos
    res.send("i am a Router")
});

router.delete("/products", (req, res) =>  { //Para eliminar productos 
    res.send("i am a Router")
});

module.exports = router;


