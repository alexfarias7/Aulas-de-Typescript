export abstract class Personagem {
  protected abstract emoji: string;
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}
  atacar(personagem: Personagem): void {
    personagem.perderVida(this.ataque);
  }

  perderVida(forçaataque: number): void {
    this.bordao();
    this.vida = forçaataque;
  }
  abstract bordao(): void;
}

export class Monstro extends Personagem {
  protected emoji = '|0|';
  bordao(): void {
    console.log('é assim que meu fusca anda');
  }
}
export class Guerreiro extends Personagem {
  protected emoji = ':(';
  bordao(): void {
    console.log('é assim que vai parar');
  }
}

const guerreiro = new Guerreiro('Conan', 100, 1000);
const monstro = new Monstro('Pé grande', 85, 1000);
guerreiro.atacar(monstro);
