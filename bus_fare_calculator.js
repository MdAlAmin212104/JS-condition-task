/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/


const age = 10;
const student = false;

if(student == true){
    console.log((50/100)*800);
}
else{
    if( age >= 60){
    console.log((85/100)*800);
    }
    else if( age <= 10){
        console.log("Ticket fare is free");
    }
    else{
        console.log(800);
    }
}


