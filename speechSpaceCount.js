var speech="I am a good   boy. I am     studying in BAIUST";
var count=0;
 for(i=0;i<speech.length;i++){
    var char=speech[i];
    if(char==" " && speech[i-1]!=" "){
        count++;
    }
 }
 console.log(count);

 //using while loop
 var speech="I am a good   boy. I am     studying in BAIUST";
  var count=0;
   var i=0;
  while(i<speech.length){
    var char=speech[i];
    if(char==" " && speech[i-1]!=" "){
        count++;
      
    }
    i++;
    
 }
 console.log(count);
