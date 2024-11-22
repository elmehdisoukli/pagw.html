let call= document.querySelectorAll(".bar");

call.forEach(function(a){
a.addEventListener("click", function() {

    a.classList.toggle("hello")
    });

})
let text = document.querySelectorAll(".rw")
 text.forEach(function(b){
 b.addEventListener("click",function(){
    b.classList.toggle("hello");
    
 })

 })

 document.cookie.onclick=function(){
    document.cookie.classList.toggle("hello");
 }
