const countdown = document.getElementById("countdown");
const progressBar = document.getElementById("progress-bar");
const progressContainer = document.getElementById("progress-container");
const nextBtn = document.getElementById("next-btn");

const CHALLENGE_VERSION = 2;

let challenge = JSON.parse(localStorage.getItem("challenge"));

// Create a new challenge if there isn't one
// OR if the saved challenge is from an older version
if (!challenge || challenge.version !== CHALLENGE_VERSION) {
  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth();

  if (now.getDate() >= 15) {
    month++;

    if (month > 11) {
      month = 0;
      year++;
    }
  }

  challenge = {
    year: year,
    month: month,
    version: CHALLENGE_VERSION,
  };

  localStorage.setItem("challenge", JSON.stringify(challenge));
}

// ----------------------------
// Calculate dates
// ----------------------------

function getDates() {
  // End = the 15th of the challenge month
  const end = new Date(challenge.year, challenge.month, 15, 0, 0, 0);

  // Start = one month before
  const start = new Date(challenge.year, challenge.month - 1, 15, 0, 0, 0);

  return { start, end };
}

// ----------------------------
// Update countdown + progress
// ----------------------------

function update() {
  const now = new Date();

  const { start, end } = getDates();

  const total = end - start;
  const elapsed = now - start;

  let progress = (elapsed / total) * 100;

  progress = Math.max(0, Math.min(progress, 100));

  progressBar.style.width = progress + "%";

  // Countdown
  const diff = end - now;

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
console.log(
  `%c
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
   %c`,
  "color: #ddda30;",
  "",
);
