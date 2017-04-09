/* 
 ***************************************************
 *     APLICACIONES Y SERVICIOS EN LA NUBE         *
 *                   ITESO                         *
 *                                                 * 
 *    Actividad 1: Diseño de un WebService         *
 *    Codigo Base: Alvaro Parres (parres@iteso.mx) * 
 *                                                 * 
 *    Alumno: Andres Aldaco Torres                 *
 *    Exp: ms35023                                 *
 *                                                 *
 ***************************************************
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var wineSchema = new Schema({
    name: { type: String },
    year: { type: Number },
    grapes: { type: String },
    country: { type: String },
    description: { type: String }
});

module.exports = mongoose.model('Wine', wineSchema);


