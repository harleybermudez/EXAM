//Code 1 
// getting inputs using prompt
let Name = prompt("What is your full name?");
let Age = prompt("How old are you?");
let Favorite_Number = prompt("What is your favorite number?");
let Favorite_Color = prompt("What is your favorite color?");
//displaying the inputs with string interpolation
console.log(`Name: ${Name}\nAge: ${Age}\nFave Number: ${Favorite_Number}\nFave Color ${Favorite_Color}.`);

//code 3
let your_age_group 
    if (Age <5) {
       console.log("You are a toddler");
    }else if (Age => 5 && Age <= 12){
        console.log("You are a child");
    }else if (Age > 13 && Age <= 19){
        console.log("You are a teenager");
    }else if (Age > 20 && Age <= 35){
        console.log("You are a young adult");
    }else if (Age > 36 && Age <= 60){
        console.log("You are middled aged");
    }else if (Age > 60) {
            console.log("You are a senior citizen");
    }