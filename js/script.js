function init(){
  //add your javascrip between these two lines of code
  function alertFunction(){
     var text = document.getElementById("entryinput").value;
     alert("Yulun Wen: " + text);
     document.getElementById("textoutput").innerHTML = text;
  }
 
  var entrybtn = document.getElementById("entrybutton");
  entrybtn.addEventListener('click',alertFunction);
}
window.addEventListener('load', init);
