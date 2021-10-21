//Importar los metodos que voy a utilizar
const modeloPerfiles = require('../Model/perfilModel')

//exportar los modulos que vamos a utilizar
module.exports.findPerfil = async (perfil) => {
    try {
        const resultado = await modeloPerfiles.buscarPerfil(perfil)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al buscar el perfil')
    }
}

module.exports.getPerfiles = async () => {
    try {
        const resultado = await modeloPerfiles.traerPerfiles()
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al traer perfiles')
    }
}

module.exports.createPerfiles = async (perfil) => {
    try {
        const resultado = await modeloPerfiles.crearPerfiles(perfil)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al crear perfiles')
    }
}

module.exports.editPerfiles = async (id, perfil) => {
    try {
        const resultado = await modeloUsuarios.editarPerfiless(id,perfil)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al editar perfiles')
    }
}

module.exports.deletePerfiles = async (id) => {
    try {
        const resultado = await modeloPerfiles.borrarPerfiles(id)
        return resultado
    }catch (error) {
        console.log(error)
        throw new Error ('Ocurrios un error al eliminar perfiles')
    }
}