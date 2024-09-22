let arrow = document.querySelector("#arrow")
let menu = document.querySelector(".dropdown-menu")
let check="0"
arrow.addEventListener("click", ()  => {
    if(check=="0"){
        menu.style.display="flex";
        arrow.style.backgroundColor="gray"
        check="1"
    }else{
        menu.style.display="none";
        arrow.style.backgroundColor="transparent"
        check="0"
    }

    
})