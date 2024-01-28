/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

const grade = 30;
if(grade >=90 && grade <=100) {
    console.log("you got a grade of A");
}else if(grade >=80 && grade < 90){
    console.log("you got a grade of B");
}else if(grade >= 70 && grade < 80){
    console.log("you got a grade of C");
}else if (grade >= 60 && grade <70){
    console.log("you got a grade of D");
}else if(grade >= 50 && grade < 60){
    console.log("you got a grade of E");
}
else{
    console.log("your failed grade");
}