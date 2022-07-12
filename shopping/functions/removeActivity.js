
const pesquisar = require('../bigquery/pesquisar')
const atualizar = require('../bigquery/atualizar')

module.exports = async function removeActivity(event){
    try{
        const codedActivity = event.data;
        const json = Buffer.from(codedActivity, 'base64').toString();
        console.log("json: "+JSON.stringify(json));
        const activity = JSON.parse(json);
        const produto = activity.produto;
        const filtro = `produto like '%${produto}%'`
        const resultados = await pesquisar(filtro)
        console.log(resultados[0]);
        const resultado = resultados[0]
        const qtd = parseInt(resultado.quantidade) - parseInt(activity.qtd);
        const query = await atualizar(qtd, produto);
        console.log(query)
    }catch(error){
        console.log(error)
    }
   
}