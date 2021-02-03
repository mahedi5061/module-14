 // method-1

var x=950;
var y=1250;
var z=458;
if(x>y && x>z){
    console.log("X is bigger",x);
}
else if(y>x && y>z){
    console.log("Y is bigger and",y);
}
else {
    console.log("Z is bigger",z);
}
// method-2 javascript special case
var x=950;
var y=1250;
var z=458;

var result=Math.max(x,y,z);
console.log("Bigger Num:", result);

// method-3 using array to get the maximum value

var marks=[23,67,34,77,99,53,25,64,2];
var max=marks[0];
for(var i=0;i<marks.length;i++){
    var element=marks[i];
    if(element>max){        //for smallest num just using < sign
        max=element;
    }
}
console.log("Maximum value:",max);