const express = require("express")

const app = express()

// Middleware para entender JSON (boa prática)
app.use(express.json());


let alunos = [
    { id: 1, nome: "adriyan", curso: "bd" },
    { id: 2, nome: "bruno", curso: "ads" },
    { id: 3, nome: "bruna", curso: "cc" },
    { id: 4, nome: "vitoria", curso: "si" },
];


// o "/" tem nome de end point(ponto final) depois da primeira barra é valor.
app.get("/", (req, res) => {
    res.status(200).json({
        msg: "API funcionando"

    })
})

app.get("/alunos", (req, res) => {
    res.status(200).json(alunos);
});

// requisição = req , resposta = res
app.get("/alunos/:valor", (req, res) => {

    const valor = Number(req.params.valor);
    const aluno = alunos.find(aluno => aluno.id === valor);
if(!aluno){
    return res.status(404).json({msg: "Aluno não encontrado"});
}

    res.status(200).json(aluno);
});


app.post("/alunos/cadastro", (req, res) => {
    console.log(req.body); // continua imprimindo no terminal

    const { nome, curso } = req.body;
    const novoId = alunos.length > 0 ? alunos[alunos.length - 1].id + 1 : 1;
    const novoAluno = { id: novoId, nome, curso };

    alunos.push(novoAluno);

    // ESSA RESPOSTA ENCERRA A CONEXÃO HTTP E PARA O CARREGAMENTO:
    return res.status(201).json({
        msg: "Aluno cadastrado com sucesso!",
        aluno: novoAluno
    });
});

app.put("/alunos/:valor",(req,res)=>{
    const valor =Number(req.params.valor);
    const {nome, curso} = req.body;


    if(!nome || !curso){
        return res.status(400).json({
            msg: "Nome e curso são obrigatorios"
        });
    }

    const index = alunos.findIndex(aluno => aluno.id === valor);
    if(index < 0)
    {
        return res.status(404).json({
            msg: "Aluno não encontrado"
        })
    }
    res.status(200).json({ msg: "Aluno atualizado"})
})
const porta = 3000
app.listen(porta, () => {
    console.log(`Servidor rodando no http://localhost:${porta}`)
})