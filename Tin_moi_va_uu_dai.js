let mybutton=document.getElementById("mybutton")
let video=document.getElementById("video")
let thu1=document.getElementById("thu1");
let thu2=document.getElementById("thu2");
let thu3=document.getElementById("thu3");
mybutton.addEventListener("click",()=>{
    thu1.style.opacity="0";
    thu1.style.display="none";
    thu2.style.visibility="visible";
    thu2.style.opacity="1";
    video.play();
});
thu2.addEventListener("mouseover",chuyen2);
thu2.addEventListener("touchend",chuyen2);
function chuyen2(){
    let time=null;
    time=setTimeout(()=>{
        thu2.style.display="none";
        thu3.style.visibility="visible";
        thu3.style.opacity="1";
    },6000);
}


let list=document.querySelector(".list")
let items=document.querySelectorAll(".list .item");
let dots=document.querySelectorAll(".dot li")
let next=document.getElementById("next");
let pre=document.getElementById("pre");
let active = 0;
let activelength = items.length - 1;
next.onclick = function(){
    if(active < activelength){
        active=active+1;
    }
    else{
       active= 0;
    }
    reloadslide();
}
pre.onclick=function(){
    if(active -1 <0){
        active= activelength;
    }
    else{
        active=active-1;
    }
    reloadslide();
}
let autoplay=setInterval(()=>next.click(),3000);
 function reloadslide(){
    let checkleft= items[active].offsetLeft;
    list.style.left= - checkleft +"px";
    
    let activedot=document.querySelector(".dot-active");
    activedot.classList.remove("dot-active");
    dots[active].classList.add("dot-active");
    clearInterval(autoplay);
    autoplay=setInterval(()=>next.click(),3000);
}
 dots.forEach((li,key)=>{
    li.addEventListener("click",()=>{
        active=key;
        reloadslide();
    });
 })   
 



 