/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

const weight = 100 , height = 180 / 100;
const calculateBMI = (weight / (height*height)).toFixed(2);
if( calculateBMI < 18.5 ){
    console.log("you are underweight" , "you BMI is ", calculateBMI);
}else if( calculateBMI >= 18.5 && calculateBMI <= 24.9 ){
    console.log("you are normal" , "you BMI is ", calculateBMI);
}else if( calculateBMI >= 25 && calculateBMI <= 29.9){
    console.log("you are overweight" , "you BMI is ", calculateBMI);
}else{
    console.log("you are obese" , "you BMI is ", calculateBMI);
}

