let toggle = document.getElementById("toggle");
let menu = document.getElementById("navbar");
console.log("Toggle:-",toggle);
console.log("menu:-",menu);
toggle.addEventListener('click',function(){
    
    menu.classList.add('active');
    console.log("menu:-",menu);
});