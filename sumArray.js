function sumArray(numbers){
    var sum=0
    for(i=0;i<numbers.length;i++){
        var element=numbers[i];
        sum=sum+element;
    }
    return sum;

}
var numbers=[12,44,77,22,33,56];
var result=sumArray(numbers);
console.log(result);