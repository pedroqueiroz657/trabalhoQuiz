const quizData = [
    {
        question: "Qual é a função do 'localStorage' em JavaScript?",
        a: "Armazenar dados permanentemente no navegador",
        b: "Armazenar dados temporariamente no navegador",
        c: "Armazenar dados no servidor",
        d: "Armazenar dados na nuvem",
        correct: "a"
    },
    {
        question: "Qual tag HTML é usada para adicionar JavaScript a uma página?",
        a: "<script>",
        b: "<javascript>",
        c: "<js>",
        d: "<code>",
        correct: "a"
    },
    {
        question: "Qual das opções a seguir NÃO é um tipo de dado em JavaScript?",
        a: "Number",
        b: "String",
        c: "Boolean",
        d: "Character",
        correct: "d"
    },
    {
        question: "Qual é o método JavaScript usado para selecionar um elemento pelo ID?",
        a: "getElementByTagName",
        b: "getElementByClass",
        c: "getElementById",
        d: "getElementByName",
        correct: "c"
    },
    {
        question: "Qual é o operador usado para verificar igualdade estrita em JavaScript?",
        a: "=",
        b: "==",
        c: "===",
        d: "!==",
        correct: "c"
    }
];

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    document.getElementById("question").innerText = currentQuizData.question;
    document.getElementById("a_text").innerText = currentQuizData.a;
    document.getElementById("b_text").innerText = currentQuizData.b;
    document.getElementById("c_text").innerText = currentQuizData.c;
    document.getElementById("d_text").innerText = currentQuizData.d;
}

function deselectAnswers() {
    document.querySelectorAll(".answer").forEach(answer => answer.checked = false);
}

function getSelected() {
    let answer;
    document.querySelectorAll(".answer").forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

document.getElementById("submit").addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            localStorage.setItem("quizScore", score);
            document.getElementById("quiz").innerHTML = `
                <h2>Você respondeu corretamente ${score}/${quizData.length} perguntas.</h2>
                <button onclick="location.reload()">Refazer</button>
            `;
        }
    }
});

loadQuiz();
