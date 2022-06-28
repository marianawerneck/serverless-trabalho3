const Koa = require('koa')
const processador = require('koa-bodyparser')
const aplicacao = new Koa()

aplicacao.use(processador())
// aplicacao.use(async function (contexto) {
//     const usuarioEsenha = conversor.parse(contexto.request.headers.authorization)
//     const USUARIO = process.env.USUARIO
//     const SENHA = process.env.SENHA
    
//     if (USUARIO !== usuarioEsenha.name || SENHA !== usuarioEsenha.pass) {
//         contexto.body = {
//             mensagem: 'Acesso negado'
//         }
//         return
//     }

//     const corpoDaRequisicao = contexto.request.body
//     contexto.status = 200
//     contexto.body = await pesquisar(corpoDaRequisicao.filtro)
// })

aplicacao.listen(3000)
console.log('O serviço está funcionando normalmente')