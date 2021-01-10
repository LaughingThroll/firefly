import { slideToggle } from './slideAnimation'
import { throttle } from '../utils/throttle'

const dataAccordion = Array.from(document.querySelectorAll('[data-accordion]'))
let addListener = true

const accordionTogglerThrottle = throttle(accordionToggler, 500) 

function createAccordion() {

  if (addListener) {
    dataAccordion[0].parentElement.addEventListener('click', accordionTogglerThrottle)
    addListener = false
  }

  dataAccordion.forEach((parent) => {
    if (parent.children[0].nodeName !== 'BUTTON') {
      parent.classList.add('accordion')
      const button = document.createElement('button')
      button.classList.add('accordion__button')
      button.classList.add('custom-button')
      button.appendChild(parent.children[0])
      parent.insertAdjacentElement('afterbegin', button)
      parent.children[1].classList.add('accordion__list')
    }
  })

}

function destroyAccordion() {

  if (!addListener) {
    dataAccordion[0].parentElement.removeEventListener('click', accordionTogglerThrottle)
    addListener = true
  }

  dataAccordion.forEach((parent) => {
    const button = parent.querySelector('.accordion__button')
    if (button) {
      parent.insertAdjacentElement('afterbegin', button.children[0])
      button.remove()
      parent.classList.remove('accordion')
      parent.children[1].classList.remove('accordion__list')
      parent.children[1].style = '' 
    }
  })
}

function accordionToggler({path, target}) {
    const pathClassNames = [...path].flatMap(el => el.className?.split(' '))
    if (pathClassNames.includes('accordion__button')) {
      const button = target.closest('.accordion__button')
      button.classList.toggle('custom-button--active')
      slideToggle(button.nextElementSibling)    
    }
}

export { createAccordion, destroyAccordion }

