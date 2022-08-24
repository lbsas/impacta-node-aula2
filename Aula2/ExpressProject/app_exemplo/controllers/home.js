module.exports = function(app) {
    var HomeController = {
        index: function(resquisicao, resposta) {
            resposta.render('home/index')
        }
    }
    return HomeController
}