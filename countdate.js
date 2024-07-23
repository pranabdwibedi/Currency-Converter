const currentDate = new Date().toDateString();
let formatedDate = currentDate.slice(4,15);
console.log(formatedDate)
let monthInWords = formatedDate.slice(0,3);
let month = 0;
switch(monthInWords){
    case "Jan" : {
        month = 1;
        break;
    }
    case "Feb" : {
        month = 2;
        break;
    }
    case "Mar" : {
        month = 3;
        break;
    }
    case "Apr" : {
        month = 4;
        break;
    }
    case "May" : {
        month = 5;
        break;
    }
    case "Jun" : {
        month = 6;
        break;
    }
    case "Jul" : {
        month = 7;
        break;
    }
    case "Aug" : {
        month = 8;
        break;
    }
    case "Sep" : {
        month = 9;
        break;
    }
    case "Oct" : {
        month = 10;
        break;
    }
    case "Nov" : {
        month = 11;
        break;
    }
    case "Dec" : {
        month = 12;
        break;
    }
}
//extracting Date
const day = parseInt(formatedDate.slice(4,6));
let finalDay = day-1;


//extracting year
const year = parseInt(formatedDate.slice(7,11));



let finalDate = `${year}-0${month}-${finalDay}`;
console.log(finalDate);