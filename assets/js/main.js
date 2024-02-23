/* variables */
const nameElement = document.getElementById("ticket_name");
const kmElement = document.getElementById("ticket_km");
const ageElement = document.getElementById("ticket-age");

/* known data */
const priceKm = 0.21;
const discountMinor = 0.8;
const discountSenior = 0.6;

document.getElementById("generate_ticket").addEventListener('submit',
  function(e){
    e.preventDefault();

    const name = nameElement.value;
    const km = kmElement.value;
    const age = ageElement.value;
    console.log(name, km, age);

    const regularPrice = kmElement.value * 0.21;
    let finalPrice;
    

    if(age === "1"){
      finalPrice = regularPrice * discountMinor;
    }
    else if(age === "2"){
      finalPrice = regularPrice * discountSenior;
    }
    else{
      finalPrice = regularPrice;
    }

    let formattedPrice = finalPrice.toLocaleString('it-IT', { style: 'currency', currency: 'EUR' });
    alert("the final price is: " + formattedPrice);

    /* print ticket in the lower card */

    let printName = document.getElementById("passenger_name");
    printName.innerHTML = name;

    let printDiscount = document.getElementById("passenger_discount");
    printDiscount.innerHTML = age;

    let printCarriage = document.getElementById("passenger_carriage");
    randomCarriage = Math.floor(Math.random() * 10) + 1;
    printCarriage.innerHTML = randomCarriage;

    /* qui fatto con un passaggio in meno! */
    let printCP = document.getElementById("passenger_cp");
    printCP.innerHTML = Math.floor(Math.random() * 100) + 1;

    let printPrice = document.getElementById("passenger_price");
    printPrice.innerHTML = formattedPrice;
  }
)

