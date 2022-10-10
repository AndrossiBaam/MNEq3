/*alert("Tienes 10 minutos para contestar")*/

const startingMinutes = 10;
let time = startingMinutes * 60;

const countdownEl = document.getElementById('countdown');

setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? '0' + seconds : seconds;

  countdownEl.innerHTML = `${minutes}:${seconds}`;
  time--;
}
;
/*header*/
window.onscroll = function() {myheader()};

var header = document.getElementById("myHeader");

var sticky = header.offsetTop;

function myheader() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}