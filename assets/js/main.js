/* variables */
const nameElement = document.getElementById("ticket_name");
const kmElement = document.getElementById("ticket_km");
const ageElement = document.getElementById("ticket-age");

/* known data */
const priceKm = 0.21;

document.querySelector('form').addEventListener('submit',
  function(){

    const name = nameElement.value;
    const km = kmElement.km;
    const age = ageElement.value;

    console.log(name, km, age);
  }
)

