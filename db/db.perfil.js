const {DataTypes} = require('sequelize');
const sequelize = require('./db.conexion');

const Perfiles = sequelize.define("perfiles", {
    nombre_perfil: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    foto: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    nombreCompleto: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    pais: {
        type: DataTypes.GEOGRAPHY(50),
        allowNull: false
    },
    ciudad: {
        type: DataTypes.GEOGRAPHY(100),
        allowNull: false
    },
    edad: {
        type: DataTypes.INTEGER(),
        allowNull: false
    },
    estudios: {
        type: DataTypes.STRING(200),
        allowNull: false
    },
    hobbies: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    idiomas: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    LinkedIn: {
        type: DataTypes.STRING(50),
        allowNull: false
    }
});

module.exports = Perfiles