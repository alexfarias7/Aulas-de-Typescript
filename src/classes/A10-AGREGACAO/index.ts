export class CarrinhoCompras {
  private readonly produtos: Produto[] = [];
  inserirProdutos(...produtos: Produto[]): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }
  qtdProdutos(): number {
    return this.produtos.length;
  }
  totalProdutos(): number {
    return this.produtos.reduce((soma, produto) => soma + produto.preco, 0);
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}
const produto1 = new Produto('camisa', 50);
const produto2 = new Produto('calca', 100);
const produto3 = new Produto('blusa', 1050);

const carrinho1 = new CarrinhoCompras();
carrinho1.inserirProdutos(produto1, produto2, produto3);

console.log(carrinho1.totalProdutos);
console.log(carrinho1);
console.log(produto1.nome);
