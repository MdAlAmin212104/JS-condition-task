/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

const marks = 70;
const friendMarks = 30;
if(marks >= 80) {
    if( friendMarks >= 80){
        console.log("going to lunch");
    }else if( friendMarks < 80 && friendMarks >=60){
        console.log("good luck next time");
    }else if( friendMarks < 60 && friendMarks >=40){
        console.log("I don't seen you massage");
    }else{
        console.log("block my friend");
    }
}
else{
    console.log("I am going to home and sleep");
}