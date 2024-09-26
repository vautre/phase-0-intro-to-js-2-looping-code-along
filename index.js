const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names, event) {
   return names.map(name=> `Thank you, ${name}, for the wonderful ${event} gift!`)
}

console.log(writeCards(names, "surprise"))

function countDown(number) {
    for (let i = 10; i >= 0; i--) {
      console.log(i);
    }
  }    
