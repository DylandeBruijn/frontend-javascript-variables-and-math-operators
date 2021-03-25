console.log('Zorg dat al jouw uitkomsten één voor één in de terminal worden gelogd! 📖');

// ==========================================
// 1. Declareer een variabele en sla daar de uitkomst van 4 plus 5 in op.                           // geeft 9 wanneer gelogd
// ==========================================

const calcOne = 4 + 5;
console.log(`Answer 1: ${calcOne}`);

// ==========================================
// 2. Declareer een variabele en sla daar de uitkomst van 7 maal 52 in op.                          // geeft 364 wanneer gelogd
// ==========================================

const calcTwo = 7 * 52;
console.log(`Answer 2: ${calcTwo}`);

// ==========================================
// 3. Declareer een variabele en sla daar de uitkomst van 4 + 3 in op, vermenigvuldigd met 7.       // geeft 49 wanneer gelogd
// ==========================================

const calcThree = (4 + 3) * 7;
console.log(`Answer 3: ${calcThree}`);

// ==========================================
// 4. Declareer een variabele en sla daar de uitkomst van 36 gedeeld door 6, maal 2 in op.          // geeft 12 wanneer gelogd
// ==========================================

const calcFour = (36 / 6) * 2;
console.log(`Answer 4: ${calcFour}`);

// ==========================================
// 5. Declareer twee variabelen en zet daarin respectievelijk de waardes 'zoet' en 'sappig'.
// Declareer nog een variabele en sla daarin de samenvoeging van bovenstaande variabelen in op.     // geeft 'zoetsappig' wanneer gelogd
// ==========================================

const stringCombineOne = "zoet";
const stringCombineTwo = "sappig";
const stringCombineResult = stringCombineOne + stringCombineTwo;
console.log(`Dit liefdesverhaal is echt ${stringCombineResult}!`);

// ==========================================
// 6. Declareer een variabele voor jouw voornaam en een variabele voor jouw achternaam en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw volledige naam en plak bovenstaande variabelen aan elkaar.
// Zorg dat er een spatie tussen zit zonder iets aan de originele variabelen te veranderen.        // geeft bijv. 'Henk Pieters' wanneer gelogd
// ==========================================

const firstName = "Dylan";
const lastName = "de Bruijn";
const fullName = firstName + " " + lastName;
console.log(`Mijn naam is ${fullName}.`);

// ==========================================
// 7. Declareer een variabele voor jouw woonplaats en een variabele voor provincie en zet de waardes erin.
// Declareer vervolgens een variabele voor jouw locatie en plak jouw de woonplaats en provincie aan elkaar.
// Zorg dat er een komma en spatie tussen zit zonder iets aan de originele variabelen te veranderen. // geeft bijv. Maastricht, Limburg wanneer gelogd
// ==========================================

const residence = "Breda";
const state = "Noord-Brabant";
const location = residence + ", " + state;
console.log(`Ik woon in ${location}.`);