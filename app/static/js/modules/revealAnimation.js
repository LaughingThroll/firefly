function noop() { }

function revealAnimation(block, fn = noop, delayScroll = 100) {  
  function revealAnimationInner() {
    const currentScroll = Math.ceil(window.scrollY)
    const location = block.offsetTop
    if (currentScroll + delayScroll >= location) {
      fn()
      window.removeEventListener('scroll', revealAnimationInner)
    }
  }

  window.addEventListener('scroll', revealAnimationInner)    
}


export { revealAnimation }