// # +====================================================================================+ #
// # |====================================  HappyNess  ===================================| #
// # |======================    taskify app - intergration test    =======================| #
// # |======================= Programmer: NDANG ESSI Pierre Junior =======================| #
// # +====================================================================================+ #

//  =============================== Imports ===============================
// Node modules
const Sequelize = require('sequelize');
require('dotenv').config();
//  =============================== ======== ===============================

// const sequelize = new Sequelize(`${process.env.DB_DIALECT}://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_NAME}`, {
//     logging: false
//     }
// );

const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USERNAME}`, `${process.env.DB_PASSWORD}`, {
    host: `${process.env.DB_HOST}`,
    dialect: 'mysql' 
});
function connect() {
    sequelize.authenticate()
        .then(() => {
            console.log('[INFO]: Connection has been established successfully.');
        })
        .catch(err => {
            console.error('[ERROR]: Unable to connect to the database:', err);
        });
    
    // Create Tables
    require("../models/task")
    require("../models/user")
}

function close() {
    sequelize.close()
}

module.exports.db = sequelize
module.exports.connect_to_db = connect
module.exports.close_connection_to_db = close