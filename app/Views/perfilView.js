//Importamos los modulos que vamos a utilizar
const controladorUsuarios = require('../Controller/perfilController')


//Exportar los modulos para ser usados.
module.exports = async (app)=> {
    app.get('/perfil', async (req,res)=> {
        try{
            console.log("entrando al perfil")
            res.render('perfil')
        }catch (error) {
            console.log(error)
            res.status(500).json('Ocurrio un error accediendo al perfil')
        }
    })

    app.post('/perfil_usuario' , async (req,res)=> {
        const perfilBuscar = req.body
        try{
            let resultado = await controladorUsuarios.findPerfil(perfilBuscar)
            res.status(200).json({
                message: "Wiii!, perfil encontrado",
                success: true,
                resultado
            })
        }catch (error) {
            console.log(error)
            res.status(400).json({
                message: "Chale!, perfil no encontrado",
                success: false,
            })
        }
    })
}