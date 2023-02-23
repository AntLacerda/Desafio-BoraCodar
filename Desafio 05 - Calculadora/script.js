let numF = '';
let op = '';
let resp = 0;
let lastBut = '';
let lastOp = '';

const telaPrincipal = document.querySelector("#numTela");
const campOperacao = document.querySelector("#operacao");
const histPrimNum = document.querySelector("#histPrimOp");
const histOp = document.querySelector("#histOp");
const histSegNum = document.querySelector("#histSegOp");

function coletarNum(num){
    numF = numF + num;
    lastBut = numF;
    telaPrincipal.textContent = numF;
    if(histOp.textContent){
        console.log('');
    }else{
        histPrimNum.textContent = numF;
    }
}

function operar(operacao){
    op = operacao;
    campOperacao.textContent = op;
    histOp.textContent = op;
    if(lastBut=='='){
        histPrimNum.textContent = resp;
        histSegNum.textContent = '';
    }
    if(op=='+'){
        if(resp==0){
            resp = resp + Number(numF);
            numF = '';
        }else{
            if(lastBut=='='){
                numF = '';
                lastBut = op;
                return;
            }else if(lastBut>=0&&lastBut<=9){
                console.log('acessou');
                if(lastOp=='+'){
                    resp = resp + Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='-'){
                    resp = resp - Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='x'){
                    resp = resp * Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='/'){
                    resp = resp / Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }
            }else{
                resp = resp + Number(numF);
                numF = '';
            }
        }
    }else if(op=='-'){
        if(resp==0){
            resp = resp + Number(numF);
            numF = '';
        }else{
            if(lastBut=='='){
                numF = '';
                lastBut = op;
                return;
            }else if(lastBut>=0&&lastBut<=9){
                console.log('acessou');
                if(lastOp=='+'){
                    resp = resp + Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='-'){
                    resp = resp - Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='x'){
                    resp = resp * Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='/'){
                    resp = resp / Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }
            }else{
                resp = resp - Number(numF);
                numF = '';
            }
        }
    }else if(op=='x'){
        if(resp==0){
            resp = resp + Number(numF);
            numF = '';
        }else{
            if(lastBut=='='){
                numF = '';
                lastBut = op;
                return;
            }else if(lastBut>=0&&lastBut<=9){
                if(lastOp=='+'){
                    resp = resp + Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='-'){
                    resp = resp - Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='x'){
                    resp = resp * Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='/'){
                    resp = resp / Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }
            }else{
                resp = resp * Number(numF);
                numF = '';
            }
        }
    }else if(op=='/'){
        if(resp==0){
            resp = resp + Number(numF);
            numF = '';
        }else{
            if(lastBut=='='){
                numF = '';
                lastBut = op;
                return;
            }else if(lastBut>=0&&lastBut<=9){
                console.log('acessou');
                if(lastOp=='+'){
                    resp = resp + Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='-'){
                    resp = resp - Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='x'){
                    resp = resp * Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='/'){
                    resp = resp / Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }
            }else{
                resp = resp / Number(numF);
                numF = '';
            }
        }
    }else if(op=='%'){
        if(resp==0){
            resp = resp + Number(numF);
            numF = '';
        }else{
            if(lastBut=='='){
                numF = '';
                lastBut = op;
                return;
            }else if(lastBut>=0&&lastBut<=9){
                console.log('acessou');
                if(lastOp=='+'){
                    resp = resp + Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='-'){
                    resp = resp - Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='x'){
                    resp = resp * Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }else if(lastOp=='/'){
                    resp = resp / Number(numF);
                    histPrimNum.textContent = resp;
                    histSegNum.textContent = '';
                    histOp.textContent = op;
                    telaPrincipal.textContent = resp;
                    numF = '';
                }
            }else{
                resp = resp % Number(numF);
                numF = '';
            }
        }
    }
    lastBut = op;
    lastOp = op;
}

function resolucao(){
    if(op=='+'){
        if(lastBut=='='){
            histPrimNum.textContent = resp;
        }
        resp = resp + Number(numF);
        telaPrincipal.textContent = resp;
        campOperacao.textContent = '';
        histSegNum.textContent = numF;
    }else if(op=='-'){
        if(lastBut=='='){
            histPrimNum.textContent = resp;
        }
        resp = resp - Number(numF);
        telaPrincipal.textContent = resp;
        campOperacao.textContent = '';
        histSegNum.textContent = numF;
    }else if(op=='x'){
        if(lastBut=='='){
            histPrimNum.textContent = resp;
        }
        resp = resp * Number(numF);
        telaPrincipal.textContent = resp;
        campOperacao.textContent = '';
        histSegNum.textContent = numF;
    }else if(op=='/'){
        if(lastBut=='='){
            histPrimNum.textContent = resp;
        }
        resp = resp / Number(numF);
        telaPrincipal.textContent = resp;
        campOperacao.textContent = '';
        histSegNum.textContent = numF;
    }else if(op=='%'){
        if(lastBut=='='){
            histPrimNum.textContent = resp;
        }
        resp = resp % Number(numF);
        telaPrincipal.textContent = resp;
        campOperacao.textContent = '';
        histSegNum.textContent = numF;
    }
    lastBut = '=';
}

const btnLimp = document.querySelector("#botaoLimpar");
btnLimp.addEventListener("click", ()=>{
    numF = '';
    op = '';
    resp = 0;
    lastBut = '';
    telaPrincipal.textContent = '0';
    campOperacao.textContent = '';
    histPrimNum.textContent = '0'
    histOp.textContent = '';
    histSegNum.textContent = '';
});

const btnCanc = document.querySelector("#botaoCancelar");
btnCanc.addEventListener("click", ()=>{
    telaPrincipal.textContent = '0';
    numF = '';
});

const btnTroca = document.querySelector("#botaoTroca");
btnTroca.addEventListener("click", ()=>{
    if(lastBut=='='){
        resp = resp * -1;
        telaPrincipal.textContent = resp;
        histPrimNum.textContent = resp;
        histOp.textContent = '';
        histSegNum.textContent = '';
    }else{
        numF = Number(numF) * -1;
    }
});

