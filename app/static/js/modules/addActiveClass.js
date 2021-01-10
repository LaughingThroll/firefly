function addActiveClass (commonClass, activeClass) {
  return function ({ path, target })  {
    const pathClassNames = [...path].flatMap(el => el.className?.split(' '))
    if (pathClassNames.includes(commonClass)) {
      Array.from(this.children[0].children).forEach(el => el.classList.remove(activeClass))
      target.closest(`.${commonClass}`).classList.add(activeClass)
    }
  }
} 

export { addActiveClass }