var Point = /** @class */ (function () {
  function Point(x, y) {
    this.x = x;
    this.y = y;
  }
  Point.prototype.distanceTo = function (otherPoint) {
    var dx = this.x - otherPoint.x;
    var dy = this.y - otherPoint.y;
    return Math.sqrt(dx * dx + dy * dy);
  };
  return Point;
})();
var point1 = new Point(0, 0);
var point2 = new Point(3, 4);
console.log("Point1: (".concat(point1.x, ", ").concat(point1.y, ")"));
console.log("Point2: (".concat(point2.x, ", ").concat(point2.y, ")"));
var distance = point1.distanceTo(point2);
console.log("Distance between Point1 and Point2: ".concat(distance));
