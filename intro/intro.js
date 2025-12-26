// intro/intro.js

document.addEventListener("DOMContentLoaded", () => {

  // If intro already done, go to Java directly
  if (sessionStorage.getItem("introDone")) {
    window.location.href = "java.html";
    return;
  }

  const startBtn = document.getElementById("startBtn");
  if (!startBtn) return;

  startBtn.addEventListener("click", () => {
    startBtn.innerText = "LOADING...";
    startBtn.disabled = true;

    sessionStorage.setItem("introDone", "yes");

    setTimeout(() => {
      window.location.href = "java.html";
    }, 400);
  });
});
