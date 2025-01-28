var currentQuestionIndex = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var irregularVerbs = [
    { base: 'go', past: 'went', participle: 'gone' },
    { base: 'be', past: 'was/were', participle: 'been' },
    { base: 'begin', past: 'began', participle: 'begun' },
    { base: 'break', past: 'broke', participle: 'broken' },
    { base: 'bring', past: 'brought', participle: 'brought' },
    { base: 'build', past: 'built', participle: 'built' },
    { base: 'buy', past: 'bought', participle: 'bought' },
    { base: 'catch', past: 'caught', participle: 'caught' },
    { base: 'choose', past: 'chose', participle: 'chosen' },
    { base: 'come', past: 'came', participle: 'come' },
    { base: 'do', past: 'did', participle: 'done' },
    { base: 'draw', past: 'drew', participle: 'drawn' },
    { base: 'drink', past: 'drank', participle: 'drunk' },
    { base: 'drive', past: 'drove', participle: 'driven' },
    { base: 'eat', past: 'ate', participle: 'eaten' },
    { base: 'fall', past: 'fell', participle: 'fallen' },
    { base: 'feel', past: 'felt', participle: 'felt' },
    { base: 'find', past: 'found', participle: 'found' },
    { base: 'fly', past: 'flew', participle: 'flown' },
    { base: 'forget', past: 'forgot', participle: 'forgotten' },
    { base: 'forgive', past: 'forgave', participle: 'forgiven' },
    { base: 'freeze', past: 'froze', participle: 'frozen' },
    { base: 'get', past: 'got', participle: 'got' },
    { base: 'give', past: 'gave', participle: 'given' },
    { base: 'grow', past: 'grew', participle: 'grown' },
    { base: 'hang', past: 'hung', participle: 'hung' },
    { base: 'have', past: 'had', participle: 'had' },
    { base: 'hear', past: 'heard', participle: 'heard' },
    { base: 'hide', past: 'hid', participle: 'hidden' },
    { base: 'hit', past: 'hit', participle: 'hit' },
    { base: 'hold', past: 'held', participle: 'held' },
    { base: 'hurt', past: 'hurt', participle: 'hurt' },
    { base: 'keep', past: 'kept', participle: 'kept' },
    { base: 'know', past: 'knew', participle: 'known' },
    { base: 'lay', past: 'laid', participle: 'laid' },
    { base: 'lead', past: 'led', participle: 'led' },
    { base: 'leave', past: 'left', participle: 'left' },
    { base: 'lend', past: 'lent', participle: 'lent' },
    { base: 'let', past: 'let', participle: 'let' },
    { base: 'lie', past: 'lay', participle: 'lain' },
    { base: 'light', past: 'lit', participle: 'lit' },
    { base: 'lose', past: 'lost', participle: 'lost' },
    { base: 'make', past: 'made', participle: 'made' },
    { base: 'mean', past: 'meant', participle: 'meant' },
    { base: 'meet', past: 'met', participle: 'met' },
    { base: 'pay', past: 'paid', participle: 'paid' },
    { base: 'put', past: 'put', participle: 'put' },
    { base: 'read', past: 'read', participle: 'read' },
    { base: 'ride', past: 'rode', participle: 'ridden' },
    { base: 'ring', past: 'rang', participle: 'rung' },
    { base: 'rise', past: 'rose', participle: 'risen' },
    { base: 'run', past: 'ran', participle: 'run' },
    { base: 'say', past: 'said', participle: 'said' },
    { base: 'see', past: 'saw', participle: 'seen' },
    { base: 'sell', past: 'sold', participle: 'sold' },
    { base: 'send', past: 'sent', participle: 'sent' },
    { base: 'set', past: 'set', participle: 'set' },
    { base: 'shake', past: 'shook', participle: 'shaken' },
    { base: 'shine', past: 'shone', participle: 'shone' },
    { base: 'shoot', past: 'shot', participle: 'shot' },
    { base: 'show', past: 'showed', participle: 'shown' },
    { base: 'shut', past: 'shut', participle: 'shut' },
    { base: 'sing', past: 'sang', participle: 'sung' },
    { base: 'sink', past: 'sank', participle: 'sunk' },
    { base: 'sit', past: 'sat', participle: 'sat' },
    { base: 'sleep', past: 'slept', participle: 'slept' },
    { base: 'speak', past: 'spoke', participle: 'spoken' },
    { base: 'spend', past: 'spent', participle: 'spent' },
    { base: 'stand', past: 'stood', participle: 'stood' },
    { base: 'steal', past: 'stole', participle: 'stolen' },
    { base: 'swim', past: 'swam', participle: 'swum' },
    { base: 'take', past: 'took', participle: 'taken' },
    { base: 'teach', past: 'taught', participle: 'taught' },
    { base: 'tear', past: 'tore', participle: 'torn' },
    { base: 'tell', past: 'told', participle: 'told' },
    { base: 'think', past: 'thought', participle: 'thought' },
    { base: 'throw', past: 'threw', participle: 'thrown' },
    { base: 'understand', past: 'understood', participle: 'understood' },
    { base: 'wake', past: 'woke', participle: 'woken' },
    { base: 'wear', past: 'wore', participle: 'worn' },
    { base: 'win', past: 'won', participle: 'won' },
    { base: 'write', past: 'wrote', participle: 'written' }
];

