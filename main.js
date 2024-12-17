const startGameButton = document.querySelector('.start-game')
const title = document.querySelector('h1')
const questionContainer = document.querySelector('.question-container')
const questionText = document.querySelector('.question')
const answersContainer = document.querySelector('.answers-container')
const nextQuestionButton = document.querySelector('.next-question')

startGameButton.addEventListener('click', startGame)
nextQuestionButton.addEventListener('click', displayNextQuestion)

let currentQuestionIndex = 0 // contador das questões
let totalCorrect = 0

function startGame() {
    startGameButton.classList.add('hide')
    questionContainer.classList.remove('hide')
    title.classList.add('hide')
    displayNextQuestion()
}

function displayNextQuestion() {
    resetState()

    if (questions_page_13.length === currentQuestionIndex) {
        return finishGame()
    }

    questionText.textContent = questions_page_13[currentQuestionIndex].question
    questions_page_13[currentQuestionIndex].answer.forEach(answer => {
        const newAnswer = document.createElement('button')

        newAnswer.classList.add('button', 'answer')
        newAnswer.textContent = answer.text

        if (answer.correct) {
            newAnswer.dataset.correct = answer.correct
        }

        answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener('click', selectAnswer)
    })
}

function resetState() {
    while (answersContainer.firstChild) {
        answersContainer.removeChild(answersContainer.firstChild)
    }

    document.body.removeAttribute('class')
    nextQuestionButton.classList.add('hide')
}

function selectAnswer(event) {
    const answerClicked = event.target

    if (answerClicked.dataset.correct) {
        document.body.classList.add('correct')
        document.body.classList.remove('incorrect')
        totalCorrect++
    } else {
        document.body.classList.add('incorrect')
        document.body.classList.remove('correct')
    }

    document.querySelectorAll('.answer').forEach(button => {
        if (button.dataset.correct) {
            button.classList.add('correct')
        } else {
            button.classList.add('incorrect')
        }
        button.disabled = true
    })

    nextQuestionButton.classList.remove('hide')
    currentQuestionIndex++
}

function finishGame() {
    const totalQuestion = questions_page_13.length
    const performance = Math.floor(totalCorrect * 100 / totalQuestion)

    let message = ''

    switch (true) {
        case (performance >= 90):
            message = 'Execelente :D'
            break
        case (performance >= 70):
            message = 'Muito Bom :)'
            break
        case (performance >= 50):
            message = 'Bom :|'
            break
        case (performance >= 30):
            message = 'Precisa Melhorar :('
            break
        default:
            message = 'Precisa Melhorar MUITO D:'
    }

    questionContainer.innerHTML =
        `
            <p class="final-message">
                Você acertou ${totalCorrect} de ${totalQuestion} questôes!
                <span>Resultado: ${message}</span>
            </p>
        
            <button onclick="window.location.reload()" class="button">Refazer teste</button>

        `
}

