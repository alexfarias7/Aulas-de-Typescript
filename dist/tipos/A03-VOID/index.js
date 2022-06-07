function semRetorno(...args) {
    console.log(args.join(' '));
}
const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    exibirNome() {
        console.log(this.nome + ' ' + this.sobrenome);
    },
};
semRetorno('Luiz', 'Otávio');
pessoa.exibirNome();
export { pessoa };
//# sourceMappingURL=index.js.map