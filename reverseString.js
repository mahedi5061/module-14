
function reverseString(){
    var reverse="";
    for(i=0;i<str.length;i++){
        var char=str[i];
        reverse=char+reverse;
    }
    return reverse;

}
var str="Hello I am Mahedi Hassan Sharif";
var str2=reverseString(str);
console.log(str2);