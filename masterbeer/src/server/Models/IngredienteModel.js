const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/MasterBeer",{useNewUrlParser: true, useUnifiedTopology: true,}); //Si no existe, se crea

const IngredienteSchema = new mongoose.Schema({
  Nombre: {
    type: String,
    required: true
  },
  Tipo: {
    type: String,
    required: true
  },
  Precio: {
    type: Number,
    required: true
  },
  Volumen: {
    type: String,
    required: true
  },
  Stock: {
    type: Number,
    required: true,
  }
})

module.exports = mongoose.model('Ingrediente', IngredienteSchema,'Ingrediente')