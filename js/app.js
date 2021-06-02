'use strict';

let ophrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', ' 1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let cont = document.getElementById('container');

let table = document.createElement('table');
cont.appendChild(table);

function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

let objectarr = [];
function Sales(name,min,max,avg){

  this.name = name;
  this.min = min;
  this.max = max;
  this.avg= avg;
  this.cushrly= [];
  this.cookiehrly = []; 
  this.total = 0;
  objectarr.push(this);

}

//Portotypes 

Sales.prototype.randomcus = function(){

    for (let i = 0; i < ophrs.length; i++) {
      this.cushrly.push(randomValue(this.min,this.max));

    }
  }


Sales.prototype.randomcookie = function(){
  for (let i = 0; i < ophrs.length; i++) {

      this.cookiehrly.push(this.cushrly[i] * Math.ceil(this.avg));

      this.total = this.total + this.cookiehrly[i];
    } 

}

function hdRow() {

let firstRow = document.createElement('tr')
table.appendChild(firstRow);
let cell = document.createElement('th');
firstRow.appendChild(cell);


for (let i = 0; i < ophrs.length; i++) {
  let th = document.createElement('th');
  firstRow.appendChild(th);
  th.textContent= ophrs[i];

}

let dailylototal = document.createElement('th');
firstRow.appendChild(dailylototal);
dailylototal.textContent= 'dailyLocationtotal';
}
hdRow(); 


//renders 

Sales.prototype.render = function(){

  let tr = document.createElement('tr');
  table.appendChild(tr);
  let firstcell = document.createElement('th');
  tr.appendChild(firstcell);
  firstcell.textContent = this.name;

  for (let i = 0; i < ophrs.length; i++){
    let td = document.createElement('td');
    tr.appendChild(td);
    td.textContent = this.cookiehrly[i];
  }

  let lastcell = document.createElement('th');
  tr.appendChild(lastcell);
  lastcell.textContent = this.total;
}

//calling

let seattle = new Sales('Seattle',23,65,6.3);
let tokyo = new Sales('Tokyo',23,65,6.3);
let dubai = new Sales('Dubai',23,65,6.3);
let paris = new Sales('Paris',23,65,6.3);
let lima = new Sales('Lima',23,65,6.3);


for ( let i=0; i < objectarr.length; i++){
  objectarr[i].randomcus();
  objectarr[i].randomcookie();
  objectarr[i].render();
}

function footerrow (){
  let lastrow = document.createElement('tr');
  table.appendChild(lastrow);
  let firstcell = document.createElement('th');
  lastrow.appendChild(firstcell);
  firstcell.textContent = 'totals';

  for ( let i =0; i< ophrs.length; i++){
    let sum =0;
    sum= seattle.cookiehrly[i] + tokyo.cookiehrly[i] + dubai.cookiehrly[i] + paris.cookiehrly[i] + lima.cookiehrly[i]

    let td = document.createElement('td');
    lastrow.appendChild(td);
    td.textContent= sum;

  }

}

footerrow();


