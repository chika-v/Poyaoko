const {Op} = require('sequelize');
const { UPSERT } = require('sequelize/types/lib/query-types');
const Perfiles = require('../../db/db.perfil')

module.exports.buscarPerfil = async (perfil) => {
    try{
        let resultado = await Perfiles.findOne({
            where:{
                nombreCompleto: {
                    [Op.like]: perfil.nombreCompleto
                },
                nombrePerfil: {
                    [Op.like]: perfil.nombrePerfil
                },
            }
        })
        console.log(resultado)
        return resultado
    }catch (error){
        console.log(error)
        throw new Error ('Ops!, ¿Dónde quedo?')
    }
}

module.exports.traerPerfiles = async() => {
    try{
        let resultado = await Perfiles.findAll()
        console.log(resultado)
        return resultado
    }catch (error){
        console.log(error)
        throw new Error ('Perdon :c, no los encontramos')
    }
}

module.exports.crearPerfiless = async (perfil) => {
    try{
        let resultado = await Perfiles.create(perfil)
        console.log(resultado)
        return resultado
    }catch(error){
        console.log(error)
        throw  new Error ('Ocurrio un error en la consulta')
    }
}

module.exports.editarPerfiles = async(id, perfil) => {
    try{
        let resultado = await Perfiles.findByPk(id)
        let resultado = perfilEncontrado.update(perfil)
        console.log(resultado)
        return resultado
    }catch(error){
        console.log(error)
        throw new Error ('Ocurrio un error en la edición de perfiles')
    }
}

module.exports.borraePerfiles = async(id, perfil) => {
    try{
        let resultado = await Perfiles.findByPk(id)
        let resultado = await perfilEncontrado.delete(perfil)
        console.log(resultado)
        return resultado
    }catch(error){
        console.log(error)
        throw new Error ('No se pudo realizar la eliminación de perfiles')
    }
}