var currentQuestionIndex = 0;
        var correctAnswers = 0;
        var irregularVerbs = [
            { base: 'go', past: 'went', participle: 'gone', spanish: "ir",spanish2:"saber",spanish3:"correr" },
            { base: 'be', past: 'was/were', participle: 'been', spanish: "ser/estar",spanish2:"hacer",spanish3:"tener" },
            { base: 'begin', past: 'began', participle: 'begun', spanish: "comenzar", spanish2: "comer", spanish3: "leer" },
            { base: 'break', past: 'broke', participle: 'broken', spanish: "romper", spanish2: "bailar", spanish3: "cantar" },
            { base: 'bring', past: 'brought', participle: 'brought', spanish: "traer", spanish2: "jugar", spanish3: "dormir" },
            { base: 'build', past: 'built', participle: 'built', spanish: "construir", spanish2: "correr", spanish3: "vivir" },
            { base: 'buy', past: 'bought', participle: 'bought', spanish: "comprar", spanish2: "beber", spanish3: "escribir" },
            { base: 'catch', past: 'caught', participle: 'caught', spanish: "atrapar", spanish2: "leer", spanish3: "comer" },
            { base: 'choose', past: 'chose', participle: 'chosen', spanish: "elegir", spanish2: "dormir", spanish3: "bailar" },
            { base: 'come', past: 'came', participle: 'come', spanish: "venir", spanish2: "vivir", spanish3: "jugar" },
            { base: 'do', past: 'did', participle: 'done', spanish: "hacer", spanish2: "escribir", spanish3: "beber" },
            { base: 'draw', past: 'drew', participle: 'drawn', spanish: "dibujar", spanish2: "cantar", spanish3: "correr" },
            { base: 'drink', past: 'drank', participle: 'drunk', spanish: "beber", spanish2: "dormir", spanish3: "leer" },
            { base: 'drive', past: 'drove', participle: 'driven', spanish: "conducir", spanish2: "bailar", spanish3: "jugar" },
            { base: 'eat', past: 'ate', participle: 'eaten', spanish: "comer", spanish2: "vivir", spanish3: "dormir" },
            { base: 'fall', past: 'fell', participle: 'fallen', spanish: "caer", spanish2: "leer", spanish3: "cantar" },
            { base: 'feel', past: 'felt', participle: 'felt', spanish: "sentir", spanish2: "correr", spanish3: "bailar" },
            { base: 'find', past: 'found', participle: 'found', spanish: "encontrar", spanish2: "jugar", spanish3: "escribir" },
            { base: 'fly', past: 'flew', participle: 'flown', spanish: "volar", spanish2: "beber", spanish3: "cantar" },
            { base: 'forget', past: 'forgot', participle: 'forgotten', spanish: "olvidar", spanish2: "dormir", spanish3: "leer" },
            { base: 'forgive', past: 'forgave', participle: 'forgiven', spanish: "perdonar", spanish2: "bailar", spanish3: "correr" },
            { base: 'freeze', past: 'froze', participle: 'frozen', spanish: "congelar", spanish2: "cantar", spanish3: "escribir" },
            { base: 'get', past: 'got', participle: 'got', spanish: "obtener", spanish2: "leer", spanish3: "dormir" },
            { base: 'give', past: 'gave', participle: 'given', spanish: "dar", spanish2: "volar", spanish3: "jugar" },
            { base: 'go', past: 'went', participle: 'gone', spanish: "ir", spanish2: "correr", spanish3: "cantar" },
            { base: 'grow', past: 'grew', participle: 'grown', spanish: "crecer", spanish2: "escribir", spanish3: "leer" },
            { base: 'hang', past: 'hung', participle: 'hung', spanish: "colgar", spanish2: "ir", spanish3: "jugar" },
            { base: 'have', past: 'had', participle: 'had', spanish: "tener", spanish2: "dormir", spanish3: "leer" },
            { base: 'hear', past: 'heard', participle: 'heard', spanish: "escuchar", spanish2: "cantar", spanish3: "correr" },
            { base: 'hide', past: 'hid', participle: 'hidden', spanish: "esconder", spanish2: "bailar", spanish3: "jugar" },
            { base: 'hit', past: 'hit', participle: 'hit', spanish: "golpear", spanish2: "leer", spanish3: "volar" },
            { base: 'hold', past: 'held', participle: 'held', spanish: "sostener", spanish2: "bailar", spanish3: "jugar" },
            { base: 'hurt', past: 'hurt', participle: 'hurt', spanish: "herir", spanish2: "leer", spanish3: "beber" },
            { base: 'keep', past: 'kept', participle: 'kept', spanish: "mantener", spanish2: "bailar", spanish3: "volar" },
            { base: 'know', past: 'knew', participle: 'known', spanish: "saber", spanish2: "leer", spanish3: "dormir" },
            { base: 'lay', past: 'laid', participle: 'laid', spanish: "poner", spanish2: "bailar", spanish3: "ir" },
            { base: 'lead', past: 'led', participle: 'led', spanish: "guiar", spanish2: "leer", spanish3: "dormir" },
            { base: 'leave', past: 'left', participle: 'left', spanish: "dejar", spanish2: "congelar", spanish3: "jugar" },
            { base: 'lend', past: 'lent', participle: 'lent', spanish: "prestar", spanish2: "ver", spanish3: "volar" },
            { base: 'let', past: 'let', participle: 'let', spanish: "permitir", spanish2: "vivir", spanish3: "jugar" },
            { base: 'lie', past: 'lay', participle: 'lain', spanish: "mentir", spanish2: "esconder", spanish3: "decir" },
            { base: 'light', past: 'lit', participle: 'lit', spanish: "encender", spanish2: "ir", spanish3: "volar" },
            { base: 'lose', past: 'lost', participle: 'lost', spanish: "perder", spanish2: "esconder", spanish3: "congelar" },
            { base: 'make', past: 'made', participle: 'made', spanish: "hacer", spanish2: "bailar", spanish3: "jugar" },
            { base: 'mean', past: 'meant', participle: 'meant', spanish: "significar", spanish2: "leer", spanish3: "volar" },
            { base: 'meet', past: 'met', participle: 'met', spanish: "encontrar", spanish2: "bailar", spanish3: "jugar" },
            { base: 'pay', past: 'paid', participle: 'paid', spanish: "pagar", spanish2: "disparar", spanish3: "dormir" },
            { base: 'put', past: 'put', participle: 'put', spanish: "poner", spanish2: "bailar", spanish3: "jugar" },
            { base: 'read', past: 'read', participle: 'read', spanish: "leer", spanish2: "leer", spanish3: "beber" },
            { base: 'ride', past: 'rode', participle: 'ridden', spanish: "montar", spanish2: "disparar", spanish3: "jugar" },
            { base: 'ring', past: 'rang', participle: 'rung', spanish: "llamar", spanish2: "leer", spanish3: "esconder" },
            { base: 'rise', past: 'rose', participle: 'risen', spanish: "levantar", spanish2: "bailar", spanish3: "jugar" },
            { base: 'run', past: 'ran', participle: 'run', spanish: "correr", spanish2: "ver", spanish3: "dormir" },
            { base: 'say', past: 'said', participle: 'said', spanish: "decir", spanish2: "poner", spanish3: "jugar" },
            { base: 'see', past: 'saw', participle: 'seen', spanish: "ver", spanish2: "leer", spanish3: "dormir" },
            { base: 'sell', past: 'sold', participle: 'sold', spanish: "vender", spanish2: "disparar", spanish3: "jugar" },
            { base: 'send', past: 'sent', participle: 'sent', spanish: "enviar", spanish2: "montar", spanish3: "dormir" },
            { base: 'set', past: 'set', participle: 'set', spanish: "establecer", spanish2: "bailar", spanish3: "encender" },
            { base: 'shake', past: 'shook', participle: 'shaken', spanish: "sacudir", spanish2: "poner", spanish3: "dormir" },
            { base: 'shine', past: 'shone', participle: 'shone', spanish: "brillar", spanish2: "bailar", spanish3: "jugar" },
            { base: 'shoot', past: 'shot', participle: 'shot', spanish: "disparar", spanish2: "leer", spanish3: "dormir" },
            { base: 'show', past: 'showed', participle: 'shown', spanish: "mostrar", spanish2: "bailar", spanish3: "jugar" },
            { base: 'shut', past: 'shut', participle: 'shut', spanish: "cerrar", spanish2: "leer", spanish3: "dormir" },
            { base: 'sing', past: 'sang', participle: 'sung', spanish: "cantar", spanish2: "bailar", spanish3: "encender" },
            { base: 'sink', past: 'sank', participle: 'sunk', spanish: "hundir", spanish2: "montar", spanish3: "dormir" },
            { base: 'sit', past: 'sat', participle: 'sat', spanish: "sentar", spanish2: "bailar", spanish3: "jugar" },
            { base: 'sleep', past: 'slept', participle: 'slept', spanish: "dormir", spanish2: "poner", spanish3: "dormir" },
            { base: 'speak', past: 'spoke', participle: 'spoken', spanish: "hablar", spanish2: "bailar", spanish3: "jugar" },
            { base: 'spend', past: 'spent', participle: 'spent', spanish: "gastar", spanish2: "leer", spanish3: "dormir" },
            { base: 'stand', past: 'stood', participle: 'stood', spanish: "estar de pie", spanish2: "bailar", spanish3: "decir" },
            { base: 'steal', past: 'stole', participle: 'stolen', spanish: "robar", spanish2: "leer", spanish3: "dormir" },
            { base: 'swim', past: 'swam', participle: 'swum', spanish: "nadar", spanish2: "cantar", spanish3: "encender" },
            { base: 'take', past: 'took', participle: 'taken', spanish: "tomar", spanish2: "hundir", spanish3: "montar" },
            { base: 'teach', past: 'taught', participle: 'taught', spanish: "enseñar", spanish2: "bailar", spanish3: "jugar" },
            { base: 'tear', past: 'tore', participle: 'torn', spanish: "romper", spanish2: "sacudir", spanish3: "dormir" },
            { base: 'tell', past: 'told', participle: 'told', spanish: "decir", spanish2: "bailar", spanish3: "jugar" },
            { base: 'think', past: 'thought', participle: 'thought', spanish: "pensar", spanish2: "cantar", spanish3: "dormir" },
            { base: 'throw', past: 'threw', participle: 'thrown', spanish: "lanzar", spanish2: "bailar", spanish3: "jugar" },
            { base: 'understand', past: 'understood', participle: 'understood', spanish: "entender", spanish2: "hundir", spanish3: "dormir" },
            { base: 'wake', past: 'woke', participle: 'woken', spanish: "despertar", spanish2: "bailar", spanish3: "jugar" },
            { base: 'wear', past: 'wore', participle: 'worn', spanish: "usar", spanish2: "leer", spanish3: "sacudir" },
            { base: 'win', past: 'won', participle: 'won', spanish: "ganar", spanish2: "bailar", spanish3: "decir" },
            { base: 'write', past: 'wrote', participle: 'written', spanish: "escribir", spanish2: "leer", spanish3: "cantar" }

        ];
        function generateQuestionSpanish() {
            var verb = irregularVerbs[Math.floor(Math.random() * irregularVerbs.length)];
            var spanishOptions = [verb.spanish, verb.spanish2, verb.spanish3];
            spanishOptions.sort(() => Math.random() - 0.5);

            return {
                question: `How do you say "${verb.base}" in Spanish?`,
                options: spanishOptions,
                answer: verb.spanish
            };
        }
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
        
        // Genera una nueva pregunta
        function getNumberOfQuestions() {
            let inputNumber = Number(prompt("How many questions do you want to answer? (1-100)"));

            while (!Number.isInteger(inputNumber) || inputNumber < 1 || inputNumber > 100) {
                inputNumber = Number(prompt("Please, enter an integer number between 1 and 100."));
            }

            return inputNumber;
        }
        
        var numQuestionSets = getNumberOfQuestions(); 
        var questions = [];

        var questionGenerators = [generateQuestionSpanish, generateQuestionPast, generateQuestionParticiple];

        for (var i = 0; i < numQuestionSets; i++) {
            // Seleccionar una función de generación de preguntas aleatoria
            var randomGenerator = questionGenerators[Math.floor(Math.random() * questionGenerators.length)];

            // Generar una pregunta usando la función seleccionada
            var question = randomGenerator();

            // Agregar la pregunta al array de preguntas
            questions.push(question);
        }
        var totalQuestions = questions.length;

        function showQuestion() {
            var selectedOption = document.querySelector('input[name="option"]:checked');
            if (selectedOption) {
                selectedOption.checked = false;
            }

            var questionElement = document.getElementById('question');
            var currentQuestion = questions[currentQuestionIndex];

            // Mostrar la pregunta
            questionElement.textContent = currentQuestion.question;

            // Mostrar las opciones
            for (var i = 1; i <= currentQuestion.options.length; i++) {
                var optionElement = document.getElementById('option' + i);
                var labelElement = document.querySelector('label[for="option' + i + '"]');

                optionElement.value = currentQuestion.options[i - 1];
                labelElement.textContent = currentQuestion.options[i - 1];
            }
        }
        
        // Mostrar la primera pregunta al cargar la página
        showQuestion();
        
        function nextQuestion() {
            // Comprobar si la respuesta seleccionada es correcta
            var selectedOption = document.querySelector('input[name="option"]:checked');
            if (selectedOption && selectedOption.value === questions[currentQuestionIndex].answer) {
                correctAnswers++;
            }
        
            // Pasar a la siguiente pregunta
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion();
            } else {
                // Mostrar el número de respuestas correctas al final del cuestionario
                alert('Quiz finished! You got ' + correctAnswers + ' out of ' + questions.length + ' correct.');
            }
        }
        // Resto del código...

        // Controlador de eventos para el botón de reinicio
        $('#resetButton').on('click', function() {
            // Reiniciar las variables
            questions = [];
            currentQuestionIndex = 0;
            correctAnswers = 0;

            // Pedir al usuario que introduzca el número de preguntas
            let inputNumber = Number(prompt("How many questions do you want to answer? (1-100)"));

            while (!Number.isInteger(inputNumber) || inputNumber < 1 || inputNumber > 100) {
                alert("Please, enter an integer number between 1 and 100");
                inputNumber = Number(prompt("How many questions do you want to answer? (1-100)"));
            }

            var numQuestionSets = inputNumber; 

            var questionGenerators = [generateQuestionSpanish, generateQuestionPast, generateQuestionParticiple];

            for (var i = 0; i < numQuestionSets; i++) {
                var randomGenerator = questionGenerators[Math.floor(Math.random() * questionGenerators.length)];
                var question = randomGenerator();
                questions.push(question);
            }

            // Mostrar la primera pregunta
            showQuestion();
        });