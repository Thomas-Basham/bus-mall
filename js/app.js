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

// old DOM window for button no longer used
// let resultsBtn = document.getElementById('show-results-btn');
// let showResults = document.getElementById('display-results-list');

let chartHeader = document.getElementById('chart-header');
let ctx = document.getElementById('myChart').getContext('2d');



// **** LOCAL STORAGE CONTINUED ****

// Step 3: Get it out of local storage
let retrievedProducts = localStorage.getItem('products');

console.log('retreived prodcuts', retrievedProducts);

// // Step 4: Parse our data for our code to read products

let parsedProducts = JSON.parse(retrievedProducts);

console.log('parsed products', parsedProducts);



// constructor function for new product info pushing to allProducts[]
function Product(name, fileExtension = 'jpg'){
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.src = `img/${name}.${fileExtension}`; // let's you inset another file type

  allProducts.push(this);

}

// Step 5: Use the data that came out of localStorage
// new Product objects 19 total
if (retrievedProducts) { // retrievedProducts = localStorage.getItem('products')
  allProducts = parsedProducts; // allProducts = []
} else {
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
}


// function that gets a random product from allProducts[]
function getRandomProduct() {
  return Math.floor(Math.random()* allProducts.length);
}

// empty array to store 3 objects called randomProduct1, randomProduct2, randomProduct3
let randomProducts = [];


// function to render a set of 3 product images out of 6 different random products
function renderImgs(){

  while(randomProducts.length < 6){
    let randoNum = getRandomProduct();
    while(!randomProducts.includes(randoNum)){
      randomProducts.unshift(randoNum);
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
// call function to render first 3 images
renderImgs();


// console.log(allProducts);
// console.log(roundsAllowed);

// function to render text above the chart
let h4 = document.createElement('h4');
function renderChartTitle(){
  let h1 = document.createElement('h1');
  h1.textContent = 'Results Displayed Here';
  chartHeader.appendChild(h1);

  h4.textContent = `After ${roundsAllowed} votes`;
  chartHeader.appendChild(h4);
}
renderChartTitle();



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

  // rerender 3 new prduct images from the 6 different images stored in randomProducts[]
  renderImgs();

  // once voting rounds completed - remove click event listener and remove the text where the chart will now be
  if(roundsAllowed === 0){
    imgContainer.removeEventListener('click', handleClick);
    renderChart();
    while (chartHeader.firstChild) {
      chartHeader.removeChild(chartHeader.firstChild);
    }

    // ********* LOCAL STORAGE BEGINS ***********

    // Step 1: Stringify our data
    let stringifiedProducts = JSON.stringify(allProducts);
    console.log('Stringified Products', stringifiedProducts);

    // Step 2: Set the item into Local Storage
    localStorage.setItem('products', stringifiedProducts);

  }
}


// ******** function to render a chart from: allProducts[i].name, allProducts[i].clicks, allProducts[i].views **********
// and push themn into an empty array called:  productNames[], ProductClicks[], and productViews[]
// and then render the chart using the data from those now filled arrays
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

  //*********** chartoObject and ctx are with chartjs library **********
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

// what event to listen to. click is the event, handleClick is the function called above
imgContainer.addEventListener('click', handleClick);









// **** Event listener for button no longer used *****
// resultsBtn.addEventListener('click', handleShowResults);






// ************ original function to render list to dom ************
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



