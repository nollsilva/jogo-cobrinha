let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "rigth";

function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
    for (i = 0; i < snake.lenght; i++) {
        context.fillStyle = "red";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function iniciarjogo() {
    criarBG();
    criarCobrinha();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeY += box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY -= box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshihft(newHead);
}

let jogo = setInterval(iniciarjogo, 100);