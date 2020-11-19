

document.addEventListener('DOMContentLoaded', () => {
    const bird = document.querySelector('.bird')
    const gameDisplay = document.querySelector('.game-container')
    const ground = document.querySelector('.ground-moving');
    const groundContainer = document.querySelector('.ground-container')

    // config left and bottom width
    let birdLeft = 220;
    let birdBottom = 100;
    let gravity = 2;
    let isGameOver = false
    let gap = 430;

    function startGame() {
        birdBottom -= gravity;
        bird.style.bottom = birdBottom + 'px';
        bird.style.left = birdLeft + 'px'

    }

    let gameTimerId = setInterval(startGame, 20);

    function control(e) {
        if (e.keyCode === 32) {
            jump()
        }
    }

    function jump() {
        if (birdBottom < 500) {
            birdBottom += 50
            bird.style.bottom = birdBottom + 'px'
            console.log(birdBottom)
        }

    }

    document.addEventListener('keyup', control)

    function generateObstacle() {
        let obstacleLeft = 500;
        let randomHeight = Math.random() * 60;
        let obstacleBottom = randomHeight;
        const obstacle = document.createElement('div')
        const obstacleTop = document.createElement('div');
        if (!isGameOver) {
            obstacle.classList.add('obstacle')
            obstacleTop.classList.add('obstacleTop')

        }

        gameDisplay.appendChild(obstacle)
        gameDisplay.appendChild(obstacleTop)

        obstacleTop.style.left = obstacleLeft + 'px'
        obstacleTop.style.bottom = obstacleBottom + gap + 'px'

        obstacle.style.left = obstacleLeft + 'px';
        obstacle.style.bottom = obstacleBottom + 'px'



        function moveObstacle() {
            obstacleLeft -= 2;
            obstacle.style.left = obstacleLeft + 'px'
            obstacleTop.style.left = obstacleLeft + 'px'

            if (obstacleLeft === -60) {
                clearInterval(timerId)
                gameDisplay.removeChild(obstacle)
                gameDisplay.removeChild(obstacleTop)
            }

            if (
                obstacleLeft > 200 && obstacleLeft < 280 && birdLeft === 220 && (birdBottom < obstacleBottom + 153 || birdBottom > obstacleBottom + gap - 199) ||
                birdBottom === 0) {
                gameOver()
                clearInterval(timerId)

            }



        }

        let timerId = setInterval(moveObstacle, 20)
        if (!isGameOver) {
            setTimeout(generateObstacle, 3000)

        } else {

            showStartBtn()

        }


    }

    generateObstacle()

    function showStartBtn() {

        let btn = document.createElement('BUTTON');
        btn.classList.add('btn')
        btn.innerHTML = 'START'
        btn.addEventListener('click', function () {
            window.location.reload()
        })
        groundContainer.appendChild(btn)

        const gameOver = document.createElement('div')
        gameOver.innerHTML = 'Game Over!'
        gameOver.classList.add('gameover')
        groundContainer.appendChild(gameOver)




    }


    function gameOver() {

        clearInterval(gameTimerId)
        console.log('game over')
        isGameOver = true;
        document.removeEventListener('keyup', control)

        // ground.classList.add('ground')
        // ground.classList.remove('ground-moving')

    }


}) 