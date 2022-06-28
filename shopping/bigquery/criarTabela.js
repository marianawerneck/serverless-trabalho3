const BigQuery = require('@google-cloud/bigquery').BigQuery
const instancia = new BigQuery()

async function criarTabela () {
    const dataset = instancia.dataset('shopping')
    const [tabelas] = await dataset.getTables()
    const nomeTabela = 'estoque'
    const tabelasEncontradas = tabelas.filter(function (tabelaAtual) {
        return tabelaAtual.id === nomeTabela
    })

    if (tabelasEncontradas.length > 0) {
        console.log('Essa tabela já existe!')
        return
    }

    const estrutura = [
        {
            name: 'produto',
            type: 'string',
            mode: 'required'
        },
        {
            name: 'quantidade',
            type: 'integer',
            mode: 'required'
        },
        {
            name: 'data',
            type: 'timestamp',
            mode: 'required'
        }
    ]

    await dataset.createTable(nomeTabela, { schema: estrutura })
    console.log('A tabela foi criada com sucesso!')
}

criarTabela()