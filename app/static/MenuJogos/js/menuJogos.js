//Faz a animação do cenario 

function stars(){
    let count = 150;
    let scene = document.querySelector('.scene');
    let i =0;
    while(i < count){
        let star = document.createElement('i');
        let x = Math.floor(Math.random() * window.innerWidth);
        let duration = Math.random() * 1;
        let h = Math.random() * 100;

        star.style.left = x + 'px';
        star.style.width = 1 + 'px';
        star.style.height = 60 + 'px';
        star.style.animationDuration = duration + 's';
        
        scene.appendChild(star);
        i++;
    }
}
stars();

//Código para controlar o foguete com o teclado

var x = 0
var y = 0

window.addEventListener("keydown", function(event){
    var tecla = event.keyCode
    if(tecla == "68"){
        x = x + 10
        document.getElementById("object").style.left=x+"px"
    }
})