import 'phaser'
import CountryScene from './scenes/countryScene'
import PreloadScene from './scenes/preloadScene'
import GameManager from "./objects/gameManager";
import MainScene from "./scenes/mainScene";
import ShopScene from './scenes/shopScene';
import LoginScene from './scenes/loginScene';

const DEFAULT_WIDTH = 1280
const DEFAULT_HEIGHT = 720

const config = {
  type: Phaser.AUTO,
  backgroundColor: '#ffffff',
  scale: {
    parent: 'phaser-game',
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: DEFAULT_WIDTH,
    height: DEFAULT_HEIGHT
  },
  scene: [LoginScene, PreloadScene, CountryScene, MainScene, ShopScene],
  physics: {
    default: 'arcade',
    arcade: {
      debug: false,
      gravity: { y: 400 }
    }
  }
}

window.addEventListener('load', () => {
  const game = new Phaser.Game(config)
  game['gameManager'] = new GameManager();
})
