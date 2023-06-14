//this would be the object shape for storing the questions  
 const questions = [
    {
        question: `Which pairing below was a couple in any season of the hit show "The Office"?`,
        optionA: "Erin and Pete",
        optionB: "Pam and Jim",
        optionC: "Angela and Dwight",
        optionD: "All of the above",
        correctOption: "optionD"
    },

    {
        question: `In the hit show "Parks and Recreation", what is the name of the strong lead who's determination is unbreakable?`,
        optionA: "Lester Knumpf",
        optionB: "Leslie Knope",
        optionC: "Lansley Pope",
        optionD: "Lucie Scope",
        correctOption: "optionB"
    },

    {
        question: `In "Brooklyn Nine-Nine", Jake Peralta has a lot of good friends within the precinct, BUT he has one and only BEST Friend. Who is his Fancy Bedste Venner?`,
        optionA: "Captain Jeffords",
        optionB: "Cheddar the Dog",
        optionC: "Charles Boyle",
        optionD: "Stevie Schillens",
        correctOption: "optionC"
    },

    {
        question: `In the hit show "The Mandalorian" how does one become the rightful ruler of Mandalore?`,
        optionA: "By Democratic means!",
        optionB: "Whoever holds the Darksaber rules Mandalore",
        optionC: "Defeating a Mythosaur",
        optionD: "Finding the one true Mandalorian",
        correctOption: "optionB"
    },

    {
        question: `How many seasons did "The Last Man on Earth" have in total?`,
        optionA: "12 Seasons",
        optionB: "1 Season",
        optionC: "4 Seasons",
        optionD: "17 Seasons",
        correctOption: "optionB"
    },

    {
        question: `In "Never Have I Ever" who are Devi Vishwakumar's best friends?`,
        optionA: "Fabiola Torres and Eleanor Wong",
        optionB: "Din Djarin, Bo-Katan Kryze, and Din Grogu",
        optionC: "Winston Bishop, Ron Swanson, and Dexter Morgan",
        optionD: "Amy Santiago and Rosa Diaz",
        correctOption: "optionA"
    },

    {
        question: `In "Dexter" Detective Dexter Morgan has a boat, what is the name of his boat?`,
        optionA: "Ocean Breeze",
        optionB: "Siren's Song",
        optionC: "Narendra Modi",
        optionD: "The Slice of Life",
        correctOption: "optionD"
    },

    {
        question: `What does Phil Tandy Miller fill the kiddy pool with in "The Last Man on Earth?"`,
        optionA: "Sausage Gravy",
        optionB: "Orange Juice",
        optionC: "Margarita Mix and tequila",
        optionD: "Water",
        correctOption: "optionC"
    },

    {
        question: `In "Jane the Virgin" what is the name of Jane Villanueva's telenovela superstar Father?`,
        optionA: "David Zepeda",
        optionB: "Gonzalo Garcia Vivanco",
        optionC: "Fernando Colunga",
        optionD: "Rogelio de la Vega",
        correctOption: "optionD"
    },

    {
        question: `In "Parks and Recreation" where did April Ludgate end up hiding Ron Swanson's extra house key`,
        optionA: "In Councilman Milton's office where the shoeshine stand was moved",
        optionB: "Underneath a large, solid, old tree",
        optionC: "Ron's office",
        optionD: "Leslie's home",
        correctOption: "optionB"
    },

    {
        question: `In "The Office" what is Stanley Hudson's favorite day?`,
        optionA: "Pretzel Day",
        optionB: "Cinco de Mayo",
        optionC: "Fourth of July",
        optionD: "Father's Day",
        correctOption: "optionA"
    },

    {
        question: `In "New Girl" what Powerhouse Superstar is very pinnacle in assisting Jess say "I love you" to Nick?`,
        optionA: "Matty Matheson",
        optionB: "Henry Cavill",
        optionC: "Ryan Reynolds",
        optionD: "PRINCE",
        correctOption: "optionD"
    },


    {
        question: `In "The Mandalorian" what is the line that is repeated and an important part of "The Creed"?`,
        optionA: "This is the way...",
        optionB: "May the force be with you",
        optionC: "That's what she said",
        optionD: "Whoever denied it supplied it",
        correctOption: "optionA"
    },

    {
        question: `In "Brooklyn Nine-Nine?" what does the precinct chant in unison when something positive happens?`,
        optionA: "HOORAH GO TEAM!",
        optionB: "NINE NINE!",
        optionC: "THEY SHALL KNOW NO FEAR!",
        optionD: "UMAI!",
        correctOption: "optionB"
    },

    {
        question: `In "Parks and Recreation" who does Leslie Knope get married to?`,
        optionA: "Lester Knumpf",
        optionB: "Ron Swanson",
        optionC: "Adam Scott",
        optionD: "Ben Wyatt",
        correctOption: "optionD"
    },

    {
        question: "How man states does Nigeria have ?",
        optionA: "24",
        optionB: "30",
        optionC: "36",
        optionD: "37",
        correctOption: "optionC"
    },

    {
        question: "____ is the capital of Nigeria ?",
        optionA: "Abuja",
        optionB: "Lagos",
        optionC: "Calabar",
        optionD: "Kano",
        correctOption: "optionA"
    },

    {
        question: "Los Angeles is also known as ?",
        optionA: "Angels City",
        optionB: "Shining city",
        optionC: "City of Angels",
        optionD: "Lost Angels",
        correctOption: "optionC"
    },

    {
        question: "What is the capital of Germany ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Berlin",
        correctOption: "optionD"
    },

    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "How many planets are currently in the solar system ?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Which Planet is the hottest ?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "How many teeth does an adult human have ?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        optionD: "36",
        correctOption: "optionC"
    }

]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}