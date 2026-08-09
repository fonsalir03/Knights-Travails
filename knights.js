import { Node } from "./node.js";

class Knight {
  constructor() {
    this.currentPos = null;
    this.targetPos = null;
  }

  #alreadyVisited(visited, nodeToFind) {
    let elemFound = false;
    visited.forEach((node) => {
      if (node.x == nodeToFind.x && node.y == nodeToFind.y) {
        elemFound = true;
      }
    });
    return elemFound;
  }

  traverse(visited = [], queue = [], node = this.currentPos) {
    //base case
    if (this.targetPos.parent) return;
    if (this.#alreadyVisited(visited, node)) return;
    //check if node is the target
    if (node.x == this.targetPos[0] && node.y == this.targetPos[1]) {
      this.targetPos = node;
    }
    //updating the queue
    node.neighbors.forEach((n) => {
      let newNode = new Node(n[0], n[1]);
      newNode.parent = node;
      queue.push(newNode);
    });
    //mark node as visited
    visited.push(node);

    //process the queue
    for (let i = 0; i < queue.length; i++) {
      let nextNode = queue.shift();
      this.traverse(visited, queue, nextNode);
    }
  }

  logPath(path) {
    console.log(`You made it in ${path.length - 1} moves! Here's your path:`);
    path.forEach((node) => console.log(node));
  }

  moves(start, end) {
    this.currentPos = new Node(start[0], start[1]);
    this.targetPos = end;
    this.traverse();

    let tmp = this.targetPos;
    const path = [];
    while (tmp.parent) {
      let node = [tmp.x, tmp.y];
      path.unshift(node);
      tmp = tmp.parent;
    }
    path.unshift([this.currentPos.x, this.currentPos.y]);
    this.logPath(path);
  }
}
