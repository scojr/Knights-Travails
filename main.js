class KnightNode {
  constructor(position, target, parent = null) {
    this.position = position;
    this.target = target;
    this.parent = parent;
  }
  generateChildren() {
    const children = [];
    this.getValidMoves().forEach(move => {
      const child = new KnightNode(move, this.target, this);
      children.push(child);
    })
    return children;
  }
  getValidMoves() {
    const x = this.position[0];
    const y = this.position[1];
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
}

class Graph {
  constructor(start, end) {
    this.root = new KnightNode(start, end);
  }
  findPath() {
    const targetNode = findPathRecursion([this.root]);
    const pathToTarget = getParentRecursion(targetNode).reverse();
    return formatResults(pathToTarget);

    function formatResults(array) {
      if (array.length - 1 === 1) console.log(`You made it in ${array.length - 1} move! Here's your path.`);
      else console.log(`You made it in ${array.length - 1} moves! Here's your path.`);
      array.forEach(e => {
        console.log(e)
      })
    }

    function getParentRecursion(node, path = []) {
      path.push(node.position);
      if (node.parent === null) return path;
      return getParentRecursion(node.parent, path);
    }

    function findPathRecursion(queue) {
      if (queue[0] === null || queue.length === 0) return;
      if (queue[0].position.toString() === queue[0].target.toString()) return queue[0];
      queue[0].generateChildren().forEach(child => {
        queue.push(child);
      })
      queue.shift();
      return findPathRecursion(queue);
    }
  }
}

function knightMoves(start, end) {
  const newGraph = new Graph(start, end);
  newGraph.findPath();
}

knightMoves([3, 3], [4, 3]);
/*
You made it in 3 moves! Here's your path.
[ 3, 3 ]
[ 5, 4 ]
[ 6, 2 ]
[ 4, 3 ]
 */

knightMoves([0, 0], [7, 7]);
/*
You made it in 6 moves! Here's your path.
[ 0, 0 ]
[ 2, 1 ]
[ 1, 3 ]
[ 3, 4 ]
[ 4, 6 ]
[ 6, 5 ]
[ 7, 7 ]
 */