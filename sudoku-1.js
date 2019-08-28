const validSolution = [
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

const squaresAsRows = [];
const squaresToRows = (arr, rBase, eBase) => {
  const result = [];
  for (row = rBase; row <= rBase + 2; row++) {
    for (e = eBase; e <= eBase + 2; e++) {
      result.push(arr[row][e]);
    }
  }
  return result;
};

for (i = 0; i <= 6; i = i + 3) {
  for (j = 0; j <= 6; j = j + 3) {
    squaresAsRows.push(squaresToRows(validSolution, i, j));  }
}

const checkRows = board => {
  const results = [];
  board.forEach(row => {
    const checkedValues = [];
    row.forEach(e => {
      if (checkedValues.indexOf(e) === -1 && e > 0) {
        checkedValues.push(e);
      }
    });
    if (row.join() == checkedValues.join()) {
      // console.log(`row ${index} passes!`)
      results.push(true);
    } else {
      // console.log(`${row.join()} doesn't match ${checkedValues.join()}`)
      results.push(false);
    }
  });
  if (
    results.every(res => {
      return res;
    })
  ) {
    return true;
  } else {
    return false;
  }
};

console.log("Rows of validSolution = ", checkRows(validSolution));

const checkColumns = board => {
  const columnsArray = [[], [], [], [], [], [], [], [], []];
  board.forEach((row, rowIndex) => {
    row.forEach((e, i) => {
      columnsArray[rowIndex].push(board[i][rowIndex]);
    });
  });
  console.log("Rows of columnsArray = ", checkRows(columnsArray));
};

checkColumns(validSolution);

console.log("Rows of squaresAsRows = ", checkRows(squaresAsRows));

