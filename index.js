let toggle = document.getElementById("toggle");
let menu = document.getElementById("navbar");
let close = document.getElementById("close");
console.log("Toggle:-",toggle);
console.log("menu:-",menu);
toggle.addEventListener('click',function(){
    
    menu.classList.add('active');
    console.log("menu:-",menu);
});

close.addEventListener('click', function(){
    menu.classList.remove('active');
});