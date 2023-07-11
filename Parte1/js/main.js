let numeroDia=1;
let numeroHora=9;
if((numeroDia>0) && (numeroDia<6)){
    console.log("Es día laboral");
    if ((numeroHora<9) && (numeroHora>18)){
        console.log("Es hora laboral");
     }
     else{
        console.log("No es hora laboral");
     }
}
else{
    console.log("No es día laboral");
 if ((numeroHora<9) && (numeroHora>18)){
    console.log("Es hora laboral");
 }
 else{
    console.log("No es hora laboral");
 }
}