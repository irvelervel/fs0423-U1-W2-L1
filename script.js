console.log('Ciao, FS0423!')

// Il mestiere del software developer si incentra sulla RISOLUZIONE di problemi, ovvero sulla scrittura di ALGORITMI!
// Un algoritmo è una serie di passaggi, ordinati, che porta alla risoluzione di un problema.
// Un algoritmo, se il problema è sempre lo stesso, vi porterà sempre alla stessa soluzione.

// Cosa ci serve sapere per sviluppare un algoritmo? Un concetto fondamentale, è quello delle VARIABILI.
// Una variabile la possiamo immaginare come una SCATOLA, con un contenuto, oppure come una bacinella che contiene
// un ingrediente, al fine di ottenere una ricetta.
// A livello di HW, computer, una variabile è un'allocazione di memoria atta a contenere un valore.

// VARIABILI
// in JS, le variabili tipicamente si dichiarano con la parola chiave (keyword) --> "let"
let dog // creazione della variabile chiamata "dog"
// ho creato una variabile chiamata "dog". Al momento questa variabile (questa scatola) è VUOTA (è stata dichiarata,
// ma non ha un contenuto al momento)
console.log(dog) // es. di undefined
dog = 'Fido' // sto RIEMPIENDO la scatola, con in questo caso la stringa "Fido"

// è possibile anche fare questi due passaggi in un colpo solo:

let cat = 'Tom' // in un'unica riga!

let favouriteNumber = 7 // il valore 7 in questo caso è un numero!
console.log(favouriteNumber)
favouriteNumber = 15 // va benissimo!
// favouriteNumber = 'Stefano' // è un errore! NON dobbiamo abituarci a cambiare i TIPI delle variabili!

// Una variabile è una scatola di contenuto "variabile!!". Va benissimo dichiarare la variabile con un valore,
// e poi per esigenze di sviluppo, di programmazione o di risoluzione del problema cambiarne il valore.
// Una cosa da NON fare però è cambiare il TIPO di dato in una variabile: se favouriteNumber nasce per ospitare dei numeri,
// assegnatele SEMPRE dei valori numerici! Se dovete improvvisamente salvare una stringa, create un'altra variabile
// (ovvero fate una nuova scatola che ospiterà valori stringa...)

// let cat = "Silvestro"
// let completeSolutionForMyInitialProblem // es. estremo di nomenclatura camelCase, tecnicamente è corretto!

cat = 'X'

// qui, alla riga 38, quanto vale favouriteNumber?
console.log(favouriteNumber)

// TIPI DI VALORI POSSIBILI PER UNA VARIABILE:
// string es. "Mario", 'Rossi', `Stefano`
// number es. 100, 7, 2500000, 65.5, 98.1234
// boolean es. true, false
// undefined --> quando dichiariamo una variabile ma senza un valore
// null --> rappresenta l'assenza vera e proprio di un valore

// un valore booleano rappresenta la semplice verità o falsità di un'affermazione
let canYouDrive = true
let areYouItalian = false

canYouDrive = false
// canYouDrive = 'Federico'

// es. di null
let bruno = null
bruno = 50
// una variabile si DICHIARA una volta sola!
// ma il suo valore può venire ri-assegnato infinite volte

// ESEMPI DI VARIABILI NUMERICHE
let number1 = 15
let number2 = 20
let number3 = number1

// quanto vale number3?
console.log('valore di number3', number3)

let number4 = number2 + number3
// quanto vale number4?
console.log('number4', number4) // "number4" è il titolo, number4 senza virgolette stamperà il valore della variabile

let number5 = number2 - number1 // 5

console.log(3 * 5) // 15
console.log(20 / 4) // 5
console.log(22 % 5) // questo si chiama operatore "modulo", calcola il resto della divisione! --> 2
// il modulo è bellissimo per vedere se un numero è perfettamente divisibile per un altro...
// si usa spesso per insegnare a JS i numeri pari/dispari! se (number1 % 2) desse 0, number1 sarebbe pari
console.log(6 % 3)

//
let falseNumber1 = '15'
console.log(falseNumber1)
let falseNumber2 = '20'
let falseNumber3 = falseNumber1 + falseNumber2
// ?
console.log('il risultato di falseNumber3 è', falseNumber3)
console.log('stefano' + 'casasola')
// JS concatena le stringhe con l'operatore +
console.log('15' + 20) // sempre '1520'!

let firstName = 'Stefano'
let lastName = 'Casasola'

console.log(firstName + ' ' + lastName)

// un altro modo di dichiarare una variabile: la parola "const"
// stiamo dichiarando una "constant variable", una "scatola" il cui valore iniziale non potrà mai più essere cambiato

const teacherName = 'Stefano'
console.log('teacherName è', teacherName)
// teacherName = 'Giovanni' // non si può fare!

const epicodeURL = 'https://www.epicode.com'

const fixedNumber = 100
const newNumber = fixedNumber + 50 // 150, funziona perchè non sto alterando il valore di fixedNumber!
// fixedNumber = newNumber // errore!

const myLocation = 'FVG'
const test = myLocation + '2' // FVG2

console.log('Io mi chiamo' + ' ' + teacherName + ', abito in ' + myLocation)

// operatori di assegnazione
let myVariable = 50
myVariable += 100 // myVariable = myVariable + 100
console.log('myVariable', myVariable)

// VERIFICA DI CONDIZIONI e OPERATORI DI COMPARAZIONE
let n1 = 5
let n2 = 10
let n3 = 10

// < > <= >=
console.log(n1 < n2) // (5 < 10) --> true
console.log(n1 <= n2) // (5 <= 10) --> true
console.log(n1 > n2) // (5 > 10) --> false

console.log(n1 < n3) // true
console.log(n2 < n3) // false
console.log(n2 <= n3) // true

// come verifico se n2 è UGUALE a n3? ===
// esiste anche il == --> il == verifica l'uguaglianza di due valori, a scapito del loro TIPO

// console.log(5 == '5') // --> true --> please non usatelo :)
console.log(5 === 5) // true --> usate SEMPRE i ===
console.log(5 === '5') // false
console.log(n2 === n3) // true

// console.log(n2 = n3) // operatore di ASSEGNAZIONE, abbiamo appena assegnato a n2 il valore di n3 :)

// OPERATORI LOGICI, AND e OR
// AND --> && --> l'operatore AND tornerà TRUE se TUTTE LE PARTI COLLEGATE SONO TRUE
// OR --> ||
// NOT --> !

console.log(n1 < n2) // true
console.log(n1 < n2 && n2 < n3) // (true && false) --> false
console.log(n1 < n2 && n2 <= n3) // (true && true) --> true

console.log(n1 < n2 || n2 < n3) // (true || false) --> true
console.log(n1 < n2 || n2 <= n3) // (true || true) --> true
console.log(n1 > n2 || n2 < n3) // (false || false) --> false

console.log(n1 < n2) // true
console.log(!(n1 < n2)) // false, il ! ribalta il significato di un'espressione

// TYPEOF
console.log(typeof n1) // number

console.log(5 === 5) // true
console.log(5 !== 5) // controlla che 5 sia diverso da 5, torna in questo caso false
