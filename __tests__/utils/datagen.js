exports.generatePartsOfWhole = function() {
  let data = [],
    names = [
      "Led Zeppelin",
      "AC/DC",
      "Def Lepard",
      "Van Halen",
      "The Eagles",
      "Black Sabbath",
      "The Scorpions",
      "Starship",
      "Chuck Berry",
      "Nirvana"
    ],
    numbers = [],
    total = 0;

  while (total < 100) {
    let j = Math.floor(Math.random() * 100),
      j1 = j / 2.0;

    if (j1 < 10.0) {
      continue;
    }
    total += j1;
    numbers.push(j1);
  }

  numbers.pop();
  numbers.pop();

  let sum = numbers.reduce(function(sum, num) {
    return sum + num;
  });

  let remainder = 100 - sum;
  numbers.push(remainder);

  let newNumbers = numbers.sort(function(v) {
    return v;
  });

  newNumbers.forEach(function(value, idx) {
    let i = idx % 10,
      name = names[i],
      obj = {
        title: name,
        value: value
      };
    data.push(obj);
  });

  return data;
};
