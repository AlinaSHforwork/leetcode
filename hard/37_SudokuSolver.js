/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
    const isValid = (row, col, c) => {
        for (let i = 0; i < 9; i++){
            if (board[i][col] === c){
                return false;
            }
            if (board[row][i] === c){
                return false;
            }

            const boxRow = 3 * Math.floor(row/3) + Math.floor(i/3);
            const boxCol = 3 * Math.floor(col/3) + (i%3);
            
            if(board[boxRow][boxCol] === c){
                return false;
            }
        }
        return true
    }

    const solve = (s) => {
        if (s === 81) {
            return true;
        }

        const i = Math.floor(s / 9);
        const j = s % 9;

        if (board[i][j] !== '.'){
            return solve(s + 1);
        }

        for (let num = 1; num <= 9; num++ ){
            const c = String(num);

            if (isValid(i,j,c)){
                board[i][j] = c

                if (solve(s + 1)){
                    return true;
                }

                board[i][j] = '.'
            }
        }
        return false
    }
    solve(0);    
};

/*
Explanation:
When solving a Sudoku puzzle, we can use a backtracking algorithm to fill in the empty cells. The algorithm works as follows:

1. We define a helper function isValid(row, col, c) that checks if placing the character c in the cell at (row, col) is valid according to Sudoku rules (i.e., c is not already present in the same row, column, or 3x3 sub-box).

2. We define another helper function solve(s) that attempts to fill the Sudoku board starting from the s-th cell (where s ranges from 0 to 80, representing the 81 cells in a 9x9 grid).

3. If we reach s = 81, it means we have successfully filled all cells, and we return true.

4. For each cell, if it is already filled (not '.'), we simply move to the next cell by calling solve(s + 1).

5. If the cell is empty ('.'), we try placing each digit from '1' to '9' in that cell. For each digit, we check if it is valid using the isValid function.

6. If placing the digit is valid, we place it on the board and recursively call solve(s + 1) to attempt to fill the next cell.

7. If the recursive call returns true, we have found a solution, and we return true.

8. If placing the digit does not lead to a solution, we backtrack by resetting the cell to '.' and trying the next digit.

9. If none of the digits from '1' to '9' can be placed in the cell, we return false to backtrack further.

10. Finally, we call solve(0) to start solving from the first cell of the board.
*/