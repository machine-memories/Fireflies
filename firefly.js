class Firefly{

    constructor(ruidoInc){
        this.ruidoInc = random(ruidoInc)
        this.x = random(m, width-m)
        this.y = random(m+20,height-m-20)
        this.vx = random(2,5)
        this.vy = random(2,5)
    }

    render(){
        // strokeWeight(0)
        // fill("#F2E20533")
        // circle(this.x,this.y,15)
        strokeWeight(3)
        fill("#F2E205")
        point(this.x,this.y)
    }

    move(){
        
        ruido = noise(ruidoInc)
        ruidoInc += 0.001
        ruido2 = ruido*10
        flight = map(ruido2,0,10,-10,10)
        

        this.x += 0.1*flight
        this.y -= 0.5

        if(this.y < m){
            this.x = random(m, width-m)
            this.y = height-m
        }

        if(this.x > width-m || this.x < m){
            this.x = random(m, width-m)
            this.y = height-m
        }
    }
}