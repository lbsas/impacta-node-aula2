var express = require('express')
var app = express()
const load = require('express-load');


app.set('view engine', 'ejs')
app.set('views', __dirname + "/views")
app.use(express.static(__dirname + "/public"))

app.get('/exemplo', function(requisicao, resposta) {
    resposta.render("exemplos/app")
})

load('models')
    .then('controllers')
    .then('routes')
    .into('app')


app.listen(3000, function() {
    console.log("servidor no ar!")
})