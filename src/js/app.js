import Game from './game';

const holeGame = document.querySelector('.hole-game');
const holeWithGoblin = document.querySelector('.hole_has-goblin');
const dead = document.querySelector('.dead');
const lost = document.querySelector('.lost');

const game = new Game(holeGame, holeWithGoblin, dead, lost);

holeGame.addEventListener('click', (e) => {
  game.clicked = true;
  game.checkClickedHole(e.target);
});

game.startGame();
