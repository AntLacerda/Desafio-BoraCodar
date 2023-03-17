let btnGerador = document.querySelector("#btn_gerador");

function capValor() {
    let valores = [];

    let valPorVendas = document.querySelector("#valor_por_venda").value;
    valores.push(valPorVendas);

    let metaMensal = document.querySelector("#meta_mensal").value;
    valores.push(metaMensal);

    let qtSeg = document.querySelector("#qt_seg").value;
    valores.push(qtSeg);

    let qtTer = document.querySelector("#qt_ter").value;
    valores.push(qtTer);

    let qtQua = document.querySelector("#qt_qua").value;
    valores.push(qtQua);

    let qtQui = document.querySelector("#qt_qui").value;
    valores.push(qtQui);

    let qtSex = document.querySelector("#qt_sex").value;
    valores.push(qtSex);

    let qtSab = document.querySelector("#qt_sab").value;
    valores.push(qtSab);

    let qtDom = document.querySelector("#qt_dom").value;
    valores.push(qtDom);

    localStorage.setItem("VALOR", valores);
}


btnGerador.addEventListener("click", capValor);