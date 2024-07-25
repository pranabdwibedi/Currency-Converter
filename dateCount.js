let date = new Date().toString();
let monthInWord = date.slice(4,7);
let day = parseInt(date.slice(8,10));
let year = parseInt(date.slice(11,15));
let month = 0;
console.log(day, monthInWord, year);
switch(monthInWord){
    case "Jan" :
        month = 1;
        break;
    case "Feb" :
        month = 2;
        break;
    case "Mar" :
        month = 3;
        break;
    case "Apr" :
        month = 4;
        break;
    case "May" :
        month = 5;
        break;
    case "Jun" :
        month = 6;
        break;
    case "Jul" :
        month = 7;
        break;
    case "Aug" :
        month = 8;
        break;
    case "Sep" :
        month = 9;
        break;
    case "Oct" :
        month = 10;
        break;
    case "Nov" :
        month = 11;
        break;
    case "Dec" :
        month = 12;
        break;
}
console.log(month);