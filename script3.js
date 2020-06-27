var width = Math.random() * 300;

var height = Math.random() * 300;

var top = Math.random() * 300;

var left = Math.random() * 300;

var appearTime = Math.random() * 4000;

var start = new Date().getTime();

document.getElementById("shape").onclick = function () {
  var end = new Date().getTime();
  var resultTime2 = (end - start) / 1000;
  document.getElementById("shape").style.display = "none";
  document.getElementById("resultTime").innerHTML = resultTime2;

  if ((document.getElementById("shape").style.display = "none")) {
    setTimeout(function wait() {
      document.getElementById("shape").style.display = "block";
      document.getElementById("shape").style.top = top + "px";
      document.getElementById("shape").style.left = left + "px";
    }, appearTime);
  }
};
