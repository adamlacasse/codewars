const validArray = [
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
    rows = board[0] thru board[8]
    columns = board[nth row][0 thru 8]

    block upper left = board[0 thru 2][0 thru 2]
    block upper mid = board[0 thru 2][3 thru 5]
    block upper right = board[0 thru 2][6 thru 8]

    block mid left = board[3 thru 5][0 thru 2]
    block mid mid = board[3 thru 5][3 thru 5]
    block mid right = board[3 thru 5][6 thru 8]

    block lower left = board[6 thru 8][0 thru 2]
    block lower mid = board[6 thru 8][3 thru 5]
    block lower right = board[6 thru 8][6 thru 8]
*/

const exactlyOneOccuranceOfEachNumber = array => {
    const validities = [];

    for (let index = 1; index <= 9; index++) {
        let instancesOfTheNumber = array.reduce((previousValue, currentValue) => (currentValue === index ? previousValue + 1 : previousValue), 0);
        if (instancesOfTheNumber !== 1) {
            validities.push(false);
        } else {
            validities.push(true);
        }
    }

    return validities.every(value => value) && !array.includes(0);
}

const arrayOfArraysIsValid = arrayOfArrays => {
    let isValid = true;

    arrayOfArrays.forEach(array => {
        if(!exactlyOneOccuranceOfEachNumber(array)) {
            isValid = false;
        }
    });

    return isValid;
}

function validSolution(board) {
    const columns = {
        0: [],
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: [],
        8: [],
    }

    const blocks = {
        upperLeft: [],
        upperMid: [],
        upperRight: [],
        midLeft: [],
        midMid: [],
        midRight: [],
        lowerLeft: [],
        lowerMid: [],
        lowerRight: [],
    }

    // looping over each row
    board.forEach((row, rowNumber) => {
        for (let columnNumber = 0; columnNumber <= 8; columnNumber++) {
            // build the columns
            columns[columnNumber].push(row[columnNumber])

            // build the blocks
            if (rowNumber <= 2 && columnNumber <= 2) {
                blocks.upperLeft.push(row[columnNumber]);
            } else if (rowNumber <= 2 && columnNumber <= 5) {
                blocks.upperMid.push(row[columnNumber]);
            } else if (rowNumber <= 2 && columnNumber <= 8) {
                blocks.upperRight.push(row[columnNumber]);
            } else if (rowNumber <= 5 && columnNumber <= 2) {
                blocks.midLeft.push(row[columnNumber]);
            } else if (rowNumber <= 5 && columnNumber <= 5) {
                blocks.midMid.push(row[columnNumber]);
            } else if (rowNumber <= 5 && columnNumber <= 8) {
                blocks.midRight.push(row[columnNumber]);
            } else if (columnNumber <= 2) {
                blocks.lowerLeft.push(row[columnNumber]);
            } else if (columnNumber <= 5) {
                blocks.lowerMid.push(row[columnNumber]);
            } else if (columnNumber <= 8) {
                blocks.lowerRight.push(row[columnNumber]);
            }
        }
    });

    const validColumns = arrayOfArraysIsValid(Object.values(columns));
    const validBlocks = arrayOfArraysIsValid(Object.values(blocks));
    const validRows = arrayOfArraysIsValid(board);

    return {
        validColumns,
        validBlocks,
        validRows,
    }
}

console.log(validSolution(validArray))
