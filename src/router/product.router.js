//Los routers son especialmente útiles en aplicaciones web para gestionar las rutas o URLs a las que los usuarios pueden acceder. 
//Puedes definir rutas específicas y asociarlas con funciones o controladores que se ejecutarán cuando se acceda a esas rutas.

const router = require("express").Router()
const Products = require("../model/product.model")
const { faker } = require("@faker-js/faker") //genera de datos ficticios

router.get("/products", async (req, res) =>  {  //Un get para llamar a todos mis productos
    const products = await Products.findAll() //findall se usa para llamar a todos los elementos de mi tabla
    res.status(200).json( {
        ok: true,
        status: 200,
        body: products   //cuerpo de la peticion, los productos
    })
});

router.get("/products/:product_id", async (req, res) =>  {  //Otro get para traer un solo producto. Es importante poner los : 
    const id = req.params.product_id;   
    const product = await Products.findOne({  //findone porque buscamos un solo producto
        where:  {
            product_id: id,
        }
    }) 
    res.status(200).json( {
        ok: true,
        status: 200,
        body: product   
    })
})

router.post("/products", async (req, res) =>  {    //Para crear nuevos productos
   await Products.sync()
   const createProduct = await Products.create({
    product_name: faker.commerce.product(),
    price: faker.commerce.price(),
    is_stock: faker.datatype.boolean()
   })
   res.status(201).json({
    ok: true,
    status: 201,
    message: "Created Product"
    })
});


router.put("/products", (req, res) =>  {  //Para actualizar productos
    res.send("i am a Router")
});

router.delete("/products", (req, res) =>  { //Para eliminar productos 
    res.send("i am a Router")
});

module.exports = router;


