const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");

function isLampBroken() {
  return lamp.src.indexOf("quebrada") > -1;
}

function lampON() {
  if (!isLampBroken()) {
    lamp.src = "./img/ligada.jpg";
  }
}

function lampOff() {
  if (!isLampBroken()) {
    lamp.src = "./img/desligada.jpg";
  }
}

function lampbroken() {
  lamp.src = "./img/quebrada.jpg";
}

turnOn.addEventListener("click", lampON);
turnOff.addEventListener("click", lampOff);
lamp.addEventListener("mousemove", lampON);
lamp.addEventListener("mouseleave", lampOff);
lamp.addEventListener("dblclick", lampbroken);
