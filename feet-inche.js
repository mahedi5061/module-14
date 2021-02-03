function incheTofeet(inche){
    var feet=inche/12;
    return feet;
}
// This method one:
var result = incheTofeet(156);
console.log(result);
var result = incheTofeet(200);
console.log(result);
var result = incheTofeet(300);
console.log(result);

// This method two:

var arr=[24,156,356];

var result = incheTofeet(arr[1]);

console.log(result);
var result = incheTofeet(arr[2]);
console.log(result);