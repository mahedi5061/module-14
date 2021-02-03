 function func(year){
if((year%4==0 && year%100!=0 )|| (year%400==0)){
    console.log("This is leap year");
}
else{
    console.log("This is not leap year");
}
}
func(2020);

 

