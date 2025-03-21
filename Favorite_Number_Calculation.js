//code 4
const favoriteNumber = 911; // my Favorite number
let guess = 0; //starting guess value tos start the loop

while (guess !== favoriteNumber) {
    guess = Number(prompt("What is the number?")); //prompt to user to guess number "Number func to convert input to integer"
    if (guess !== favoriteNumber) {
        console.log("You guessed it wrong!");
    } else {
        console.log("You guessed it right!");
    }
}