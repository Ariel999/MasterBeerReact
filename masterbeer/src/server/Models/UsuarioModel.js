const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/MasterBeer", { useNewUrlParser: true ,useUnifiedTopology: true});
const UsuarioSchema = new mongoose.Schema({
  Correo: {
    type: String,
    required: true
  },
  Nombre: {
    type: String,
    required: true
  },
  Contraseña: {
    type: String,
    required: true,
  },
  Apellido: {
    type: String,
    required: true,
  },
  RFC: {
    type: String,
    required: false,
  },
  Fecha: {
    type: Date,
    required: true,
  }
})

module.exports.Usuario = mongoose.model('Usuario', UsuarioSchema,'Usuario')