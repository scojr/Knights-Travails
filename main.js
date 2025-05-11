class Knight {
  constructor(position, target) {
    this.position = position;
    this.target = target;
    this.moves = getMoves(this.position);
  }
}

function getMoves(coordinates) {
  const x = coordinates[0];
  const y = coordinates[1];
  return [[x - 1, y + 2],
  [x + 1, y + 2],
  [x + 2, y + 1],
  [x + 2, y - 1],
  [x + 1, y - 2],
  [x - 1, y - 2],
  [x - 2, y - 1],
  [x - 2, y + 1]];
}