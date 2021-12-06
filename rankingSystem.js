// https://www.codewars.com/kata/51fda2d95d6efda45e00004e/train/javascript

class RankSystem {
    rank = -8;
    progress = 0;

    constructor() {
        // this.rank = -8;
        // this.progress = 0;
    }
    incProgress = (score) => {
        if (this.rank + score === 0) {
            this.rank = 1;
        } else {
            this.rank += score;
        }
    }
}

const myRankSystem = new RankSystem;
myRankSystem.incProgress(8);

console.log(myRankSystem.rank);
