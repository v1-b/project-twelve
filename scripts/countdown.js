const countdown = document.getElementById("countdown");
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.getElementById("progress-container");
const nextBtn = document.getElementById("next-btn");

// ----------------------------
// Load current challenge
// ----------------------------

let challenge = JSON.parse(localStorage.getItem("challenge"));

if (!challenge) {
  // First visit → join current challenge
  const now = new Date();

  challenge = {
    year: now.getFullYear(),
    month: now.getMonth(),
  };

  localStorage.setItem("challenge", JSON.stringify(challenge));
}

// ----------------------------
// Calculate dates
// ----------------------------

function getDates() {
  const start = new Date(challenge.year, challenge.month, 15, 0, 0, 0);

  start.setMonth(start.getMonth() - 1);

  const end = new Date(challenge.year, challenge.month, 15, 0, 0, 0);

  return { start, end };
}

// ----------------------------
// Update everything
// ----------------------------

function update() {
  const now = new Date();

  const { start, end } = getDates();

  const total = end - start;

  const elapsed = now - start;

  let progress = (elapsed / total) * 100;

  progress = Math.max(0, Math.min(progress, 100));

  progressBar.style.width = progress + "%";

  //this is the live code for the countdown
  const diff = end - now;

  //this is for testing the countdown
  //const diff = -1;

  if (diff <= 0) {
    countdown.style.display = "none";

    progressContainer.style.display = "none";

    nextBtn.style.display = "inline-block";

    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;

  const minutes = Math.floor(diff / (1000 * 60)) % 60;

  countdown.textContent = `${days}d ${hours}h ${minutes}m`;
}

update();

setInterval(update, 1000);

// ----------------------------
// Next page
// ----------------------------

nextBtn.onclick = () => {
  window.location.href = "duodecim.html";
};

//test to see whether the next button is working
/*countdown.style.display = "none";
progressContainer.style.display = "none";
nextBtn.style.display = "inline-block";*/

//easter egg
    console.log(`%c
   ⠀⠀⠀⠀⠀⠀⣠⣶⢶⡲⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠑⡌⢧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢣⡀⣆⠀⠘⣎⢆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⣟⣇⢀⠈⢾⣧⡀⠀⠀⠀⣀⣀⠀⠀⠀⣀⣀⡀⠀⣀⣀⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⢠⠞⣉⣲⣞⣿⡙⠋⠀⠀⣿⡏⠉⣉⣭⠁⠀⠉⠉⠁⠀⠄⠈⢁⣠⠞⠙⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢠⡴⠚⠉⠀⢉⣉⡛⠉⠉⢲⣶⣾⠟⣿⠀⢠⣒⠒⠒⢢⠄⠀⠀⠀⣀⡞⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⣴⠾⢅⣀⣀⠤⠤⣄⣉⣀⡠⠔⠋⠀⢀⣴⠯⢤⣀⣈⡩⠥⠤⣀⡠⠤⣞⠁⠀⢀⠤⡀⠳⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠻⣄⠀⠠⢴⡄⠀⠀⠀⠈⠷⣆⣐⣶⠟⠁⠀⠀⠀⣀⣤⠖⠒⡦⢄⡀⢘⡆⢀⠏⠀⡷⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⣀⡀⠀⠀⠀
⠀⢨⣷⢁⣸⠄⢼⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢾⣀⡨⠧⠴⢇⡀⠉⠸⡀⠈⠣⠴⠃⠀⢷⡀⠀⠀⠀⠀⠀⡠⢚⡅⡇⠀⠀⠀
⠀⣧⣞⣩⣤⡀⠀⠈⠣⡀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠁⠀⠀⢀⣀⡈⢆⠀⠱⡄⠀⠀⣤⡆⠀⢻⣿⠟⠉⠛⢿⣤⣿⠀⡇⣀⣀⠀
⠀⢸⢾⣿⣿⡇⠀⠀⢠⠇⠀⠀⠀⠀⠀⠀⠀⢾⠀⠀⠀⠸⣿⣿⣿⡼⠀⠀⢸⠀⠀⠙⠃⠀⣸⠃⠀⠀⠀⢀⣿⡏⢀⣿⣿⠹⢳
⠀⠈⠲⢍⡁⢀⣀⠴⠋⡠⢂⡄⠀⠀⠀⠀⠀⠈⠳⣤⣀⣀⣨⠽⢛⡁⠀⠀⠘⣆⠀⠀⢠⣾⡇⠀⠀⢀⣤⣾⣿⡇⢸⠛⡧⢆⡎
⠀⠀⠀⠀⠹⣏⣁⠴⠊⠀⡸⠀⠀⠀⠀⠀⠀⠀⠀⠈⠒⠒⠒⠊⠉⠀⠀⠈⠀⠈⢢⠀⣿⠘⡷⠒⠒⠻⢷⣾⣿⣇⠘⠋⣀⡎⠀
⠀⠀⠀⠀⣴⠉⠀⠀⣀⠞⠁⠀⠀⠀⠀⠀⠀⠀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠸⡄⠈⠛⠁⠀⣴⡀⠀⡇⠀⣿⣿⣟⠙⣿⠀
⠀⠀⠀⠀⠈⠒⠚⡏⠁⠀⠀⠀⠀⠀⢀⣤⣶⣿⣿⣿⠿⠿⠟⠀⠀⠀⢀⣀⡀⠀⠀⠈⠓⣄⠀⠀⠉⠀⠀⣣⠀⢸⣿⣿⣶⣿⠇
⠀⠀⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⢠⡾⣿⠿⠛⠋⣁⣀⠤⠤⠒⠃⠀⠀⠣⠄⠀⠀⠀⠀⠀⠸⣄⣀⡀⠀⠀⢧⠀⠀⣿⠿⠋⠁⠀
⠀⠀⠀⠀⠀⠀⠈⡇⠀⠀⠀⡰⠻⣉⠠⠔⠚⠯⣁⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠏⠉⠀⠀⠀⢱⣴⣴⡾⠖⠊⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⢆⠀⢰⠁⠀⠀⠀⠀⠀⢀⣤⣿⣶⣶⣦⣤⠖⠒⠒⠒⠒⠒⠒⠒⢲⣶⣾⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠳⠇⠀⠀⠀⠀⠀⠀⢈⡿⢋⣿⣿⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠛⢿⢋⡿⠿⠿⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⢏⣾⣧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣏⣸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣴⣿⣿⣿⣾⣿⣶⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⠛⠿⠒⠲⣿⣧⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⢿⣿⣿⣿⠿⠿⠟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣘⣿⣿⡿⠃⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⣿⣿⣿⡿⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⠛⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀
   "I'm SmArT aNd iNsPEcT tHe WebSiTe"
   %c`, "color: #ddda30;", "")