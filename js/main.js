// Start writing JavaScript here!
const menuBtn = document.querySelector("button");

const body = document.body;

menuBtn.addEventListener("click", function (e) {
  body.classList.toggle("offsite-is-open");
});
