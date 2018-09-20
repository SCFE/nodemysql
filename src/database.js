const mysql = require('mysql')

const conexion = mysql.createConnection
(
    {
        host: 'localhost',
        user: 'root',
        password: 'cloud',
        database: 'company',
        multipleStatements: "yes"
    }
)


conexion.connect((err)=>
{
    if(err)
    {
         console.log("Oh oh... ah ocurrido un error al conectar con la DB "+err)
    }
    else
    {
        console.log('La conexion se a realizado exitosamante')
    }
})

module.exports = conexion;