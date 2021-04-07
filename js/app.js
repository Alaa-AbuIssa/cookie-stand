'use strict';

let hours = ['6 am', '7 am', '8 am', '9 am', '10 am', '11 am', '12 am', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
let branches = [];
  
  function randomCustumerNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// constructor function for all object branch cookies

function branchCookie(branchName, minCustomerNum, maxCustomerNum, avgCookiesNum) {
    this.branch = branchName;
    this.minNum = minCustomerNum;
    this.maxNum = maxCustomerNum;
    this.avgCookiesNum = avgCookiesNum;
    this.cookiesPerHour = [];
    this.total = 0;
    // console.log(this);
    branches.push(this);

}

// the random custumer per hour =
branchCookie.prototype.calcCustomerPerHour=function () {
    return randomCustumerNumber(this.minNum, this.maxNum);
}

branchCookie.prototype.calcookiesPerHour = function () {
    for (let i = 0; i < hours.length; i++) {
        // the number cookies and multiply with avg in same function =
        this.cookiesPerHour.push(Math.floor( this.calcCustomerPerHour() * this.avgCookiesNum));
        this.total += this.cookiesPerHour[i];
        // globalTotal+=this.cookiesPerHour[i];
    }
}

let Seattle = new branchCookie('Seattle', 23, 65, 6.3);

let Tokyo = new branchCookie('Tokyo',3, 24, 1.2);

let Dubai = new branchCookie('Dubai', 11, 38, 3.7);

let Paris = new branchCookie('Paris', 20, 38, 2.3);

let Lima = new branchCookie('Lima', 2, 16, 4.6);

console.log('branches',branches);




let contaier = document.getElementById('contaier');
//create table in globel
let table = document.createElement('table');
//appeand
 contaier.appendChild(table);


// making header function

function headerRow() {
    //create tr element in table
    let tableHeadingRow = document.createElement('tr');
    //append tr to table
    table.appendChild(tableHeadingRow);
    
    
    let firstTableHeader = document.createElement('th');
    tableHeadingRow.appendChild(firstTableHeader);
    firstTableHeader.textContent='Name';
    
    for (let i = 0; i < hours.length; i++) {
        // create the first row
        let hoursTh = document.createElement('th');
        //appeanding
        tableHeadingRow.appendChild(hoursTh);
        //give the element the contant
        hoursTh.textContent = hours[i];
    
    }
    
    let finalTableHeader = document.createElement('th');
    tableHeadingRow.appendChild(finalTableHeader);
    finalTableHeader.textContent = "Daily Location Total";

    
}    



branchCookie.prototype.render = function () {
    //  
    let BranchRow = document.createElement('tr');
    // append 
    table.appendChild(BranchRow);

    //  td element
    let tableData = document.createElement('td');
    // append 
    BranchRow.appendChild(tableData);
    //  text content
    tableData.textContent=this.branch;


    for (let i = 0; i < hours.length; i++) {
        //  td element 
        let cookiesTd = document.createElement('td');
        // append
        BranchRow.appendChild(cookiesTd);
        // text content 
        cookiesTd.textContent = this.cookiesPerHour[i];
    }

    // total td 
    let totalTd = document.createElement('td');
    // append total to the store row
    BranchRow.appendChild(totalTd);
    // give text content
    totalTd.textContent = this.total;

}

// // get the element by id for the form
// let branchesForm= document.getElementById('branchesForm');
// console.log(branchesForm);

// // add the event listener

// branchesForm.addEventListener('submit',submitter);

// // create the submitter function

// function submitter(event) {
//     // console.log("hello");
//   // prevent the default behaviour of refreshing the page
//   event.preventDefault();

//   console.log(event);

//   branchName, minCustumerNumber, maxCustomerNumber, avgCookie

// //   new instance of the constructor with the new info
//   let amman=new branchCookie(branchName, minCustomerNum, maxCustomerNum, avgCookiesNum);
//   console.log(amman);

//   let container=document.getElementById('branchesProfile');

//   container.textContent='';
  
//   for (let i = 0; i < hours.length; i++) {
//     branches[i].calcCustomerPerHour();
//     branches[i].calcookiesPerHour();
    
//     branches[i].render();
//   }
// }


// footer function
function footer() {
    let footerRow=document.createElement('tr');

    // append 
    table.appendChild(footerRow);

    // make first th for footer

    let firstTableHeader = document.createElement('th');

    // append 
    footerRow.appendChild(firstTableHeader);

    // text content
    firstTableHeader.textContent='Totals';


    // with samer helping == lab preview
    let totalForEachHour;
    let megaTotal=0;
    // making the totals
    for (let i = 0; i < hours.length; i++) {
        totalForEachHour=0;
        for (let j = 0; j < branches.length; j++) {
            
            totalForEachHour+=branches[j].cookiesPerHour[i];
            megaTotal+=branches[j].cookiesPerHour[i];
         
        }
        console.log(totalForEachHour);
        let footerTh=document.createElement('th');

        footerRow.appendChild(footerTh);

        footerTh.textContent=totalForEachHour;

    }

    // total of totals
    let totalTh= document.createElement('th');

    // append
    footerRow.appendChild(totalTh);

    //  text content:
    totalTh.textContent=megaTotal;
     
}

headerRow();
for (let i = 0; i < branches.length; i++) {
    branches[i].calcookiesPerHour();
    branches[i].render();
}
footer();

