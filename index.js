//---------- Intro animations ----------//

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// run intro only if it has been at least 10 minutes since it last ran
// to minimize iritation on refresh
const storedTime = localStorage.getItem("time");
const tenMins = 1000 * 60 * 10;
const resetTime = Number(storedTime) + tenMins;

if (!storedTime || resetTime < Date.now()) {
  tl.to(".hide-text", { y: "0%", duration: 1, stagger: 0.25 });
  tl.to(".intro", { y: "-100%", duration: 1, delay: 1 });
  tl.fromTo(".title", { opacity: 0 }, { opacity: 1, duration: 1 });
  tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1.5 }, "-=0.75");
  localStorage.setItem("time", Date.now());
} else {
  tl.to(".intro", { y: "-100%", duration: 0, delay: 0 });
}

//---------- Manage modal visibility ----------//

const modalBg = document.getElementById("modal-bg");

const manageModal = function (name) {
  const target = document.getElementById(name);

  target.style.display === "none"
    ? (target.style.display = "flex")
    : (target.style.display = "none");
  modalBg.style.display === "none"
    ? (modalBg.style.display = "flex")
    : (modalBg.style.display = "none");
};
// Modal close button listner
modalBg.addEventListener("click", (event) => {
  manageModal(event.target.name);
});

//Modal launch button listener
document
  .getElementById("cards-container")
  .addEventListener("click", (event) => {
    manageModal(event.target.name);
  });

//---------- Styled CTA console log ----------//

const style =
  "font-size: 16px;" +
  "background: #8a2be2;" +
  "background: linear-gradient(to right, #8a2be2, #4ca2cd);" +
  "color: white;" +
  "text-align: center;" +
  "padding: 10px 15px;" +
  "width: 100%;" +
  "border-radius: 20px;";

const text =
  "%cLooking for a Junior Developer? Lets talk. a.hutchison@live.co.uk";

console.log(text, style);
