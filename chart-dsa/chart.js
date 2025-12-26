const KEY = "dsaPlan";
const STREAK_KEY = "dsaStreak";
const LAST_KEY = "dsaLastDay";

/* SAME LOGIC AS JAVA */
function progressPercent() {
  const data = JSON.parse(localStorage.getItem(KEY)) || {};
  let total = 0, done = 0;

  Object.values(data).forEach(tasks => {
    if (!Array.isArray(tasks)) return;
    tasks.forEach(t => {
      total++;
      if (t.done) done++;
    });
  });

  return total === 0 ? 0 : Math.round((done / total) * 100);
}

function dayStatus() {
  const data = JSON.parse(localStorage.getItem(KEY)) || {};
  const days = Object.keys(data);
  let completed = 0;
  let current = "ALL DONE";

  for (let d of days) {
    if (data[d].every(t => t.done)) completed++;
    else { current = d; break; }
  }

  document.getElementById("completedDays").textContent =
    `${completed} / ${days.length}`;
  document.getElementById("currentDay").textContent = current;
}

function updateStreak() {
  const today = new Date().toDateString();
  const last = localStorage.getItem(LAST_KEY);
  let streak = Number(localStorage.getItem(STREAK_KEY)) || 0;

  const data = JSON.parse(localStorage.getItem(KEY)) || {};
  const worked = Object.values(data).some(tasks =>
    tasks.some(t => t.done && t.date === today)
  );

  if (worked && last !== today) {
    streak++;
    localStorage.setItem(STREAK_KEY, streak);
    localStorage.setItem(LAST_KEY, today);
  }

  document.getElementById("streak").textContent = streak;
}

/* INIT */
const p = progressPercent();
document.getElementById("percent").textContent = p + "%";
document.getElementById("bar").style.width = p + "%";
document.getElementById("pieChart").style.setProperty("--java", p + "%");

dayStatus();
updateStreak();
