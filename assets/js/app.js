var img = document.getElementsByClassName("animal");
var select = document.getElementById("select");
var option = select.querySelectorAll("option");


select.onchange = function(){
  if(select.value == "original"){
    for(i=0; i<img.length;i++){
      img[i].classList.remove("blanco-negro");
      img[i].classList.remove("invertir-colores");
      img[i].classList.remove("sepia");

    }
  }
  switch (select.value) {
    case "sepia":
                cambiarClase(img,select.value);

      break;
    case "invertir-colores":
                cambiarClase(img,select.value);

      break;
    case "blanco-negro":
                cambiarClase(img,select.value);

      break;
    default:

  }
}

function cambiarClase(img,clase){

  for(i=0; i<img.length;i++){
    img[i].classList.add(clase);
    for(j=2; j<option.length;j++){
      if(option[j].value!=clase){
        img[i].classList.remove(option[j].value);

      }
    }

}
}
