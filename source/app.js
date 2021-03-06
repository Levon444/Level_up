let but = document.getElementById('but')
let sec_but = document.getElementById('btn')
let reg = document.getElementById('reg_form')
/*Функция скролла к панели заказа*/ 
function scrollTo(element) {
    window.scroll({
      left: 0, 
      top: element.offsetTop, 
      behavior: 'smooth'
    })
  }
  /*Событие скроллинга при клике*/
  but.addEventListener('click', () => {
    scrollTo(reg);
  })
  sec_but.addEventListener('click', () => {
    scrollTo(reg);
  })