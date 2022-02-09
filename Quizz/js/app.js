/*const radioButtons = document.querySelectorAll('input[name="name"]');
let response = [true];
function checker (response){
    if(true.checked){
        
    }
}
checker()

document.getElementsByClassName(true);

for (let i = 0; i < response.length; i++) {
    
}
let tb = [i];

*/

const button = document.getElementById("button");
let goodAnswer = document.getElementsByClassName("goodAnswer");
let article = document.getElementsByClassName("article");


button.addEventListener('click', function() {
    let goodAnswer = 0;
    let wrongAnswer = 0;
    let allAnswers = goodAnswer + wrongAnswer;
    for (let i = 0; i < goodAnswer.length; i++) {
        if(goodAnswer[i].checked){
            article[i].style.background = "green";
            goodAnswer++;
        }
        else{
            article[i].style.background = "red";
            wrongAnswer++;
        }
    }
    //Display how much wrong answer rest to done when button is clicked
    const wrong_id = document.getElementById("emoji");
    wrong_id.textContent = "👀 Il reste quelques erreurs 😭";

    //Display the sentence when button is clicked
    const edit_p = document.getElementById("edit_p");
    edit_p.textContent = "Retentez une autre réponse dans les cases rouges, puis re-validez !"; 

    const score = document.getElementById("score");
    score = score.textContent = wrongAnswer + "/" + allAnswers;

});





