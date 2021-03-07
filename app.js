const menu = document.querySelector('.menu');
const overlay = document.querySelector('.overlay');
const closeMenu = document.querySelector('.close');



menu.addEventListener('click',function(){
    overlay.style.display = 'block'

});

closeMenu.addEventListener('click',function(){
    overlay.style.display = 'none'
})
