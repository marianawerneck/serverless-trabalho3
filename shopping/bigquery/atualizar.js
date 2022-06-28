const BigQuery = require('@google-cloud/bigquery').BigQuery
const instancia = new BigQuery()

module.exports = async function pesquisar (qtd, produto) {
    const opcoes = {
        query: `UPDATE * FROM estoque SET quantidade = ${qtd} WHERE produto = ${produto}`
    }

    if (filtro) {
        opcoes.query = `${opcoes.query} WHERE ${filtro}`
    }

    const tabela = instancia.dataset('shopping').table('estoque')
    const [trabalho] = await tabela.createQueryJob(opcoes)
    const [resultados] = await trabalho.getQueryResults()
    return resultados
}