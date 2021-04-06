'use strict';

let hours = [
  '6am',
  '7am ',
  '8am',
  '9am',
  '10am',
  '11am',
  '12pm ',
  '1pm ',
  '2pm ',
  '3pm ',
  '4pm ',
  '5pm ',
  '6pm ',
  '7pm ',
];
function Branch (branchName, minCustomerPerDayy, maxCustomerPerDay, avgCookiesPerCustomer){

  this.branchName = branchName;
  this.min = minCustomerPerDayy;
  this.max = maxCustomerPerDay;
  this.customrenum = customrenum;
  this.sum = sum;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.salesPerDay  = 0,
  this.salesPerHour = [],

}

Branch.prototype.custNum = function () {
  for (var i = 0; i < hourarr.length; i++) {
          let range = seattleCookies.max - seattleCookies.min;
          return Math.floor(Math.random() * range + seattleCookies.min);

      
  }
  Branch.prototype.dailySalePerHour= function () {
        for (let i = 0; i < hours.length; i++) {
          let numOfCookies = Math.ceil(
            seattleCookies.custNum() * seattleCookies.avgCookie );
          seattleCookies.salesPerHour.push(numOfCookies);
          seattleCookies.salesPerDay += numOfCookies;
        }

      }
    }
