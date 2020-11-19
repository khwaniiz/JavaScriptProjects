
document.addEventListener('DOMContentLoaded', () => {
    const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

    const btn = document.getElementById("btn");
    const color = document.querySelector(".color");


    btn.addEventListener('click', function () {

        let generatedColor = '#';

        for (let i = 0; i < 6; i++) {
            generatedColor += colors[randomNum()];
        }

        document.body.style.backgroundColor = generatedColor;
        color.textContent = generatedColor
        //console.log(generatedColor)

    })

    function randomNum() {
        return Math.floor(Math.random() * colors.length)
    }


})
