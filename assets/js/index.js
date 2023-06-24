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
        question: `In "New Girl" what Powerhouse Superstar is very important in assisting Jess say "I love you" to Nick?`,
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
        question: `"Boy have you lost your mind, 'cause I'll help ya find it!" is an iconic line said to which character by Stanley Hudson`,
        optionA: "Jim Halpert",
        optionB: "Kelly Kapoor",
        optionC: "Ryan Howard",
        optionD: "Bob Vance",
        correctOption: "optionC"
    },

    {
        question: `In the hit show "Dexter" who is considered to be Dexter's best friend?`,
        optionA: "Angel Batista",
        optionB: "Deedee",
        optionC: "Miguel Prado",
        optionD: "Mr. Hartwell",
        correctOption: "optionA"
    },

    {
        question: `"Me want food!!" was a line that this character leaned into when fans noticed her sudden change of appearance on the show "30 Rock"`,
        optionA: "Elizabeth Lemon",
        optionB: "Cecilia Parekh",
        optionC: "Jenna Maroney",
        optionD: "Moira Rose",
        correctOption: "optionC"
    },

    {
        question: `What is the name of David and Patrick's general store from the show "Schitt's Creek"?`,
        optionA: "Rosebud Apothecary",
        optionB: "Dave and Patty's",
        optionC: "Elmdale General",
        optionD: "Rose Apothecary",
        correctOption: "optionD"
    },

    {
        question: `Who are Devi's main two love interests in the first two seasons of the show "Never Have I Ever"?`,
        optionA: "Paxton Hall-Yoshida",
        optionB: "Eleanor Wong",
        optionC: "Ben Gross",
        optionD: "A and C",
        correctOption: "optionD"
    },

    {
        question: `In "Jane the Virgin" who's child is Jane actually pregnant with?`,
        optionA: "Michael Cordero",
        optionB: "Roman Zazo",
        optionC: "Rafael Solano",
        optionD: "Adam Alvaro",
        correctOption: "optionC"
    },

    {
        question: `In the show "Schitt's Creek", what town does Johnny Rose purchase for his son as a joke?`,
        optionA: "Elmdale",
        optionB: "Schitt's Creek",
        optionC: "Springfield",
        optionD: "Rosetown",
        correctOption: "optionB"
    },

    {
        question: `In the show "Superstore" which two characters have their children on the same day in separate hospitals?`,
        optionA: "Cheyenne and Dina",
        optionB: "Amy and Dina",
        optionC: "Amy and Cheyenne",
        optionD: "Gerusha and Cheyenne",
        correctOption: "optionB"
    },

    {
        question: `In the hit show "New Girl" after Jess and her three roomates get back her things from her now ex-boyfriend Spencer, what does Jessica Day say?`,
        optionA: "Sayonara, Sammy...",
        optionB: "You better watch it!",
        optionC: "Suck it Mr. Krabs",
        optionD: "Not today, Loser",
        correctOption: "optionC"
    },

    {
        question: `In the show "30 Rock" where is Kenneth Parcell from?`,
        optionA: "Stone Mountain Georgia",
        optionB: "New York, New York",
        optionC: "Plano, Texas",
        optionD: "Colorado Springs, Colorado",
        correctOption: "optionA"
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

document.getElementById("option-one")
.addEventListener("click", 
function () {
    let countingDown = document.getElementsByClassName("digits");

    if (countingDown.length < 1) {  
    var counter = {
        square: txt => {
        let cell = document.createElement("div");
        cell.className = `cell ${txt}`;
        cell.innerHTML = `<div class="digits">0</div>
        <div class="text">${txt}</div>`;
        return cell;
    }
    ,

    attach: instance => {
    instance.target.className = "countdown";
    if (instance.remain >= 60) {
    instance.target.appendChild(counter.square("mins"));
    instance.mins = instance.target.querySelector(".mins .digits");
    }
    instance.target.appendChild(counter.square("secs"));
    instance.secs = instance.target.querySelector(".secs .digits");

    instance.timer = setInterval(() => {counter.ticker(instance);}, 1000);
    },

    ticker: instance => {
    instance.remain--;
        if (instance.remain <= 0) { clearInterval(instance.timer); instance.remain=0; 
            if (typeof instance.after=="function" ) {
                instance.after();
            } 
        }     
        let secs=instance.remain; 

        let mins=Math.floor(secs / 60); 
        secs -=mins * 60; instance.secs.innerHTML=secs; 
        
        if (instance.mins !==undefined) {
            instance.mins.innerHTML=mins;
            } 
        }, 

    toSecs: till=> {
        till = Math.floor(till / 1000);
        let remain = till - Math.floor(Date.now() / 1000);
        return remain < 0 ? 0 : remain; } }; 
            counter.attach({
                target: document.getElementById("demo"),
                remain: 180,
                after: () => {alert("Time is up!!");} }); 
            } else if (countingDown.length > 0) {
                
            }
        });

document.getElementById("option-two")
.addEventListener("click", 
function () {
    let countingDown = document.getElementsByClassName("digits");

    if (countingDown.length < 1) {  
    var counter = {
        square: txt => {
        let cell = document.createElement("div");
        cell.className = `cell ${txt}`;
        cell.innerHTML = `<div class="digits">0</div>
        <div class="text">${txt}</div>`;
        return cell;
    }
    ,

    attach: instance => {
    instance.target.className = "countdown";
    if (instance.remain >= 60) {
    instance.target.appendChild(counter.square("mins"));
    instance.mins = instance.target.querySelector(".mins .digits");
    }
    instance.target.appendChild(counter.square("secs"));
    instance.secs = instance.target.querySelector(".secs .digits");

    instance.timer = setInterval(() => {counter.ticker(instance);}, 1000);
    },

    ticker: instance => {
    instance.remain--;
        if (instance.remain <= 0) { clearInterval(instance.timer); instance.remain=0; 
            if (typeof instance.after=="function" ) {
                instance.after();
            } 
        }     
        let secs=instance.remain; 

        let mins=Math.floor(secs / 60); 
        secs -=mins * 60; instance.secs.innerHTML=secs; 
        
        if (instance.mins !==undefined) {
            instance.mins.innerHTML=mins;
            } 
        }, 

    toSecs: till=> {
        till = Math.floor(till / 1000);
        let remain = till - Math.floor(Date.now() / 1000);
        return remain < 0 ? 0 : remain; } }; 
            counter.attach({
                target: document.getElementById("demo"),
                remain: 180,
                after: () => {alert("Time is up!!");} }); 
            } else if (countingDown.length > 0) {
                
            }
        });

document.getElementById("option-three")
.addEventListener("click", 
function () {
    let countingDown = document.getElementsByClassName("digits");

    if (countingDown.length < 1) {  
    var counter = {
        square: txt => {
        let cell = document.createElement("div");
        cell.className = `cell ${txt}`;
        cell.innerHTML = `<div class="digits">0</div>
        <div class="text">${txt}</div>`;
        return cell;
    }
    ,

    attach: instance => {
    instance.target.className = "countdown";
    if (instance.remain >= 60) {
    instance.target.appendChild(counter.square("mins"));
    instance.mins = instance.target.querySelector(".mins .digits");
    }
    instance.target.appendChild(counter.square("secs"));
    instance.secs = instance.target.querySelector(".secs .digits");

    instance.timer = setInterval(() => {counter.ticker(instance);}, 1000);
    },

    ticker: instance => {
    instance.remain--;
        if (instance.remain <= 0) { clearInterval(instance.timer); instance.remain=0; 
            if (typeof instance.after=="function" ) {
                instance.after();
            } 
        }     
        let secs=instance.remain; 

        let mins=Math.floor(secs / 60); 
        secs -=mins * 60; instance.secs.innerHTML=secs; 
        
        if (instance.mins !==undefined) {
            instance.mins.innerHTML=mins;
            } 
        }, 

    toSecs: till=> {
        till = Math.floor(till / 1000);
        let remain = till - Math.floor(Date.now() / 1000);
        return remain < 0 ? 0 : remain; } }; 
            counter.attach({
                target: document.getElementById("demo"),
                remain: 180,
                after: () => {alert("Time is up!!");} }); 
            } else if (countingDown.length > 0) {
                
            }
        });

document.getElementById("option-four")
.addEventListener("click", 
function () {
    let countingDown = document.getElementsByClassName("digits");

    if (countingDown.length < 1) {  
    var counter = {
        square: txt => {
        let cell = document.createElement("div");
        cell.className = `cell ${txt}`;
        cell.innerHTML = `<div class="digits">0</div>
        <div class="text">${txt}</div>`;
        return cell;
    }
    ,

    attach: instance => {
    instance.target.className = "countdown";
    if (instance.remain >= 60) {
    instance.target.appendChild(counter.square("mins"));
    instance.mins = instance.target.querySelector(".mins .digits");
    }
    instance.target.appendChild(counter.square("secs"));
    instance.secs = instance.target.querySelector(".secs .digits");

    instance.timer = setInterval(() => {counter.ticker(instance);}, 1000);
    },

    ticker: instance => {
    instance.remain--;
        if (instance.remain <= 0) { clearInterval(instance.timer); instance.remain=0; 
            if (typeof instance.after=="function" ) {
                instance.after();
            } 
        }     
        let secs=instance.remain; 

        let mins=Math.floor(secs / 60); 
        secs -=mins * 60; instance.secs.innerHTML=secs; 
        
        if (instance.mins !==undefined) {
            instance.mins.innerHTML=mins;
            } 
        }, 

    toSecs: till=> {
        till = Math.floor(till / 1000);
        let remain = till - Math.floor(Date.now() / 1000);
        return remain < 0 ? 0 : remain; } }; 
            counter.attach({
                target: document.getElementById("demo"),
                remain: 180,
                after: () => {alert("Time is up!!");} }); 
            } else if (countingDown.length > 0) {
                
            }
        });