'use strict';

const hours= [
  '6am',
  '7am',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm',
  '1pm',
  '2pm',
  '3pm',
  '4pm',
  '5pm',
  '6pm',
  '7pm',
];

function randomNumberOf(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let BranchArr = [];

function Branch(branchName, minHourlyCustomer, maxHourlyCustomer, avgCookieSalePerCustomer) {
  this.name = branchName;
  this.min = minHourlyCustomer;
  this.maxCustomer = maxHourlyCustomer;
  this.avgCookiesPerHour = avgCookieSalePerCustomer;
  this.customersNumberPerHour = [];
  this.cookiesPurchasedPerHour = [];
  this.totalcookies = 0;

  BranchArr.push(this);
}

console.log(BranchArr);
Branch.prototype.RandomCustomerNumber = function () {
  for (let i = 0; i < hours.length; i++) {
    this.customersNumberPerHour.push(
      randomNumberOf(this.min, this.maxCustomer)
    );
  }
};

Branch.prototype.CookiesP = function () {
  this.totalcookies = 0;
  for (let i = 0; i < hours.length; i++) {
    this.cookiesPurchasedPerHour.push(
      Math.floor(this.customersNumberPerHour[i] * this.avgCookiesPerHour)
    );
    this.totalcookies = this.totalcookies + this.cookiesPurchasedPerHour[i];
  }
};

let seattle = new Branch('Seattle', 23, 65, 6.3);
let tokyo = new Branch('Tokyo', 3, 24, 1.2);
let dubai = new Branch('Dubai', 11, 38, 3.7);
let paris = new Branch('Paris', 20, 38, 2.3);
let lima = new Branch('Lima', 2, 16, 4.6);





//creat Globle Table

//get the parent Element By ID
let parentTable =document.getElementById('parent');

//creat TAble Element
let tableElement=document.createElement('table');

//append the Table Element to the parent
parentTable.appendChild(tableElement);



function firstHeadingRow() {

  // creat the first tr element
  let trElement = document.createElement('tr');

  //append it to the table element
  tableElement.appendChild(trElement);

  //creat the firt th element
  let firstThElement = document.createElement('th');

  //append first th element to the tr elment
  trElement.appendChild(firstThElement);

  //adding the text
  firstThElement.textContent = 'Baranch Name ';



  //for the hours heading Row
  for (let x = 0; x < hours.length; x++) {

    // creat th element for the hour heading row
    let hoursHeadingRow = document.createElement('th');

    // append it to the tr Element
    trElement.appendChild(hoursHeadingRow);

    //adding hour to the row
    hoursHeadingRow.textContent = hours[x];
  }


  //for the final part of the row

  // creat th element for the daily location total
  let totalThElement = document.createElement('th');

  // append it to the tr element 
  trElement.appendChild(totalThElement);

  //adding text 
  totalThElement.textContent = 'Daily location /Total';
}


//render function
Branch.prototype.render = function () {

  // creat tr element
  let trElement = document.createElement('tr');

  //append to the table
  tableElement.appendChild(trElement);

  //creat td element
  let tdname = document.createElement('td');

  //eppend to the tr element
  trElement.appendChild(tdname);

  //add text
  tdname.textContent = this.name;

  for (let y = 0; y < hours
    .length; y++) {
 
    let tdBranchs = document.createElement('td');
    trElement.appendChild(tdBranchs);
    tdBranchs.textContent = this.cookiesPurchasedPerHour[y];
    console.log(this.cookiesPurchasedPerHour[y]);
  }

  let thfElement = document.createElement('td');
  trElement.appendChild(thfElement);
  thfElement.textContent = this.totalcookies;
};

function finalRow() {

  //creat the first tr for the final row
  let trElement = document.createElement('tr');

  //append it to the table element
  tableElement.appendChild(trElement);

  //creat the first th element for the final row
  let firstThElement = document.createElement('th');

  //append it to the tr element
  trElement.appendChild(firstThElement);

  //adding the text
  firstThElement.textContent = 'Totals';

  let totalOfTotal = 0;
  for (let z = 0; z < hours.length; z++) {
    let totalcookiesEachHour = 0;

    for (let q = 0; q < BranchArr.length; q++) {
      totalcookiesEachHour += BranchArr[q].cookiesPurchasedPerHour[z];
      totalOfTotal += BranchArr[q].cookiesPurchasedPerHour[z];
    }

    let finalTh = document.createElement('th');
    trElement.appendChild(finalTh);
    finalTh.textContent = totalcookiesEachHour;
  }

  let thfElement = document.createElement('th');
  trElement.appendChild(thfElement);
  thfElement.textContent = totalOfTotal;
}

//get the Element by its id
let parent = document.getElementById('userEvent');

//add event listener
userEvent.addEventListener('submit', submitter);

//create a submitter function , it just run when click the submit button .
function submitter(event) {
  event.preventDefault();

  let name = event.target.place.value;
  let minCustomer = parseInt(event.target.min.value);
  let maxCustomer = parseInt(event.target.max.value);
  let avgCookiesPerHour = parseInt(event.target.avg.value);

  let userEvent = new Branch(
    name,
    minCustomer,
    maxCustomer,
    avgCookiesPerHour
  );
  console.log(userEvent);
  tableElement.textContent = '';

  firstHeadingRow();

  for (let h = 0; h < BranchArr.length; h++) {
    BranchArr[h].RandomCustomerNumber();
    BranchArr[h].CookiesP();
    BranchArr[h].render();
  }

  finalRow();
}

firstHeadingRow();

for (let h = 0; h < BranchArr.length; h++) {
  BranchArr[h].RandomCustomerNumber();
  BranchArr[h].CookiesP();
  BranchArr[h].render();
}

finalRow();
