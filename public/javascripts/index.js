/* menu opening */
let iconMenu = document.querySelector('.icon-menu-mobile');
let menuMobile = document.querySelector('.menu-header-mobile');

iconMenu.addEventListener('click', function() {
   if(this.classList.contains('open')) {
       menuMobile.style.right = '100%';
       this.classList.remove('open');
   } else {
       menuMobile.style.right = '20%';
       this.classList.add('open');
   }
});