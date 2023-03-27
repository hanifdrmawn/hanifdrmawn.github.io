var i = 0;
var txt = 'Under Construction....';

typeWriter();
function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, 130);
  }
  else if (i==txt.length){
    setTimeout(typeClean, 500);
    i=0;
    if(txt=='Under Construction...') {
      txt= 'Nungguin Yaa...';
    }
    else if(txt=='Nungguin Yaa...') {
      txt = 'Under Construction...';
    }
  }
}
function typeClean() {
  document.getElementById("text").innerHTML = "";
  setTimeout(loop, 500);
}
function loop(){
  typeWriter();
}
