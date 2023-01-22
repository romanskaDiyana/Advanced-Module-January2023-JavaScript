//08. Rectangle
//Write a function that creates and returns a rectangle object.

function solve(width, height, color) {
  return {
    width: Number(width),
    height: Number(height),
    color: color[0].toUpperCase() + color.slice(1),
    calcArea: function () {
      return this.width * this.height;
    },
  };
}
