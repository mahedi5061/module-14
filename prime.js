 function prime(n){
    for(i=2;i<n;i++){
        if(n%i==0){
              return "Your Number is a Prime Number" ;
             
        }
     
    }
     return "Your Number is not a Prime Number";
}
var result =prime(61);
console.log(result);