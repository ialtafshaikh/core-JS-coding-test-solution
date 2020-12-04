/**
 The function takes number of seconds as input and return an object with keys 
 hours
 minutes
 seconds
 The value corresponding to each key should be the conversion of seconds into correponding 
 time 
 */
const convertTime = (seconds) => {
    if (!(seconds)) throw new Error("Invalid Input");
    if (!Number.isInteger(seconds)) throw new Error("Invalid Input");

    const time = {};
    
    time.hours = Math.floor(seconds / 3600);
    time.minutes = Math.floor(seconds % 3600 / 60);
    time.seconds = Math.floor(seconds % 3600 % 60);

    return time;
};

module.exports = convertTime;
