function updateDateTime() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0'); 
    const seconds = String(now.getSeconds()).padStart(2, '0'); //adds a zero if the seconds are less than 10 (ie 04 for 4 seconds)
    
    //convert from military
    const amPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12; 

    //edit html
    document.getElementById('time').textContent = `${hours}:${minutes}`;
    document.getElementById('am').textContent = amPm;
    document.getElementById('secs').textContent = seconds;

    // Format the date
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').textContent = now.toLocaleDateString('en-US', options);
}

updateDateTime();
setInterval(updateDateTime, 1000);
