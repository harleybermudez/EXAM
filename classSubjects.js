//code 2
// getting inputs using prompt
let Subject_title = prompt("What is the title of the subject?");
let Class_schedule = prompt("What time is the class?");
let Classroom = prompt("What room is the class in?");
let Instructor = prompt("Who is the instructor?");
let Student = prompt("WHat is your name?");
//displaying the inputs with string interpolation
console.log(`${Student} is currently enrolled ${Subject_title} with the class schedule of ${Class_schedule} in room ${Classroom}. The instructor for the subject is ${Instructor}.`);