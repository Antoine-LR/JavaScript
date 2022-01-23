const date = new Date();
const monthDays = document.querySelector('days');
const month = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre",
];

document.querySelector(".date h1").innerHTML
=month[date.getMonth()];

document.querySelector(".date p").innerHTML
=date.toDateString();

let days="";
for (let i = 1; i <= 31; i++) {
    days = days +  "<div> $[i] </div>";
    caldays.innerHTML = days;
    
}