const express = require('express')
const router = express()

const conexionMySQL = require('../database.js')

module.exports = router

router.get('/query',(req,res)=>
   
    {
       
        conexionMySQL.query('SELECT * FROM empleados', (err, rows, fields)=>
        {
            if(!err)
            {
                res.json(rows);
            }
            else
            {
                console.log(err)
            }
        }
        )
    }

)


router.get('/busqueda/:id', (req, res)=>

{
    const {id} = req.params

    //console.log(id)
    conexionMySQL.query(`SELECT * FROM empleados WHERE id= ?` ,[id], (err, rows, fields)=>
        {
            if(!err)
            {
                res.json(rows[0]);
            }
            else
            {
                console.log(err)
            }
        }
        )
    
})

router.post('/insertar', (req, res)=>
    {
        const {id, name, salary} = req.body;
        const querySP = `
       
        CALL AGREGAR_EDITAR (?, ?, ?) `
        conexionMySQL.query(querySP, [id, name, salary], (err, rows, fields)=>
        {
            if(!err)
            {
                res.json({"State":"Emepleado agregado"})
            }
            else
            {
                res.json({"State":"Emepleado no agregado",
                          "error":err})
            }
        })
    }

)


router.put('/editar/:id', (req,res)=>
{
        const {name, salary} = req.body
        const id = req.params.id

       

        const querySP = `
            CALL AGREGAR_EDITAR(?, ?, ?)`
        conexionMySQL.query(querySP, [id, name, salary], (err,rows,fields)=>
        {
            if(!err)
            {
                res.json({state:"Empleado actualizado"})
            }
            else
            {
            console.log(err)
            }
        })

})

router.delete('/eliminar/:id', (req,res)=>
{
    const {id} = req.params;
    const query = `DELETE FROM EMPLEADOS WHERE id = ? `
    conexionMySQL.query(query, [id], (err, rows, fields)=>
    {
        if(!err)
        {
            res.json({State:"Empleado eliminado"})
        }
        else
        {
            console.log(err)
        }
    } )

})

/*SET @id = ?
        SET @name= ?
        SET @salary = ?
*/

//router.put();
