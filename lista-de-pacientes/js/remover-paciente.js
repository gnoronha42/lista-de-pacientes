var tabela = document.querySelector("table");   // remove patient

tabela.addEventListener("dblclick",function(event){
    
    setTimeout(function(){
     event.target.parentNode.remove();
    },500);
    event.target.parentNode.classList.add("fadeOut");
});

