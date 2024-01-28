/***

Free Drinks
    - Burger more than 500tk: free Coke
    - Else Coke: 30tk
*/

// Problem solving

const burger = 501;
const cake = 30;

if(burger > 500){
    console.log("you get a free coke of your company");
    const totalPrice = burger + cake - cake;
    console.log(totalPrice);
}else{
    console.log("you buy a coke only 30 taka");
    const totalPrice = burger + cake;
    console.log(totalPrice);
}


