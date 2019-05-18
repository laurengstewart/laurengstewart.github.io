// // lesson 2
// var snake = [{ top: 3, left: 4},];
// var drawableSnake = { color: "#F26B6B", pixels: snake };
// // here we're creating an array
// var drawableObjects = [drawableSnake];
// /*
// here we're drawing the snake
// */
// CHUNK.draw(drawableObjects)
// lesson 3
var drawSnake = function(snakeToDraw) {
  var drawableSnake = { color: "#F08080", pixels: snakeToDraw };
  var drawableObjects = [drawableSnake];
  CHUNK.draw(drawableObjects);
}
// // lesson 4
// var moveSnake = function(snake) {
//   var oldSegment = snake[0];
//   var newSegment = { top: oldSegment.top + 1, left: oldSegment.left };
//   var newSnake = [newSegment];
//   return newSnake;
// lesson 6
var moveSegment = function(segment) {
  switch(segment.direction) {
    case "down":
      return { top: segment.top + 1, left: segment.left };
    case "up":
      return { top: segment.top - 1, left: segment.left }
    case "right":
      return { top: segment.top, left: segment.left + 1 }
    case "left":
      return { top: segment.top, left: segment.left - 1 }
    default:
      return segment;
    }
}
// var moveSnake = function(snake) {
//   var oldSegment = snake[0];
//   var newSegment = moveSegment(oldSegment);
//   newSegment.direction = oldSegment.direction;
//   var newSnake = [newSegment];
//   return newSnake;
// }
var moveSnake = function(snake) {
  var newSnake = [];
  snake.forEach(function(oldSegment) {
  var newSegment = moveSegment(oldSegment);
  newSegment.direction = oldSegment.direction;
  newSnake.push(newSegment);
});
  return newSnake;
}
// lesson 5
var advanceGame = function() {
  snake = moveSnake(snake);
  if (CHUNK.detectCollisionBetween(snake, CHUNK.gameBoundaries())) {
    CHUNK.endGame();
    CHUNK.flashMessage("Whoops! You lose!");
  }
  drawSnake(snake);
}
var changeDirection = function(direction) {
  snake[0].direction = direction;
}
var snake = [{ top: 1, left: 0, direction: "down" }, { top: 0, left: 0, direction: "down" }];
CHUNK.executeNTimesPerSecond(advanceGame, 8);
CHUNK.onArrowKey(changeDirection);
