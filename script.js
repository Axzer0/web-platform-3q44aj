function begin(){
      if (document.getElementById("a").style.visibility == 'visible')
      {
        document.getElementById("b").style.visibility = 'visible';
        document.getElementById("a").style.visibility = 'hidden';
      }
      else if(document.getElementById("b").style.visibility == 'visible')
      {
        document.getElementById("a").style.visibility = 'visible';
        document.getElementById("b").style.visibility = 'hidden';
      }
}

function int(){
  int;
  this.interval=setInterval(()=>{
    if (document.getElementById("a").style.visibility == 'visible')
      {
        document.getElementById("b").style.visibility = 'visible';
        document.getElementById("a").style.visibility = 'hidden';
      }
      else if(document.getElementById("b").style.visibility == 'visible')
      {
        document.getElementById("a").style.visibility = 'visible';
        document.getElementById("b").style.visibility = 'hidden';
      }
    }
  ,2000)
}
