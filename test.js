const list = [
  { id: 0, name: 'Emmanuel' },
  { id: 1, name: 'Alan' },
  { id: 2, name: 'Ernesto' },
];

const test = list.some(e => e.id === 5)

console.log(test);