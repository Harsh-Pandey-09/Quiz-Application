document.addEventListener('DOMContentLoaded', () => {

    const startbtn = document.getElementById("start-btn");
    const nextbtn = document.getElementById("next-btn")
    const restartbtn = document.getElementById("restart-btn")
    const questioncontainer = document.getElementById("question-container")
    const questiontext = document.getElementById("question-text");
    const choiceslist = document.getElementById("choices-list");
    const resultcontainer = document.getElementById("result-container");
    const scoredisplay = document.getElementById("score");


    const questions = [

        {
            question: "What is the capital of France?",
            choices: ["Paris", "London", "Berlin", "Madrid"],
            answer: "Paris"
        },
        {
            question: "Which planet is known as the red planet?",
            choices: ["Mars", "Venus", "Jupiter", "Saturn"],
            answer: "Mars"
        },
        {
            question: "Name the National River of India",
            choices: ["Ganga","Yamuna","Sarswati","Bhaghirathi"],
            answer: "Ganga"
        }
    ]

    let currentquestionindex=0;
    let score=0;

    startbtn.addEventListener('click',startquiz)

    nextbtn.addEventListener('click',()=>{
        currentquestionindex++
        if(currentquestionindex< questions.length){
            showquestion();
        }
        else{
            showresult();
        }
    })

    restartbtn.addEventListener('click',() =>{
        currentquestionindex =0
        score=0
        resultcontainer.classList.add('hidden')
        startquiz()
    })
    function startquiz(){
        startbtn.classList.add('hidden')
        resultcontainer.classList.add('hidden')
        questioncontainer.classList.remove('hidden')
        showquestion()
    }

    function showquestion(){
        nextbtn.classList.add('hidden')
        questiontext.textContent=questions[currentquestionindex].question;
        choiceslist.innerHTML="" // clear previous choices
        questions[currentquestionindex].choices.forEach(choice=>{
            const li = document.createElement('li')
            li.classList.add("flex","flex-col","bg-blue-600","text-center","rounded-xl","p-4","hover:bg-blue-900","text-xl")
            li.textContent = choice
            li.addEventListener('click',() => selectanswer(choice))
            choiceslist.appendChild(li);
        });
    }

    function selectanswer(choice){
        const  correctanswer = questions[currentquestionindex].answer
        if(choice === correctanswer){
            score++;
        }
        nextbtn.classList.remove('hidden')
    }

    function showresult(){
        questioncontainer.classList.add('hidden')
        resultcontainer.classList.remove('hidden')
        scoredisplay.textContent=`${score} out of ${questions.length}`
    }
})