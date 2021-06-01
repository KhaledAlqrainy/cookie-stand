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
