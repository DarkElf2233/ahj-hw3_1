import Game from "./game";
import Click from "./click";

const holes = [...document.querySelectorAll('.hole')];
const holeGame = document.querySelector('.hole-game');
const holeWithGoblin = document.querySelector('.hole_has-goblin');
const dead = document.querySelector('.dead');
const lost = document.querySelector('.lost');

const game = new Game(holeGame, holeWithGoblin);
const click = new Click(dead, lost);

let clicked = false;
for (const hole of holes) {
  hole.addEventListener('click', () => {
    clicked = true;
    click.checkClickedHole(hole);
  })
}

setInterval(() => {
  game.changeHole();
  if (!clicked) {
    click.lost.textContent = parseInt(click.lost.textContent) + 1;
    if (click.checkPoints() === 'lost') {
      click.resetGame('Вы проиграли!');
    }
  }
  clicked = false;
}, 1000)
