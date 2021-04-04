'use strict';
console.log("hello");

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
//seattle
let seattleCookies = {
  location: 'Seattle',
  min: 23,
  max: 65,
  avgCookieSale: 6.3,
  hourlySales: [],
  dailySales: 0,

  randomCustNum: function () {
    let range = seattleCookies.max - seattleCookies.min;
    let randomCount = Math.random() * range + seattleCookies.min;
    return Math.ceil(randomCount);
  },

  hourlyDailySales: function () {
    for (let i = 0; i < hours.length; i++) {
      let numOfCookies = Math.ceil(
        seattleCookies.randomCustNum() * seattleCookies.avgCookieSale
      );
      seattleCookies.hourlySales.push(numOfCookies);
      seattleCookies.dailySales += numOfCookies;
    }
  },

  render: function () {
    let container = document.getElementById('contentArea');
    let h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = 'Seattle';
    let list = document.createElement('ul');
    container.appendChild(list);
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent =
        hours[i] + ': ' + seattleCookies.hourlySales[i] + ' cookies';
      list.appendChild(listItem);
    }
    let listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + seattleCookies.dailySales + ' cookies';
    list.appendChild(listItem);
  },
};
seattleCookies.hourlyDailySales();
seattleCookies.render();






//Tokyo
let tokyoCookies = {
  location: 'Tokyko',
  min: 3,
  max: 24,
  avgCookieSale: 1.2,
  hourlySales: [],
  dailySales: 0,

  randomCustNum: function () {
    let range = tokyoCookies.max - tokyoCookies.min;
    let randomCount = Math.random() * range + tokyoCookies.min;
    return Math.ceil(randomCount);
  },

  hourlyDailySales: function () {
    for (let i = 0; i < hours.length; i++) {
      let numOfCookies = Math.ceil(
        tokyoCookies.randomCustNum() * tokyoCookies.avgCookieSale
      );
      tokyoCookies.hourlySales.push(numOfCookies);
      tokyoCookies.dailySales += numOfCookies;
    }
  },

  render: function () {
    let container = document.getElementById('contentArea');
    let h2 = document.createElement('h2');
    container.appendChild(h2);
    h2.textContent = 'Tokyo';
    let list = document.createElement('ul');
    container.appendChild(list);
    for (let i = 0; i < hours.length; i++) {
      let listItem = document.createElement('li');
      listItem.textContent =
        hours[i] + ': ' + tokyoCookies.hourlySales[i] + ' cookies';
      list.appendChild(listItem);
    }
    let listItem = document.createElement('li');
    listItem.textContent = 'Total: ' + tokyoCookies.dailySales + ' cookies';
    list.appendChild(listItem);
  },
};
tokyoCookies.hourlyDailySales();
tokyoCookies.render();





//Dubai
let dubaiCookies = {
    location: 'Dubai',
    min: 11,
    max: 38,
    avgCookieSale: 3.7,
    hourlySales: [],
    dailySales: 0,
  
    randomCustNum: function () {
      let range = dubaiCookies.max - dubaiCookies.min;
      let randomCount = Math.random() * range + dubaiCookies.min;
      return Math.ceil(randomCount);
    },
  
    hourlyDailySales: function () {
      for (let i = 0; i < hours.length; i++) {
        let numOfCookies = Math.ceil(
            dubaiCookies.randomCustNum() * dubaiCookies.avgCookieSale
        );
        dubaiCookies.hourlySales.push(numOfCookies);
        dubaiCookies.dailySales += numOfCookies;
      }
    },
  
    render: function () {
      let container = document.getElementById('contentArea');
      let h2 = document.createElement('h2');
      container.appendChild(h2);
      h2.textContent = 'Dubai';
      let list = document.createElement('ul');
      container.appendChild(list);
      for (let i = 0; i < hours.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent =
          hours[i] + ': ' + dubaiCookies.hourlySales[i] + ' cookies';
        list.appendChild(listItem);
      }
      let listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + dubaiCookies.dailySales + ' cookies';
      list.appendChild(listItem);
    },
  };
  dubaiCookies.hourlyDailySales();
  dubaiCookies.render();
  



  

  //Paris
let parisCookies = {
    location: 'paris',
    min: 20,
    max: 38,
    avgCookieSale: 2.3,
    hourlySales: [],
    dailySales: 0,
  
    randomCustNum: function () {
      let range = parisCookies.max - parisCookies.min;
      let randomCount = Math.random() * range + parisCookies.min;
      return Math.ceil(randomCount);
    },
  
    hourlyDailySales: function () {
      for (let i = 0; i < hours.length; i++) {
        let numOfCookies = Math.ceil(
            parisCookies.randomCustNum() * parisCookies.avgCookieSale
        );
        parisCookies.hourlySales.push(numOfCookies);
        parisCookies.dailySales += numOfCookies;
      }
    },
  
    render: function () {
      let container = document.getElementById('contentArea');
      let h2 = document.createElement('h2');
      container.appendChild(h2);
      h2.textContent = 'Paris';
      let list = document.createElement('ul');
      container.appendChild(list);
      for (let i = 0; i < hours.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent =
          hours[i] + ': ' + parisCookies.hourlySales[i] + ' cookies';
        list.appendChild(listItem);
      }
      let listItem = document.createElement('li');
      listItem.textContent = 'Total: ' + parisCookies.dailySales + ' cookies';
      list.appendChild(listItem);
    },
  };
  parisCookies.hourlyDailySales();
  parisCookies.render();
  











  //Lima
  let limaCookies = {
    location: 'Lima',
    min: 2,
    max: 16,
    avgCookieSale: 4.6,
    hourlySales: [],
    dailySales: 0,
  
    randomCustNum: function () {
      let range = limaCookies.max - limaCookies.min;
      let randomCount = Math.random() * range + limaCookies.min;
      return Math.ceil(randomCount);
    },
  
    hourlyDailySales: function () {
      for (let i = 0; i < hours.length; i++) {
        let numOfCookies = Math.ceil(
            limaCookies.randomCustNum() * limaCookies.avgCookieSale
        );
        limaCookies.hourlySales.push(numOfCookies);
        limaCookies.dailySales += numOfCookies;
      }
    },
  
    render: function () {
      let container = document.getElementById('contentArea');
      let h2 = document.createElement('h2');
      container.appendChild(h2);
      h2.textContent = 'Lima';
      let list = document.createElement('ul');
      container.appendChild(list);
      for (let i = 0; i < hours.length; i++) {
        let listItem = document.createElement('li');
        listItem.textContent =
          hours[i] + ': ' + limaCookies.hourlySales[i] + ' cookies';
        list.appendChild(listItem);
      }
      let listItem = document.createElement('li');
      listItem.textContent = 'Total:' + limaCookies.dailySales + ' cookies';
      list.appendChild(listItem);
    },
  };
  limaCookies.hourlyDailySales();
  limaCookies.render();
  

