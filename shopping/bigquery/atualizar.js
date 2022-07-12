const BigQuery = require('@google-cloud/bigquery').BigQuery
const instancia = new BigQuery()

module.exports = async function atualizar (qtd, produto) {
    const opcoes = {
        query: `UPDATE shopping.estoque SET quantidade = ${parseInt(qtd)} WHERE produto = "${produto}"`
    }

    const tabela = instancia.dataset('shopping').table('estoque')
    const [trabalho] = await tabela.createQueryJob(opcoes)
    const [resultados] = await trabalho.getQueryResults()
    return resultados
}