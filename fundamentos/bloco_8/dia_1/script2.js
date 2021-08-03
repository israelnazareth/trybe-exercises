const numberGenerator = (playedNumber, callback) => {
  const generedNumber = Math.floor(Math.random() * 5 + 1);
  console.log(`Seu número: ${playedNumber}\nNúmero sorteado: ${generedNumber}`)
  return callback(playedNumber, generedNumber) ? 'Parabéns! Você ganhou!' : 'Que pena! Tente novamente.'
}

const checkNumbers = (playedNumber, generedNumber) => playedNumber === generedNumber;

console.log(numberGenerator(2, checkNumbers));
