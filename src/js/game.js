export default class Game {
  constructor(holeGame, holeWithGoblin, dead, lost) {
    this.holeWithGoblin = holeWithGoblin;
    this.holeGame = holeGame;
    this.dead = dead;
    this.lost = lost;

    this.clicked = false;
  }

  getRandomNum(currentNum) {
    let randomNum = Math.ceil(Math.random() * 16);
    while (randomNum === currentNum) {
      randomNum = Math.ceil(Math.random() * 16);
    }
    return randomNum;
  }

  resetGame(message) {
    alert(message);
    this.dead.textContent = 0;
    this.lost.textContent = 0;
  }

  checkPoints() {
    if (parseInt(this.dead.textContent) === 10) {
      return 'win';
    } if (parseInt(this.lost.textContent) === 5) {
      return 'lost';
    }
    return false;
  }

  changeHole() {
    const randomNum = this.getRandomNum(this.holeWithGoblin.dataset.id);
    this.holeWithGoblin.classList.remove('hole_has-goblin');
    this.holeWithGoblin = this.holeGame.querySelector(`[data-id="${randomNum}"]`);
    this.holeWithGoblin.classList.add('hole_has-goblin');
  }

  checkClickedHole(hole) {
    if (hole.classList.contains('hole_has-goblin')) {
      this.dead.textContent = parseInt(this.dead.textContent) + 1;
      if (this.checkPoints() === 'win') {
        this.resetGame('Победа!');
      }
    } else {
      this.lost.textContent = parseInt(this.lost.textContent) + 1;
      if (this.checkPoints() === 'lost') {
        this.resetGame('Вы проиграли!');
      }
    }
  }

  startGame() {
    setInterval(() => {
      this.changeHole();
      if (!this.clicked) {
        this.lost.textContent = parseInt(this.lost.textContent) + 1;
        if (this.checkPoints() === 'lost') {
          this.resetGame('Вы проиграли!');
        }
      }
      this.clicked = false;
    }, 1000);
  }
}
