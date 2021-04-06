var word = "bottles";
var count = 99;
var total;
while (count >0) {
    

    if(count == 1){
        console.log(count + " bottle of milk on the wall, "+ count +" bottle of milk."); 
        console.log("Take one down and pass it around, no more bottles of milk on the wall");
    }else{
        console.log(count + " bottles of milk on the wall, " + count + " bottles of milk.")
        console.log("Take one down and pass it around, "+ count + " bottles of milk on the wall.")
    }
    count--;

}
console.log("No more bottles of milk on the wall, no more bottles of milk. Go to the store and buy some more, 99 bottles of milk on the wall.");