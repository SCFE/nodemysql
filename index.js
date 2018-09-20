var express = require('express')
var app = express()
 

/*app.get('/', (req,res)=>
{
    res.send('Consultas DB')
}
)*/

//settings
app.set('port', process.env.PORT || 3000) 


//Middleware
app.use(express.json())   //Para que express pueda entender cuando se le envia un json

//Roots
app.use(require('./src/routes/empleados.js'))



app.listen(app.get('port'),()=>
{
    console.log("server iniciado en puerto "+ app.get('port'))
})