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