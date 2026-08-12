const clock = document.getElementById('clock');




function updateClock() {
    const time24 = new Date().toLocaleTimeString("en-GB", {
        hour12:true
    });

    clock.textContent = time24;
}

updateClock();

setInterval(updateClock, 1000);