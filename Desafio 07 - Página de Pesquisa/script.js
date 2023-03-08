const cards = [
    {
        Img: 'img_card-1.png',
        Titulo: 'O Python do vovô não sobe mais',
        Descricao: 'Amet minum molit non deserunt ullamco est sit aliqua dolor do amet sint.',
        Cidade: 'São Paulo - SP'
    },
    {
        Img: 'img_card-2.png',
        Titulo: 'Todo mundo null',
        Descricao: 'Amet minum molit non deserunt ullamco est sit aliqua dolor do amet sint.',
        Cidade: 'Florianópolis - SC'
    },
    {
        Img: 'img_card-3.png',
        Titulo: 'Hoje dou exception',
        Descricao: 'Amet minum molit non deserunt ullamco est sit aliqua dolor do amet sint.',
        Cidade: 'Curitiba - PR'
    },
    {
        Img: 'img_card-4.png',
        Titulo: 'Manda Node',
        Descricao: 'Amet minum molit non deserunt ullamco est sit aliqua dolor do amet sint.',
        Cidade: 'Salvador - BA'
    },
    {
        Img: 'img_card-5.png',
        Titulo: 'Só no back-end',
        Descricao: 'Amet minum molit non deserunt ullamco est sit aliqua dolor do amet sint.',
        Cidade: 'São Paulo - SP'
    },
    {
        Img: 'img_card-6.png',
        Titulo: 'Esse anel não é de Ruby',
        Descricao: 'Amet minum molit non deserunt ullamco est sit aliqua dolor do amet sint.',
        Cidade: 'São Paulo - SP'
    },
    {
        Img: 'img_card-7.png',
        Titulo: 'Pimenta no C# dos outros é refresco',
        Descricao: 'Amet minum molit non deserunt ullamco est sit aliqua dolor do amet sint.',
        Cidade: 'Rio de Janeiro - RJ'
    },
    {
        Img: 'img_card-8.png',
        Titulo: 'EnCACHE aqui',
        Descricao: 'Amet minum molit non deserunt ullamco est sit aliqua dolor do amet sint.',
        Cidade: 'Porto Alegre - RS'
    },
    {
        Img: 'img_card-9.png',
        Titulo: 'Não valho nada mas JAVA li',
        Descricao: 'Amet minum molit non deserunt ullamco est sit aliqua dolor do amet sint.',
        Cidade: 'São Paulo - SP'
    }
];

let corpo = document.querySelector("#bloco_cards");
let botaoBusca = document.querySelector("#btn_busca");
let botaoLista = document.querySelector("#btnLista");
let botaoMapa = document.querySelector("#btnMapa");


function criarCard(card){
    let divMaior = document.createElement("div");
    divMaior.classList.add("card");
    corpo.appendChild(divMaior);

    let imagem = document.createElement("img");
    imagem.src = `./img/${card.Img}`;
    divMaior.appendChild(imagem);

    let divMedia = document.createElement("div");
    divMedia.classList.add("card_text");
    divMaior.appendChild(divMedia);

    let titulo = document.createElement("h3");
    titulo.textContent = card.Titulo;
    divMedia.appendChild(titulo);

    let subTitulo = document.createElement("p");
    subTitulo.textContent = card.Descricao;
    divMedia.appendChild(subTitulo);

    let divMenor = document.createElement("div");
    divMedia.appendChild(divMenor);

    let icone = document.createElement("i");
    icone.classList.add("ph");
    icone.classList.add("ph-map-pin");
    divMenor.appendChild(icone);

    let cidade = document.createElement("p");
    cidade.textContent = card.Cidade;
    divMenor.appendChild(cidade);
}

function carregarPagina(cards){
    for (const n of cards) {
        criarCard(n);
    }
}

function pesquisando(){
    corpo.innerHTML = " ";

    let campoEstado = document.querySelector("#selecaoEstado").value;

    if(campoEstado==0){
        let valorPesquisado = document.querySelector("#campoTextoPesquisa").value;
    
        let pesquisaConcluida = cards.filter((valorAtual)=>{
            return valorAtual.Titulo.toLowerCase().includes(`${valorPesquisado.toLowerCase()}`);
        });
    
        carregarPagina(pesquisaConcluida);
    }else {
        let pesquisaConcluida = cards.filter((valorAtual)=>{
            return valorAtual.Cidade.toLowerCase().includes(`${campoEstado.toLowerCase()}`);
        });
    
        carregarPagina(pesquisaConcluida);
    }

}

carregarPagina(cards);

botaoBusca.addEventListener("click", pesquisando);
botaoLista.addEventListener("click", ()=>{
    if(botaoLista.classList.value!='focado'){
        botaoLista.classList.remove("desfocado");
        botaoLista.classList.add("focado");
        botaoMapa.classList.add("desfocado");
    }
});

botaoMapa.addEventListener("click", ()=>{
    if(botaoMapa.classList.value!='focado'){
        botaoMapa.classList.remove("desfocado");
        botaoMapa.classList.add("focado");
        botaoLista.classList.add("desfocado");
    }
});
