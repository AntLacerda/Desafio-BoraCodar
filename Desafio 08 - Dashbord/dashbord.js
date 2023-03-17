function porDiaria(valorTotal, valorDiario){
    return Math.ceil((valorDiario*100)/valorTotal);
}

function valorAltura(porcentagemDiaria){
    return Math.ceil((porcentagemDiaria*30)/100);
}

function maior(array){
    let maiorValor = array[2];
    for(let k=2;k<9;k++) {
        if(array[k]>maiorValor){
            maiorValor = array[k];
        }
    }
    return maiorValor;
}

function menor(array){
    let menorValor1 = array[2];
    for(let k=2;k<9;k++) {
        if(array[k]<menorValor1){
            menorValor1 = array[k];
        }
    }
    return menorValor1;
}

function valAlcancado(vendasTotais, valorDaCompra, valorEsperado){
    let campoAlcan = document.querySelector("#alcancado");
    campoAlcan.textContent = `R$ ${(vendasTotais*valorDaCompra)}`;
    let porMetaMensal = (((vendasTotais*valorDaCompra)*100)/valorEsperado);
    let campoPorMetaMensal = document.querySelector("#porMetaMensal");
    campoPorMetaMensal.textContent = `${porMetaMensal}%`;

    let campVendasFechadas = document.querySelector("#vendasAlcancadas");
    campVendasFechadas.textContent = vendasTotais;
}


function carregarValor(){
    let valores = JSON.stringify(localStorage.getItem("VALOR"));
    valores = valores.slice(1);
    valores = valores.substring(0, valores.length - 1);
    valores = valores.split(",");
    
    console.log(valores);

    let valorPorVendas = Number(valores[0]);
    let metaVendasEsperadas = Number(valores[1]);

    let campoVendasEsperadas = document.querySelector("#vendasEsperadas");
    campoVendasEsperadas.textContent = metaVendasEsperadas;

    
    let esperado = valorPorVendas * metaVendasEsperadas;
    let campoEsperado = document.querySelector("#esperado");
    campoEsperado.textContent = `R$ ${esperado}`;
    
    let qtVendasSeg = Number(valores[2]);
    let qtVendasTer = Number(valores[3]);
    let qtVendasQua = Number(valores[4]);
    let qtVendasQui = Number(valores[5]);
    let qtVendasSex = Number(valores[6]);
    let qtVendasSab = Number(valores[7]);
    let qtVendasDom = Number(valores[8]);
    
    let maiorValor = maior(valores);
    let menorValor = menor(valores);
    
    let maiorDiaVendas = document.querySelector("#diaMaiorVenda");
    let menorDiaVendas = document.querySelector("#diaMenorVenda");
    
    if(qtVendasSeg==maiorValor){
        maiorDiaVendas.textContent = "Segunda-Feira";
    }else if(qtVendasTer==maiorValor){
        maiorDiaVendas.textContent = "Terça-Feira";
    }else if(qtVendasQua==maiorValor){
        maiorDiaVendas.textContent = "Quarta-Feira";
    }else if(qtVendasQui==maiorValor){
        maiorDiaVendas.textContent = "Quinta-Feira";
    }else if(qtVendasSex==maiorValor){
        maiorDiaVendas.textContent = "Sexta-Feira";
    }else if(qtVendasSab==maiorValor){
        maiorDiaVendas.textContent = "Sábado";
    }else if(qtVendasDom==maiorValor){
        maiorDiaVendas.textContent = "Domingo";
    }
    
    if(qtVendasSeg==menorValor){
        menorDiaVendas.textContent = "Segunda-Feira";
    }else if(qtVendasTer==menorValor){
        menorDiaVendas.textContent = "Terça-Feira";
    }else if(qtVendasQua==menorValor){
        menorDiaVendas.textContent = "Quarta-Feira";
    }else if(qtVendasQui==menorValor){
        menorDiaVendas.textContent = "Quinta-Feira";
    }else if(qtVendasSex==menorValor){
        menorDiaVendas.textContent = "Sexta-Feira";
    }else if(qtVendasSab==menorValor){
        menorDiaVendas.textContent = "Sábado";
    }else if(qtVendasDom==menorValor){
        menorDiaVendas.textContent = "Domingo";
    }
    
    let vendasTotais = 0;
    for(let k=2;k<9;k++) {
        vendasTotais = vendasTotais + Number(valores[k]);
    }
    
    let perSeg = porDiaria(vendasTotais, qtVendasSeg);
    let altSeg = valorAltura(perSeg);
    let seg = document.querySelector("#seg");
    seg.style.height = `${altSeg}rem`;
    
    let perTer = porDiaria(vendasTotais, qtVendasTer);
    let altTer = valorAltura(perTer);
    let ter = document.querySelector("#ter");
    ter.style.height = `${altTer}rem`;
    
    let perQua = porDiaria(vendasTotais, qtVendasQua);
    let altQua = valorAltura(perQua);
    let qua = document.querySelector("#qua");
    qua.style.height = `${altQua}rem`;
    
    let perQui = porDiaria(vendasTotais, qtVendasQui);
    let altQui = valorAltura(perQui);
    let qui = document.querySelector("#qui");
    qui.style.height = `${altQui}rem`;
    
    let perSex = porDiaria(vendasTotais, qtVendasSex);
    let altSex = valorAltura(perSex);
    let sex = document.querySelector("#sex");
    sex.style.height = `${altSex}rem`;
    
    let perSab = porDiaria(vendasTotais, qtVendasSab);
    let altSab = valorAltura(perSab);
    let sab = document.querySelector("#sab");
    sab.style.height = `${altSab}rem`;
    
    let perDom = porDiaria(vendasTotais, qtVendasDom);
    let altDom = valorAltura(perDom);
    let dom = document.querySelector("#dom");
    dom.style.height = `${altDom}rem`;
    
    let campPorVendas = document.querySelector("#campPorVendas");
    console.log(valorPorVendas);
    campPorVendas.textContent = `${(Number(vendasTotais)*100)/metaVendasEsperadas}%`;
    let valorCirculoFinalVendas = (Number(vendasTotais)*100)/metaVendasEsperadas;

    let primeiroCirculoVendas = document.querySelector("#primeiroCirculo");
    primeiroCirculoVendas.style.setProperty('--percentage', valorCirculoFinalVendas);

    let segundoCirculoMetas = document.querySelector("#segundoCirculoMeta");
    segundoCirculoMetas.style.setProperty('--percentage', valorCirculoFinalVendas);
    
    valAlcancado(vendasTotais, valorPorVendas, esperado);
}

window.addEventListener("load", carregarValor);
