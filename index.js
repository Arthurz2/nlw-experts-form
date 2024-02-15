//Estrutura das perguntas
const perguntas = [
    {
        pergunta: "Qual é a palavra-chave utilizada para declarar uma variável em JavaScript?",
        respostas: [
            "let",
            "variable",
            "var",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o DOM em JavaScript?",
        respostas: [
            "Um tipo de dado primitivo",
            "Um modelo de objetos para representar documentos HTML",
            "Um método de ordenação de arrays",
        ],
        correta: 1
    },
    {
        pergunta: "Como se chama o processo de unir duas ou mais strings em JavaScript?",
        respostas: [
            "Concatenação",
            "Interpolação",
            "Atribuição",
        ],
        correta: 0
    },
    {
        pergunta: "Qual é a função do operador '===' em JavaScript?",
        respostas: [
            "Igualdade solta",
            "Atribuição",
            "Igualdade estrita",
        ],
        correta: 2
    },
    {
        pergunta: "O que é um array em JavaScript?",
        respostas: [
            "Um tipo de dado para armazenar valores booleanos",
            "Uma estrutura de controle de fluxo",
            "Uma coleção ordenada de valores",
        ],
        correta: 2
    },
    {
        pergunta: "O que significa o termo 'hoisting' em JavaScript?",
        respostas: [
            "Elevar a performance de um código",
            "Elevar a declaração de uma variável ou função ao topo do seu escopo",
            "Elevar um elemento HTML na hierarquia do DOM",
        ],
        correta: 1
    },
    {
        pergunta: "Qual é a finalidade do método 'querySelector' em JavaScript?",
        respostas: [
            "Selecionar elementos HTML usando seletores CSS",
            "Selecionar elementos da página por meio de loops",
            "Selecionar elementos de uma array",
        ],
        correta: 0
    },
    {
        pergunta: "O que é o evento 'onclick' em JavaScript?",
        respostas: [
            "Um evento que ocorre quando a página é carregada",
            "Um método para realizar operações matemáticas",
            "Um evento que ocorre quando o mouse é clicado em um elemento",
        ],
        correta: 2
    },
    {
        pergunta: "Como você converte uma string para um número em JavaScript?",
        respostas: [
            "toNumber()",
            "parseInt()",
            "convertToNumber()",
        ],
        correta: 1
    },
    {
        pergunta: "O que é o JSON em JavaScript?",
        respostas: [
            "Uma linguagem de programação",
            "Uma biblioteca para gráficos",
            "Um formato de dados leve para intercâmbio de informações",
        ],
        correta: 2
    },
];
document.addEventListener('DOMContentLoaded', function () {
const quiz = document.querySelector('#quiz')
const template = document.querySelector('#quiz-template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')


//loop ou repetição
for(const item of perguntas) {
    
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)

        //vai verificar no dt o input com o valor event que está correto e apontar usando operador comparativo
        dt.querySelector('input').onchange = (event) => {
            //Atribuindo uma comparação sendo ou true ou false
            const estaCorreta = event.target.value == item.correta
            corretas.delete(item)
            if(estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de 10'
        }
       
       
        quizItem.querySelector('dl').appendChild(dt)
    }
     
    // Obtém a referência para o primeiro dt dentro de dl no caso o "opção 1"
    const primeiroDt = quizItem.querySelector('dl dt');
    // Obtém a referência para o elemento pai (dl) e remove o primeiroDt
    primeiroDt.parentNode.removeChild(primeiroDt);

    // coloca a pergunta na tela
    quiz.appendChild(quizItem)
    
}

});
