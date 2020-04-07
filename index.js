function binary(a) {
  var binary = ""; //Prepares variable
  if (a <= 1024) { //As long as decimal value is less than limit, then proceed
    while (a > 0) { //Making sure its a valid integer, no negatives or letters
      binary = (a % 2) + binary; //Decimal to binary conversion
      a = Math.floor(a / 2); //Round 'a' down to the nearest figure, once 'a' is at 0, iterations/loop will stop.
    }
    return binary; //Return binary value
  } 
    return "Invalid"; // If decimal value is greater than the limit (currently 1024) then notify user that calculation is invalid.
  
}

//************************************/
//      Enter Binary Number Here      /
//************************************/

var binaryNumber = 10; //Enter decimal value here that you would like converted
console.log(binary(binaryNumber));

//************************************/
