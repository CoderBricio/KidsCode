var stage = document.getElementById('stage');
var ctx = stage.getContext("2d");

document.addEventListener("keydown", keyPush)

var maca = new Image();
maca.src = '../static/images/maca1.png';

var fundo = new Image();
fundo.src = '../static/images/terra12.png';

const glupSound = new Audio("../static/sounds/gulp.mp3");
const gameOver = new Audio("../static/sounds/gameover.mp3");
const move = new Audio("../static/sounds/move.mp3");
const musica = new Audio("../static/sounds/musica.mp3");

var over = false;

let velocidade = 150;
let velocidadeLvel = 150;
let level = 0;

const vel = 1;

var vx = 1;
var vy = 0;
var px = 0;
var py = 0;
var tp = 30;
var qp = 20;
var ax = ay = 15;
let score = 0;
let highScore = 0;

var trail = [];
var tail = 5;

function game(){
    
    px += vx;
    py += vy;


    if (px < 0){
        px = qp-1;
    }
    if(px > qp - 1){
        px = 0;
    }
    if(py < 0){
        py = qp-1;
    }
    if(py > qp-1){
        py = 0;
    }


    ctx.drawImage(fundo,0,0, stage.width, stage.height);


    ctx.drawImage(maca,ax*tp, ay*tp, tp, tp);

    ctx.fillStyle = '#FD8087';
    for(var i = 0; i < trail.length; i++){
        ctx.fillRect(trail[i].x*tp, trail[i].y*tp, tp, tp);
        
        

        if(trail[i].x == px && trail[i].y == py){
            over = true;
            vx = 0;
            vy = 0;
            gameOver.play();
            
            tail = 0;
            console.log(over);
            musica.pause();
        }
    }
    
    trail.push({x:px, y:py});



    while(trail.length > tail){
        trail.shift();
    }

    if(ax == px && ay == py){
        tail++;
        ax = Math.floor(Math.random()*qp);
        ay = Math.floor(Math.random()*qp);
        glupSound.play();

        score += 10;
        level += 1;

        if (level % 2 === 0){
            velocidadeLvel -=4;
            velocidadeCobrinha(velocidadeLvel);
        }else{
            velocidadeCobrinha(velocidadeLvel)
        }
        console.log(velocidadeLvel)
    }

    stage.addEventListener('mousedown', () =>{
        if(over){
            resetGame();
        }
    })

    if(over){
        displayMessage("Game Over"); 
        musica.pause();
    }

    /* ctx.fillStyle = "rgb(0,255,0)";
    ctx.font = "25px New Tegomin";
    ctx.fillText("Score: " + score, 20, 30); */


    scoreBox.innerHTML = "Score: " + score;
    if(score > highScore){
        highScore = score;
        hiscoreBox.innerHTML = "HiScore: " + score;
    };
} 


function keyPush(event){

    if(over){
        return;
    }
    
    switch(event.keyCode){

        case 37: //Esquerda
            vx = -vel;
            vy = 0;
            move.play();
            break;

        case 38: //Cima
            vx = 0;
            vy = -vel;
            move.play();
            break;

        case 39: //Direita
            vx = vel;
            vy = 0;
            move.play();
            break;

        case 40: //Baixo
            vx = 0;
            vy = vel;
            move.play();
            break;

        default:
            break;

    }
}


function velocidadeCobrinha(velocity){
    clearInterval(jogo);
    jogo = setInterval(game, velocity)

}


function displayMessage(message){
    
    ctx.fillStyle = "rgb(0,255,0)"
    ctx.font = "50px sans-serif";
    ctx.fillText(message, 170, 300);

    ctx.font = "25px sans-serif";
    ctx.fillText("Click to continue", 210, 340)
}

function resetGame(){
    vx = 1;
    vy = 0;
    px = 0;
    py = 0;

    tail = 5;
    over = false;
    clearInterval(jogo)
    jogo = setInterval(game, 150);
    velocidadeLvel = 150;
    score = 0;

}


let jogo = setInterval(game, 150);