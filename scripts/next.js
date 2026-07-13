const startBtn = document.getElementById("start-btn");

startBtn.onclick = () => {
  let challenge = JSON.parse(localStorage.getItem("challenge"));

  challenge.month++;

  if (challenge.month > 11) {
    challenge.month = 0;

    challenge.year++;
  }

  objIndex = (objIndex + 1) % object.length;

  localStorage.setItem("objIndex", objIndex);

  localStorage.setItem("challenge", JSON.stringify(challenge));

  window.location.href = "index.html";
};
