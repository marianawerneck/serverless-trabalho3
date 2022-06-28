const pesquisar = require('../bigquery/pesquisar')


module.exports = async function consultaProduto (requisicao, resposta) {
    
    const produto = requisicao.body.produto;
    const filtro = `produto like '%${produto}%'`
    try{
        const resultado = await pesquisar(filtro)
        console.log(produto)
        resposta.send(resultado)
    }catch(error){
        console.log(error)
        resposta.send(error.response)
    }
    
    
}