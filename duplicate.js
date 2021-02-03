var numbers= [10,20,33,55,10,3,2,7,9,4,3,4,33,6,6,5,55,5];
var unique=[];
for(i=0;i<numbers.length;i++){
    var element=numbers[i];

    var index=unique.indexOf(element);
    console.log(index);
    if(index==-1){
        unique.push(element);
    }
}
console.log(unique);