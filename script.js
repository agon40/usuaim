// var date = new Date();
// console.log();(date);

const currentTime = document.getElementById('currenttime');

function getCurrentTimeString(){
    return new Date ().toTimeString().replace()
}

setInterval(
     () =>currentTime.innerHTML = getCurrentTimeString(), 100);


const currentData = document.getElementById('currentdata');

function getCurrentDataString(){
    return new Date ().toDataString();
}

setInterval(
     () =>currentData.innerHTML = getCurrentDataString(), 100);

     