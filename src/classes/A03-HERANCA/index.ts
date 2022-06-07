export class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  getIdade(): number {
    return this.idade;
  }

  getCpf(): string {
    return this.cpf;
  }

  getName(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

export class Aluno extends Pessoa {
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string,
  ) {
    super(nome, sobrenome, idade, cpf);
    this.sala = sala;
  }
  getName(): string {
    return `aluno: ${this.nome} ${this.sobrenome}`;
  }
}
export class Cliente extends Pessoa {
  getName(): string {
    console.log('retornano antes');
    const result = super.getName();
    return ` ${result} modificado`;
  }
}

const pessoa = new Pessoa('alex', 'farias', 25, '54545454545');
const aluno = new Aluno('alex', 'farias', 25, '54545454545', '01');
const cliente = new Cliente('alex', 'farias', 25, '54545454545');

//console.log(pessoa, aluno, cliente);
console.log(aluno);
