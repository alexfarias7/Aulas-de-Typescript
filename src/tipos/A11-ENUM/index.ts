enum Colors {
  'red',
  'blue',
  'green',
  'yellow' = 'yellow',
  'black' = 1000,
}

enum Colors {
  'white' = 'white',
}

console.log(Colors.green);
console.log(Colors[2]);
console.log(Colors.yellow);
console.log(Colors.black);

console.log(Colors);

function changeColor(color: Colors): void {
  console.log(Colors[color]);
}

changeColor(Colors.yellow);
