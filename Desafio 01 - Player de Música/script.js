let listasMusicas = [
    {
        Titulo: 'Tropa do Mais Novo',
        Banda: 'Chefin',
        src: 'musicas/Chefin - Tropa do Mais Novo ft. Vulgo FK.m4a',
        img: 'img/capa_chefin.jpg'
    },
    {
        Titulo: 'Under The Sun',
        Banda: 'Vintage Culture',
        src: 'musicas/Under The Sun (Vintage Culture Remix).m4a',
        img: 'img/vintage.jpg'
    },
    {
        Titulo: 'Thunderstruck',
        Banda: 'AC/DC',
        src: 'musicas/ACDC - Thunderstruck (Official Video).m4a',
        img: 'img/acdc.jpg'
    },
]

let musica = document.querySelector('audio');
let indexMusica = 0;
let aux = 0;

let duracaoMusica = document.querySelector(".tempo_fim");
let imagem = document.querySelector(".capa");
let nomeMusica = document.querySelector(".nome_da_musica");
let nomeBanda = document.querySelector(".nome_da_banda");

let botaoiniciar = document.querySelector("#botao_iniciar");
let botaoBack = document.querySelector("#botao_back");
let botaoNext = document.querySelector("#botao_next");

renderizarMusica(indexMusica);

botaoiniciar.addEventListener("click", tocarMusica);

musica.addEventListener("timeupdate", atualizarBarra);

botaoBack.addEventListener("click", ()=>{
    indexMusica--;
    if(aux==1){
        botaoiniciar.src = './img/play.png';
        aux = 0;
    }
    if(indexMusica<0){
        indexMusica = 2;
    }
    renderizarMusica(indexMusica);
});

botaoNext.addEventListener("click", ()=>{
    indexMusica++;
    if(aux==1){
        botaoiniciar.src = './img/play.png';
        aux = 0;
    }
    if(indexMusica>2){
        indexMusica = 0;
    }
    renderizarMusica(indexMusica);
});

function renderizarMusica(index){
    musica.setAttribute('src', listasMusicas[index].src);
    musica.addEventListener("loadeddata", () => {
        nomeMusica.textContent = listasMusicas[index].Titulo;
        nomeBanda.textContent = listasMusicas[index].Banda;
        imagem.src = listasMusicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
    });
}

function tocarMusica(){
    if(aux==0){
        musica.play();
        botaoiniciar.src = './img/pause.png';
        aux = 1;
    }else if(aux==1){
        musica.pause();
        botaoiniciar.src = './img/play.png';
        aux = 0;
    }
}

function atualizarBarra(){
    let barra = document.querySelector(".barra_carregamento_comp");
    barra.getElementsByClassName.width = Math.floor((musica.currentTime / musica.duration)*100) + '%';
    let tempoDecorrido = document.querySelector(".tempo_inicio");
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos/60);
    let campoSegundos = segundos % 60;
    if(campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+ ':' +campoSegundos;
}