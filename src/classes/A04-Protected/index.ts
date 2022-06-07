export class Empresa {
  public readonly nome: string;
  protected Colaboradores: Colaborador[] = [];
  private readonly CNPJ: string;

  constructor(nome: string, CNPJ: string) {
    this.nome = nome;
    this.CNPJ = CNPJ;
  }

  addColaborador(colaborador: Colaborador): void {
    this.Colaboradores.push(colaborador);
  }
  showColaborador(): void {
    for (const colaborador of this.Colaboradores) {
      console.log(colaborador);
    }
  }
  /*   getNome(): string {
    return this.nome;
  } */
}

export class Udemy extends Empresa {
  constructor() {
    super('Udemy', '11111111111');
  }

  removeColaborador(): Colaborador | null {
    const colaborador = this.Colaboradores.pop();
    if (colaborador) return colaborador;
    return null;
  }
}
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Udemy();
console.log(empresa1);
console.log(empresa1.nome);

const colaborador1 = new Colaborador('alex', 'farias');

empresa1.addColaborador(colaborador1);
console.log(empresa1);
//console.log(empresa1.getNome());
empresa1.removeColaborador();
console.log(empresa1);