const questions_page_13 = [
    {
        question: 'Qual é o peso de uma McFritas Kids, pequena, média e grande respectivamente?',
        answer: [
            { text: '30 grs, 70 grs, 100 grs, 150 grs.', correct: false },
            { text: '35 grs, 75 grs, 110 grs, 145 grs.', correct: false },
            { text: '31 grs, 73 grs, 102 grs, 146 grs.', correct: true },
            { text: '32 grs, 74 grs, 103 grs, 147 grs.', correct: false },
        ]
    },
    {
        question: 'Qual é o rendimento da mostarda pouch?',
        answer: [
            { text: '1200 sanduíches por Quilo.', correct: false },
            { text: '1235 sanduíches por Quilo.', correct: true },
            { text: '1300 sanduíches por Quilo.', correct: false },
            { text: '1250 sanduíches por Quilo.', correct: false },
        ]
    },
    {
        question: 'Qual é o tempo de ambientação do molho Cheddar?',
        answer: [
            { text: '03 horas.', correct: false },
            { text: '01 hora.', correct: false },
            { text: '04 horas.', correct: false },
            { text: '02 horas.', correct: true },
        ]
    },
    {
        question: 'Qual é o tempo de cozimento para as carnes de 3:1?',
        answer: [
            { text: 'A partir de 104 segundos.', correct: true },
            { text: '100 segundos.', correct: false },
            { text: '105 segundos.', correct: false },
            { text: '110 segundos.', correct: false },
        ]
    },
    {
        question: 'Qual é o tempo de cozimento para as carnes de McChicken?',
        answer: [
            { text: '3\'10".', correct: false },
            { text: '3\'20".', correct: false },
            { text: '3\'15".', correct: true },
            { text: '3\'00".', correct: false },
        ]
    },
    {
        question: 'Qual é o tempo de drenagem das McFritas?',
        answer: [
            { text: '10 a 15 segundos.', correct: false },
            { text: '5 a 10 segundos.', correct: true },
            { text: '3 a 8 segundos.', correct: false },
            { text: '8 a 12 segundos.', correct: false },
        ]
    },
    {
        question: 'Qual é o tempo de resfriamento das tortas e quantas no máximo que podemos ativar?',
        answer: [
            { text: '15 minutos – 12 tortas.', correct: false },
            { text: '20 minutos – 16 tortas.', correct: true },
            { text: '20 minutos – 12 tortas.', correct: false },
            { text: '25 minutos – 16 tortas.', correct: false },
        ]
    },
    {
        question: 'Qual é o tempo de vida das McFritas depois de prontas?',
        answer: [
            { text: '10 minutos.', correct: false },
            { text: '7 minutos.', correct: true },
            { text: '5 minutos.', correct: false },
            { text: '8 minutos.', correct: false },
        ]
    },
    {
        question: 'Qual é o tempo de vida do café filtrado após o ciclo de preparação concluído?',
        answer: [
            { text: '20 minutos na jarra de policarbonato.', correct: false },
            { text: '40 minutos na jarra de policarbonato.', correct: false },
            { text: '30 minutos na jarra de policarbonato.', correct: true },
            { text: '25 minutos na jarra de policarbonato.', correct: false },
        ]
    },
    {
        question: 'Qual é o tempo de vida primário da mostarda pouch?',
        answer: [
            { text: '200 dias.', correct: false },
            { text: '220 dias.', correct: false },
            { text: '240 dias.', correct: true },
            { text: '250 dias.', correct: false },
        ]
    },
    {
        question: 'Qual empilhamento máximo das caixas de McNuggets?',
        answer: [
            { text: '6 caixas.', correct: false },
            { text: '7 caixas.', correct: true },
            { text: '8 caixas.', correct: false },
            { text: '9 caixas.', correct: false },
        ]
    },
    {
        question: 'Qual frase está INCORRETA com relação a FAZER ESPECIAL trabalhando nas McFritas?',
        answer: [
            { text: 'Faça o mais rápido que puder sem se importar com a qualidade.', correct: true },
            { text: 'Tenha atenção à qualidade e à rapidez.', correct: false },
            { text: 'Garanta que a porção esteja correta.', correct: false },
            { text: 'Ofereça McFritas frescas e bem preparadas.', correct: false },
        ]
    },
    {
        question: 'Qual o ciclo de caramelização?',
        answer: [
            { text: '20 segundos.', correct: false },
            { text: '24 segundos.', correct: false },
            { text: '22 segundos.', correct: true },
            { text: '25 segundos.', correct: false },
        ]
    },
    {
        question: 'Qual cliente que precisa de atenção ao entrar no restaurante?',
        answer: [
            { text: 'Somente os clientes com reclamações.', correct: false },
            { text: 'Somente os clientes que pedem ajuda.', correct: false },
            { text: 'Somente os clientes frequentes.', correct: false },
            { text: 'Todos os clientes devem ser tratados como especiais.', correct: true },
        ]
    },
    {
        question: 'Qual o propósito do extintor de PÓ BC ou ABC?',
        answer: [
            { text: 'São usados apenas em incêndios com madeira.', correct: false },
            { text: 'São usados apenas em incêndios com tecido.', correct: false },
            { text: 'Extintores de pó BC ou ABC são utilizados em incêndios elétricos ou líquidos inflamáveis.', correct: true },
            { text: 'São usados para qualquer tipo de incêndio.', correct: false },
        ]
    },
    {
        question: 'Qual pode ser a causa de uma torta fria demais?',
        answer: [
            { text: 'Produto superaqueceu.', correct: false },
            { text: 'Tempo insuficiente no forno.', correct: false },
            { text: 'Armazenamento inadequado.', correct: false },
            { text: 'Produto vencido.', correct: true },
        ]
    }
]