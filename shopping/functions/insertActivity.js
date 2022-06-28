const inserir = require('../bigquery/inserir')

module.exports = async function insertActivity(event){
    try {
        const codedActivity = event.data;
        const json = Buffer.from(codedActivity, 'base64').toString();
        console.log("json: "+JSON.stringify(json));
        const activity = JSON.parse(json);

        const result = await inserir(activity);
        console.log(result)
    } catch (error) {
        console.error(error);
        console.log(error.response.insertErrors);
    }
}