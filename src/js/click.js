export default class Click {
  constructor(dead, lost) {
    this.dead = dead;
    this.lost = lost;
  }

  checkPoints() {
    if (parseInt(this.dead.textContent) === 10) {
      return 'win';
    } if (parseInt(this.lost.textContent) === 5) {
      return 'lost';
    }
    return false;
  }

  resetGame(message) {
    alert(message);
    this.dead.textContent = 0;
    this.lost.textContent = 0;
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
}
