export class Conta {
    constructor(
        public numeroConta: number,
        public nomeCorrnetista: string,
        public saldo: number = 200
    ) { }

    alterarNome(novoNome: string) {
        this.nomeCorrnetista = novoNome
    }

    depositar(valorDeposito: number) {
        this.saldo += valorDeposito
    }

    saque(valorSaque: number): string {
        return `${this.saldo < valorSaque ? 'Saldo insuficiente': 'Saque realizado com sucesso!'}`
    }

}