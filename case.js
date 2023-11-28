let canvas = document.querySelector('canvas');
let c = canvas.getContext('2d')

canvas.width =innerWidth
canvas.height =innerHeight

class Player {
    constructor(x, y, radius, color) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2,false)
        c.fillStyle = this.color
        c.fill()
    }
}

class Projectile {
    constructor(x, y, radius, color, velocity) {
        this.x = x
        this.y = y
        this.radius = radius
        this.color = color
        this.velocity =velocity
    }

    draw() {
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2,false)
        c.fillStyle = this.color
        c.fill()
    }

    update() {
        this.draw()
        this.x = this.x + this.velocity.x
        this.y = this.y + this.velocity.y
    }
}

let x = canvas.width/2
let y = canvas.height/2

let  player =new Player(x, y, 30, 'blue')
player.draw()

let  projectile2 = new Projectile(
    canvas.width / 2, canvas.height / 2, 5, 'green',{x:-1, y:-1})
let projiectiles = [projectile2]


function animate () {
    requestAnimationFrame(animate)
   projiectiles.forEach((projiectiles) =>  {
       projiectiles.update()
   });
}

addEventListener('click', (event) => {})
animate()