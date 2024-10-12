// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali
  (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const giveMeRandom = function (n) {
  const randomNumbers = []
  for (let i = 0; i < n; i++) {
    randomNumbers[i] = Math.ceil(Math.random() * 10)
  }
  return randomNumbers
}

const randomNumbers = giveMeRandom(5)

const checkArray = function (randomNumbers) {
  let sum = 0
  for (let i = 0; i < randomNumbers.length; i++) {
    if (randomNumbers[i] > 5) {
      console.log(randomNumbers[i], ' è maggiore di 5')
      sum += randomNumbers[i]
    } else {
      console.log(randomNumbers[i], ' non è maggiore di 5')
    }
  }
  return sum
}

console.log('la somma dei numeri maggiori di 5 è: ', checkArray(randomNumbers))

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart".
  Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio 
 (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCart = [
  (audi = {
    price: 200,
    name: 'RS6',
    id: 1111,
    quantity: 1,
  }),
  (bmw = {
    price: 300,
    name: 'M8',
    id: 2222,
    quantity: 2,
  }),
  (mercedes = {
    price: 400,
    name: 'amggt',
    id: 3333,
    quantity: 1,
  }),
]

const shoppingCartTotal = function (shoppingCart) {
  let tot = 0
  for (let i = 0; i < shoppingCart.length; i++) {
    tot += shoppingCart[i].price * shoppingCart[i].quantity
  }
  return tot
}
console.log(
  'Il totale del carrello ammonta a ',
  shoppingCartTotal(shoppingCart)
)

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo,
  lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

const addToShoppingCart = function (shoppingCart, objectID, howMany) {
  for (let i = 0; i < shoppingCart.length; i++) {
    if (objectID === shoppingCart[i].id) {
      shoppingCart[i].quantity += howMany
    }
  }
  return shoppingCart
}

console.log(addToShoppingCart(shoppingCart, 1111, 2))

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". 
 Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna
  l'oggetto più costoso in esso contenuto.
*/

const maxShoppingCart = function (shoppingCart) {
  let max = shoppingCart[0].price
  let index
  for (let i = 0; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > max) {
      max = shoppingCart[i].price
      index = i
      console.log(max)
    }
  }
  return index
}
const max = maxShoppingCart(shoppingCart)
console.log("l'oggetto più costoso è ", shoppingCart[max])

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart".
  Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

const latestShoppingCart = function (shoppingCart) {
  return shoppingCart.length - 1
}
const last = latestShoppingCart(shoppingCart)
console.log("L'ultimo elemento del carrello è: ", shoppingCart[last])

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè
  il numero casuale non è maggiore di x per tre volte di fila.
*/

const loopUntil = function (n) {
  let numbers = []
  let bool = true
  for (let i = 0; bool; i++) {
    numbers[i] = Math.ceil(Math.random() * 10)
    if (numbers[i] > n) {
      if (numbers[i] === numbers[i - 1]) {
        console.log(numbers[i])
        if (numbers[i] === numbers[i - 2]) {
          console.log(numbers[i], 'FINITO')
          bool = false
        }
      } else {
        console.log(numbers[i])
      }
    } else {
      console.log(numbers[i])
    }
  }
}

loopUntil(2)

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica.
 La funzione salta automaticamente i valori non numerici nell'array.
*/
const numbers = [7, 'stefano', true, 5]
const average = function (ArrayOfNumbers) {
  let sum = 0
  let index = 0
  for (let i = 0; i < ArrayOfNumbers.length; i++) {
    if (typeof ArrayOfNumbers[i] === 'number') {
      sum += ArrayOfNumbers[i]
      index++
    }
  }
  return sum / index
}

console.log('media: ', average(numbers))

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno
  di un array di stringhe fornito come parametro.
*/

const words = ['salvo', 'stefano', 'anna', 'giuliano', 'mariacaterina', 'gaia']
const longest = function (wordsArray) {
  let long = ''
  for (let i = 0; i < wordsArray.length; i++) {
    if (long.length < wordsArray[i].length) {
      long = wordsArray[i]
    }
  }
  return long
}

console.log('la parola più lunga è ', longest(words))

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email.
  La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

const antiSpam = function (emailContent) {
  let bool = false
  if (emailContent.includes('SPAM') || emailContent.includes('SCAM')) {
    bool = true
  }
  return bool
}

console.log('è spam?: ', antiSpam('ciao ciao ciao ciao'))

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

const daysPassed = function (date) {
  let dateInPast = new Date(date)
  let today = new Date()
  let differenceInTime = today.getTime() - dateInPast.getTime()
  let differenceInDays = Math.round(differenceInTime / (1000 * 3600 * 24))
  console.log(
    'Total number of days between dates:\n' +
      dateInPast.toDateString() +
      ' and ' +
      today.toDateString() +
      ' is: ' +
      differenceInDays +
      ' days'
  )
}

daysPassed('2024-10-3')

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y",
  e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

const matrixGenerator = function (x, y) {
  const matrix = []
  let array = []
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      array[j] = i.toString() + j.toString()
    }
    matrix[i] = array
    array = []
  }
  return matrix
}

console.log(matrixGenerator(6, 8))
