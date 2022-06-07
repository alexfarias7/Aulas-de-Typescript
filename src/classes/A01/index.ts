export class Empresa {
  public readonly nome: string;

  private readonly Colaboradores: Colaborador[] = [];
  protected readonly CNPJ: string;
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
}
export class Colaborador {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('ALex', '000000000000');
console.log(empresa1);
console.log(empresa1.nome);

const colaborador1 = new Colaborador('alex', 'farias');

empresa1.addColaborador(colaborador1);
console.log(empresa1);
