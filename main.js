function btn1(){
    document.getElementById("saida").innerHTML += "<p>Cliquei no Botão 1</p>";
}
function btn2(){
    document.getElementById("saida").innerHTML += "<p>Cliquei no Botão 2</p>";
}
function btn3(){
    document.getElementById("saida").innerHTML += "<p>Cliquei no Botão 3</p>";
}
function btn4(){
    document.getElementById("saida").innerHTML += "<p>Cliquei no Botão 4</p>";
}

function getDia(){
    var dataInput = document.getElementById("dia");
    var dataAtual = new Date();
    var dia = dataAtual.getDate();

    dataInput.value = dia;
}

function exibirDataAtual(){
    var dataAtual = new Date();
    document.getElementById("dia").value = dataAtual.toLocaleDateString('pt-BR');
}

function dataFormatada(){
    var dataAtual = new Date();
    var dia, mes, ano, data;
    dia = String(dataAtual.getDate()).padStart(2,0);
    mes = dataAtual.getMonth();
    ano = dataAtual.getFullYear();
    data = dia + "/" + mes + "/" + ano;
    document.getElementById("dia").value = data;
}

function calcularDiferenca(){
    var data1 = new Date(document.getElementById("data1").value);
    var data2 = new Date(document.getElementById("data1").value);
    var diferenca = Math.abs(data1 - data2) / (1000 * 60 * 60 * 24);
    document.getElementById("diferenca").textContent = "Diferença em dias é " + diferenca;
}

function mostrarFruta(){
    var selectElement = document.getElementById("selecaoItens");
    var fruta = selectElement.options[selectElement.selectedIndex].text;
    document.getElementById("itemSelecionado").innerHTML = "A fruta selecionada é " + fruta;
}

function addOpcao(){
    var diaSemana = document.getElementById("texto").value;
    var selectSemana = document.getElementById("selecaoSemana");

    if(diaSemana){
        var option = document.createElement("option");
        option.value = diaSemana;
        option.text = diaSemana;

        selectSemana.add(option);
        document.getElementById("texto").value = null;
    }
}

function removerOpcao(){
    var selectSemana = document.getElementById("selecaoSemana");
    var optionRem = selectSemana.options[selectSemana.selectedIndex];
    //selectSemana.remove(optionRem);

    if(selectSemana){
        selectSemana.remove(optionRem.index);
    }
}

function mudarFormatacao(){
    var elemento = document.getElementById("elemento");
    elemento.style.backgroundColor = "red";
    elemento.style.color = "#000";
    elemento.style.fontWeight = "bold";
}