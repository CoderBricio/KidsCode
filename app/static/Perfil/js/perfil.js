/*Ao clicar para sair do perfil, o src da foto de perfil será direcionada para a home page e ter na home page a exata foto que o usuário escolheu na foto de perfil.*/
var bolaX = document.querySelector(".bola_x");
bolaX.addEventListener("click", function(){
    var persistenteSrc = document.querySelector(".foto_perfil").src;
    localStorage.setItem("valueSrc", persistenteSrc);
});


/*Quando a pessoa vinher da home page para o perfil, pegará a foto da homepage e colocara na foto de perfil. Isso é uma forma de salvar as alterações que usuário fizer.*/
var fotoPerfil = document.querySelector(".foto_perfil");
var fotoPerfilSrc = localStorage.getItem("valueSrcPerfil");
switch(fotoPerfilSrc){
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-roxo.png":{
        fotoPerfil.src = "../Perfil/img/astro-roxo.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-azul.png":{
        fotoPerfil.src = "../Perfil/img/astro-azul.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-amare.png":{
        fotoPerfil.src = "../Perfil/img/astro-amare.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-verme.png":{
        fotoPerfil.src = "../Perfil/img/astro-verme.png";
    }break;
    case "file:///C:/KidCode/KidCode/Perfil/img/astro-verde.png":{
        fotoPerfil.src = "../Perfil/img/astro-verde.png";
    }break;
}


//Mostrar e esconder as fotos dos astronautas para o usuário escolher pro perfil.
const bolaCruz = document.querySelector('.bola_cruz'); 
const escolhaFotos = document.querySelector('.escolha_fotos');
bolaCruz.addEventListener("click", function(){
    if(escolhaFotos.style.display === "none"){
        escolhaFotos.style.display = "block";
    }else{
        escolhaFotos.style.display = "none";
    }
})

//Alteração da cor do background-color da div onde está as informações do usuário. A cor será igual a cor do astronauta da foto de perfil
var fotoPerfil = document.querySelector('.foto_perfil');
var infoUsu = document.querySelector(".info_usu");
function alterarCorInfoUsu(fotoPerfil){
    switch(fotoPerfil.src){
        case 'file:///C:/KidCode/KidCode/Perfil/img/astro-azul.png':{
            infoUsu.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 255 +"," + 0.5 +")"; 
        }break;
        case 'file:///C:/KidCode/KidCode/Perfil/img/astro-roxo.png':{
            infoUsu.style.backgroundColor = "rgb(" + 105 + "," + 5 + "," + 179 +"," + 0.5 +")"; 
        }break;
        case 'file:///C:/KidCode/KidCode/Perfil/img/astro-verme.png':{
            infoUsu.style.backgroundColor = "rgb(" + 255 + "," + 0 + "," + 0 +"," + 0.5 +")"; 
        }break;
        case 'file:///C:/KidCode/KidCode/Perfil/img/astro-amare.png':{
            infoUsu.style.backgroundColor = "rgb(" + 255 + "," + 255 + "," + 0 +"," + 0.5 +")"; 
        }break;
        case 'file:///C:/KidCode/KidCode/Perfil/img/astro-verde.png':{
            infoUsu.style.backgroundColor = "rgb(" + 5 + "," + 237 + "," + 0 +"," + 0.5 +")"; 
        }break;
    }    
};
//Trocar foto de perfil
var fotoPerfilSrc;
const astro01 = document.querySelector('#astro01');
astro01.addEventListener('click', function(e){
    e.preventDefault();
    var astro01Src = astro01.src;
    fotoPerfilSrc = fotoPerfil.src;
    fotoPerfil.src = astro01Src;
    astro01.src = fotoPerfilSrc;
    alterarCorInfoUsu(fotoPerfil);
})
const astro02 = document.querySelector('#astro02');
astro02.addEventListener('click', function(e){
    e.preventDefault();
    var astro02Src = astro02.src;
    fotoPerfilSrc = fotoPerfil.src;
    fotoPerfil.src = astro02Src;
    astro02.src = fotoPerfilSrc;
    alterarCorInfoUsu(fotoPerfil);
})
const astro03 = document.querySelector('#astro03');
astro03.addEventListener('click', function(e){
    e.preventDefault();
    var astro03Src = astro03.src;
    fotoPerfilSrc = fotoPerfil.src;
    fotoPerfil.src = astro03Src;
    astro03.src = fotoPerfilSrc;
    alterarCorInfoUsu(fotoPerfil);
})
const astro04 = document.querySelector('#astro04');
astro04.addEventListener('click', function(e){
    e.preventDefault();
    var astro04Src = astro04.src;
    fotoPerfilSrc = fotoPerfil.src;
    fotoPerfil.src = astro04Src;
    astro04.src = fotoPerfilSrc;
    alterarCorInfoUsu(fotoPerfil);
})

//Ao clicar no icone lapís, mostra e esconde o input para mudar nome do usuário        
const lapis = document.querySelector('.lapis'); 
const formPerfil = document.querySelector('.form_perfil');
lapis.addEventListener("click", function (){
    if(formPerfil.style.display === "none"){
        formPerfil.style.display = "block";
    }else{
        formPerfil.style.display = "none";
    }
})

// Alteração do nome de usuário. 
const nomePerfil = document.querySelector('.nome_perfil');
const inputPerfil = document.querySelector('.input_perfil');
formPerfil.addEventListener('submit', function(e){
    e.preventDefault();
    const input = inputPerfil.value;
    nomePerfil.innerText = input;
   });