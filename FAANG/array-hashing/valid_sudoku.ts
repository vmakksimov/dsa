/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku1(board: string[][]) {
  const rows = new Map<number, Set<string>>();
  const columns = new Map<number, Set<string>>();
  const subBox = new Map<string, Set<string>>();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board.length; j++) {
      const number = board[i][j];
      const subColumn = Math.floor(j / 3);
      const subRow = Math.floor(i / 3);
      const boxKey = `${subRow}-${subColumn}`;

      if (number === ".") {
        continue;
      }

      if (!rows.has(i)) rows.set(i, new Set());
      if (!columns.has(j)) columns.set(j, new Set());
      if (!subBox.has(boxKey)) subBox.set(boxKey, new Set());

      if (
        rows.get(i)?.has(number) ||
        columns.get(j)?.has(number) ||
        subBox.get(boxKey)?.has(number)
      ) {
        return false;
      }

      rows.get(i)?.add(number);
      columns.get(j)?.add(number);
      subBox.get(boxKey)?.add(number);
    }
  }
  return true;
}

function isValidSudoku(board: string[][]) {
  let rows = new Array(board.length).fill(new Set())
  let cols = new Array(board.length).fill(null).map(() => new Set());
  let boxes = {};

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board.length; col++) {
      let val = board[row][col];

      if (val === ".") continue;

      if (rows[row].has(val)) {
        return false;
      } else {
        rows[row].add(val);
      }

      if (cols[col].has(val)) {
        return false;
      } else {
        cols[col].add(val);
      }

      let boxKey = "" + Math.floor(row / 3) + Math.floor(col / 3);

      if (!boxes[boxKey]) {
        boxes[boxKey] = new Set();
      }

      if (boxes[boxKey].has(val)) {
        return false;
      } else {
        boxes[boxKey].add(val);
      }
    }
  }

  return true;
}

console.log(
  isValidSudoku([
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ]),
);
