function updateCountdown() {
    const now = new Date();
    const newYear = new Date(now.getFullYear() + 1, 0, 1);
    const timeDifference = newYear - now;

    if (timeDifference <= 0) {
        document.querySelector(".countdown").innerHTML = "Happy New Year!";
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days-number").textContent = days.toString().padStart(2, '0');
    document.getElementById("hours-number").textContent = hours.toString().padStart(2, '0');
    document.getElementById("minutes-number").textContent = minutes.toString().padStart(2, '0');
    document.getElementById("seconds-number").textContent = seconds.toString().padStart(2, '0');
}

setInterval(updateCountdown, 1000); 
updateCountdown(); 
