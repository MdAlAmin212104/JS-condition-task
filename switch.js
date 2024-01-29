function getSeason(number){
      switch (number){
            case 1 :
            case 2 :
            case 12 :
                  console.log("winter season");
                  break;
            case 3 :
            case 4 :
            case 5 :
                  console.log("Spring season");
                  break;
            case 6 :
            case 7 :
            case 8 :
                  console.log("Summer season");
                  break;
            case 9 :
            case 10 :
            case 11 :
                  console.log("Autumn season");
                  break;
            default :
                  console.log("this is not a season");
      }
      
      
}
getSeason(7);