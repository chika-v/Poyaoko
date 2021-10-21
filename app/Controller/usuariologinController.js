//Importar los metodos que voy a utilizar
const jwt = require('jsonwebtoken')
const modeloUsuarios = require('../Model/usuariologinModel')

//exportar los modulos que vamos a utilizar
module.exports.generaToken = async (data)=> {
    const resultado = jwt.sign({
        data} , process.env.SECRET_KEY 
    ) //Tiempo maximo 15 minutos de validez
    return resultado
}

module.exports.verificarUsuario = async (token)=> {
    const resultado = jwt.verify(token, process.env.SECRET_KEY)
  
    if(resultado){
        return resultado
    }else {
        throw new Error ('Token no valido!')
    }
}

module.exports.findUsuario = async (usuario)=> {
    try {
        let result = await modeloUsuarios.encontrarUsuario(usuario)
        return result
    }catch (error) {
        console.log("Error al encontrar usuario en controlador", error)
        throw new Error (error)
    }
  }

module.exports.getUsuarios = async () => {
    try {
        const resultado = await modeloUsuarios.traerUsuarios()
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al traer usuarios')
    }
}

module.exports.createUsuarios = async (usuario) => {
    try {
        const resultado = await modeloUsuarios.crearUsuarios(usuario)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al crear usuarios')
    }
}

module.exports.editUsuarios = async (id, usuario) => {
    try {
        const resultado = await modeloUsuarios.editarUsuarios(id,usuario)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al editar usuarios')
    }
}

module.exports.deleteUsuarios = async (id) => {
    try {
        const resultado = await modeloUsuarios.borrarUsuarios(id)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al eliminar usuarios')
    }
}