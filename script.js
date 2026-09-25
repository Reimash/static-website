/* =========================================================
   SCUDERIA ROSSO - Ferrari F1 Fan Hub
   JavaScript
   ========================================================= */

/* -------------------------------------------------
   0. Footer year + mobile nav toggle
------------------------------------------------- */
document.getElementById("year").textContent = new Date().getFullYear();

const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

navToggle.addEventListener("click", function () {
    mainNav.classList.toggle("open");
});

/* -------------------------------------------------
   1. JS REQUIREMENT #1 - LIVE TIME COUNTER
   Displays the current local time and updates every second.
------------------------------------------------- */
function updateLiveClock() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours === 0 ? 12 : hours;
    const hoursStr = String(hours).padStart(2, "0");

    const timeString = `${hoursStr}:${minutes}:${seconds} ${ampm}`;
    document.getElementById("liveClock").textContent = timeString;
}

updateLiveClock();
setInterval(updateLiveClock, 1000);

/* -------------------------------------------------
   2. JS REQUIREMENT #2 - COUNTDOWN TIMER
   Counts down to the next Grand Prix race date.

   NOTE: Update RACE_DATE below to the actual date of the
   next race you want to feature.
------------------------------------------------- */
const RACE_NAME = "Next Grand Prix";
const RACE_DATE = new Date();
RACE_DATE.setDate(RACE_DATE.getDate() + 30); // demo target: 30 days from now
RACE_DATE.setHours(14, 0, 0, 0);

document.getElementById("countdownCaption").textContent =
    `Counting down to the ${RACE_NAME} \u2014 ${RACE_DATE.toDateString()}`;

function updateCountdown() {
    const now = new Date().getTime();
    const distance = RACE_DATE.getTime() - now;

    const countdownEl = document.getElementById("countdown");

    if (distance <= 0) {
        countdownEl.innerHTML = "<p class='display-value'>Lights Out! Race Day is Here.</p>";
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("cd-days").textContent = String(days).padStart(2, "0");
    document.getElementById("cd-hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("cd-minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("cd-seconds").textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
const countdownInterval = setInterval(updateCountdown, 1000);

/* -------------------------------------------------
   3. JS REQUIREMENT #3 - INTERACTIVE BUTTON
   Displays a random Ferrari F1 fact on click.
------------------------------------------------- */
const ferrariFacts = [
    "Scuderia Ferrari is the only team to have competed in every Formula 1 season since the championship began in 1950.",
    "Ferrari's iconic red color is often called 'Rosso Corsa', Italian for 'racing red'.",
    "Michael Schumacher won five consecutive Drivers' Championships with Ferrari from 2000 to 2004.",
    "The Ferrari F1 team is based in Maranello, Italy, alongside the road car factory.",
    "Ferrari has won the Constructors' Championship a record 16 times.",
    "Enzo Ferrari founded Scuderia Ferrari in 1929, originally as a racing team for other manufacturers.",
    "The prancing horse emblem was inspired by a symbol painted on the plane of WWI flying ace Francesco Baracca.",
    "Ferrari builds both its chassis and its own engines, unlike many other F1 teams."
];

const factBtn = document.getElementById("factBtn");
const factDisplay = document.getElementById("factDisplay");

factBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * ferrariFacts.length);
    factDisplay.textContent = ferrariFacts[randomIndex];
});

/* -------------------------------------------------
   4. BONUS FEATURE - NIGHT RACE / DAY RACE THEME TOGGLE
   Switches the page into a darker "night race" theme.
------------------------------------------------- */
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {
    document.body.classList.toggle("night-mode");

    if (document.body.classList.contains("night-mode")) {
        themeBtn.textContent = "Toggle Day Race Mode";
    } else {
        themeBtn.textContent = "Toggle Night Race Mode";
    }
});
