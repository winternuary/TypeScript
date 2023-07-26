class Point {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  distanceTo(otherPoint: Point): number {
    const dx = this.x - otherPoint.x;
    const dy = this.y - otherPoint.y;
    return Math.sqrt(dx * dx + dy * dy);
  }
}

const point1 = new Point(0, 0);
const point2 = new Point(3, 4);

console.log(`Point1: (${point1.x}, ${point1.y})`);
console.log(`Point2: (${point2.x}, ${point2.y})`);
const distance = point1.distanceTo(point2);
console.log(`Distance between Point1 and Point2: ${distance}`);
