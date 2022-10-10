/*alert("Tienes 10 minutos para contestar")*/

/*Validar respuesta*/
function habilitar2(res6){
    var res6 = document.getElementById("res6").value;



    val2 = 0;

    if(res6 == '0.5'){
        val2++;
    }

    if (val2 == 1){
        document.getElementById("btn2").disabled = false;
    } else{
        document.getElementById("btn2").disabled = true;
    }


}
document.getElementById("res6").addEventListener("keyup", habilitar);


function mostrar2() {
  var x = document.getElementById("myDIV2");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


