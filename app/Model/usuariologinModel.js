const {Op} = require('sequelize');
const Usuarios = require('../../db/db.usuariologin')

module.exports.encontrarUsuario = async (usuario)=> {
    try {
        let usuarioEncontrado = await Usuarios.findOne({where: {usuario: `${usuario.usuario}`, pass: `${usuario.pass}`}})
        console.log(usuarioEncontrado)
        return usuarioEncontrado
    }catch (error){
        console.log("Error al encontrar usuario en modelo")
        throw new Error (error)
    }
  }

module.exports.buscarUsuario = async (usuario) => {
    try{
        let resultado = await Usuarios.findOne({
            where:{
                correo: {
                    [Op.like]: usuario.correo
                },
                contraseña: {
                    [Op.like]: usuario.contraseña
                },
            }
        })
        return resultado
    }catch (error){
        console.log(error)
        throw new Error ('Ops!, ¿Dónde quedo?')
    }
}

module.exports.traerUsuarios = async() => {
    try{
        let resultado = await Usuarios.findAll()
        console.log(resultado)
        return resultado
    }catch (error){
        console.log(error)
        throw new Error ('Perdon :c, no los encontramos')
    }
}

module.exports.crearUsuarios = async (usuario)=> {
    try {
        let usuarioNuevo = await Usuarios.create(usuario)
        console.log(usuarioNuevo)
        return usuarioNuevo
    }catch (error){
        console.log("Error al crear usuario en modelo")
        throw new Error (error)
    }
  }

module.exports.editarUsuarios = async(id, usuario) => {
    try{
        let usuarioEncontrado = await Usuarios.findByPk(id)
        let resultado = usuarioEncontrado.update(usuario)
        return resultado
    }catch(error){
        console.log(error)
        throw new Error ('Ocurrio un error en la edición de usuarios')
    }
}

module.exports.borrarUsuario = async (idUsuario)=> {
    try {
        let usuarioBorrado = await Usuarios.destroy({where: {id: `${idUsuario}`}})
        return usuarioBorrado
    }catch (error){
        console.log("Error al borrar usuario en modelo")
        throw new Error (error)
    }
  }