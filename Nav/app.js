
document.addEventListener('DOMContentLoaded', () => {

    const navToggle = document.querySelector('.nav-toggle')
    const links = document.querySelector('.links');




    navToggle.addEventListener('click', function () {

        //console.log(links.classList)

        const icon = document.querySelector('i');

        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times')
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars')
        }

        links.classList.toggle('show-links')

    })



})