function counterNumber(counterNumber, ms = 10) {
  const currentNumber = +counterNumber.dataset.counter
  let i = 0
  const counter = window.setInterval(() => {
    counterNumber.textContent = i
    i++ 
    if (i === 100) i += Math.ceil(currentNumber / 2) 
    if (i > currentNumber) window.clearInterval(counter)
  }, ms)
}

export { counterNumber }