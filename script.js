// TYPING EFFECT
const words = [
  "Aspiring Data Scientist",
  "Python Learner",
  "DSA Explorer",
  "Creative Problem Solver"
];

let i = 0, j = 0, deleting = false;

function type() {
  const current = words[i];
  document.getElementById("text").innerText = current.substring(0, j);

  if (!deleting) {
    j++;
    if (j > current.length) {
      deleting = true;
      setTimeout(type, 1000);
      return;
    }
  } else {
    j--;
    if (j === 0) {
      deleting = false;
      i = (i + 1) % words.length;
    }
  }

  setTimeout(type, deleting ? 50 : 100);
}
type();


// FLOATING CODE STRINGS
const bg = document.querySelector(".bg");

const codes = [
  "import pandas as pd",
  "import numpy as np",
  "df.head()",
  "model.fit(X,y)",
  "accuracy = 95%",
  "for i in range():",
  "def predict():",
  "return result"
];

function createCode() {
  const span = document.createElement("span");
  span.innerText = codes[Math.floor(Math.random() * codes.length)];

  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (6 + Math.random() * 5) + "s";

  bg.appendChild(span);

  setTimeout(() => span.remove(), 11000);
}

setInterval(createCode, 250);


// SCROLL ANIMATION
const elements = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

elements.forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});