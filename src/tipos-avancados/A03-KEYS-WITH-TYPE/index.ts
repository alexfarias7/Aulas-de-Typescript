type Veiculos = {
  marca: string;
  ano: number;
};
type Car = {
  brand: Veiculos['marca'];
  year: Veiculos['ano'];
  plate: string;
};

const carro: Car = {
  brand: 'Ford',
  year: 2022,
  plate: '01555-d44d',
};
console.log(carro);
