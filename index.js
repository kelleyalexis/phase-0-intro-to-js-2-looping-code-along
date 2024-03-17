function writeCards(cards) {
  let messages = []; 
  for (let i = 0; i < cards.length; i++) {
    messages.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
  
  }
  
  return messages; 
}

const cards = ["Guadalupe", "Ollie", "Aki"];
console.log(writeCards(cards));

function countDown() {
let countDown = 10;
while (countDown >= 0) {
  console.log(countDown--);
}
}

