from collections import defaultdict


def is_valid_sudoku(board):
    rows = [set() for _ in  range(len(board))]
    col = [set() for _ in  range(len(board))]
    boxes = defaultdict(set)

    for row in  range(len(board)):
        for cow in  range(len(board)):
            val = board[row][cow]
            if val == ".":
                continue

            if val in rows[row]:
                return False
            rows[row].add(val)

            if val in col[cow]:
                return False
            col[cow].add(val)

            box_key = f"{row // 3}{cow // 3}"
            

            if val in boxes[box_key]:
                return False
            boxes[box_key].add(val)

    return True


print(is_valid_sudoku(
    [
        ["1", "2", ".", ".", "3", ".", ".", ".", "."],
        ["4", ".", ".", "5", ".", ".", ".", ".", "."],
        [".", "9", "8", ".", ".", ".", ".", ".", "3"],
        ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
        [".", ".", ".", "8", ".", "3", ".", ".", "5"],
        ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
        [".", ".", ".", ".", ".", ".", "2", ".", "."],
        [".", ".", ".", "4", "1", "9", ".", ".", "8"],
        [".", ".", ".", ".", "8", ".", ".", "7", "9"],
    ]
))
