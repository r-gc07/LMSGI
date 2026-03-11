
/*-------------------------------------------------------------------------------------------------------------------------*/ 
let diapositivaactual=0;
const carrusel=document.getElementsByClassName("imagen");  
mostrarcarrusel();

function mostrarcarrusel(){
    for(let i=0; i<carrusel.length; i++){
        carrusel[i].style.display="none";
    }

    carrusel[diapositivaactual].style.display="block";
     diapositivaactual++;

     if(diapositivaactual>=carrusel.length)
        diapositivaactual=0;
setTimeout(mostrarcarrusel, 2000);
}