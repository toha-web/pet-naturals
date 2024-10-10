// Mobile menu control
function toggleMobileMenu() {
    document.querySelector(".burger").classList.toggle("active");
    document.querySelector(".mobile-menu").classList.toggle("active");
    document.querySelector("body").classList.toggle("locked");
}
document.querySelector(".mobile-menu-icon").addEventListener("click", () => {
    toggleMobileMenu();
});
document.querySelectorAll(".mobile-menu li").forEach((link) => {
    link.addEventListener("click", () => {
        toggleMobileMenu();
    });
});

// Phone mask
const phoneInput = document.querySelector("#phone");
phoneInput.placeholder = "+38 (0__) ___-__-__";
const mask = IMask(phoneInput, {
    mask: "+38 (\\000) 000-00-00"
});

// Order date
const orderDateField = document.querySelector(".order-date span");
const date = new Date();
const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();
orderDateField.innerText = `${day}.${month}.${year}`;

// Timer
const timerField = document.querySelector(".form-head-timer");
let hours = 2;
let minutes = 0;
let seconds = 0;

let timerValue = `${hours.toString()}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
timerField.innerText = timerValue;

timer = setInterval(() => {
    seconds = seconds === 0 ? 60 : seconds;
    minutes = minutes === 0 ? 59 : minutes;
    hours = hours === 2 ? 1 : hours;
    seconds --;
    if(seconds === 0){
        minutes --;
        if(minutes === 0 && hours > 0){
            hours --;
        }
        else if(minutes === 0 && hours === 0){
            clearInterval(timer);
        }
    }
    timerValue = `${hours.toString()}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerField.innerText = timerValue;
}, 1000);