var img = document.getElementsByClassName("animal");
var select = document.getElementById("select");

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
                  for(i=0; i<img.length;i++){
                    img[i].classList.add("sepia");
                    img[i].classList.remove("blanco-negro");
                    img[i].classList.remove("invertir-colores");
                  }
      break;
    case "invertir-colores":
                  for(i=0; i<img.length;i++){
                    img[i].classList.add("invertir-colores");
                    img[i].classList.remove("sepia");
                    img[i].classList.remove("blanco-negro");

                  }
      break;
    case "blanco-negro":
                  for(i=0; i<img.length;i++){
                    img[i].classList.add("blanco-negro");
                    img[i].classList.remove("sepia");
                    img[i].classList.remove("invertir-colores");
                                        
                  }
      break;
    default:

  }
}
