const object = [
    "./images/no-1.png",
    "./images/no-2.png",
    "./images/no-3.png",
    "./images/no-4.png",
    "./images/no-5.png",
];

const obj = document.getElementById("obj");

// Load current obj
let objIndex =
    Number(localStorage.getItem("objIndex")) || 0;

obj.src = object[objIndex];

