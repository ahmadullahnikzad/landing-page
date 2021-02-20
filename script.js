const mobileMenu = document.querySelector('.mobile-menu')
const mobileMenuIcons = document.querySelectorAll('.mobile-menu use');
const nav = document.querySelector('nav');
function toggleMenu() {
    nav.classList.toggle('active');
    document.body.classList.toggle('lock-scroll');
}
function toggleMenuIcon() {
    mobileMenuIcons.forEach(icon => {
        icon.classList.toggle('hidden')
    })
}
mobileMenu.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', toggleMenuIcon);
mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
})
document.body.addEventListener('click', function (e) {
    e.stopPropagation();
    nav.classList.remove('active')
    document.body.classList.remove('lock-scroll');
})
document.body.addEventListener('click', toggleMenuIcon);