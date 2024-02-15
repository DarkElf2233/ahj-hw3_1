export default class Game {
  constructor(holeGame, holeWithGoblin) {
    this.holeWithGoblin = holeWithGoblin;
    this.holeGame = holeGame;
  }

  getRandomNum(currentNum) {
    let randomNum = Math.ceil(Math.random() * 16);
    while (randomNum === currentNum) {
      randomNum = Math.ceil(Math.random() * 16);
    }
    return randomNum;
  }

  changeHole() {
    const randomNum = this.getRandomNum(this.holeWithGoblin.dataset.id);
    this.holeWithGoblin.classList.remove('hole_has-goblin');
    this.holeWithGoblin = this.holeGame.querySelector(`[data-id="${randomNum}"]`);
    this.holeWithGoblin.classList.add('hole_has-goblin');
  }
}
