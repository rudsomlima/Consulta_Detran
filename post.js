$(document).ready(function(){
   alert("funcionou");
   // window.open("http://www2.detran.rn.gov.br/servicos/consultaveiculo.asp", "_blank");

   $.post( "http://www2.detran.rn.gov.br/servicos/consultaveiculo.asp",
       {
          placa: "NNN9393",
          renavam: "989873196"
       })
       .always(function(data) {
          var myWindow = window.open("", "_self");
          myWindow.document.write(data);
       });


});



