
function sing(){
  var total = "", 
      coro = "let it be, ",
      wind ="words of wisdom, ",
      final = "there will be an answer, let it be";
       

    for(var i = 0; i < 11 ; i++){
 
        if(i !== 4 && i !== 10){
            total = total + coro;
        }else if(i == 4){
            total = total + wind;
        }else{
            total = total + final; 
        }
    }
       return total
    
}
//Your code above ^^^
console.log(sing());