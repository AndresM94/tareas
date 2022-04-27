let numeroIf = -2;

if(numeroIf > 0){
    console.log("Es positivo");
} else if (numeroIf < 0){
    console.log("Es negativo");
} else {
    console.log("Es cero");
}

let numeroWhile = 0;

while(numeroWhile < 3){
    console.log(numeroWhile);
    numeroWhile++;
}

do{
    console.log(numeroWhile);
    numeroWhile++;
}while(numeroWhile == 0);


for(let numeroFor = 0; numeroFor < 3; numeroFor++){
    console.log(numeroFor);
}

let estacion = "invierno";

switch(estacion){
    case "verano":
        console.log("Es verano");
        break;
    case "invierno":
        console.log("Es invierno");
        break;
    case "otoño":
        console.log("Es otoño");
        break;
    case "primavera":
        console.log("Es primavera");
        break;
    default:
        console.log("No es una estacion");
}