const Sequelize = require('sequelize');

const sequelize = new Sequelize("celke", "root", "12345678",{
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate()
.then(function(){
    console.log("Conectado com o banco de dados")
}).catch(function(){
    console.log("Erro: Não ouve conexão com o banco de dados")
})

module.exports = sequelize;