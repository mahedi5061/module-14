var marks=[23,67,34,77,99,53,25,64,2,50];
var element=0
for(var i=0;i<marks.length;i++){
   
    element=element+marks[i];
   
}
console.log(element);

// using function


function sumArray(marks){
    var element=0;
    for(var i=0;i<marks.length;i++){
   
    element=element+marks[i];
   
    }
    return element;
}
var marks=[23,67,34,77,99,53,25,64,2,50,6];
var result=sumArray(marks);
console.log(result);