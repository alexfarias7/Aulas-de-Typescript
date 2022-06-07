export class Empresa {
    nome;
    Colaboradores = [];
    CNPJ;
    constructor(nome, CNPJ) {
        this.nome = nome;
        this.CNPJ = CNPJ;
    }
    addColaborador(colaborador) {
        this.Colaboradores.push(colaborador);
    }
    showColaborador() {
        for (const colaborador of this.Colaboradores) {
            console.log(colaborador);
        }
    }
}
export class Colaborador {
    nome;
    sobrenome;
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
}
const empresa1 = new Empresa('ALex', '000000000000');
console.log(empresa1);
console.log(empresa1.nome);
const colaborador1 = new Colaborador('alex', 'farias');
empresa1.addColaborador(colaborador1);
console.log(empresa1);
//# sourceMappingURL=index.js.map