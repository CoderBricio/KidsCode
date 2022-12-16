let perguntas = [

    {
        titulo: 'O que acontece quando a cobra come a maçã?',
        alternativas: ['Fica maior e mais rápida', 'Fica menor e mais rápida', 'Fica menor e mais lenta', 'Fica maior e mais lenta'],
        correta: 0
    },
    {
         titulo: 'Como fazer para apagar o erro que você cometeu no jogo do desenho?',
         alternativas: ['Com o botão de apagar', 'Mudando para a cor branca', 'Reiniciando a página', ''],
         correta: 1
    },
    {
        titulo: 'Bird',
        alternativas: ['Gato', 'Urubu', 'Pombo', 'Passaro'],
        correta: 3
    }
    
    ]
    
    let app = {
    start: function(){
    
        this.Atualpos = 0;
        this.Totalpontos = 0;
    
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach((element,index)=>{
            element.addEventListener('click', ()=>{
                this.checaResposta(index);
            })
        })
        this.atualizaPontos();
        app.mostraquestao(perguntas[this.Atualpos]);
    },
    
    mostraquestao: function(q){
        this.qatual = q;
        //mostrando titulo
        let titleDiv = document.getElementById('titulo');
        titleDiv.textContent = q.titulo;
    
        //mostrando alternativas 
        let alts = document.querySelectorAll('.alternativa');
        alts.forEach(function(element,index){
            element.textContent = q.alternativas[index];
        })
    
    },
    
    Proximaperg: function(){
        this.Atualpos++;
        if(this.Atualpos == perguntas.length){
            this.Atualpos = 0
        }
    },
    
    checaResposta: function(user){
        if(this.qatual.correta == user){
            console.log("Correta")
            this.Totalpontos++;
            this.mostraresposta();
        }else{
            console.log("Errada")
            this.mostraresposta();
        }
        this.atualizaPontos();
        this.Proximaperg();
        this.mostraquestao(perguntas[this.Atualpos]);
    },
    
    atualizaPontos: function(){
        let scoreDiv = document.getElementById("pontos");
        scoreDiv.textContent = `Sua pontuação é: ${this.Totalpontos}`;
    },
    
    mostraresposta: function(correto){
        let resultDiv = document.getElementById("result");
        let result = ''
        if(correto == true){
            result = 'Resposta Correta!!'
        }else{
            let pergunta = perguntas[this.Atualpos];
            let cindice = pergunta.correta;
            let ctexto = pergunta.alternativas[cindice];
            result = `Incorreto! Resposta correta: ${ctexto}`;
        }
        resultDiv.textContent = result;
    }
    }
    
    app.start();