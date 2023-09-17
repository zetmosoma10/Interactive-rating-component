// Select DOM elements
const card = document.querySelector(".card");
const rating = document.querySelectorAll(".rating");
const modalCard = document.querySelector(".card-modal");
const cardRating = document.querySelector(".card__rating");
const btn = document.querySelector(".btn");
const cardModalResults = document.querySelector(".card-modal__results");

// attach event on parent element
cardRating.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  const element = event.target;
  if (id) {
    rating.forEach((item) => {
      item.classList.remove("active");
    });
    element.classList.add("active");
    cardModalResults.textContent = `You selected ${id} out of 5`;
  }
});

// attach click event on btn
btn.addEventListener("click", () => {
  rating.forEach((item) => {
    // check if at least one rating is selected (if not) do nothing
    if (item.classList.contains("active")) {
      card.classList.add("hide-card");
      modalCard.classList.add("show-card-modal");
    }
  });
});
