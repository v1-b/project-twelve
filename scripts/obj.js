const object = [
  "./images/no-1.png", // July
  "./images/no-2.png", // August
  "./images/no-3.png", // September
  "./images/no-4.png", // October
  "./images/no-5.png", // November
  "./images/no-6.png", // December
  "./images/no-7.png", // January
];

const obj = document.getElementById("obj");

const challenge = JSON.parse(localStorage.getItem("challenge"));

const monthPictures = {
  6: 0,  // July
  7: 1,  // August
  8: 2,  // September
  9: 3,  // October
  10: 4, // November
  11: 5, // December
  0: 6,  // January
};

const objIndex = monthPictures[challenge.month];

obj.src = object[objIndex];

