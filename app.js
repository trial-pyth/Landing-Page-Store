const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");
console.log(Array.from(menuItems));

const products = [
  {
    id: 1,
    title: "Authentic photos from London and blitz",
    price: "10,000",
    src: "./img/london-blitz.jpeg",
  },
  {
    id: 2,
    title: "Rifles and weapons from America",
    price: "8,890",
    src: "./img/normandy.jpeg",
  },
  {
    id: 3,
    title: "The German People",
    price: "8,000",
    src: "./img/reichstag.jpg",
  },
  {
    id: 4,
    title: "Soviets and their people",
    price: "15,000",
    src: "./img/soviet-flag.webp",
  },
  {
    id: 5,
    title: "Lost Territory",
    price: "5,000",
    src: "./img/france-lost.jpeg",
  },
];

let clickedProducts = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //for current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.src;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });

    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const memorialTextContainer = document.querySelector(".memorialTextContainer");
const memorialImgContainer = document.querySelector(".memorial-statue-img");
const medalsImgContainer = document.querySelector(".medals-image-container");
const medalsTextContainer = document.querySelector(".medals-text-container");
const enigmaTextContainer = document.querySelector(".enigma-text-container");
const enigmaImgContainer = document.querySelector(".enigma-image-container");

window.addEventListener("scroll", () => {
  let offsetY = window.scrollY;
  console.log(offsetY * 0.0001);
  memorialTextContainer.style.transform = `translateX(${offsetY * 0.16}px)`;
  memorialImgContainer.style.transform = `translateX(${-offsetY * 0.19}px)`;
  medalsImgContainer.style.transform = `translateY(${-offsetY * 0.19}px)`;
  medalsTextContainer.style.transform = `translateX(${
    offsetY * 0.16 - 200
  }px )`;

  enigmaImgContainer.style.transform = `translateY(calc(130vh - ${
    offsetY * 0.5
  }px))`;

  enigmaTextContainer.style.transform = `translateY(calc(130vh+${
    offsetY * 0.4
  }))`;
});
