import Test1 from '../js/test1';
import Example2 from '../js/example2';
import Example3 from '../js/example3';
import Phaser from 'phaser';

export const phaserConfig = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 200 }
    }
  },
  scene: [ Test1, Example2, Example3 ]
}
