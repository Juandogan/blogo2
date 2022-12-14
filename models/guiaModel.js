const { Schema, model } = require('mongoose');

const guiaSchema = new Schema({
    id:String,
    titulo: String,
    subtitulo: String, 
    altura:String,       
    provincia:String,
    imagen:String,
    pais:String,
    latitud:Number,
    longitud:Number,
    nota:String,
    googleMaps:String,
    relacionados:String, 
    videos:String,
    imagenes:String,
    comentarios:String,
    contadorComentarios:String,
    correos:String,
    vistas:Number



    
},
{timestamps: true}
)


module.exports =  model('Guia', guiaSchema)