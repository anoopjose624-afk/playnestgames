import '../stylesheets/styler.css';
import Phaser from 'phaser';
import Preload from './preload';
import { Boot } from './boot';
import Menu from './Menu';
import Options from './Options';
import Credits from './Credits';
import Game from './game';
import { GameOver } from './gameOver';
import LeaderBoard from './leaderBoard';
import Instructions from './instructions';
import { gameState } from './boot';

const isLowEnd = typeof navigator !== 'undefined'
  && ((navigator.deviceMemory && navigator.deviceMemory <= 2)
    || (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4 && window.innerWidth < 500));

gameState.lowEnd = isLowEnd;

const config = {
  type: Phaser.AUTO,
  parent: 'game',
  width: 960,
  height: 520,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 960,
    height: 520,
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  dom: {
    createContainer: true,
  },
  scene: [Boot, Preload, Menu, Options, Credits, Game, GameOver, LeaderBoard, Instructions],
};

const game = new Phaser.Game(config);
window.__pnPhaserGame = game;
window.__pnGameState = gameState;

export default game;
