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
/*
const checkRows = (board) => {
    const results = [];
    board.forEach(row => {
        const checkedValues = [];
        row.forEach(e => {
            if (checkedValues.indexOf(e) === -1 && e > 0) {
                checkedValues.push(e)
            }
        });
        if (row.join() == checkedValues.join()) {
            // console.log(`row ${index} passes!`)
            results.push(true)
        } else {
            // console.log(`${row.join()} doesn't match ${checkedValues.join()}`)
            results.push(false)
        }
    });
    if (results.every(res => {
        return res
    })) {
        return true
    } else {
        return false
    }
}

console.log('Rows of validSolution = ', checkRows(validSolution))


const checkColumns = (board) => {
    const columnsArray = [
        [],[],[],[],[],[],[],[],[]
    ]
    board.forEach((row, rowIndex) => {
        row.forEach((e, i) => {
            columnsArray[rowIndex].push(board[i][rowIndex])
        });
    })
    console.log('Rows of columnsArray = ', checkRows(columnsArray))
}

checkColumns(validSolution)
*/

const checkSquares = (board) => {
    const squaresArray = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    for (pushRow = 0; pushRow < squaresArray.length; pushRow++) {
        const currentRow = 0;
        const currentElement = 0;
        for (i = 0; i < 3; i++) {
            squaresArray[pushRow].push(board[currentRow][i])
        }
        currentRow++; // doin' the same thing but with an incremented row
        for (j = 0; j < 3; j++) {
            squaresArray[pushRow].push(board[currentRow][j])
        }
        currentRow++;
        for (k = 0; k < 3; k++) {
            squaresArray[pushRow].push(board[currentRow][k])
        }
    }

    console.log(squaresArray)
}

checkSquares(validSolution)
