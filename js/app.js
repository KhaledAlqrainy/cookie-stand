'use strict';

let ophrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', ' 1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm']
let cont = document.getElementById('container');
function randomValue(min, max) {
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
lima.render();











