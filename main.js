const main = document.getElementById("main")
const score_length = document.querySelector("#score_lenght span")
const best_score = document.querySelector("#score_best span")

const cols = 20
const rows = 20
//importing best score
let now_best_score
if (localStorage.getItem('best_score')) {
    now_best_score = JSON.parse(localStorage.getItem('best_score'));
}else{
    now_best_score = 0
}

function start_game(){

    
}

function main_start(){
    
    best_score.innerText = now_best_score
    

    //tiles creating
    for(i = 0; i < rows; i++){
        
        for(j = 0; j < cols;j++){
            tile = document.createElement("DIV")
            if(i%2){
                if(j%2){
                    tile.setAttribute("class", "tile tile1")
                }else{
                    tile.setAttribute("class", "tile tile2")
                }
            }else{
                if(j%2){
                    tile.setAttribute("class", "tile tile2")
                }else{
                    tile.setAttribute("class", "tile tile1")
                }
            }
            main.append(tile)
        }
    }

    start_game()
 
    return;
}

main_start()