const snake = document.getElementById("snake");
const food = document.getElementById("food");

let snakeX = 0;
let snakeY = 0;
let foodX = 0;
let foodY = 0;
let score = 0;

function getRandomPosition(max) {
    return Math.floor(Math.random() * max);
}

function updateFoodPosition() {
    foodX = getRandomPosition(29) * 10;
    foodY = getRandomPosition(29) * 10;
    food.style.left = foodX + "px";
    food.style.top = foodY + "px";
}

function updateSnakePosition() {
    snakeX += 10;
    snakeY += 0;
    snake.style.left = snakeX + "px";
    snake.style.top = snakeY + "px";
}

function checkCollision() {
    if (snakeX === foodX && snakeY === foodY) {
        score++;
        updateFoodPosition();
    }
}

function gameLoop() {
    updateSnakePosition();
    checkCollision();
    if (snakeX >= 300 || snakeY >= 300 || snakeX < 0 || snakeY < 0) {
        alert("Game Over! Your Score: " + score);
        location.reload();
    }
}

setInterval(gameLoop, 100);
updateFoodPosition();
