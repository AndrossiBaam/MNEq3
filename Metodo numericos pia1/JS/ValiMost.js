/*alert("Tienes 10 minutos para contestar")*/

/*Validar respuesta*/
function habilitar(){
    var res1 = document.getElementById("res1").value;
    var res2 = document.getElementById("res2").value;
    var res3 = document.getElementById("res3").value;
    var res4 = document.getElementById("res4").value;

    val = 0;

    if(res1 == 0.3392307692){
        val++;
    }
    if(res2 == -2.7608823529){
      val++;
    }
    if(res3 == 5.3953846154){
      val++;
  }
  if(res4 == 0.7270588235){
    val++;
  }
    if (val == 4){
        document.getElementById("btn").disabled = false;
    } else{
        document.getElementById("btn").disabled = true;
    }


}
document.getElementById("res1").addEventListener("keyup", habilitar);
document.getElementById("res2").addEventListener("keyup", habilitar);
document.getElementById("res3").addEventListener("keyup", habilitar);
document.getElementById("res4").addEventListener("keyup", habilitar);
;

function mostrar() {
  var x = document.getElementById("myDIV");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
/*Mostrar siguiente
let btn = document.querySelector("button");
let div = document.querySelector("div");
btn.addEventListener("click", () => {
  if (div.style.display === "none") {
    div.style.display = "block";
  } else {
    div.style.display = "none";
  }
});*/