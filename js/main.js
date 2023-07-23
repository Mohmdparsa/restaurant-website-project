//---------------------------bars btn-------------------------------

let bars = document.getElementById("bars");
let closeBtn = document.getElementById("close-bars");
let barsContainer = document.getElementById("bars-container");
const mainContainer = document.getElementById("main-container");
const mainSection = document.getElementsByClassName("main-section");
const divSection1 = document.getElementById("section-div1");
const divSection2 = document.getElementById("section-div2");

bars.addEventListener("click", function () {
  barsContainer.style.display = "block";
});
closeBtn.addEventListener("click", function () {
  barsContainer.style.display = "none";
});
window.addEventListener("click", function (e) {
  if (e.target === divSection1 || e.target === divSection2) {
    barsContainer.style.display = "none";
  }
});

//-----------------------------------change color of title---------------------------------------

const colors = ["white", "red"];
let siteTitle = document.querySelector(".kentucky-house-title");

setInterval(() => {
  let randomColor = Math.floor(Math.random() * colors.length);
  siteTitle.style.color = colors[randomColor];
}, 1000);

//------------------------------------section part--------------------------------------------

// foodBtn
let Pizza = document.getElementById("pizza");
let Burger = document.getElementById("burger");
let Chicken = document.getElementById("chicken");
let Sandwich = document.getElementById("sandwich");
let Salad = document.getElementById("salad");

let Drink = document.getElementById("drink");
let Soup = document.getElementById("soup");
let Pasta = document.getElementById("pasta");
let Coffee = document.getElementById("coffee");
let Cake = document.getElementById("cake");

// menu
let pizzaMenu = document.querySelector(".pizza-menu");
let burgerMenu = document.querySelector(".burger-menu");
let chickenMenu = document.querySelector(".chicken-menu");
let sandwichMenu = document.querySelector(".sandwich-menu");
let saladMenu = document.querySelector(".salad-menu");
let coldDrinkMenu = document.querySelector(".cold-drink-menu");
let soupMenu = document.querySelector(".Soup-menu");
let pastaMenu = document.querySelector(".pasta-menu");
let hotDrinkMenu = document.querySelector(".hot-drink-menu");
let cakeMenu = document.querySelector(".cake-menu");

