
let isPositive = () => {
  console.log(myLib.isPositive(2)) // true
  console.log(myLib.isPositive(-2)) // false
};

let isValue = () => {
  let a = 'test';
  console.log(myLib.isValue(a)); // true
  let b = '';
  console.log(myLib.isValue(b)); // false
  let c;
  console.log(myLib.isValue(c)); // false
};

let validNumber = () => {
  let a = 2
  console.log(myLib.validNumber(a)); // true
  let b = 'test';
  console.log(myLib.validNumber(b)); // false
  let c;
  console.log(myLib.validNumber(c)); // false
  let d = '3';
  console.log(myLib.validNumber(d)); // false
  let e = NaN;
  console.log(myLib.validNumber(e)); // false
  let f = Infinity;
  console.log(myLib.validNumber(f)); // false
};

let toNumber = () => {
  let a = '234'
  console.log(myLib.toNumber(a)); // 234
  let b = 'test';
  console.log(myLib.toNumber(b)); // "Sorry, this string can't transform to number"
  let c = NaN;
  console.log(myLib.toNumber(c)); // "Sorry, this string can't transform to number"
  let d = Infinity;
  console.log(myLib.toNumber(d)); // "Sorry, this string can't transform to number"
  let e
  console.log(myLib.toNumber(e)); // "Sorry, this string can't transform to number"
  let f = '23test';
  console.log(myLib.toNumber(f)); // "Sorry, this string can't transform to number"
};

let qrt = () => {
  let a = 5
  console.log(myLib.qrt(a)); // 234
  let b = 'test';
  console.log(myLib.qrt(b)); // "Sorry, this can't number"
  let c = NaN;
  console.log(myLib.qrt(c)); // "Sorry, this can't number"
  let d = Infinity;
  console.log(myLib.qrt(d)); // "Sorry, this can't number"
  let e
  console.log(myLib.qrt(e)); // "Sorry, this can't number"
};

let addDays = () => {
  let a = 5
  console.log(myLib.addDays(a)); // Wed Jul 19 2017 01:01:15 GMT+0300 (Финляндия (лето))
  let b = 'test';
  console.log(myLib.addDays(b)); // "Sorry, this can't number"
  let c = NaN;
  console.log(myLib.addDays(c)); // "Sorry, this can't number"
  let d = Infinity;
  console.log(myLib.addDays(d)); // "Sorry, this can't number"
  let e
  console.log(myLib.addDays(e)); // "Sorry, this can't number"
};

let evenFilter = () => {
  let a =[5,6,76,43,35,462,76,42,7];
  console.log(myLib.evenFilter(a)); // [6, 76, 462, 76, 42]
    let b =[
    'qwerty',
    'qwertyuiop',
    'qwertyuiop[',
    'qwertyui'
  ];
   console.log(myLib.evenFilter(b)); // "Sorry, this can't number"
  let c = NaN;
  console.log(myLib.evenFilter(c)); // "Sorry, this can't number"
  let d = Infinity;
  console.log(myLib.evenFilter(d)); // "Sorry, this can't number"
  let e
  console.log(myLib.evenFilter(e)); // "Sorry, this can't number"
};

let cutStrings = () => {
  var text1 =[
    'qwerty',
    'qwertyuiop',
    'qwertyuiop[',
    'qwertyui'
  ];
  let len = 4;
  console.log(myLib.cutStrings(text1, len)); // ["qwe", "qwe", "qwe", "qwe"]
};

let getFibonachi = () => {
  let a = 7
  console.log(myLib.getFibonachi(a)); //  [1, 1, 1, 2, 3, 5, 8]
  let b = 'test';
  console.log(myLib.getFibonachi(b)); // "Sorry, this is not a number"
  let d = Infinity;
  console.log(myLib.getFibonachi(d)); // "Sorry, this is not a number"
  let e
  console.log(myLib.getFibonachi(e)); // "Sorry, this is not a number"
};

let myDeepCopy = () => {
  let obj = {
    first: 'qwerty',
    second: 543,
    third: ['tt','pm','akm']
  };
  let newObj = myLib.myDeepCopy(obj);
  console.log(obj); //Object {first: "qwerty", second: 543, third: Array(3)}
  console.log(newObj); //Object {first: "qwerty", second: 543, third: Array(3)}
};

let extend = () => {
  let obj1 = {
    first: 'qwerty',
    second: 543,
    third: ['tt','pm','akm']
  };
  let obj2 = {
    first2: 'test',
    second2: 789,
    third2: ['walk','run','breathe']
  };

  let newObj = myLib.extend(obj1, obj2);
  console.log(newObj); //Object {first: "qwerty", second: 543, third: Array(3), first2: "test", second2: 789…}
};

let powBuilder = () => {
  let a = 5;
  console.log(myLib.powBuilder(a));//3125
  let b = 'rss';
  console.log(myLib.powBuilder(b));//3125
};

let firstToUppercase = () => {
  let str = 'qwerty'
  let str2 = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa distinctio dolorem dolorum numquam obcaecati officiis placeat tempore totam vel. Dignissimos eos maxime molestiae nemo perspiciatis quidem totam voluptate voluptatem!'
  str.firstToUppercase(); //'Qwerty'
  str2.firstToUppercase(); // Lorem ipsum dolor...
};

let executeWithDelay = () => {
  let test = () => {
    console.log('Test is passed!')
  };
  delay = 3; // in seconds
  myLib.executeWithDelay(test,delay);
};

let getComment = () => {
  //please input number of comment
  let number = 5;
  myLib.getComment(number);
 /* result
  id -  5
  myLib.js:171 coment -  harum non quasi et ratione
  tempore iure ex voluptates in ratione
  harum architecto fugit inventore cupiditate
  voluptates magni quo et
  */
};

let jqueryFun = () => {
  myLib.jqueryFun();
};





//isPositive();
// isValue();
// validNumber();
// toNumber();
// qrt();
// addDays();
//evenFilter();
// cutStrings();
//cutStrings();
//getFibonachi();
//myDeepCopy();
// extend();
// powBuilder();
//firstToUppercase();
//executeWithDelay();
//getComment();
jqueryFun();
