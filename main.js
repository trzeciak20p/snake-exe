const main = document.getElementById("main")
const score_counter = document.getElementById("score_counter")
const best_score = document.getElementById("score_best")

const cols = 20
const rows = 20



function start_game(){

    
}

function main_start(){
    
    //best_score.innerText = 

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