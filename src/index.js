 
const app = require("./app/app") //requiere a app

const port = process.env.PORT || 4002;  //Nos permite acceder a las variables de entorno del sistema y port es la variable especifica que queremos recuperar 

app.listen(port, () =>  {
    console.log(`------------------Server running on port ${port}------------------` )
});


