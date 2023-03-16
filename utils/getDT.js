// method to get current date using Date()
export const getCurrentDate = ()=> {
    let date = new Date().getDate();
    let month = new Date().getMonth() + 1;
    let year = new Date().getFullYear();

    // format: dd-mm-yy
    return date + '-' + month + '-' + year;
}


// method to get current time using Date()
export const getCurrentTime = ()=> {
    let hours = new Date().getHours()
    let minutes = new Date().getMinutes()

    // check if minutes is a single digit 
    // if single digit append a 0 in front of it
    if (minutes / 10 < 1) {
        minutes = minutes.toString()
        minutes = '0'+  minutes
    }
    return hours + ':' + minutes
}