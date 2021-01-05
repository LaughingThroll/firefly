import './utils/modernizr'

import { debounce, scrollHiddenBody } from './utils/index'


window.addEventListener('DOMContentLoaded', function () {
  const LATENCY_MS = 1000
  const content = document.querySelector('.content')
  const mainMenu = document.querySelector('.main-menu')
  const logo = document.querySelector('.logo')
  const burgerBtn = document.querySelector('#burger-btn')

  // window.addEventListener('scroll', (e) => {
    
  // })


  const menuAdaptive = () => {
    if (window.innerWidth <= 900) content.insertAdjacentElement('afterbegin', mainMenu)
    if (window.innerWidth > 900) logo.insertAdjacentElement('afterend', mainMenu)
  }
  const menuAdaptiveDebounced = debounce(menuAdaptive, LATENCY_MS)

  menuAdaptive()
  window.addEventListener('resize', menuAdaptiveDebounced)

  burgerBtn.addEventListener('click', function () {
    const scrollTop = window.scrollY
    const height = window.innerHeight
    // const totalHeight = scrollTop + height
    // console.log('before', scrollTop)
    scrollHiddenBody()

    
    console.log('after',scrollTop)

    this.classList.toggle('burger-btn--active')
    mainMenu.classList.toggle('main-menu--active')
    window.scrollTo({
      top: scrollTop 
    }) 
  })


})






