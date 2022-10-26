function getNotDuplicatedCryptogram(cryptogram) {
  const newCryptogram = [cryptogram[0]];

  for (let i = 1; i < cryptogram.length; i++) {
    const target = newCryptogram[newCryptogram.length - 1];
    if (target !== cryptogram[i]) {
      newCryptogram.push(cryptogram[i]);
    } else {
      newCryptogram.pop();
    }
  }

  return newCryptogram.join("");
}

function problem2(cryptogram) {
  var answer;

  while (true) {
    const newCryptogram = getNotDuplicatedCryptogram(cryptogram);
    if (newCryptogram === cryptogram) {
      answer = newCryptogram;
      break;
    }
    cryptogram = newCryptogram;
  }

  return answer;
}

module.exports = problem2;
