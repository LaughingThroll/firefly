import Shapes from './shapes'

const canvas = Array.from(document.querySelectorAll('.canvas'))

function sizeCanvas() {
  canvas.forEach(el => {
    const { width, height } = document.body.getBoundingClientRect()
    el.width = width
    el.height = height
  })
}

sizeCanvas()
window.addEventListener('resize', sizeCanvas)

const contexts = canvas.map(canvas => new Shapes(canvas.getContext('2d')))

function render() {

  contexts.forEach((el, i) => {
    el.ctx.clearRect(0, 0, canvas[i].width, canvas[i].height)
  })

  contexts[0].rectInCircle({
    x: canvas[0].width / 2,
    y: canvas[0].height / 2,
    radius: 30
  })
  

  window.requestAnimationFrame(render)

}

render()
