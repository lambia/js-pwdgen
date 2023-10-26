const firstName = prompt("Inserisci il tuo nome", "Mario");
const lastName = prompt("Inserisci il tuo cognome", "Rossi");
const color = prompt("Inserisci il tuo colore preferito", "Bianco");
const suffix = "#23";

console.log("firstName", firstName);
console.log("lastName", lastName);
console.log("color", color);
console.log("suffix", suffix);

//Attenzione null+null è = 0
// const password = firstName + lastName + color + suffix;

//Prima soluzione: forzo la concatenazione usando una stringhetta vuota come primo valore
// const password = "" + firstName + lastName + color + suffix;

// Seconda soluzione: uso backtick literal per far capire a JS che parliamo di stringhe
const password = `${firstName}${lastName}${color}${suffix}`;

console.log("password", password);

document.getElementById("message").innerHTML = `La tua password è: ${password}`;