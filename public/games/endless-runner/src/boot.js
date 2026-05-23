import Phaser from 'phaser';
import WebFontFile from './support_script/webfontloader';
import 'regenerator-runtime/runtime';

const gameState = {
  sceneWidth: 0,
  sceneHeight: 0,
  score: 0,
  music: true,
  sound: true,
};

const playStopAudio = (status, audio) => {
  if (status) {
    if (!audio.isPlaying) {
      audio.play();
    }
  } else {
    audio.stop();
  }
};

class Boot extends Phaser.Scene {
  constructor() {
    super({ key: 'Boot' });
  }

  preload() {
    this.load.html('form', 'form.html');
    this.load.addFile(new WebFontFile(this.load, 'Akaya Telivigala'));
  }

  create() {
    gameState.sceneWidth = this.scale.width;
    gameState.sceneHeight = this.scale.height;

    let savedName = 'Runner';
    try {
      const settings = JSON.parse(localStorage.getItem('playnest-endless-runner-settings') || '{}');
      if (settings.playerName) savedName = settings.playerName;
    } catch {
      /* ignore */
    }

    this.add.text(gameState.sceneWidth / 2, gameState.sceneHeight / 2 - 100, 'Hullo There!', {
      fontSize: '40px',
      fill: '#ffffff',
      fontFamily: 'Akaya Telivigala',
    }).setOrigin(0.5);

    this.add.text(gameState.sceneWidth / 2, gameState.sceneHeight / 2, 'Please enter your username and press "ENTER" to continue', {
      fontSize: '30px',
      fill: '#ffffff',
      fontFamily: 'Akaya Telivigala',
    }).setOrigin(0.5);

    this.nameInput = this.add.dom(gameState.sceneWidth / 2, gameState.sceneHeight / 2 + 100).createFromCache('form');
    const nameField = this.nameInput.getChildByName('name');
    if (nameField) nameField.value = savedName;

    const continueGame = () => {
      const name = this.nameInput.getChildByName('name');
      const value = (name?.value || savedName).trim();
      if (value !== '') {
        gameState.playerName = value;
        try {
          localStorage.setItem('playnest-endless-runner-settings', JSON.stringify({ playerName: value }));
        } catch {
          /* ignore */
        }
        this.scene.stop();
        this.scene.start('Preload');
      }
    };

    this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);
    this.enterKey.on('down', continueGame);

    if (savedName && savedName !== 'Runner' && typeof window !== 'undefined' && 'ontouchstart' in window) {
      this.time.delayedCall(400, continueGame);
    }
  }
}

export { Boot, gameState, playStopAudio };