const cityform = document.getElementById('Cityinfo'); 
cityform.addEventListener('submit', handler);
{

function handler(event){

  event.preventDefault();

  let name = event.target.cityname.value;
  let minmum = event.target.min.value;
  let maximum = event.target.max.value;
  let avarge = event.target.avg.value;

  let cityy = new Sales(name, minmum, maximum, avarge);

}

cityy.randomcookie();
cityy.randomcus();
cityy.render();
/*function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//console.log(randomValue(23,65));


const seattle = {

  name: 'Seattle',
  mincust: 23,
  maxcust: 65,
  avgcookie: 6.3,
  total: 0,
  cushrly: [],
  cookiehrly: [],
  randomcus: function (min, max) {

    for (let i = 0; i < ophrs.length; i++) {
      this.cushrly.push(randomValue(this.mincust, this.maxcust));

    }
  },

  randomcookie: function () {

    for (let i = 0; i < ophrs.length; i++) {

      this.cookiehrly.push(this.cushrly[i] * Math.ceil(this.avgcookie))

      this.total = this.total + this.cookiehrly[i];
    }
  },

  render: function () {
    let name = document.createElement('h2');
    cont.appendChild(name);
    name.textContent = this.name;

    let unli = document.createElement('ul');
    cont.appendChild(unli);

    for (let i = 0; i < ophrs.length; i++) {
      let list = document.createElement('li');
      unli.appendChild(list);
      list.textContent = `${ophrs[i]} : ${this.cookiehrly[i]} cookies`
    }

    let dailytotal = document.createElement('li');
    unli.appendChild(dailytotal);
    dailytotal.textContent= `total : ${this.total} cookies`; 
  }
}


seattle.randomcus();
seattle.randomcookie();
seattle.render();


const tokyo = {

  name: 'Tokyo',
  mincust: 3,
  maxcust: 24,
  avgcookie: 1.2,
  total: 0,
  cushrly: [],
  cookiehrly: [],
  randomcus: function (min, max) {

    for (let i = 0; i < ophrs.length; i++) {
      this.cushrly.push(randomValue(this.mincust, this.maxcust));

    }
  },

  randomcookie: function () {

    for (let i = 0; i < ophrs.length; i++) {

      this.cookiehrly.push(this.cushrly[i] * Math.ceil(this.avgcookie))

      this.total = this.total + this.cookiehrly[i];
    }
  },

  render: function () {
    let name = document.createElement('h2');
    cont.appendChild(name);
    name.textContent = this.name;

    let unli = document.createElement('ul');
    cont.appendChild(unli);

    for (let i = 0; i < ophrs.length; i++) {
      let list = document.createElement('li');
      unli.appendChild(list);
      list.textContent = `${ophrs[i]} : ${this.cookiehrly[i]} cookies`
    }

    let dailytotal = document.createElement('li');
    unli.appendChild(dailytotal);
    dailytotal.textContent= `total : ${this.total} cookies`; 
  }
}

tokyo.randomcus();
tokyo.randomcookie();
tokyo.render();


const dubai = {

  name: 'Dubai',
  mincust: 11,
  maxcust: 38,
  avgcookie: 3.7,
  total: 0,
  cushrly: [],
  cookiehrly: [],
  randomcus: function (min, max) {

    for (let i = 0; i < ophrs.length; i++) {
      this.cushrly.push(randomValue(this.mincust, this.maxcust));

    }
  },

  randomcookie: function () {

    for (let i = 0; i < ophrs.length; i++) {

      this.cookiehrly.push(this.cushrly[i] * Math.ceil(this.avgcookie))

      this.total = this.total + this.cookiehrly[i];
    }
  },

  render: function () {
    let name = document.createElement('h2');
    cont.appendChild(name);
    name.textContent = this.name;

    let unli = document.createElement('ul');
    cont.appendChild(unli);

    for (let i = 0; i < ophrs.length; i++) {
      let list = document.createElement('li');
      unli.appendChild(list);
      list.textContent = `${ophrs[i]} : ${this.cookiehrly[i]} cookies`
    }

    let dailytotal = document.createElement('li');
    unli.appendChild(dailytotal);
    dailytotal.textContent= `total : ${this.total} cookies`; 
  }
}

dubai.randomcus();
dubai.randomcookie();
dubai.render();



const paris = {

  name: 'Paris',
  mincust: 20,
  maxcust: 38,
  avgcookie: 2.3,
  total: 0,
  cushrly: [],
  cookiehrly: [],
  randomcus: function (min, max) {

    for (let i = 0; i < ophrs.length; i++) {
      this.cushrly.push(randomValue(this.mincust, this.maxcust));

    }
  },

  randomcookie: function () {

    for (let i = 0; i < ophrs.length; i++) {

      this.cookiehrly.push(this.cushrly[i] * Math.ceil(this.avgcookie))

      this.total = this.total + this.cookiehrly[i];
    }
  },

  render: function () {
    let name = document.createElement('h2');
    cont.appendChild(name);
    name.textContent = this.name;

    let unli = document.createElement('ul');
    cont.appendChild(unli);

    for (let i = 0; i < ophrs.length; i++) {
      let list = document.createElement('li');
      unli.appendChild(list);
      list.textContent = `${ophrs[i]} : ${this.cookiehrly[i]} cookies`
    }

    let dailytotal = document.createElement('li');
    unli.appendChild(dailytotal);
    dailytotal.textContent= `total : ${this.total} cookies`; 
  }
}

paris.randomcus();
paris.randomcookie();
paris.render();


const lima = {

  name: 'Lima',
  mincust: 2,
  maxcust: 16,
  avgcookie: 4.6,
  total: 0,
  cushrly: [],
  cookiehrly: [],
  randomcus: function (min, max) {

    for (let i = 0; i < ophrs.length; i++) {
      this.cushrly.push(randomValue(this.mincust, this.maxcust));

    }
  },

  randomcookie: function () {

    for (let i = 0; i < ophrs.length; i++) {

      this.cookiehrly.push(this.cushrly[i] * Math.ceil(this.avgcookie))

      this.total = this.total + this.cookiehrly[i];
    }
  },

  render: function () {
    let name = document.createElement('h2');
    cont.appendChild(name);
    name.textContent = this.name;

    let unli = document.createElement('ul');
    cont.appendChild(unli);

    for (let i = 0; i < ophrs.length; i++) {
      let list = document.createElement('li');
      unli.appendChild(list);
      list.textContent = `${ophrs[i]} : ${this.cookiehrly[i]} cookies`
    }

    let dailytotal = document.createElement('li');
    unli.appendChild(dailytotal);
    dailytotal.textContent= `total : ${this.total} cookies`; 
  }
}

lima.randomcus();
lima.randomcookie();
lima.render();*/











