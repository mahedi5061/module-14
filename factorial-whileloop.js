
// without using function
var i=1;
var factorial=1;
while(i<5){
   
    factorial=factorial*i;
    i++;
  
}
console.log(factorial);

// with using function

function fact(n){
    var i=1;
    var factorial=1;
    while(i<n){
       
        factorial=factorial*i;
        i++;
      
    }
    return factorial;
}
var result = fact(7);
console.log(result);