const pubsub = require('./pubSub')


module.exports = async function compraProduto(requisicao, resposta) {
    const produto = requisicao.body

    const resultado = await pubsub(produto, 'compra')
    console.log(produto)
    resposta.send(resultado)
}