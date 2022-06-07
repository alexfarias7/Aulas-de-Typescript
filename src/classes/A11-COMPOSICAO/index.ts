export class Carro {
  private readonly motor = new Motor();
  ligar(): void {
    this.motor.ligar();
  }
  acerelar(): void {
    this.motor.acerelar();
  }
  parar(): void {
    this.motor.parar();
  }
  desligar(): void {
    this.motor.parar();
  }
}

export class Motor {
  ligar(): void {
    console.log('ligado');
  }
  acerelar(): void {
    console.log('acerelando');
  }
  parar(): void {
    console.log('parado');
  }
  desligar(): void {
    console.log('desligado');
  }
}

const carro = new Carro();
carro.ligar();
carro.desligar();
