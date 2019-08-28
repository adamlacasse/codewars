const board = [
  [5, 3, 4, 6, 7, 8, 9, 1, 2],
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]
];

const squaresArray = [
  [], // TOP LEFT
  [], // MIDDLE LEFT
  [], // BOTTOM LEFT
  [], // TOP MIDDLE
  [], // MIDDLE MIDDLE
  [], // BOTTOM MIDDLE
  [], // TOP RIGHT
  [], // MIDDLE RIGHT
  [] // BOTTOM RIGHT
];

const squareFinder = (arr, rBase, eBase) => {
    const result = [];
    for (row = rBase; row <= rBase + 2; row++) {
        for (e = eBase; e <= eBase + 2; e++) {
            result.push(arr[row][e])
        }
    }
    return result;
}

console.log(squareFinder(board, 6, 6))
