

function TicketDesc() {

    let Cantidad = parseFloat(document.getElementById("Cantidad").value);

    let Categoria = document.getElementById("Categoria").value;

    Desc=0

    let ValorT = 200

    let ValorF = 0


if (Categoria == "Estudiante"){

    Desc=80*ValorT/100;

    ValorT=ValorT-Desc;

    ValorF=Cantidad*ValorT;

    

}if (Categoria == "Trainee") {

    Desc=50*ValorT/100;

    ValorT=ValorT-Desc;

    ValorF=Cantidad*ValorT;
    

}if (Categoria== "Junior"){

    Desc=15*ValorT/100;

    ValorT=ValorT-Desc;

    ValorF=Cantidad*ValorT;

    

   

}

    let resultado = document.getElementById("resultado");
    resultado.value = ValorF.toFixed(2);


}
/*fin de funcion--------------------------------*/


