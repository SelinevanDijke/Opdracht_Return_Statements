// Schrijf een functie die controleert of een getal groter is dan 100.
const checkNumber = function(number) {
    if (number > 100) {
        return true;
    } else {
        return false;
    }
};

console.log(checkNumber(120));
console.log(checkNumber(30));
console.log(checkNumber(120));

// Dit is een functie die iets produceert.

// Brenda the Bouncer Bot
const checkBouncer = function (maxCustomers, currentCustomers, ageCustomer) {
    if (ageCustomer < 18) {
        return "Je bent te jong.";
    }
    if (currentCustomers >= maxCustomers) {
        return "Het is te druk, kom een andere keer terug!";
    } else {
        return "Kom binnen!";
    } 
};

console.log(checkBouncer(1000, 1000, 17)); // Te vol & te jong
console.log(checkBouncer(1000, 1200, 20)); // Te vol & oud genoeg
console.log(checkBouncer(1000, 800, 17)); // Ruimte & te jong
console.log(checkBouncer(1000, 900, 22)); // Ruimte & oud genoeg

// Dit is een functie die iets doet.

// Het gemiddelde berekenen
const averageNumer = function (number1, number2, number3, number4, number5) {
    const total = number1 + number2 + number3 + number4 + number5;
    const average = total / 5;
    const averageRounded = Math.round(average);
    return averageRounded;};

console.log(averageNumer(10, 22, 130, 40, 2)); // 
console.log(averageNumer(1000, 500, 60, 20, 15));
console.log(averageNumer(1, 345, 21, 45, 3));