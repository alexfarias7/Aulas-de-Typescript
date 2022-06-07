export class Calculator {
  constructor(public number: number) {}

  add(n: number): this {
    this.number += n;
    return this;
  }
  sub(n: number): this {
    this.number -= n;
    return this;
  }
  div(n: number): this {
    this.number /= n;
    return this;
  }
  multi(n: number): this {
    this.number *= n;
    return this;
  }
}

export class Subcalculator extends Calculator {
  pow(n: number): this {
    this.number **= n;
    return this;
  }
}

const calculadora = new Subcalculator(20);
calculadora.add(5).multi(2).div(10).sub(2).pow(2);
console.log(calculadora);

export class ReqeustBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }
  setUrl(url: 'get' | 'post'): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log('enviando dados via' + this.method + 'para' + this.url);
  }
}

const request = new ReqeustBuilder();
