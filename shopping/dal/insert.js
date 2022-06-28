const BigQuery = require('@google-cloud/bigquery').BigQuery
const instancia = new BigQuery()


module.exports = function insert(lines){
    const dataset = instancia.dataset('escola')
    const tabela = dataset.table('atividades')

    return tabela.insert(lines)

}