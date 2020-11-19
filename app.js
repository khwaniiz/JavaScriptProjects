document.addEventListener('DOMContentLoaded', () => {
    topBtn = document.getElementById('top-btn');

    window.onscroll = function () { scroll() }

    function scroll() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            topBtn.style.display = 'block'
        } else {
            topBtn.style.display = 'none'
        }
    }

    topBtn.addEventListener('click', goTop)

    function goTop() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }


})