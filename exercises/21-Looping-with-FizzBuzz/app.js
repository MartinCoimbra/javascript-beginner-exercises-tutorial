function fizzBuzz() {  
    // Your code here
    var num = 0;
    while(num < 100){
        num++;
        if(num % 5 == 0 && num % 3 == 0){
            console.log("FizzBuzz")
        }else if(num % 3 == 0){
            console.log("Fizz")
        }else if(num % 5 == 0){
            console.log("Buzz")
        }else{
            console.log(num)
        }
    }
}

fizzBuzz();