import Shapes from './shapes'

const canvas = Array.from(document.querySelectorAll('.canvas'))

function sizeCanvas() {
  canvas.forEach(el => {
    const { width, height } = document.body.getBoundingClientRect()
    el.width = width * 2
    el.height = height * 2
  })
}
// for retina
canvas.forEach(el => {
  el.style.width = '100%'
  el.style.height = '100%'
})

sizeCanvas()
window.addEventListener('resize', sizeCanvas)

const contexts = canvas.map(canvas => new Shapes(canvas.getContext('2d')))

function render() {

  contexts.forEach((el, i) => {
    el.ctx.clearRect(0, 0, canvas[i].width, canvas[i].height)
  })

  contexts[0].wave(canvas[0].width / 2, canvas[0].height / 2)
  

  window.requestAnimationFrame(render)

}

render()
