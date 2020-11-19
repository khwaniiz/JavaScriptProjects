document.addEventListener('DOMContentLoaded', () => {


    // First solution
    let count = 0;
    const number = document.querySelector('#number');
    // const increaseButton = document.getElementById('inc');
    // const resetButton = document.getElementById('reset');
    // const decreaseButton = document.getElementById('dec');


    // increaseButton.addEventListener('click', function () {
    //     count++;
    //     number.style.color = 'green'
    //     number.innerHTML = count
    //     console.log(count)
    // })

    // decreaseButton.addEventListener('click', function () {
    //     count--;
    //     number.style.color = 'red'
    //     number.innerHTML = count
    //     console.log(count)

    // })

    // resetButton.addEventListener('click', function () {
    //     count = 0;
    //     number.style.color = 'black'
    //     number.innerHTML = count
    //     console.log(count)

    // })

    // Second solution

    const btns = document.querySelectorAll('.btn');

    btns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            const styles = e.currentTarget.classList;
            if (styles.contains('inc')) {
                count++;
            } else if (styles.contains('dec')) {
                count--;
            } else {
                count = 0;
            }

            if (count > 0) {
                number.style.color = 'hsl(125, 67%, 44%)'
            }
            if (count < 0) {
                number.style.color = 'hsl(360, 67%, 44%)'
            }
            if (count === 0) {
                number.style.color = '#222'
            }

            number.textContent = count;
        })
    })



})