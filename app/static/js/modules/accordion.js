const dataAccordion = Array.from(document.querySelectorAll('[data-accordion]'))

let addListener = true

function createAccordion() {
  
  if (addListener) {
    dataAccordion[0].parentElement.addEventListener('click', accordionToggler)
    addListener = false
  }
  
  
  dataAccordion.forEach((parent) => {
    if (parent.children[0].nodeName !== 'BUTTON') {
      const button = document.createElement('button')
      button.classList.add('button-accordion')
      button.appendChild(parent.children[0])
      parent.insertAdjacentElement('afterbegin', button)
    }
  })

}

function destroyAccordion() {
  
  if (!addListener) {
    dataAccordion[0].parentElement.removeEventListener('click', accordionToggler)
    addListener = true
  }

  dataAccordion.forEach((parent) => {
    const button = parent.querySelector('.button-accordion')
    if (button) {
      parent.insertAdjacentElement('afterbegin', button.children[0])
      button.remove()
    }
  })

}

function accordionToggler({ target, path }) {
  dataAccordion.forEach((parent) => {
    const button = parent.querySelector('.button-accordion')
    // const list = button.nextElementSibling()
    if (path.includes(button)) {
      
    }
  })
  

} 


export { createAccordion, destroyAccordion }