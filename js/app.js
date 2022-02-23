'use strict';

// console.log('oh, hello');

// total rounds the user will be allowed to vote. Needs to be 25. changed to 5 for testing purposes
let roundsAllowed =25;


// empty array to push product obejcts to
let allProducts = [];

// DOM Window
let imgContainer = document.getElementById('img-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgTre = document.getElementById('img-tre');
// console.log(imgOne);
// let resultsBtn = document.getElementById('show-results-btn');
// let showResults = document.getElementById('display-results-list');
let chartHeader = document.getElementById('chart-header');
let ctx = document.getElementById('myChart').getContext('2d');



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




// function gets a random product
function getRandomProduct() {
  return Math.floor(Math.random()* allProducts.length);
}

let randomProducts = [];
// hint for 2 unique rounds: 6 numbers for 2 unique rounds.
let randomProducts2 = [];

// render images
function renderImgs(){

  while(randomProducts.length < 3){
    let randoNum = getRandomProduct();
    while(!randomProducts.includes(randoNum)){
      randomProducts.push(randoNum);
    }
  }

  let randomProduct1 = randomProducts.pop();
  let randomProduct2 = randomProducts.pop();
  let randomProduct3 = randomProducts.pop();


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


// My attempt to render a new set of images
function renderNewImages(){

  while(randomProducts2.length < 3){
    let randoNum = getRandomProduct();
    while(!randomProducts2.includes(randoNum)){
      randomProducts.push(randoNum);
    }
  }


  let randomProduct4 = randomProducts2.pop();
  let randomProduct5 = randomProducts2.pop();
  let randomProduct6 = randomProducts2.pop();

  imgOne.src = allProducts[randomProduct4].src;
  imgOne.alt = allProducts[randomProduct4].name;
  allProducts[randomProduct4].views++;

  imgTwo.src = allProducts[randomProduct5].src;
  imgTwo.alt = allProducts[randomProduct5].name;
  allProducts[randomProduct5].views++;

  imgTre.src = allProducts[randomProduct6].src;
  imgTre.alt = allProducts[randomProduct6].name;
  allProducts[randomProduct6].views++;

  while(!randomProducts.includes(randomProducts2)){
    randomProducts.splice(0, 3, randomProduct4, randomProduct5, randomProduct6);
  }
}




console.log(allProducts);

console.log(roundsAllowed);

function renderChartTitle(){

  let h1 = document.createElement('h1');
  h1.textContent = 'Results Displayed Here';
  chartHeader.appendChild(h1);

}
renderChartTitle();

let h4 = document.createElement('h4');


function handleClick(event){
  let imgClicked = event.target.alt;
  roundsAllowed--;

  h4.textContent = `After ${roundsAllowed} votes`; // changes chart heading as rounds is decrimented
  chartHeader.appendChild(h4);


  for(let i = 0; i < allProducts.length; i++){
    if(imgClicked === allProducts[i].name){
      allProducts[i].clicks++;
    }
  }

  // rerender 3 new prduct images
  renderImgs();
  // renderNewImages();

  // once voting rounds completed -  stop clicks
  if(roundsAllowed === 0){
    imgContainer.removeEventListener('click', handleClick);
    renderChart();
    while (chartHeader.firstChild) {
      chartHeader.removeChild(chartHeader.firstChild);
    }
  }
}


// function handleShowResults(event){  //eslint-disable-line
//   // if no more votes - then render a list

//   if(roundsAllowed>0){
//     alert('Please complete 25 rounds of voting, then click the Show Results button to see your results');
//   }

//   if(roundsAllowed === 0){
//     for(let i = 0; i < allProducts.length; i++){
//       let li = document.createElement('li');
//       li.textContent = `${allProducts[i].name} was viewed ${allProducts[i].views} times, and was voted for ${allProducts[i].clicks} times.`;
//       showResults.appendChild(li);
//     }
//   }
// }


function renderChart(){

  let productNames = [];

  let productClicks = [];
  let productViews = [];

  for(let i = 0; i < allProducts.length; i++){
    productNames.push(allProducts[i].name);
    productClicks.push(allProducts[i].clicks);
    productViews.push(allProducts[i].views);
  }
  console.log(productNames);


  let chartObject = { //eslint-disable-line
    type: 'bar',
    data: {
      labels: productNames,
      datasets: [
        {
          label: '# of Views',
          data: productViews,
          backgroundColor: [
            'green'
          ],
          borderColor: [
            'yellow'
          ],
          borderWidth: 1,
          hoverBorderColor: 'clear',
          hoverBackgroundColor: 'purple'
        },
        {
          label: '# of Votes',
          data: productClicks,
          backgroundColor: [
            'yellow'
          ],
          borderColor: [
            'green'
          ],
          borderWidth: 1,
          hoverBorderColor: 'clear',
          hoverBackgroundColor: 'purple'
        }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  };


  const myChart = new Chart(ctx, chartObject); //eslint-disable-line
}

// what event we listen to


imgContainer.addEventListener('click', handleClick);

// resultsBtn.addEventListener('click', handleShowResults);





