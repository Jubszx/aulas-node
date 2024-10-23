const fs = require('fs')

fs.readFile("teste.txt", "utf8", (erro, dados) => {

    if(erro){
        console.log(erro)
    }
    else{
        console.log(dados)
    }
})

const mensagem = "e isso ae baby <3"
const mensagem2 = " \n o msm e so diferente <3"

fs.writeFile('teste2oretotno.txt', mensagem, "utf8", (erro) => {
    if(erro){
        console.log("Errado burro")
    }
    else{
        console.log("Arquivo escrito sucess")
    }
})

fs.appendFile('teste2oretotno.txt', mensagem2, "utf8", (erro) => {
    if(erro){
        console.log("Errado burro")
    }
    else{
        console.log("Arquivo adicionado sucess")
    }
})

fs.unlink('teste2oretotno.txt', (erro) => {
    if(erro){
        console.log(" ñ excloi")
    }
    else{
        console.log("Arquivo excloi sucess")
    }
})