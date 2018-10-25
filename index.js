
//scuberGreetingForFeet()
//gives customers a free sample if the ride is less than or equal to 400 feet ‣
//charges 30 dollars for a distance over 2000 feet ‣
//does not allow rides over 2500 feet

function scuberGreetingForFeet(someValue) {
  if (someValue <= 400) {
    return 'This one is on me!';
  }
  else if (someValue > 2000 &&  someValue <= 2499) {
    return 'I will gladly take your thirty bucks.';
  }
  else if (someValue => 2500) {
    return 'No can do.';
  }
}


function ternaryCheckCity(someCity ){
  return ("NYC" ? "$2.00" : "$10.00");
}

function switchOnCharmFromTip() {
  
  
}