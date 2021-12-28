// Problem: Given an array of points in a 2D2D plane, find ‘K’ closest points to the origin.

// Output: Here are the k points closest the origin: [1, 3] [2, -1] 

class Point {

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  distance_from_origin() {
    return Math.pow(this.x, 2) + Math.pow(this.y, 2);
  }

  get_point() {
    return "[" + this.x + ", " + this.y + "] ";
  }
};

const Heap = require('../../node_modules/collections/heap');

const find_closest_points = function(points, k) {
  let maxHeap = new Heap([], null, (a, b) => a.distance_from_origin() - b.distance_from_origin());

  for (let i = 0; i < k; i++) {
    maxHeap.push(points[i]);
  }

  for (let i = k; i < points.length; i++) {
    if (points[i].distance_from_origin() < maxHeap.peek().distance_from_origin()) {
      maxHeap.pop();
      maxHeap.push(points[i]);
    }
  }
  return maxHeap.toArray();
};


points = find_closest_points([new Point(1, 3), new Point(3, 4), new Point(2, -1)], 2)
result = "Here are the k points closest the origin: ";
for (i=0; i < points.length; i++)
  result += points[i].get_point();
console.log(result);
