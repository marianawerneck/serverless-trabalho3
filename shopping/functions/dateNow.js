module.exports = function dateNow(request, response){
    date = new Date()
    response.send(`A data é : ${date}`) 
}