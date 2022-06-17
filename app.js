const lists = document.querySelectorAll("li");
const first = document.querySelector("#first");
const second = document.querySelector("#second");
const button = document.querySelector("button");
const number = document.querySelector(".number");

lists.forEach((rating, index) => {
  rating.addEventListener("click", () => {
    if (!rating.classList.contains("active")) {
      document
        .querySelectorAll("li")
        .forEach((ratings, indexs) => ratings.classList.remove("active"));
      rating.classList.add("active");
    } else {
      rating.classList.toggle("active");
    }

    button.addEventListener("click", () => {
      first.classList.toggle("hidden");
      second.classList.toggle("hidden");
      const rated = index + 1;
      number.textContent = ` ${rated} `;
    });

  });

  
});
