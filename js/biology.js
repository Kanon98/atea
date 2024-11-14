//Scroll header

window.addEventListener('scroll',()=>{
     const scroll = document.documentElement.scrollTop;
    const header = document.getElementById('header')
    const logo = document.getElementById('logo')
    if(scroll > 150){
        header.classList.add('header__scroll')
        logo.classList.add('scroll__logo')
        }else{
        header.classList.remove('header__scroll')
        logo.classList.remove('scroll__logo')
        }

})

// Scroll Visible






// Menú

const buttonMenu = document.getElementById('btn-menu')
const menu = document.getElementById('menu')
const shadow = document.getElementById('shadow')
const line1 = document.getElementById('line1')
const line2 = document.getElementById('line2')
const line3 = document.getElementById('line3')

buttonMenu.addEventListener('click',()=>{
    buttonMenu.classList.toggle('menu__fixed')
    menu.classList.toggle('show__menu')
    shadow.classList.toggle('show__shadow')
    line1.classList.toggle('rotate')
    line2.classList.toggle('rotate')
    line3.classList.toggle('rotate')
})

shadow.addEventListener('click',()=>{
    menu.classList.remove('show__menu')
    buttonMenu.classList.remove('menu__fixed')
    shadow.classList.remove('show__shadow')
    line1.classList.toggle('rotate')
    line2.classList.toggle('rotate')
    line3.classList.toggle('rotate')
})


// Scroll Up

const buttonUp = document.getElementById('button-up')
let scrollUp = ()=>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  })
}
buttonUp.addEventListener('click', scrollUp)

window.addEventListener('scroll',()=>{
  const currentScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight;
  if(currentScroll > height/6){
    buttonUp.style.transform = "scale(1)"
  }else{
        buttonUp.style.transform = "scale(0)"
  }
})
