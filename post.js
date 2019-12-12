   alert("funcionou");
   var myWindow = window.open("http://www2.detran.rn.gov.br/servicos/consultaveiculo.asp", "_blank");

   var placa = document.querySelector("* > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > dl:nth-child(1) > dd ");
   // console(placa);





    var ajax = new XMLHttpRequest();

// Seta tipo de requisição: Post e a URL da API
    ajax.open("POST", "http://www2.detran.rn.gov.br/servicos/consultaveiculo.asp", true);
    ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

// Seta paramêtros da requisição e envia a requisição
    ajax.send("placa=nnn9393&renavam=989873196&btnConsultaPlaca=");

// Cria um evento para receber o retorno.
    ajax.onreadystatechange = function() {
        // Caso o state seja 4 e o http.status for 200, é porque a requisiçõe deu certo.
        if (ajax.readyState == 4 && ajax.status == 200) {
            var data = ajax.responseText;
            // Retorno do Ajax
            // console.log(data);
            //alert(data);
            var myWindow = window.open("http://www2.detran.rn.gov.br/servicos/consultaveiculo.asp", "_blank");
            myWindow.document.write(data);
        }
    }





