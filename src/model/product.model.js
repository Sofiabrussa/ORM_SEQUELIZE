
const { Sequelize } = require("sequelize");


const sequelize = new Sequelize( "product_test", "root", "12345", {
    host: "localhost",  //Aca va la direccion de la base de datos pero ahora lo voy a hacer local asiq va local, si fuera una bse de datos externa, se pondria la dire
    dialect: "mysql", 
    port: 3306  
    
})

async function testConnection() {
    try {
        // Probar la conexión
        await sequelize.authenticate();
       
        console.log("Base de Datos: lista");
       }
       catch (error){
        console.error("Ha ocurrido un error: ", error);
       }
}

testConnection();




