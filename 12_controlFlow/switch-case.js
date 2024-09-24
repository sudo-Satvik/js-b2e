// Switch-case statement

const key = 3

switch (key) {
    case 1:
        console.log(1);
        break;
    case 2: 
        console.log(2);
        break;
    case 3:
        console.log(3);
        break;
    default:
        console.log("default");
        break;
}

let browser = 'Chrome'

switch (browser) {
    case 'Edge':
      alert( "You've got the Edge!" );
      break;
  
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;
  
    default:
      alert( 'We hope that this page looks ok!' );
  }
