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

//Trocar foto de perfil
const fotoPerfil = document.querySelector('.foto_perfil');

const astro01 = document.querySelector('#astro01');
astro01.addEventListener('click', function(e){
    e.preventDefault();
    var astro01Src = astro01.src;
    var fotoPerfilSrc = fotoPerfil.src;
    fotoPerfil.src = astro01Src;
    astro01.src = fotoPerfilSrc;
})
const astro02 = document.querySelector('#astro02');
astro02.addEventListener('click', function(e){
    e.preventDefault();
    var astro02Src = astro02.src;
    var fotoPerfilSrc = fotoPerfil.src;
    fotoPerfil.src = astro02Src;
    astro02.src = fotoPerfilSrc;
})
const astro03 = document.querySelector('#astro03');
astro03.addEventListener('click', function(e){
    e.preventDefault();
    var astro03Src = astro03.src;
    var fotoPerfilSrc = fotoPerfil.src;
    fotoPerfil.src = astro03Src;
    astro03.src = fotoPerfilSrc;
})
const astro04 = document.querySelector('#astro04');
astro04.addEventListener('click', function(e){
    e.preventDefault();
    var astro04Src = astro04.src;
    var fotoPerfilSrc = fotoPerfil.src;
    fotoPerfil.src = astro04Src;
    astro04.src = fotoPerfilSrc;
})

// Alteração do nome de usuário. 
const nomePerfil = document.querySelector('.nome_perfil');
const inputPerfil = document.querySelector('.input_perfil');
formPerfil.addEventListener('submit', function(e){
    e.preventDefault();
    const input = inputPerfil.value;
    nomePerfil.innerText = input;
   });