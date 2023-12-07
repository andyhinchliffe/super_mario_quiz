

let total = 0;
let qNum =1;
let level = 1;
let qTotal;

import { questionListArray } from "./questions2D.js"

let questionList = questionListArray;


qTotal=questionList[level-1].length;








const question = document.getElementById("question");
const radios = document.querySelectorAll('input[name="answer"]');
const submit = document.getElementById("submitButton");
const start = document.getElementById("startBut");
const displayTotal = document.getElementById("displayTotal");
const displayQNum = document.getElementById("displayQNum");
const totalFigure=document.getElementById("totalFigure");
const resetBtn =document.getElementById("resetBtn");
const resetBtn2 =document.getElementById("resetBtn2");
const questArea = document.getElementById("questionSection");
const finalSection = document.getElementById("finalSection");
const possibleAns1 = document.getElementById("possibleAns1");
const possibleAns2 = document.getElementById("possibleAns2");
const possibleAns3 = document.getElementById("possibleAns3");
const startSection = document.getElementById("startSection");
const levelDisplay =document.getElementById("levelDisplay");
const levelUpBtn = document.getElementById("levelUpBtn");
const levelDownBtn = document.getElementById("levelDownBtn");
const levelDisplay2 =document.getElementById("levelDisplay2");


levelDisplay.innerText="LEVEL "+level;









function displayQ(){
    
    questArea.style.display="block";
    startSection.style.display="none";
    finalSection.style.display="none";
    // question.style.overflow="hidden";
    question.innerText=questionList[level-1][qNum-1].question
    possibleAns1.innerText="a. "+questionList[level-1][qNum-1].answer1
    possibleAns2.innerText="b. "+questionList[level-1][qNum-1].answer2
    possibleAns3.innerText="c. "+questionList[level-1][qNum-1].answer3
    displayQNum.innerText=qNum;
    displayTotal.innerText=qTotal;
    levelDisplay.innerText="LEVEL "+level
    levelDisplay2.innerText="LEVEL "+level
    console.log(qTotal)
}

// function returnToStart (){
    
    
// }


function runTotal (){
    
    questArea.style.display="none";
    finalSection.style.display="block";
    totalFigure.innerText=(100/qTotal)*total+"%";


}

function reset (){
    total = 0;
    qNum =1;
    
    startSection.style.display="block";
    questArea.style.display="none";
    finalSection.style.display="none";
}

function levelUpFunction(){
if (level<3){
    level++
    levelDisplay.innerText="LEVEL "+level
    qTotal=questionList[level-1].length;
    console.log(qTotal);
}

}


function levelDownFunction(){
    if (level>1){
        level--
        levelDisplay.innerText="LEVEL "+level
        qTotal=questionList[level-1].length;
        console.log(qTotal);
    }
    
    }


function checkAnswer(){
    
    let rbtn;
    for (const btn of radios){
    
    if (btn.checked){

        rbtn = btn.value;
        break;
    }
}
    
    
    if (rbtn == questionList[level-1][qNum-1].correctAns){
            total++;
            console.log(total)
        } 

    if (qNum<qTotal){  
        qNum++
        displayQ();  
    }else{runTotal()}   
}

submit.addEventListener("click", checkAnswer);

start.addEventListener("click", displayQ);

resetBtn.addEventListener("click", reset);
resetBtn2.addEventListener("click", reset);

levelUpBtn.addEventListener("click", levelUpFunction);
levelDownBtn.addEventListener("click", levelDownFunction);

