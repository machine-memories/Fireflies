let anchoP = screen.width
let ancho
let n = 10
let m = 0
let flies = []
let flight = 0
let ruido = 0
let ruido2 = 0
let ruidoInc = 0

function setup() {
  
  if(anchoP < 500){
    ancho = 350
    m = 45
  }
  else{
    ancho = 600
    m = 100
  }

  n = random(10,20)

  createCanvas(ancho, ancho)
  colorMode(360,100,100)

  for(let i = 0; i < n; i++){
    flies[i] = new Firefly(random(20))
  }
}

function draw() {
  
  background("#0F403222");

  strokeWeight(1)
  noFill()
  stroke("#F2E205")
  square(m,m,width-2*m)

  for(let i = 0; i < n; i++){
    flies[i].render()
    flies[i].move()
  }

  //CAPTURE VIDEO
  //  if(frameCount == 1){
  //    capturer.start()
  //  }
  // if(frameCount < 2400){
  //    capturer.capture(canvas)
  //  } else if(frameCount == 2400){
  //    capturer.save()
  //    capturer.stop()
  //  }
  
}

let body = document.querySelector("#body")

window.addEventListener('dblclick', () =>
{
  if(!document.fullscreenElement)
  {
    body.requestFullscreen()
  }
  else
  {
    document.exitFullscreen()
  }
})