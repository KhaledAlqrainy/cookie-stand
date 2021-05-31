'use strict';

let ophrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', ' 1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let cont = document.getElementById('container');
function randomValue(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;

}

function Sales(name,min,max,avg,cushrly,cookiehrly){

    this.name = name;
    this.min = min;
    this.max = max;
    this.avg= avg;
    this.cushrly= cushrly;
    this.cookiehrly = cookiehrly;
    this.total = 0;

}

/*Sales.updatingtotal = function(){
    for (let i = 0; i < ophrs.length; i++) {

        this.cookiehrly.push(this.cushrly[i] * Math.ceil(this.avgcookie))
  
        this.total = this.total + this.cookiehrly[i];
      }

}
*/

Sales.prototype.render = function(){
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




let seattle = new Sales('seattle',23,65,6.3);
seattle.render();
console.log(seattle); 