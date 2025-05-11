class Knight {
  constructor(position, target) {
    this.position = position;
    this.target = target;
    this.moves = getValidMoves(this.position);
  }
  levelOrder(callback) {
    levelOrderRecursion([])
  }
}

function getValidMoves(coordinates) {
  const x = coordinates[0];
  const y = coordinates[1];
  const validMoves = [];
  const potentialMoves =
    [[x - 1, y + 2],
    [x + 2, y + 1],
    [x + 1, y + 2],
    [x + 2, y - 1],
    [x + 1, y - 2],
    [x - 1, y - 2],
    [x - 2, y - 1],
    [x - 2, y + 1]];
  potentialMoves.forEach(move => {
    if (move[0] >= 0 && move[0] <= 7 && move[1] >= 0 && move[1] <= 7) validMoves.push(move);
  })
  return validMoves;
}

function knightMoves(start, end) {
  const root = new Knight(start, end);
}

console.log(getValidMoves([0, 0]))