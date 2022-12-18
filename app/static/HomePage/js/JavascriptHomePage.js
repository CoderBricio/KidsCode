/*O src da foto de perfil da página do perfil é evocada e usada na imagem da home page*/
var imgX = document.querySelector(".imgX");
var fotoPerfilHomeSrc = localStorage.getItem("valueSrc");
switch(fotoPerfilHomeSrc){
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-roxo.png":{
        imgX.src = "../Perfil/img/astro-roxo.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-azul.png":{
        imgX.src = "../Perfil/img/astro-azul.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-amare.png":{
        imgX.src = "../Perfil/img/astro-amare.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-verme.png":{
        imgX.src = "../Perfil/img/astro-verme.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-verde.png":{
        imgX.src = "../Perfil/img/astro-verde.png";
    }break;
}

/*Ao clicar no astronauta, pegará a src da foto da home page e transportará para a página de perfil. Isso é uma forma de salvar as alterações do usuário na pagina de perfil*/
var rotaPerfil01 = document.querySelector(".rota_perfil01");
rotaPerfil01.addEventListener("click", function(){
    var persistenteSrcPerfil = imgX.src;
    localStorage.setItem("valueSrcPerfil", persistenteSrcPerfil);
});

/*O src da foto de perfil da página do perfil é evocada e usada na imagem da home page*/
var imgX = document.querySelector(".imgX");
var fotoPerfilHomeSrc = localStorage.getItem("valueSrc");
switch(fotoPerfilHomeSrc){
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-roxo.png":{
        imgX.src = "../Perfil/img/astro-roxo.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-azul.png":{
        imgX.src = "../Perfil/img/astro-azul.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-amare.png":{
        imgX.src = "../Perfil/img/astro-amare.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-verme.png":{
        imgX.src = "../Perfil/img/astro-verme.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-verde.png":{
        imgX.src = "../Perfil/img/astro-verde.png";
    }break;
}

/*Ao clicar no astronauta, pegará a src da foto da home page e transportará para a página de perfil. Isso é uma forma de salvar as alterações do usuário na pagina de perfil*/
var rotaPerfil01 = document.querySelector(".rota_perfil01");
rotaPerfil01.addEventListener("click", function(){
    var persistenteSrcPerfil = imgX.src;
    localStorage.setItem("valueSrcPerfil", persistenteSrcPerfil);
});

/*Carrossel*/

const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");
let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
const showHideIcons = () => {
   // mostrando e ocultando o ícone anterior/próximo de acordo com o valor esquerdo da rolagem do carrossel
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // obtendo a largura máxima de rolagem
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}
arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // obtendo a largura da primeira imagem e adicionando 14 valores de margem
        // se o ícone clicado for deixado, reduza o valor da largura da rolagem do carrossel para a esquerda, caso contrário, adicione a ele
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // chamando showHideIcons após 60ms
    });
});
const autoSlide = () => {
// se não houver imagem restante para rolar, retorne daqui
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;
    positionDiff = Math.abs(positionDiff); // tornando o valor positionDiff positivo
    let firstImgWidth = firstImg.clientWidth + 14;
// obtendo o valor da diferença que precisa somar ou reduzir do carrossel para a esquerda para pegar o meio img center    let valDifference = firstImgWidth - positionDiff;
    if(carousel.scrollLeft > prevScrollLeft) {  // se o usuário está rolando para a direita
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    } 
// se o usuário está rolando para a esquerda
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}
const dragStart = (e) => {
   // atualizando o valor das variáveis ​​globais no evento mouse down
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
// rolando as imagens/carrossel para a esquerda de acordo com o ponteiro do mouse    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}