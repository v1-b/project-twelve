const flowers = [
    "./images/no-1.png",
    "./images/no-2.png",
];

const flower = document.getElementById("fl");

// Load current flower
let flowerIndex =
    Number(localStorage.getItem("flIndex")) || 0;

flower.src = flowers[flowerIndex];

