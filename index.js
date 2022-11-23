function scuberGreetingForFeet(length) {
  let result = '';
  if (length <= 400) {
    result = 'This one is on me!';
  } else if (length > 400 && length <= 2000) {
    result = 'That will be twenty bucks.';
  } else if (length > 2000 && length <= 2500) {
    result = 'I will gladly take your thirty bucks.';
  } else if (length > 2500) {
    result = 'No can do.';
  }
 return result;
}

function ternaryCheckCity(city) {
  
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.'
  
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous' : return 'Thank you so much.'
    case 'not as generous' : return 'Thank you.'
      break;
      default : return 'Bye.'
  }
}
