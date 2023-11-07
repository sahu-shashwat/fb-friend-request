var istatus =document.querySelector("h4")
var btn=document.querySelector("#add")
var blk=document.querySelector("#block")
var a=1
btn.addEventListener("click",function() {
    if(a==1) { 
        istatus.innerHTML="Friends"
        istatus.style.color="green"
        btn.innerHTML="Remove"
        blk.style.display="inline"
        a=0
    }
    else{
        istatus.innerHTML="stranger"
        istatus.style.color="red"
        btn.innerHTML="Add friend"
        blk.style.display="none"
        a=1
    }
})
b=1
blk.addEventListener("click",function(){
   if (b==1){
        istatus.innerHTML="User blocked"
        istatus.style.color="red"
        btn.style.display="none"
        blk.innerHTML="Unblock"
        b=0
   }
   else{
    istatus.innerHTML="Friends"
    istatus.style.color="green"
    btn.style.display="inline"
    blk.innerHTML="Block"
    b=1
   }
})