const BigQuery = require('@google-cloud/bigquery').BigQuery;
const instancia = new BigQuery()

async function createDataset(){
    const [datasets] = await instancia.getDatasets();
    const nomeDataset = 'escola'
    const escolaDataset = datasets.filter(function (datasetAtual){
        return datasetAtual.id === nomeDataset
    })

    if (escolaDataset.length > 0 ){
        console.log('Dataset escola já criado');
        return
    }

    await instancia.createDataset(nomeDataset);
    console.log('Foi criado com sucesso');
}

createDataset();


