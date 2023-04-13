//importando bibliotéca express e definindo na variavel app
const express = require("express");
const app = express();

//Estou dizendo ao Express usar o EJS como View engine
app.set('view engine','ejs');

app.get("/:nome/:lang",(req,res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 10.00},
        {nome: "Pão-frances", preco: 1.00},
        {nome: "Carne", preco: 10.00}
    ]

    res.render("index",{
        nome: nome, lang: lang, empresa: "Facundo",
        dinheiro: 100000,
        msg: exibirMsg,
        produtos: produtos,
    });
});

app.listen(8080,()=>{
    console.log("App rodando!");
});