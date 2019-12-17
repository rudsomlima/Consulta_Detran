chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if( request.message === "consulta" ) {
            var placa = request.placa;
            var renavam = request.renavam;
            alert(placa + "\n" + renavam);
            console.log(placa);
            console.log(renavam);
            $("#placa").val(placa);
            $("#renavam").val(renavam);
            $("#btnConsultaPlaca").click();
        }
    }
);