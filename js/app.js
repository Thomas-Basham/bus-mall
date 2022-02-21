'use strict';

// console.log('oh, hello');

// total rounds the user will be allowed to vote
let roundsAllowed = 25;


// empty array to push product obejcts to
let allProducts = [];

// DOM Window
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgTre = document.getElementById('img-tre');
// console.log(imgOne);
let resultsBtn = document.getElementById('show-results-btn');
let showResults = document.getElementById('display-results-list');

// constructor function for new product info pushing to allProducts[]
function Product(name, fileExtension = 'jpg'){
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.src = `img/${name}.${fileExtension}`; // let's you inset another file type

  allProducts.push(this);

}
// products: 19 total
new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');

console.log(allProducts);


// function gets a random product
function getRandomProduct() {
  return Math.floor(Math.random()* allProducts.length);
}

// render images
function renderImgs(){
  let randomProduct1 = getRandomProduct();
  let randomProduct2 = getRandomProduct();
  let randomProduct3 = getRandomProduct();

  // need the validation to make sure they do not show up in the same round
  // NOTE: Your lab will require you to have 3 unique images per round
  // HINT: Consider using a container to store your random indexes and then validate if there are 3 unique numbers in that container

  while(randomProduct1 === randomProduct2 || randomProduct3){
    randomProduct2 = getRandomProduct();
  }

  // while(randomProduct2 === randomProduct1 || randomProduct3){
  //   randomProduct3 = getRandomProduct();
  // }

  imgOne.src = allProducts[randomProduct1].src;
  imgOne.alt = allProducts[randomProduct1].name;
  allProducts[randomProduct1].views++;

  imgTwo.src = allProducts[randomProduct2].src;
  imgTwo.alt = allProducts[randomProduct2].name;
  allProducts[randomProduct2].views++;

  imgTre.src = allProducts[randomProduct3].src;
  imgTre.alt = allProducts[randomProduct3].name;
  allProducts[randomProduct3].views++;
}

renderImgs();






