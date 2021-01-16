export default class Shapes {
  constructor(ctx) {
    this.ctx = ctx
  }
  #degreeToRad = degree => degree * Math.PI / 180

  fillCircle(x, y, size, fill = 'black') {
    this.ctx.save()
    this.ctx.fillStyle = fill
    this.ctx.beginPath()
    this.ctx.arc(x, y, size, 0, this.#degreeToRad(360))
    this.ctx.fill()
    this.ctx.restore()
  }

  strokeCircle(x, y, size, stroke = 'black', strokeWidth = 2) {
    this.ctx.save()
    this.ctx.strokeStyle = stroke
    this.ctx.lineWidth = strokeWidth
    this.ctx.beginPath()
    this.ctx.arc(x, y, size, 0, this.#degreeToRad(360))
    this.ctx.stroke()
    this.ctx.restore()
  }

  fillRect(x, y, width, height, fill = 'black') {
    this.ctx.save()
    this.ctx.fillStyle = fill
    this.ctx.rect(x, y, width, height)
    this.ctx.fill()
    this.ctx.restore()
  }

  strokeRect(x, y, width, height, stroke = 'black', strokeWidth = 2) {
    this.ctx.save()
    this.ctx.strokeStyle = stroke
    this.ctx.lineWidth = strokeWidth
    this.ctx.rect(x, y, width, height)
    this.ctx.stroke()
    this.ctx.restore()
  }

  fillRoundRect(x, y, width, height, fill = 'black') {
    this.ctx.save()
    this.ctx.strokeStyle = fill
    this.ctx.fillStyle = fill
    this.ctx.rect(x, y, width, height)
    this.ctx.lineJoin = 'round'
    this.ctx.lineWidth = width
    this.ctx.stroke()
    this.ctx.fill()
    this.ctx.restore()
  }

  strokeRoundRect(x, y, width, height, stroke = 'black', strokeWidth = 3) {
    this.ctx.save()
    this.ctx.strokeStyle = stroke
    this.ctx.strokeWidth = strokeWidth
    this.ctx.beginPath()
    this.ctx.lineJoin = 'round'
    this.ctx.strokeStyle = stroke
    this.ctx.lineWidth = strokeWidth
    this.ctx.rect(x, y, width, height)
    this.ctx.stroke()
    this.ctx.restore()
  }

  #mainTriangle(startX, startY, middleX, middleY, endX, endY) {
    this.ctx.beginPath()
    this.ctx.moveTo(startX, startY)
    this.ctx.lineTo(middleX, middleY)
    this.ctx.lineTo(endX, endY)
    this.ctx.closePath()
  }

  fillTriangle(startX, startY, middleX, middleY, endX, endY, fill = 'black') {
    this.ctx.save()
    this.ctx.fillStyle = fill
    this.#mainTriangle(startX, startY, middleX, middleY, endX, endY)
    this.ctx.fill()
    this.ctx.restore()
  }
  strokeTriangle(startX, startY, middleX, middleY, endX, endY, stroke = 'black', strokeWidth = 2) {
    this.ctx.save()
    this.ctx.strokeStyle = stroke
    this.ctx.lineWidth = strokeWidth
    this.#mainTriangle(startX, startY, middleX, middleY, endX, endY)
    this.ctx.stroke()
    this.ctx.restore()
  }
  fillRoundTriangle(startX, startY, middleX, middleY, endX, endY, fill = 'black') {
    this.ctx.save()
    this.ctx.fillStyle = fill
    this.ctx.lineJoin = 'round'
    this.ctx.lineWidth = 20
    this.#mainTriangle(startX, startY, middleX, middleY, endX, endY)
    this.ctx.fill()
    this.ctx.stroke()
    this.ctx.restore()
  }
  strokeRoundTriangle(startX, startY, middleX, middleY, endX, endY, stroke = 'black', strokeWidth = 5) {
    this.ctx.save()
    this.ctx.lineJoin = 'round'
    this.ctx.strokeStyle = stroke
    this.ctx.lineWidth = strokeWidth
    this.#mainTriangle(startX, startY, middleX, middleY, endX, endY)
    this.ctx.stroke()
    this.ctx.restore()
  }

  rectInCircle(options) {
    // const options = {
    // x, 
    // y,
    // radius
    // circle: {
    // circleColor: 'green',
    // circleWidth: 10,
    // },
    // lineWidth: {
    // lineColor: 'black',
    // lineWidth: 10,
    // plusDistance: 0,
    // rotateLine: 0
    // }
    // }

    this.ctx.save()
    this.ctx.strokeStyle = options.circle?.circleColor || 'green'
    this.ctx.lineWidth = options.circle?.circleWidth || 10
    this.ctx.beginPath()
    this.ctx.arc(options.x, options.y, options.radius, 0, this.#degreeToRad(360))
    this.ctx.stroke()
    this.ctx.restore()

    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.translate(options.x, options.y)
    this.ctx.rotate(this.#degreeToRad(options.line?.rotateLine || 0))
    this.ctx.translate(0, 0)
    this.ctx.lineWidth = options.line?.lineWidth || 10
    this.ctx.lineCap = 'round'
    this.ctx.strokeStyle = options.line?.lineColor || 'black'
    this.ctx.moveTo(0 - options.radius - (options.line?.plusDistnace || 0), 0 + options.radius + (options.line?.plusDistnace || 0))
    this.ctx.lineTo(0 + options.radius + (options.line?.plusDistnace || 0), 0 - options.radius - (options.line?.plusDistnace || 0))
    this.ctx.stroke()
    this.ctx.restore()

    this.ctx.save()
    this.ctx.beginPath()
    this.ctx.strokeStyle = options.circle?.circleColor || 'green'
    this.ctx.lineWidth = options.circle?.circleWidth || 10
    this.ctx.arc(options.x, options.y, options.radius, this.#degreeToRad(120 + (options.line?.rotateLine || 0)), this.#degreeToRad(150 + (options.line?.rotateLine || 0)))
    this.ctx.stroke()
    this.ctx.restore()
  }

  zigZag(startX, startY, options) {
    // const options = {
    // distance: 6
    // amplitude: 5
    // count: 10
    // reverse: 1
    // lineWidth: 3
    // strokeStyle = 'red'
    // }
    const count = options?.count || 5
    const mainLineWidth = options?.lineWidth || 3
    const mainLineColor = options?.strokeStyle || 'red'
    const distance = options?.distance || 6
    const amplitude = options?.amplitude || 4
    const reverse = +options?.reverse || +false

    let boldWidth = mainLineWidth + 2
    const offset = boldWidth / 3

    this.ctx.save()
    this.ctx.strokeStyle = mainLineColor
    this.ctx.lineCap = 'round'
    this.ctx.lineJoin = 'round'
    for (let pattern = 0; pattern < count; pattern++) {
      !(pattern % 2) ? this.ctx.lineWidth = mainLineWidth || 3 : this.ctx.lineWidth = boldWidth
      this.ctx.beginPath()
      this.ctx.moveTo(startX + offset, startY)
      this.ctx.lineTo(startX += distance, pattern % 2 === reverse ? startY += amplitude : startY -= amplitude)
      this.ctx.stroke()
    }
    this.ctx.restore()
  }
  wave(startX, startY, options) {
    const count = options?.count || 3
    const margin = options?.margin || 15
    const width = options?.width || 180
    const frequency = options?.frequency || .4
    const amplitude = options?.amplitude || 3
    this.ctx.save()
    this.ctx.strokeStyle = options?.strokeStyle || 'violet'
    this.ctx.fillStyle = options?.strokeStyle || 'violet'
    this.ctx.lineWidth = options?.lineWidth || 5
    
    this.ctx.beginPath()
    
    for(let num = 0; num < count; num++) {  
      this.ctx.moveTo(startX, startY)
      
      for(let i = 0; i < width; i++) {
        this.ctx.lineTo(startX + i, startY  + Math.sin(i * frequency) * amplitude)
      }
      this.ctx.stroke()
      startY += margin
    }
    this.ctx.restore()
  }
}