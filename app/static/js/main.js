import './utils/modernizr'

import { debounce, scrollHiddenBody } from './utils/index'
import { createAccordion, destroyAccordion } from './modules/accordion'

window.addEventListener('DOMContentLoaded', function () {
  const LATENCY_MS = 1000
  const content = document.querySelector('.content')
  const mainMenu = document.querySelector('.main-menu')
  const logo = document.querySelector('.logo')
  const burgerBtn = document.querySelector('#burger-btn')

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

  
  const initAccordionDebounced = debounce(initAccordionOnResize, 1000)
  
  initAccordionOnResize()
  window.addEventListener('resize', initAccordionOnResize)

})






