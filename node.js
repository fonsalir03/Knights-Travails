export class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.neighbors = [];
    this.parent = null;
    //generate all 8 possible neighbors

    //bottom left neighbors
    this.neighbors.push([this.x - 2, this.y - 1]);
    this.neighbors.push([this.x - 1, this.y - 2]);
    //bottom right neighbors
    this.neighbors.push([this.x + 2, this.y - 1]);
    this.neighbors.push([this.x + 1, this.y - 2]);
    //top left neighbors
    this.neighbors.push([this.x - 2, this.y + 1]);
    this.neighbors.push([this.x - 1, this.y + 2]);
    //top right neighbors
    this.neighbors.push([this.x + 2, this.y + 1]);
    this.neighbors.push([this.x + 1, this.y + 2]);

    this.neighbors = this.neighbors.filter((cord) => this.#checkRange(cord));
  }

  #checkRange(cordinates) {
    let x = cordinates[0];
    let y = cordinates[1];

    if (x < 0 || x > 7 || y < 0 || y > 7) return false;
    return true;
  }
}
