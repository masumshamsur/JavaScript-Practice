var month = "July";
var quater = null;

switch (month) {
    case 'January':
    case 'February':
    case 'March':
    case 'April':
        quater = "1st quater";
        break;
    case 'May':
    case 'June':
    case 'July':
    case 'August':
        quater = "2nd quater";
        break;
    case 'September':
    case 'Octubor':
    case 'November':
    case 'December':
        quater = "3rd quater";
        break;
    default:
        quater = "does not belong"
}
console.log(quater);