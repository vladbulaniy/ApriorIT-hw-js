
let isPositive = () => {
  console.log( 'myLib.isPositive(2) => ', myLib.isPositive(2) ) // true
  console.log('myLib.isPositive(-2) =>', myLib.isPositive(-2)) // false
};

let isValue = () => {
  let a = 'test';
  console.log('myLib.isValue("test") =>', myLib.isValue(a)); // true
  let b = '';
  console.log('myLib.isValue("") =>', myLib.isValue(b)); // false
  let c;
  console.log('let c; myLib.isValue(c) =>', myLib.isValue(c)); // false
};

let validNumber = () => {
  let a = 2
  console.log('myLib.validNumber(2) =>', myLib.validNumber(a)); // true
  let b = 'test';
  console.log('myLib.validNumber("test") =>', myLib.validNumber(b)); // false
  let c;
  console.log('let c; myLib.validNumber(c) =>', myLib.validNumber(c)); // false
  let d = '3';
  console.log('myLib.validNumber("3") =>', myLib.validNumber(d)); // false
  let e = NaN;
  console.log('myLib.validNumber(NaN) =>', myLib.validNumber(e)); // false
  let f = Infinity;
  console.log('myLib.validNumber(Infinity) =>', myLib.validNumber(f)); // false
};

let toNumber = () => {
  let a = '234'
  console.log("myLib.toNumber('234) =>", myLib.toNumber(a)); // 234
  let b = 'test';
  console.log("myLib.toNumber('test') =>", myLib.toNumber(b)); // "Sorry, this string can't transform to number"
  let c = NaN;
  console.log("myLib.toNumber(NaN) =>", myLib.toNumber(c)); // "Sorry, this string can't transform to number"
  let d = Infinity;
  console.log("myLib.toNumber(Infinity) =>", myLib.toNumber(d)); // "Sorry, this string can't transform to number"
  let e;
  console.log("let e; myLib.toNumber(e) =>", myLib.toNumber(e)); // "Sorry, this string can't transform to number"
  let f = '23test';
  console.log("myLib.toNumber('23test') =>", myLib.toNumber(f)); // "Sorry, this string can't transform to number"
};

let qrt = () => {
  let a = 5
  console.log("myLib.qrt(5) =>", myLib.qrt(a)); // 234
  let b = 'test';
  console.log("myLib.qrt('test') =>", myLib.qrt(b)); // "Sorry, this can't number"
  let c = NaN;
  console.log("myLib.qrt(NaN) =>", myLib.qrt(c)); // "Sorry, this can't number"
  let d = Infinity;
  console.log("myLib.qrt(Infinity) =>", myLib.qrt(d)); // "Sorry, this can't number"
  let e;
  console.log("let e; myLib.qrt(e) =>", myLib.qrt(e)); // "Sorry, this can't number"
};

let addDays = () => {
  let a = 5;
  console.log("myLib.addDays(5) =>", myLib.addDays(a)); // Wed Jul 19 2017 01:01:15 GMT+0300 (Финляндия (лето))
  let b = 'test';
  console.log("myLib.addDays('test') =>", myLib.addDays(b)); // "Sorry, this can't number"
  let c = NaN;
  console.log("myLib.addDays(NaN) =>", myLib.addDays(c)); // "Sorry, this can't number"
  let d = Infinity;
  console.log("myLib.addDays(Infinity) =>", myLib.addDays(d)); // "Sorry, this can't number"
  let e;
  console.log("let e; myLib.addDays(e) =>", myLib.addDays(e)); // "Sorry, this can't number"
};

let evenFilter = () => {
  let a =[5,6,76,43,35,462,76,42,7];
  console.log("myLib.evenFilter( [5,6,76,43,35,462,76,42,7] ) =>", myLib.evenFilter(a)); // [6, 76, 462, 76, 42]
};

let cutStrings = () => {
  let text1 =[
    'qwerty',
    'qwertyuiop',
    'qwertyuiop[',
    'qwertyui'
  ];
  let len = 4;
  console.log("let text1 =['qwerty', 'qwertyuiop', 'qwertyuiop[', 'qwertyui'");
  console.log('let len = 4;');
  console.log("myLib.cutStrings(text1, len) =>", myLib.cutStrings(text1, len)); // ["qwe", "qwe", "qwe", "qwe"]
};

let getFibonachi = () => {
  let a = 7
  console.log('myLib.getFibonachi(7) =>', myLib.getFibonachi(a)); //  [1, 1, 1, 2, 3, 5, 8]
  let b = 'test';
  console.log('myLib.getFibonachi("test) =>', myLib.getFibonachi(b)); // "Sorry, this is not a number"
  let d = Infinity;
  console.log('myLib.getFibonachi(Infinity) =>', myLib.getFibonachi(d)); // "Sorry, this is not a number"
  let e;
  console.log('let e; myLib.getFibonachi(a) =>', myLib.getFibonachi(e)); // "Sorry, this is not a number"
};

let myDeepCopy = () => {
  let obj = {
    first: 'qwerty',
    second: 543,
    third: ['tt','pm','akm']
  };
  let newObj = myLib.myDeepCopy(obj);
  console.log("let obj = {first: 'qwerty', second: 543, third: ['tt','pm','akm']};");
  console.log('let newObj = myLib.myDeepCopy(obj) =>');
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
console.log("let obj1 = {first: 'qwerty', second: 543, third: ['tt','pm','akm']};");
console.log("let obj2 = {first2: 'test', second2: 789, third2: ['walk','run','breathe']};");
console.log("myLib.extend(obj1, obj2) =>", myLib.extend(obj1, obj2));
  let newObj = myLib.extend(obj1, obj2);
  console.log(newObj); //Object {first: "qwerty", second: 543, third: Array(3), first2: "test", second2: 789…}
};

let powBuilder = () => {
  let a = 5;
  console.log('myLib.powBuilder(5) => ', myLib.powBuilder(a));//3125
  let b = 'rss';
  console.log('myLib.powBuilder("test") => ', myLib.powBuilder(b));// "Sorry, this is not a number"
};

let firstToUppercase = () => {
  let str = 'qwerty';
  let str2 = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa distinctio dolorem dolorum numquam obcaecati officiis placeat tempore totam vel. Dignissimos eos maxime molestiae nemo perspiciatis quidem totam voluptate voluptatem!'
  console.log("let str = 'qwerty';");
  console.log("str.firstToUppercase(); =>");
  str.firstToUppercase(); //'Qwerty'
  console.log("let str2 = 'lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur culpa distinctio dolorem dolorum numquam obcaecati officiis placeat tempore totam vel. Dignissimos eos maxime molestiae nemo perspiciatis quidem totam voluptate voluptatem!';");
  console.log("str2.firstToUppercase(); =>");
  str2.firstToUppercase(); // Lorem ipsum dolor...
};

let executeWithDelay = () => {
  let test = () => {
    console.log('Test is passed!')
  };
  console.log("let test = () => { console.log('Test is passed!') };");
  console.log("delay = 3;");
  console.log("myLib.executeWithDelay(test,delay) =>" );
  delay = 3; // in seconds
  myLib.executeWithDelay(test,delay);
};

let getComment = () => {
  console.log('Number of comment ');
  console.log('let number = 5; ');
  console.log('myLib.getComment(number); => ');
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
// evenFilter();
// cutStrings();
// getFibonachi();
// myDeepCopy();
// extend();
// powBuilder();
// firstToUppercase();
// executeWithDelay();
// getComment();
jqueryFun();
