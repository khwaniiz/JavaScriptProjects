document.addEventListener('DOMContentLoaded', () => {
    const reviews = [
        {
            id: 1,
            name: "Rick",
            job: "web developer",
            img:
                "https://i.ytimg.com/vi/CsAkeWUWcXg/maxresdefault.jpg",
            text:
                "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
        },
        {
            id: 2,
            name: "Summer",
            job: "web designer",
            img:
                "https://static0.colliderimages.com/wordpress/wp-content/uploads/2019/11/rick-and-morty-summer.jpg",
            text:
                "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
        },

        {
            id: 3,
            name: "Morty",
            job: "intern",
            img:
                "https://static1.srcdn.com/wordpress/wp-content/uploads/2019/06/Morty-in-Rick-and-Morty.jpg",
            text:
                "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
        }
    ]

    const img = document.getElementById('person-img');
    const author = document.getElementById('author');
    const job = document.getElementById('job');
    const info = document.getElementById('info');

    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const randomBtn = document.querySelector('.random-btn');

    let currentItem = 0;

    // const item = reviews[currentItem];
    // img.src = item.img;
    // author.textContent = item.name;
    // job.textContent = item.job;
    // info.textContent = item.text;


    function showPerson(person) {
        const item = reviews[person];
        img.src = item.img;
        author.textContent = item.name;
        job.textContent = item.job;
        info.textContent = item.text;
    }

    nextBtn.addEventListener('click', function () {
        currentItem++;
        if (currentItem > reviews.length - 1) {
            currentItem = 0;
        }

        showPerson(currentItem)
    })

    prevBtn.addEventListener('click', function () {
        currentItem--;
        if (currentItem < 0) {
            currentItem = reviews.length - 1
        }
        showPerson(currentItem)
    })

    randomBtn.addEventListener('click', function () {
        alert('Hello!')
    })

    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);

})