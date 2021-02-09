//Arquivo: ConexaoDB.js

//Autor: Daniel Henrique Cavalcante da Silva

//Nesse arquivo iremos configurar o NodeJS para acessar o banco de dados

//instale no terminal: npm install pg --save
var { Pool } = require('pg')

//Importando o arquivo Consulta.js
var consulta =  require('./Consulta.js')

const acessDB = {
    host: 'Digite o servidor',
    user: 'Digite seu úsuario',     
    password: 'Digite a senha',
    database: 'Digite o nome do banco de dados',
    port: 'Digite o número da porta'
};

var pool = new Pool(acessDB)

pool.query(consulta.SELECT, (err, res) => {
    console.log(res) 
    pool.end() 
})
