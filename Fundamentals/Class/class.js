class Square {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  expand() {
    this.width *= 2;
    this.height *= 2;
    console.log(this.width, this.height);
  }

  shrink() {
    this.width /= 2;
    this.height /= 2;
    console.log('Shrink: ', this.width, this.height);
  }
}

const roblox = new Square(50, 50, "#000000");

console.log(roblox);

roblox.expand();
roblox.shrink();
roblox.shrink();