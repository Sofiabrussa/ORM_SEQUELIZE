
const { Sequelize, Model, DataTypes } = require("sequelize");


const sequelize = new Sequelize( "product_test", "root", "12345", {  // Cuando se quiera acceder a cualquier modelo o hacer alguna consulta se debe acceder a través de la varaible sequelize.
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


class Product extends Model {}  //// Create a model 
    
Product.init({   //Inicializar el model
    product_id:  {
        //Definimos atributos del model
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true
    },
    product_name:  {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.FLOAT(10, 2),
        allowNull: false},
    is_stock:  {
        type: DataTypes.BOOLEAN,
    } 
}, {
    sequelize,
    modelName: "Product",
    }
);

module.exports = Product;