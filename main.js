const main = document.getElementById("main")
const score_length = document.querySelector("#score_lenght span")
const best_score = document.querySelector("#score_best span")
//QoL
const cols = 20
const rows = 20
const tile_size = 35
//importing best score
let now_best_score
if (localStorage.getItem('best_score')) {
    now_best_score = JSON.parse(localStorage.getItem('best_score'));
}else{
    now_best_score = 0
}

let pen = main.getContext("2d")
function makeTiles(){
    for(i = 0; i < cols; i++){
        for(j = 0; j < rows; j++){
            if(i%2){
                if(j%2){        //tiles collors like checkerboard
                    pen.fillStyle = "#999"
                }else{
                    pen.fillStyle = "#666"
                }
            }else{
                if(j%2){
                    pen.fillStyle = "#666"
                }else{
                    pen.fillStyle = "#999"
                }
            }
            pen.fillRect(i * tile_size, j * tile_size , i * tile_size + tile_size, j * tile_size + tile_size)

        }
    }

    return;
}

function startNewGame(){

    return;
}

//on
makeTiles()
best_score.innerText = now_best_score
    

    

startNewGame()
 


