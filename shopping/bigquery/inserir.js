const BigQuery = require('@google-cloud/bigquery').BigQuery
const instancia = new BigQuery()

module.exports = function inserir (linhas) {
    const dataset = instancia.dataset('shopping')
    const tabela = dataset.table('estoque')

    return tabela.insert(linhas)
}