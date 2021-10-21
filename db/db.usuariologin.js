const {DataTypes} = require('sequelize');
const sequelize = require('./db.conexion');

const Usuarios = sequelize.define("usuarios", {
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    primer_apellido: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    segundo_apellido: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    correo: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    token: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
});

module.exports = Usuarios