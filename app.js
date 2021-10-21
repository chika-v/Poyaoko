const db = require("./db/db.conexion");
const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const sequelize = require("./db/db.conexion");
const Usuarios = require("./db/db.usuariologin");
const Perfil = require("./db/db.perfil");


app.use(express.static(__dirname + '/public'))
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')

async function inicioServer() {
    try {
        await Perfil.sync({alter:true})
        await Usuarios.sync({alter:true})
        await sequelize.authenticate()
        console.log('Conección estabilizada correctamente');
        app.listen(process.env.PORT, function () {
            console.log(`Sistema iniciado en http://${process.env.HOST}:${process.env.PORT}`);
        });
      } catch (error) {
        console.error('No se pudo conectar correctamebte con la Base de datos:', error);
      }
}

inicioServer();