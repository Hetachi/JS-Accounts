import Phaser from 'phaser';

class Test1 extends Phaser.Scene {
  constructor() {
    super({key:'Test1'})
  }

  preload() {
    this.load.image('book', '../../assets/8.png')
  }

  create() {
    this.image = this.add.image(400,300, 'book')

    this.key_A = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
    this.key_D = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

    this.input.on('pointerdown', function(event) {
      this.image.x = event.x
      this.image.y = event.y
    }, this)

    this.input.keyboard.on('keyup_P', function(event) {
      const physicsImage = this.physics.add.image(this.image.x, this.image.y, 'book')
      physicsImage.setVelocity(Phaser.Math.RND.integerInRange(-100,200), -300)
    }, this)

    this.input.keyboard.on('keyup', function(e) {
        if(e.key == '2') {
          this.scene.start('Example2')
        }
    }, this)
  }

  update(delta) {
    if(this.key_A.isDown) {
      this.image.x--
    }

    if(this.key_D.isDown) {
      this.image.x++
    }
  }
}

export default Test1
