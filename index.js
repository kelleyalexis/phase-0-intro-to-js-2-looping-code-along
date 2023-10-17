function writeCards(cards, occasion) {
  let messages = [];
  for (let i = 0; i < cards.length; i++) {
    messages.push(`Thank you, ${cards[i]}, for the wonderful ${occasion} gift!`);
  }
  return messages;
}

function countDown() {
  let countdown = 10;
  while (countdown >= 0) {
    console.log(countdown--);
  }
}

writeCards(["Guadalupe", "Ollie", "Aki"], "birthday");
countDown();