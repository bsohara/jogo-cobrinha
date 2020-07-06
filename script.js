let canvas = document.getElementById("snake")
let context = canvas.getContext("2d")
let box = 32
let snake = []

snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let directions = "right"
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function createBG() 
{
    context.fillStyle = "lightgreen"
    context.fillRect(0, 0, 16 * box, 16 * box)
}

function createSnake()
{
    for(var i = 0; i < snake.length; i++)
    {
        context.fillStyle = "green"
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}
    
function createFood()
{
    context.fillStyle = "red"
    context.fillRect(food.x, food.y, box, box)
}


document.addEventListener("keydown", update)

function update(event)
{
    if(event.keyCode == 37 && directions != "right") directions = "left"
    if(event.keyCode == 38 && directions != "up") directions = "down"
    if(event.keyCode == 39 && directions != "left") directions = "right"
    if(event.keyCode == 40 && directions != "down") directions = "up"
}

function startGame()
{

    for (i = 1; i < snake.length; i++)
    {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            clearInterval(game)
            alert('Fim de jogo!')
        }
    }

    if(snake[0].x > 15 * box && directions == "right") snake[0].x = 0
    if(snake[0].x < 0 && directions == "left") snake[0].x = 16 * box
    if(snake[0].y < 0 && directions == "down") snake[0].y = 16 * box
    if(snake[0].y > 15 * box && directions == "up") snake[0].y = 0

    createBG()
    createSnake()
    createFood()

    let snakeX = snake[0].x
    let snakeY = snake[0].y

    if(directions == "right") snakeX += box
    if(directions == "left") snakeX -= box
    if(directions == "up") snakeY += box
    if(directions == "down") snakeY -= box

    if(snakeX != food.x || snakeY != food.y)
    {
        snake.pop()
    }
    else
    {
        food.x = Math.floor(Math.random() * 15 + 1) * box
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }   

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead)
}

let game = setInterval(startGame, 100)

function reloadPage()
{
    window.location.reload()
}