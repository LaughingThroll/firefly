
function throttle(f, t) {
  return function (args) {
    let previousCall = this.lastCall
    this.lastCall = Date.now()
    if (previousCall === undefined || (this.lastCall - previousCall) > t) f(args)
  }
}

export { throttle }