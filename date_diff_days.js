var dat1,dat2;
var format = /^(0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/;
function diff_two_dates(dat1,dat2){
    var dt1, dt2, dd1, dd2;
    dat1 = dat1.value;
    dat2 = dat2.value;
    if(dat1.match(format) && dat2.match(format)){ //Check date is in proper format or not.
        dt1 = new Date(dat1);
        dt2 = new Date(dat2);
        dd1 = dt1.getTime();
        dd2 = dt2.getTime();
        diff_dates = dd2 - dd1;     //difference between dates in milliseconds.
        diff_dates_days = diff_dates/(1000*60*60*24);   // difference between dates is converted to days.
        document.getElementById("diff_dates").innerText=`Difference betweeen two dates is  ${diff_dates_days} days.`;
    }else{
        document.getElementById("diff_dates").innerHTML=`<strong>Error - </strong>Enter date in mm/dd/yyyy or mm-dd-yyyy format`;
    }
    
}
// '04/02/2014'
// '11/04/2014'