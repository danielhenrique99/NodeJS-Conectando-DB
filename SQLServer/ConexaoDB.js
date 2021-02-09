//Arquivo: ConexaoDB.js

//Autor: Daniel Henrique Cavalcante da Silva

//Nesse arquivo iremos configurar o NodeJS para acessar o banco de dados

//Instale no terminal o mssql: npm init mssql --save
var sql = require('mssql');

//Importando o arquivo DadosDB.js
var dados = require('./DadosDB.js');

//Importando o arquivo Consulta.js
var consulta = require('./Consulta.js');

    sql.connect(dados.DBConfig ,function(err){
    if (err) console.log(err)

     var request = new sql.Request();

     console.log(request)

     request.query(consulta.SELECT, function(err, select){
       
       var exibirQuery = select.recordset;


       //Aqui será mostrado o resultado do seu SELECT.
       console.log(exibirQuery)

    })
})


