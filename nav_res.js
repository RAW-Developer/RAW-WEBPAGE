var v= document.querySelector("#menu_list");
function myFunction(x) {
    if (x.matches) { // If media query matches
        v.style.display='none';
    } else {
        v.style.display='block';
    }
  }
  
  var x = window.matchMedia("(max-width: 750px)")
  myFunction(x) // Call listener function at run time
  x.addListener(myFunction) // Attach listener function on state changes
function togglefunction(){
    if(v.style.display=='none'){
        v.style.display='block';
    }
    else{
        v.style.display='none';
    }
}
