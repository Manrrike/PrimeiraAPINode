const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.status(200).json({
        msg: "API funcionando"

    })
})
const porta = 3000
 app.listen(porta, ()=>{
    console.log(`Servidor rodando no http://localhost:${porta}`)
 })

 let alunos = [
   {id: 1, nome: "adriyan", curso: "bd"},
   {id: 2, nome: "bruno", curso: "ads"},
   {id: 3, nome: "bruna", curso: "cc"},
   {id: 4, nome: "vitoria", curso: "si"},
 ];

 app.get("/alunos/id",(req,res)=>{
    res.status(200).json(alunos.id);
 })