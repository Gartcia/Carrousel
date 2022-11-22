const reviews = [
    {
        id:0,
        img:"martu.jpg",
        name: "Martina Garcia",
        description: "Customer Support",
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. tempora laboriosam dolor molestias sunt dignissimos cupiditate, omnis consequuntur.',
    },
    {
        id:1,
        img:"martu2.jpg",
        name: "Nazarena Garcia",
        description: "Agent Support",
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. dolore deleniti molestiae illum aut eaque unde ducimus tempora laboriosam dolor molestias sunt dignissimos cupiditate, omnis consequuntur.',
    },
    {
        id:2,
        img:"gaston.jpg",
        name: "Gaston Artigas",
        description: "Integrration Support",
        review: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. laboriosam dolor molestias sunt dignissimos cupiditate, omnis consequuntur.',
    }
];

const img = document.getElementById("image");
const author = document.getElementById("name");
const description = document.getElementById("description");
const review = document.getElementById("review");

const left = document.querySelector("#left");
const right = document.querySelector("#right");
const random = document.querySelector("#generator");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    ShowPerson(currentItem);
});

function ShowPerson(person){
    const item = reviews[person]
    img.src = item.img;
    author.textContent = item.name;
    description.textContent = item.description;
    review.textContent = item.review;
};

left.addEventListener("click", function(){
    if(currentItem == 0){
        currentItem = reviews.length-1;
    } else {
        currentItem--;
    }
    ShowPerson(currentItem);
});

right.addEventListener("click", function(){
    if (currentItem == reviews.length-1){
        currentItem = 0;
    } else {
        currentItem++;
    }
    ShowPerson(currentItem);
});

random.addEventListener("click", function(){
    currentItem = Math.floor(Math.random()*(reviews.length-1));
    ShowPerson(currentItem);
})

