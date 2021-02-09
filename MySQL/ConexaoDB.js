//Arquivo: ConexaoDB.js

//Autor: Daniel Henrique Cavalcante da Silva

//Nesse arquivo iremos configurar o NodeJS para acessar o banco de dados

//Instale no terminal o mysql: npm init mysql --save
var mysql = require('mysql');

//Importando o arquivo DadosDB.js
var dados = require('./DadosDB.js');

//Importando o arquivo Consulta.js
var consulta = require('./Consulta.js');



const DB = mysql.createConnection(dados.DBConfig);


DB.connect((err) => {
    if (err) {
        console.log('Erro ao conectar ao banco de dados ...', err)
        return
    }
    console.log('Conexão estabelecida!')
})


DB.query(consulta.SELECT, (err, exibirQuery) => {
    if (err) throw err
   
    //Aqui será mostrado o resultado do seu SELECT
   console.log('Resultado: ', exibirQuery, '\n\n')
})


DB.end((err) => {
    if(err) {
        console.log('Erro ao encerrar a conexão ...', err)
        return 
    }
    console.log('A conexão foi finalizada ...')
})
