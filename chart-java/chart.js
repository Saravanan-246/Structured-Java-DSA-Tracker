const KEY = "javaPlan";

/* calculate progress */
function getProgress() {
  const data = JSON.parse(localStorage.getItem(KEY)) || {};
  let total = 0, done = 0;

  Object.values(data).forEach(tasks => {
    if (!Array.isArray(tasks)) return;
    tasks.forEach(t => {
      total++;
      if (t.done) done++;
    });
  });

  return {
    done,
    remaining: Math.max(total - done, 0)
  };
}

const ctx = document.getElementById("progressChart");

if (ctx) {
  const { done, remaining } = getProgress();

  new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["Completed", "Remaining"],
      datasets: [{
        data: [done, remaining],
        backgroundColor: ["#00ff99", "#333"],
        borderWidth: 0
      }]
    },
    options: {
      cutout: "70%",
      plugins: {
        legend: {
          labels: { color: "#aaa" }
        }
      }
    }
  });
}
