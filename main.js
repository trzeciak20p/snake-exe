const main = document.getElementById("main")
const score_counter = document.getElementById("score_counter")
const best_score = document.getElementById("score_best")

//poruszanie
document.addEventListener("keydown", function (event) {         
    if (event.keyCode >= 37 && event.keyCode <=40) {          //blokowanie jeżdżenia po stronie strzałkami
        event.preventDefault()
    }
}

function start_game(){

    
}

function main(){
    
    best_score.innerText = 


    start_game()
 
    return;
}

main()
