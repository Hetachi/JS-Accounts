import Phaser from 'phaser';

class Example2 extends Phaser.Scene {
  constructor() {
    super({key:'Example2'})
  }

  preload() {
    this.text = this.add.text(0,0, "Welcome to example2!", {font: "40px Sans-serif"})

    var tween = this.tweens.add({
      targets: this.text,
      x:200,
      y:250,
      duration: 2000,
      ease:"Elastic",
      easeParams: [1.5,0.5],
      delay: 0,
      onComplete: function(src,tgt) {
        tgt[0].setColor('Gray')
      }
    })

    this.key_1 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ONE)
    this.key_3 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.THREE)
  }

  update(delta) {
    if(this.key_3.isDown) {
      this.scene.start('Example3')
    }
    if(this.key_1.isDown) {
      this.scene.start('Test1')
    }
  }
}


export default Example2
