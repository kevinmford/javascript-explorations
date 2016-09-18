var name = "Kevin"; // string type

var age = 22; //number type

var smart = true; //boolean type

var state; //undefined

var city = null; 

var kevin = {
  name: "Kevin",
  age: 22,
  state: "Oregon",
  hobbies: ["glass blowing", "scuba", "cycling"],
  friend: {name: "Martin", city: "Seattle"}
}

// for (var key in kevin) {
//   console.log(key);
//   console.log(kevin[key]);
// }

// for (var i=1; i<20; i++) {
//   console.log(i);
// }

// var myArr = [3,4,5,6,7]

// for (var i=0; i<myArr.length; i++) {
//   console.log(myArr[i]);
// }

function modTen(num) {
  return num % 10;
}

function even(num) {
  return num % 2 === 0;
}

function fizzBuzz(max) {
  for (var i=1; i<=max; i++) {
    if (i % 15 === 0) {
      console.log("fizzBuzz");
    } 
    else if (i % 3 === 0) {
      console.log("fizz");
    }
    else if (i % 5 === 0) {
      console.log("buzz");
    }
    else {
      console.log(i);
    }
  }
}





