/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

const area = function (l, h) {
  console.log("l'area del rettangolo è " + l * h)
}
area(10, 5)

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri
  è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function (n1, n2) {
  if (n1 === n2) {
    return (n1 + n2) * 3
  } else {
    return n1 + n2
  }
}
console.log('somma: ', crazySum(3, 4))

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero
  fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function (n) {
  if (n > 19) {
    return Math.abs(n - 19) * 3
  } else {
    return Math.abs(n - 19)
  }
}

console.log('differenza ', crazyDiff(21))

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro,
  e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function (n) {
  if ((n > 20 && n <= 100) || n === 400) {
    return true
  } else {
    return false
  }
}

console.log('verifica boundary ', boundary(100))

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita,
  ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function (str) {
  if (str.startsWith('EPICODE')) {
    return str
  } else {
    return 'EPICODE' + str //ci avrei messo uno spazio dopo EPICODE volentieri
  }
}
console.log(epify('EPICODE rocks'))

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro.
  La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function (n) {
  if (n > 0) {
    if (n % 3 === 0 || n % 7 === 0) {
      return true
    } else {
      return false
    }
  } else {
    console.log('Inserisci un numero positivo!')
    return 'ERROR!'
  }
}
console.log('verifica multiplo di 3 o 7: ', check3and7(21))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa 
 fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

const reverseString = function (str) {
  return str.split('').reverse().join('')
}
console.log('Reversed string: ', reverseString('EPICODE'))

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function (str) {
  const parole = str.split(' ')
  for (let i = 0; i < parole.length; i++) {
    parole[i] = parole[i][0].toUpperCase() + parole[i].substr(1)
  }
  parole.join(' ')
  return parole.toString()
}
let upperCased = upperFirst('ciao sono giuliano')
console.log('Every word to UpperCase: ', upperCased)

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa.
  La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function (str) {
  str = str.replace(str.charAt(0), '')
  str = str.replace(str.length - 1, '')
  return str
}

console.log('Stringa senza primo e ultimo carattere ', cutString('EPICODE'))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e 
 ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function (n) {
  const randomNumbers = []
  for (let i = 0; i < n; i++) {
    randomNumbers[i] = Math.ceil(Math.random() * 10)
  }
  return randomNumbers
}
console.log('Random numbers Array: ', giveMeRandom(100))
