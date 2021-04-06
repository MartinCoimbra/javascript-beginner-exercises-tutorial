
var person = {
    name: "John",                //String
    lastname: "Doe",
    age: 35,                     //Number
    gender: "male",
    lucky_numbers: [ 7, 11, 13, 17], //Array
    significant_other: person2   //Object, yes the same variable/object defined after
};

var person2 = {
    name: "Jane",
    lastname: "Doe",
    age: 38,
    gender: "female",
    lucky_numbers: [ 2, 4, 6, 8],
    significant_other: person
};

var family = {
    lastname: "Doe",
    members: [person, person2]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray){
  var sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
 
    family.members.push(addfmfm());
 
    var total1 = 0,
        total2 = 0,
        total3 = 0,
        si= 0;
    for(si in family.members[0].lucky_numbers){
        total1 = total1 +  family.members[0].lucky_numbers[si];
    }
    for(si in family.members[1].lucky_numbers){
        total2 = total2 +  family.members[1].lucky_numbers[si];
    }
    for(si in family.members[2].lucky_numbers){
        total3 = total3 +  family.members[2].lucky_numbers[si];
    }
   
    sumOfAllLuckyNumbers = total1 + total2 + total3;
    return sumOfAllLuckyNumbers;
 

};
    
function addfmfm(){
   var person3 = {
      name: "Jimmy",
      lastname: "Doe",
      age: 13,
      gender: "masculino",
      lucky_numbers: [1, 2, 3, 4]
    };
    return person3;
}

//Enter all your code here:
function cambionum(){
    family.members[0].lucky_numbers[3] = 33;
    /* console.log(family.members[0].lucky_numbers) */
}

cambionum();
//Do not make changes below:
console.log(addAllFamilyLuckyNumbers(family.members)); 