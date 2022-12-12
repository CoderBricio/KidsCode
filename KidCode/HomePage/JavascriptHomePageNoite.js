//Fazendo o mesmo que fiz na home page dia, mas não estou conseguindo transportar o src da foto para cá. ;-;
var imgY = document.querySelector(".imgY");
var fotoPerfilHomeNoiteSrc = localStorage.getItem("valueSrcNoite");
console.log(fotoPerfilHomeNoiteSrc);
switch(fotoPerfilHomeNoiteSrc){
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-roxo.png":{
        imgY.src = "../Perfil/img/astro-roxo.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-azul.png":{
        imgY.src = "../Perfil/img/astro-azul.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-amare.png":{
        imgY.src = "../Perfil/img/astro-amare.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-verme.png":{
        imgY.src = "../Perfil/img/astro-verme.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-verde.png":{
        imgY.src = "../Perfil/img/astro-verde.png";
    }break;
}