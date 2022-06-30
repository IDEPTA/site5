let burgerMenu = document.querySelector('.burger')
let line = document.querySelectorAll('.burger-line')
let nav = document.querySelector('.Nav')
burgerMenu.addEventListener('click',()=>{
    nav.classList.toggle('Nav-active')
    line[0].classList.toggle('active-line-one')
    line[1].classList.toggle('active-line-two')
    burgerMenu.classList.toggle('burger-active')
})