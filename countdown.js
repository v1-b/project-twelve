const countdown = document.getElementById("countdown");

function updateCountdown() {
  const now = new Date();

  // Midnight at the start of July 15 (current year)
  let target = new Date(now.getFullYear(), 6, 15, 0, 0, 0);

  // If we've already passed it this year, use next year
  if (now > target) {
    target = new Date(now.getFullYear() + 1, 6, 15, 0, 0, 0);
  }

  const diff = target - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);

  countdown.textContent =
    `${days}d ${hours}h ${minutes}m`;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Start: June 15, 2026, 00:00:00
const start = new Date(2026, 5, 15, 0, 0, 0);

// End: July 15, 2026, 00:00:00
const end = new Date(2026, 6, 15, 0, 0, 0);

function updateProgressBar() {
  const now = new Date();

  const totalDuration = end - start;
  const elapsed = now - start;

  let progress = (elapsed / totalDuration) * 100;

  // Clamp between 0 and 100
  progress = Math.max(0, Math.min(progress, 100));

  document.getElementById("progress-bar").style.width = `${progress}%`;
  document.getElementById("progress-text").textContent =
    `${progress.toFixed(2)}%`;
}

updateProgressBar();
setInterval(updateProgressBar, 1000);