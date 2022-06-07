"use strict";
exports.__esModule = true;
exports.pessoa = void 0;
function semRetorno() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log(args.join(' '));
}
var pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    exibirNome: function () {
        console.log(this.nome + ' ' + this.sobrenome);
    }
};
exports.pessoa = pessoa;
semRetorno('Luiz', 'Otávio');
pessoa.exibirNome();
