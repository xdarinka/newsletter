const subscribeButton = document.querySelector("#subscribe-button");
const newsletterContainer = document.querySelector(".newsletter-container");
const successContainer = document.querySelector(
  ".newsletter-container__success"
);
const dismissButton = document.querySelector("#dismiss-button");

subscribeButton.addEventListener("click", (event) => {
  event.preventDefault();
  successContainer.style.display = "flex";
  newsletterContainer.style.display = "none";
});

dismissButton.addEventListener("click", (event) => {
  event.preventDefault();
  newsletterContainer.style.display = "flex";
  successContainer.style.display = "none";
});
