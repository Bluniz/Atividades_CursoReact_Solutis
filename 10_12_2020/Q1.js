const values = [1, 2, 8, 10, 50, 60, 90, 9, 15, 13];

let count = 0;

for (var i = 0; i < values.length; i++) {
  if (values[i] >= 10 && values[i] <= 20) {
    count++;
  }
}

console.log(count);
