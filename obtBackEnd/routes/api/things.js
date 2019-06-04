const express = require('express');
var router = express.Router();

//json --> javascript object notation  jason.org

var thingsCollection = [];
var thingsStruct = {
    "id": 0,
    "descripcion": '',
    "fecha": 0,
    "by": ''
};

thingsCollection.push(
    Object.assign(thingsStruct,{"id":"1", "descripcion":"Mi primer thing","Fecha":new Date().getTime(),"by":"MAuricio"})

);

router.get('/', (req, res, next) =>{
    res.status(200).json(thingsCollection);
});


//CRUD crear, leer (read), actualizar (update), eliminar (delete)
//REST
//GET consultas read, lectura
//POST crear - insertar C
//PUT update - actualizar
//DELETE delete - Elimminar 



router.post('/',(req, res, next)=>{
    res.status(200).json({'msg':'entro en el post'});

}); //post /


router.put('/',(req, res, next)=>{
    res.status(200).json({'msg':'entro en el put'});

}); //put /

router.delete('/',(req, res, next)=>{
    res.status(200).json({'msg':'entro en el delete'});

}); //put /

module.exports = router;