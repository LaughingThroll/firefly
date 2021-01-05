const debounce = (fn, ms) => {
  let cooldown = false 
  return function(...args) {
    if (cooldown) return
    fn.apply(this, args)
    cooldown = true
    window.setTimeout(() => cooldown = false, ms)
  }
}

export default debounce