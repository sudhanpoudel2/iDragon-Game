document.onkeydown = function(e){
    console.log("key code is:",e.keyCode)
   if(e.keyCode==38){
    dino = document.querySelector('dion');
    dino.classList.add('animateDino');
    setTimeout((e)=>{
        dino.classList.remove('animateDino')
    },700);
   }
}