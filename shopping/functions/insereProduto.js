const pubsub = require('./pubSub')


module.exports = async function insereProduto (requisicao, resposta) {
    const produto = requisicao.body

    const resultado = await pubsub(produto, 'estoque')
    console.log(produto)
    resposta.send(resultado)
}