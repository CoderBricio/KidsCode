/*Ao clicar para sair do perfil, o src da foto de perfil será direcionada para a home page e ter na home page a exata foto que o usuário escolheu na foto de perfil.*/
var bolaX = document.querySelector(".bola_x");
bolaX.addEventListener("click", function(){
    var persistenteSrc = document.querySelector(".foto_perfil").src;
    localStorage.setItem("valueSrc", persistenteSrc);
});

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

//Alteração" da cor do background-color da div onde está as informações do usuário. A cor será igual a cor do astronauta da foto de perfil
var fotoPerfil = document.querySelector('.foto_perfil');
var infoUsu = document.querySelector(".info_usu");
function alterarCorInfoUsu(fotoPerfil){
    switch(fotoPerfil.src){
        case 'http://127.0.0.1:5000/static/Perfil/images/astro-azul.png':{
            infoUsu.style.backgroundColor = "rgb(" + 0 + "," + 0 + "," + 255 +"," + 0.5 +")"; 
        }break;
        case 'http://127.0.0.1:5000/static/Perfil/images/astro-roxo.png':{
            infoUsu.style.backgroundColor = "rgb(" + 105 + "," + 5 + "," + 179 +"," + 0.5 +")"; 
        }break;
        case 'http://127.0.0.1:5000/static/Perfil/images/astro-verme.png':{ 
            infoUsu.style.backgroundColor = "rgb(" + 255 + "," + 0 + "," + 0 +"," + 0.5 +")"; 
        }break;
        case 'http://127.0.0.1:5000/static/Perfil/images/astro-amare.png':{
            infoUsu.style.backgroundColor = "rgb(" + 255 + "," + 255 + "," + 0 +"," + 0.5 +")"; 
        }break;
        case 'http://127.0.0.1:5000/static/Perfil/images/astro-verde.png':{
            infoUsu.style.backgroundColor = "rgb(" + 5 + "," + 237 + "," + 0 +"," + 0.5 +")"; 
        }break;
    }    
};



/*Quando a pessoa vinher da home page para o perfil, pegará a foto da homepage e colocara na foto de perfil. Isso é uma forma de salvar as alterações que usuário fizer.*/
var fotoPerfil = document.querySelector(".foto_perfil");
var fotoPerfilSrc = localStorage.getItem("valueSrcPerfil");
switch(fotoPerfilSrc){
    case "http://127.0.0.1:5000/static/Perfil/images/astro-roxo.png":{
        fotoPerfil.src = "../../static/Perfil/images/astro-roxo.png";
    }break;
    case "http://127.0.0.1:5000/static/Perfil/images/astro-azul.png":{
        fotoPerfil.src = "../../static/Perfil/images/astro-azul.png";
        astro02.src = "../../static/Perfil/images/astro-roxo.png"
        alterarCorInfoUsu(fotoPerfil);
    }break;
    case "http://127.0.0.1:5000/static/Perfil/images/astro-amare.png":{
        fotoPerfil.src = "../../static/Perfil/images/astro-amare.png";
        astro01.src = "../../static/Perfil/images/astro-roxo.png"
        alterarCorInfoUsu(fotoPerfil);
    }break;
    case "http://127.0.0.1:5000/static/Perfil/images/astro-verme.png":{
        fotoPerfil.src = "../../static/Perfil/images/astro-verme.png";
        astro04.src = "../../static/Perfil/images/astro-roxo.png"
        alterarCorInfoUsu(fotoPerfil);
    }break;
    case "http://127.0.0.1:5000/static/Perfil/images/astro-verde.png":{
        fotoPerfil.src = "../../static/Perfil/images/astro-verde.png";
        astro03.src = "../../static/Perfil/images/astro-roxo.png"
        alterarCorInfoUsu(fotoPerfil);
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
