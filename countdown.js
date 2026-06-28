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