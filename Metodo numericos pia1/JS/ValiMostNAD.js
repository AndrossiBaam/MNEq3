/*alert("Tienes 10 minutos para contestar")*/

/*Validar respuesta*/
function habilitar(res1,res2,res3,res4,res5){
    var res1 = document.getElementById("res1").value;
    var res2 = document.getElementById("res2").value;
    var res3 = document.getElementById("res3").value;
    var res4 = document.getElementById("res4").value;
    var res5 = document.getElementById("res5").value;


    val = 0;

    if(res1 == '-0.05'){
        val++;
    }
    if(res2 == '0.4'){
      val++;
  }
  if(res3 == '0.4'){
    val++;
}
if(res4 == '-0.05'){
  val++;
}
if(res5 == '0.45'){
  val++;
}
    if (val == 5){
        document.getElementById("btn").disabled = false;
    } else{
        document.getElementById("btn").disabled = true;
    }


}
document.getElementById("res1").addEventListener("keyup", habilitar);
document.getElementById("res2").addEventListener("keyup", habilitar);
document.getElementById("res3").addEventListener("keyup", habilitar);
document.getElementById("res4").addEventListener("keyup", habilitar);
document.getElementById("res5").addEventListener("keyup", habilitar);





function mostrar() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


