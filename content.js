chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "clicked_browser_action" ) {
            // var placa = document.querySelector("* > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > dl:nth-child(1) > dd ").textContent;
            // var renavam = document.querySelector("* > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(6) > div:nth-child(2) > dl:nth-child(5) > dd").textContent;
            var placa =  "NNN9393";
            var renavam = "989873196";
            console.log(placa);
            console.log(renavam);

            // window.open("http://www2.detran.rn.gov.br/externo/consultarveiculo.asp", "_blank");
            //
            // $("#placa").val(placa);
            // $("#renavam").val(renavam);
            // $("#btnConsultaPlaca").click();
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": "http://www2.detran.rn.gov.br/externo/consultarveiculo.asp"});
        }
    }
);