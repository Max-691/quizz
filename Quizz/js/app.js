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
    for (let i = 0; i < goodAnswer.length; i++) {
        if(goodAnswer[i].checked){
            article[i].style.background = "green";
        }
        else{
            article[i].style.background = "red";
        }
    }
});




