document.querySelector("h1").addEventListener("click", function (){
  var colorRandom = Math.floor(Math.random()*16777215).toString(16);
  document.body.style.color = "#"+colorRandom;
});
