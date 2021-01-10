const TIME_DURATION = 500

function slideUp(element, duration = TIME_DURATION) {
  element.style.height = element.offsetHeight + 'px'
  element.style.transitionProperty = `height, margin, padding`
  element.style.transitionDuration = duration + 'ms'
  element.offsetHeight
  element.style.overflow = 'hidden'
  element.style.height = 0
  element.style.paddingTop = 0
  element.style.paddingBottom = 0
  element.style.marginTop = 0
  element.style.marginBottom = 0
  function slideUpEnd() {
    element.style.display = 'none'
    element.style.removeProperty('height')
    element.style.removeProperty('padding-top')
    element.style.removeProperty('padding-bottom')
    element.style.removeProperty('margin-top')
    element.style.removeProperty('margin-bottom')
    element.style.removeProperty('overflow')
    element.style.removeProperty('transition-duration')
    element.style.removeProperty('transition-property')
    element.removeEventListener('transitionend', slideUpEnd)
  }
  element.addEventListener('transitionend', slideUpEnd)
}


function slideDown(element, duration = TIME_DURATION) {
  element.style.removeProperty('display')

  let display = window.getComputedStyle(element).display
  if (display === 'none')
    display = 'block'

  element.style.display = display
  let height = element.offsetHeight
  element.style.overflow = 'hidden'
  element.style.height = 0
  element.style.paddingTop = 0
  element.style.paddingBottom = 0
  element.style.marginTop = 0
  element.style.marginBottom = 0
  element.offsetHeight
  element.style.transitionProperty = `height, margin, padding`
  element.style.transitionDuration = duration + 'ms'
  element.style.height = height + 'px'
  element.style.removeProperty('padding-top')
  element.style.removeProperty('padding-bottom')
  element.style.removeProperty('margin-top')
  element.style.removeProperty('margin-bottom')

  function slideDownEnd() {
    element.style.removeProperty('height')
    element.style.removeProperty('overflow')
    element.style.removeProperty('transition-duration')
    element.style.removeProperty('transition-property')
    element.removeEventListener('transitionend', slideDownEnd)
  }
  element.addEventListener('transitionend', slideDownEnd)
}



function slideToggle(element, duration = TIME_DURATION) {
  if (window.getComputedStyle(element).display === 'none') {
    return slideDown(element, duration)
  } else {
    return slideUp(element, duration)
  }
}
export { slideToggle, slideUp, slideDown }