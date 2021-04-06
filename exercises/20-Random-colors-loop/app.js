function getColor(colorNumber)
{
	//make sure parameter is a number and not a string by converting the value to int:
	colorNumber = parseInt(colorNumber);
	switch(colorNumber){
		case 1: return "red"; 
				break;
		case 2: return "yellow"; 
				break;
		case 3: return "blue"; 
				break;
		case 4: return "green"; 
				break;
		default: return "black"; 
				 break;
	}
}

function getAllStudentColors(){
    var colores =[],
        num;

    //your loop here
    for(var i = 0; i < 10; ++i){
        num = Math.floor(Math.random()*(4 - 1)+1);
        var exampleColor = getColor(num);
        colores[+i] = i+1 +")" + exampleColor;
    }
    console.log(colores)
}

//call the function below with the number of students in the class and print on the console
getAllStudentColors();

