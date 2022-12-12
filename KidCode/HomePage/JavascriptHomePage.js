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
