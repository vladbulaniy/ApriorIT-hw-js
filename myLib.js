"use strict";

function Lib() {
  this.isPositive = (n) => {
    if (typeof n === 'number') {
      if (n >= 0) {
        return true
      } else {
        return false
      }
    } else {
      return "It's not a number"
    }
  } //isPositive

  this.isValue = (a) => {
    if (a !== '' && a !== undefined) {
      return true
    } else {
      return false
    }
  } //isValue

  this.validNumber = (n) => {
    if (typeof n === 'number' && n !== Infinity && !isNaN(n)) {
      return true
    } else {
      return false
    }
  } //validNumber

  this.toNumber = (s) => {
    let temp = Number(s);
    if (!isNaN(temp) && s !== Infinity) {
      return temp
    } else {
      return "Sorry, this string can't transform to number"
    }
  } //toNumber

  this.qrt = function (n) {
    if (!isNaN(n) && n !== Infinity && typeof n !== 'string') {
      return Math.pow(n, 2);
    } else {
      return "Sorry, this can't number"
    }
  } //qrt

  this.addDays = (days) => {
    let dateNow = new Date();
    if (!isNaN(days) && days !== Infinity && typeof days !== 'string') {
      return new Date(dateNow.setDate(dateNow.getDate() + days));
    } else {
      return "Sorry, this can't number"
    }

  } //addDays

  this.evenFilter = (arr) => {
    if (isNaN(arr) && arr === Infinity && arr ) {
      console.log("Sorry, this can't number");
      return
    }
    function CheckArr(arr) {
      let indicator = true;
      arr.forEach(function (el) {
        if (typeof el !== 'number')
          return indicator = false;
      })
      return indicator;
    }

    function handle(arr) {
      let outArr = [];
      arr.forEach(function (el) {
        if (el % 2 == 0) {
          outArr.push(el);
        }
      })
      return outArr;
    }

    let indicator = CheckArr(arr);

    if (indicator) {
      return handle(arr);
    } else {
      console.log("Sorry, I can't handle this array... It content not only number")
    }
  } //evenFilter

  this.cutStrings = (source, length) => {
    let outArr = [];
    source.forEach(function (el) {
      outArr.push(el.slice(0, length));
    })
    return outArr;
  } //cutStrings

  this.getFibonachi = (length) => {
    if (typeof length !== 'number' || length == Infinity || isNaN(length)) {
      console.log("Sorry, this is not a number");
      return
    }
    let outArr = [];

    let fib = (n) => {
      var a = 1,
        b = 1;
      for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
      }
      return b;
    }

    for (let i = 0; i < length; i++) {
      outArr.push(fib(i));
    }
    return outArr;
  } //getFibonachi

  this.myDeepCopy = (source) => {
    let copyObj = {};
    for (let key in source) {
      copyObj[key] = source[key]
    }
    return copyObj;
  }//myDeepCopy

  this.extend = (source, bonus) => {
    for (let key in bonus) {
      source[key] = bonus[key];
    }
    return source;
  } //extend

  this.powBuilder = (pow) => {
    if (typeof pow == 'number'){
      let n = 5;

      let makePow = (n) => {
        return Math.pow(n, pow)
      }

      return makePow(n);
    } else {
      console.log('not a number')
    }
  } //powBuilder


  String.prototype.firstToUppercase = function () {
    console.log(this.charAt(0).toUpperCase() + this.substr(1));
    // alert( this.charAt(0).toUpperCase() + this.substr(1) );
  }//firstToUppercase

  this.executeWithDelay = (func, delay) => {
    setTimeout(func, delay * 1000);
  } //executeWithDelay

  this.getComment = (n) => {
    let root = 'https://jsonplaceholder.typicode.com';

    $.ajax({
      url: root + '/comments/' + n,
      method: 'GET'
    }).then( (data) => {
      console.log('id - ', data.id);
      console.log('coment - ', data.body);
    });
  }//getComment

  this.jqueryFun = function () {
    let myhref = document.getElementById('myhref');
    let allLinks = document.getElementsByTagName('a');
    myhref.addEventListener('click', function () {
      myhref.innerHTML = 'click me';
      let comboDate = new Date();
      alert(new Date(comboDate.setDate(comboDate.getDate() + allLinks.length)));
      console.log(new Date(comboDate.setDate(comboDate.getDate() + allLinks.length)));
    })
  }//jqueryFun
};


let myLib = new Lib();