function generateQuestionPast() {
    var verb = irregularVerbs[Math.floor(Math.random() * irregularVerbs.length)];
    var pastOptions = [verb.past, verb.base, verb.participle];
    pastOptions.sort(() => Math.random() - 0.5);

    return {
        question: `What is the past tense of "${verb.base}"?`,
        options: pastOptions,
        answer: verb.past
    };
}

function generateQuestionParticiple() {
    var verb = irregularVerbs[Math.floor(Math.random() * irregularVerbs.length)];
    var participleOptions = [verb.past, verb.base, verb.participle];
    participleOptions.sort(() => Math.random() - 0.5);

    return {
        question: `What is the past participle of "${verb.base}"?`,
        options: participleOptions,
        answer: verb.participle
    };
}

// DOM elements
var inputModal = document.getElementById('inputModal');
var inputConfirmButton = document.getElementById('inputConfirm');
var inputNumberElement = document.getElementById('inputNumber');
var correctCounter = document.getElementById('correctCounter');
var incorrectCounter = document.getElementById('incorrectCounter');

var questions = [];
var currentQuestionIndex = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;

inputConfirmButton.addEventListener('click', function() {
    var inputNumber = Number(inputNumberElement.value);

    if (!Number.isInteger(inputNumber) || inputNumber < 1 || inputNumber > 100) {
        alert("Please, enter an integer number between 1 and 100");
    } else {
        inputModal.style.display = 'none';

        var numQuestionSets = inputNumber;
        var questionGenerators = [generateQuestionPast, generateQuestionParticiple];

        for (var i = 0; i < numQuestionSets; i++) {
            var randomGenerator = questionGenerators[Math.floor(Math.random() * questionGenerators.length)];
            var question = randomGenerator();
            questions.push(question);
        }

        showQuestion();
    }
});

inputModal.style.display = 'block';

function showQuestion() {
    var selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        selectedOption.checked = false;
    }

    var questionElement = document.getElementById('question');
    var currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;

    for (var i = 1; i <= currentQuestion.options.length; i++) {
        var optionElement = document.getElementById('option' + i);
        var labelElement = document.querySelector('label[for="option' + i + '"]');

        optionElement.value = currentQuestion.options[i - 1];
        labelElement.textContent = currentQuestion.options[i - 1];
    }
}

function nextQuestion() {
    var selectedOption = document.querySelector('input[name="option"]:checked');
    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestionIndex].answer) {
            correctAnswers++;
        } else {
            incorrectAnswers++;
        }

        correctCounter.textContent = `Correct Answers: ${correctAnswers}`;
        incorrectCounter.textContent = `Incorrect Answers: ${incorrectAnswers}`;
    } else {
        alert("Please select an answer before proceeding.");
        return;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert('Quiz finished! You got ' + correctAnswers + ' correct and ' + incorrectAnswers + ' incorrect.');
    }
}

$('#resetButton').on('click', function() {
    questions = [];
    currentQuestionIndex = 0;
    correctAnswers = 0;
    incorrectAnswers = 0;

    correctCounter.textContent = "Correct Answers: 0";
    incorrectCounter.textContent = "Incorrect Answers: 0";

    inputModal.style.display = 'block';
});
