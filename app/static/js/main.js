import './utils/modernizr'
import { debounce, scrollHiddenBody } from './utils/index'
import { createAccordion, destroyAccordion } from './modules/accordion'
import { addActiveClass } from './modules/addActiveClass'
import { counterNumber } from './modules/counterNumber' 
import { revealAnimation } from './modules/revealAnimation'
import validationForm from './modules/validationForm'

window.addEventListener('DOMContentLoaded', function () {
  
  const LATENCY_MS = 200
  const content = document.querySelector('.content')
  const mainMenu = document.querySelector('.main-menu')
  const logo = document.querySelector('.logo')
  const burgerBtn = document.querySelector('#burger-btn')
  const career = document.querySelector('.career') 
  const counterNumbers = document.querySelectorAll('.counter__number')
  const form = document.querySelector('#form')

  const menuAdaptive = () => {
    if (window.innerWidth <= 900) content.insertAdjacentElement('afterbegin', mainMenu)
    if (window.innerWidth > 900) logo.insertAdjacentElement('afterend', mainMenu)
  }
  const menuAdaptiveDebounced = debounce(menuAdaptive, LATENCY_MS)

  menuAdaptive()
  window.addEventListener('resize', menuAdaptiveDebounced)

  burgerBtn.addEventListener('click', function () {
    scrollHiddenBody()
    this.classList.toggle('burger-btn--active')
    mainMenu.classList.toggle('main-menu--active')
  })

  function initAccordionOnResize(dataAccordion) {
    if (window.innerWidth <= 980) createAccordion(dataAccordion)
    if (window.innerWidth > 980) destroyAccordion(dataAccordion)
  }


  const initAccordionDebounced = debounce(initAccordionOnResize, LATENCY_MS)

  initAccordionDebounced()
  window.addEventListener('resize', initAccordionDebounced)

  mainMenu.addEventListener('click', addActiveClass('main-menu__item', 'main-menu__item--active'))

  revealAnimation(career, () => counterNumbers.forEach((counter) => counterNumber(counter, 10)), 0) 
  
  window.addEventListener('submit', (e) => {
    e.preventDefault()
    validationForm({
      form: form
    })
  })
})






