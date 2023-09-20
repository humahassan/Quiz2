// var english;
// var urdu;
// var math;
// var os;
// var physics;
var inputuser1 = prompt("Please Enter the cousre1: ");
var inputnum1 = prompt("Please enter the marks course1: ");

var inputnum1 = parseFloat(inputnum1);

console.log("Course1", inputuser1);
console.log("Marks of Course 1",inputnum1 );

var inputuser2 = prompt("Please Enter the cousre2: ");
var inputnum2 = prompt("Please enter the marks course2: ");

var inputnum2 = parseFloat(inputnum2);

console.log( "Course2", inputuser2);
console.log("Marks of Course 2",inputnum2 );

var inputuser3 = prompt("Please Enter the cousre3: ");
var inputnum3 = prompt("Please enter the marks course3: ");

var inputnum3 = parseFloat(inputnum3);

console.log( "Course3", inputuser3);
console.log("Marks of Course 3",inputnum3 );

var inputuser4 = prompt("Please Enter the cousre4: ");
var inputnum4 = prompt("Please enter the marks course4: ");

var inputnum4 = parseFloat(inputnum4);

console.log("Course4", inputuser4);
console.log("Marks of Course 4",inputnum4 );

var inputuser5 = prompt("Please Enter the cousre5: ");
var inputnum5 = prompt("Please enter the marks course5: ");

var inputnum5 = parseFloat(inputnum5);

console.log("Course5", inputuser5);
console.log("Marks of Course 5",inputnum5 );

console.log("Your Grading in each Cousre:")
if(inputnum1>=85 && inputnum1<=100){
    console.log("Your grade is A+");
}
else if(inputnum1>=80 && inputnum1<=85){
    console.log("Your grade is A");
}
else if(inputnum1>=70 && inputnum1<=80){
    console.log("Your grade is B+");
}
else if(inputnum1>=60 && inputnum1<=70){
    console.log("Your grade is B");
}
else if(inputnum1>=50 && inputnum1<=60){
    console.log("Your grade is C");
}
else{
    console.log("You are fail")
}

if(inputnum2>=85 && inputnum2<=100){
    console.log("Your grade is A+");
}
else if(inputnum2>=80 && inputnum2<=85){
    console.log("Your grade is A");
}
else if(inputnum2>=70 && inputnum2<=80){
    console.log("Your grade is B+");
}
else if(inputnum2>=60 && inputnum2<=70){
    console.log("Your grade is B");
}
else if(inputnum2>=50 && inputnum2<=60){
    console.log("Your grade is C");
}
else{
    console.log("You are fail")
}

if(inputnum3>=85 && inputnum3<=100){
    console.log("Your grade is A+");
}
else if(inputnum3>=80 && inputnum3<=85){
    console.log("Your grade is A");
}
else if(inputnum3>=70 && inputnum3<=80){
    console.log("Your grade is B+");
}
else if(inputnum3>=60 && inputnum3<=70){
    console.log("Your grade is B");
}
else if(inputnum3>=50 && inputnum3<=60){
    console.log("Your grade is C");
}
else{
    console.log("You are fail")
}

if(inputnum4>=85 && inputnum4<=100){
    console.log("Your grade is A+");
}
else if(inputnum4>=80 && inputnum4<=85){
    console.log("Your grade is A");
}
else if(inputnum4>=70 && inputnum4<=80){
    console.log("Your grade is B+");
}
else if(inputnum4>=60 && inputnum4<=70){
    console.log("Your grade is B");
}
else if(inputnum4>=50 && inputnum4<=60){
    console.log("Your grade is C");
}
else{
    console.log("You are fail")
}

if(inputnum5>=85 && inputnum5<=100){
    console.log("Your grade is A+");
}
else if(inputnum5>=80 && inputnum5<=85){
    console.log("Your grade is A");
}
else if(inputnum5>=70 && inputnum5<=80){
    console.log("Your grade is B+");
}
else if(inputnum5>=60 && inputnum5<=70){
    console.log("Your grade is B");
}
else if(inputnum5>=50 && inputnum5<=60){
    console.log("Your grade is C");
}
else{
    console.log("You are fail")
}

// function additionFunction(a, b, c, d, e) {
//     return a + b + c + d + e;
// }

// var sum = additionFunction(inputnum1, inputnum2, inputnum3, inputnum4, inputnum5);
// console.log(sum);

var totalMarks = inputnum1 + inputnum2 + inputnum3 + inputnum4 + inputnum5;
console.log("Total Marks for all Courses:", totalMarks);
let cgpa = totalMarks/18;
// let cgpa = parseFloat(cgpa);
console.log("Your cgpa is = ", cgpa);
