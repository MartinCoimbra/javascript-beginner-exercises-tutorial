function getColor(selection)
{
    
	switch(selection){
        // Add more options here
        case "red":
            col = true
            break;
        case "green":
            col = true
            break;
        case "blue":            
            col = true
            break;
	    default:
            col = false;  //returns false because the user picked an unavailable color
            break;
    }
    return col;
}

var colorname = prompt('What color do you want?').toLowerCase();
var isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