let showHandler = document.querySelectorAll(".food");
showHandler.forEach((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.id) {
      case "pizza":
        backToTopBtn.style.display = "block";
        pizzaMenu.style.display = "block";
        console.log("pizza");
        window.scrollTo({
          top: (0, 1400),
          behavior: "smooth",
        });

        window.addEventListener("click", (e) => {
          if (e.target === Pizza) {
            burgerMenu.style.display = "none";
            chickenMenu.style.display = "none";
            sandwichMenu.style.display = "none";
            saladMenu.style.display = "none";
            coldDrinkMenu.style.display = "none";
            soupMenu.style.display = "none";
            pastaMenu.style.display = "none";
            hotDrinkMenu.style.display = "none";
            cakeMenu.style.display = "none";
          }
        });

        break;
      case "burger":
        burgerMenu.style.display = "block";
        backToTopBtn.style.display = "block";
        window.scrollTo({
          top: (0, 1400),
          behavior: "smooth",
        });
        window.addEventListener("click", (e) => {
          if (e.target === Burger) {
            pizzaMenu.style.display = "none";
            chickenMenu.style.display = "none";
            sandwichMenu.style.display = "none";
            saladMenu.style.display = "none";
            coldDrinkMenu.style.display = "none";
            soupMenu.style.display = "none";
            pastaMenu.style.display = "none";
            hotDrinkMenu.style.display = "none";
            cakeMenu.style.display = "none";
          }
        });

        break;
      case "chicken":
        chickenMenu.style.display = "block";
        backToTopBtn.style.display = "block";
        window.scrollTo({
          top: (0, 1400),
          behavior: "smooth",
        });
        window.addEventListener("click", (e) => {
          if (e.target === Chicken) {
            pizzaMenu.style.display = "none";
            burgerMenu.style.display = "none";
            sandwichMenu.style.display = "none";
            saladMenu.style.display = "none";
            coldDrinkMenu.style.display = "none";
            soupMenu.style.display = "none";
            pastaMenu.style.display = "none";
            hotDrinkMenu.style.display = "none";
            cakeMenu.style.display = "none";
          }
        });
        break;
      case "sandwich":
        sandwichMenu.style.display = "block";
        backToTopBtn.style.display = "block";
        window.scrollTo({
          top: (0, 1400),
          behavior: "smooth",
        });
        window.addEventListener("click", (e) => {
          if (e.target === Sandwich) {
            pizzaMenu.style.display = "none";
            burgerMenu.style.display = "none";
            chickenMenu.style.display = "none";
            saladMenu.style.display = "none";
            coldDrinkMenu.style.display = "none";
            soupMenu.style.display = "none";
            pastaMenu.style.display = "none";
            hotDrinkMenu.style.display = "none";
            cakeMenu.style.display = "none";
          }
        });
        break;
      case "salad":
        saladMenu.style.display = "block";
        backToTopBtn.style.display = "block";
        window.scrollTo({
          top: (0, 1400),
          behavior: "smooth",
        });
        window.addEventListener("click", (e) => {
          if (e.target === Salad) {
            pizzaMenu.style.display = "none";
            burgerMenu.style.display = "none";
            chickenMenu.style.display = "none";
            sandwichMenu.style.display = "none";
            coldDrinkMenu.style.display = "none";
            soupMenu.style.display = "none";
            pastaMenu.style.display = "none";
            hotDrinkMenu.style.display = "none";
            cakeMenu.style.display = "none";
          }
        });

        break;
      case "drink":
        coldDrinkMenu.style.display = "block";
        backToTopBtn.style.display = "block";
        window.scrollTo({
          top: (0, 1400),
          behavior: "smooth",
        });
        window.addEventListener("click", (e) => {
          if (e.target === Drink) {
            pizzaMenu.style.display = "none";
            burgerMenu.style.display = "none";
            chickenMenu.style.display = "none";
            sandwichMenu.style.display = "none";
            saladMenu.style.display = "none";
            soupMenu.style.display = "none";
            pastaMenu.style.display = "none";
            hotDrinkMenu.style.display = "none";
            cakeMenu.style.display = "none";
          }
        });
        break;
      case "soup":
        soupMenu.style.display = "block";
        backToTopBtn.style.display = "block";
        window.scrollTo({
          top: (0, 1400),
          behavior: "smooth",
        });
        window.addEventListener("click", (e) => {
          if (e.target === Soup) {
            pizzaMenu.style.display = "none";
            burgerMenu.style.display = "none";
            chickenMenu.style.display = "none";
            sandwichMenu.style.display = "none";
            saladMenu.style.display = "none";
            coldDrinkMenu.style.display = "none";
            pastaMenu.style.display = "none";
            hotDrinkMenu.style.display = "none";
            cakeMenu.style.display = "none";
          }
        });
        break;
      case "pasta":
        pastaMenu.style.display = "block";
        backToTopBtn.style.display = "block";
        window.scrollTo({
          top: (0, 1400),
          behavior: "smooth",
        });
        window.addEventListener("click", (e) => {
          if (e.target === Pasta) {
            pizzaMenu.style.display = "none";
            burgerMenu.style.display = "none";
            chickenMenu.style.display = "none";
            sandwichMenu.style.display = "none";
            saladMenu.style.display = "none";
            coldDrinkMenu.style.display = "none";
            soupMenu.style.display = "none";
            hotDrinkMenu.style.display = "none";
            cakeMenu.style.display = "none";
          }
        });
        break;
      case "coffee":
        hotDrinkMenu.style.display = "block";
        backToTopBtn.style.display = "block";
        window.scrollTo({
          top: (0, 1400),
          behavior: "smooth",
        });
        window.addEventListener("click", (e) => {
          if (e.target === Coffee) {
            pizzaMenu.style.display = "none";
            burgerMenu.style.display = "none";
            chickenMenu.style.display = "none";
            sandwichMenu.style.display = "none";
            saladMenu.style.display = "none";
            coldDrinkMenu.style.display = "none";
            soupMenu.style.display = "none";
            pastaMenu.style.display = "none";
            cakeMenu.style.display = "none";
          }
        });
        break;
      case "cake":
        cakeMenu.style.display = "block";
        backToTopBtn.style.display = "block";
        window.scrollTo({
          top: (0, 1400),
          behavior: "smooth",
        });
        window.addEventListener("click", (e) => {
          if (e.target === Cake) {
            pizzaMenu.style.display = "none";
            burgerMenu.style.display = "none";
            chickenMenu.style.display = "none";
            sandwichMenu.style.display = "none";
            saladMenu.style.display = "none";
            coldDrinkMenu.style.display = "none";
            soupMenu.style.display = "none";
            pastaMenu.style.display = "none";
            hotDrinkMenu.style.display = "none";
          }
        });
        break;

      default:
        break;
    }
  });
});

//----------------------back to top btn----------------------
let backToTopBtn = document.querySelector(".back-to-top-btn");
backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: (0, 680),
    behavior: "smooth",
  });
  backToTopBtn.style.display = "none";
});


