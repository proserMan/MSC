/* 
 ***************************************************
 *     APLICACIONES Y SERVICIOS EN LA NUBE         *
 *                   ITESO                         *
 *                                                 * 
 *    Actividad 1: Diseño de un WebService         *
 *                                                 * 
 *                                                 * 
 *    Alumno: Andres Aldaco Torres                 *
 *    Exp: ms35023                                 *
 *                                                 *
 ***************************************************
 ***************************************************
 */

var Wine = require('../models/wine');

//Phase 1
exports.findAll = function(req, res) {
    
    //console.log('All Wines Request');
    //Modified the res.send code to return two JSON Objects 
    //res.send({"wines":[{"id":"ID", "name":"nombre", "description":"DESCRIPCION"},{"id":"ID", "name":"nombre", "description":"DESCRIPCION"}]});

    /*
     *Put Phase2 Code here.
     */
    Wine.find(function(err, wines){
      if (err)
         res.send(500, err.message);
      console.log('All wines Request');
      res.status(200).jsonp(wines);
    });

};

exports.findById = function(req, res) {

    //console.log('ID: '+req.params.id+' Wine Request');
    //Modified the res.send line to send a JSON Object with the requested ID. 
    //res.send({"id":""+req.params.id+"", "name":"nombre", "description":"DESCRIPCION"});    
    //res.status(200);

    /*
     * The next code is for Phase 2.
     * 
     * Modified this method to return one specific wine from collection.
     * You have to use the method findById which has the next syntaxis:
     *      findById(id, callback(err, result))
     *   
     */  
    //Wine.findByID(ID, callback(err, result) { });    
    Wine.find({'_id':req.params.id}, function(err, result) { 
      if (err)
         res.send(500, err.message);        
      console.log('Wine Requested '+result);
      res.status(200).jsonp(result);    
    });

};

/*
* The next code is for Phase 2.
* 
*  Create the methods:
*    addWine
*    deleteWine
*    updateWine
*    
*  Some hints about this tree method are in HomeWork document.
*/

exports.addWine = function(req, res) {
    console.log('add Wine');
    var newWine = new Wine( {
        name: req.body.name,
        year: req.body.year,
        grape: req.body.grape,
        country: req.body.country,
        description: req.body.description
    });    
    newWine.save(function(err, addedElement) { 
      if (err)
         res.send(500, err.message);        
      console.log('Wine inserted '+addedElement);
      res.status(200).jsonp(addedElement);    
    });     
};

exports.updateWine = function(req, res) {
    console.log("Update");   
    var newWine =  {name: req.body.name,
                    year: req.body.year,
                    grape: req.body.grape,
                    country: req.body.country,
                    description: req.body.description
    };    
    Wine.findByIdAndUpdate(req.params.id,newWine,function(err, updatedElement) { 
         if (err)
             res.send(500, err.message);        
         console.log('Wine updated '+updatedElement);         
         res.status(200).jsonp(updatedElement);
    });
};

exports.deleteWine = function(req, res) {
    console.log("delete");   
    Wine.findByIdAndRemove({'_id':req.params.id}, function(err, findElement) { 
         if (err)
             res.send(500, err.message);        
         console.log('Wine find '+findElement);         
         res.status(200).jsonp(findElement);
    });   
};