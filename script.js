const menuClose = document.querySelector('#img');
const menuTab = document.querySelector('.menu-screen');
const menuOpen = document.querySelector('.nav__toggle');



menuOpen.addEventListener("click", function() {
    menuTab.style.display = 'block';
});


menuClose.addEventListener("click", function() {
    menuTab.style.display = 'none';
});
