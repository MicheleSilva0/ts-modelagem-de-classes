export class Contador {
    constructor(
        public valor: number = 0
    ) { }

    zerarContador() {
        this.valor = 0
    }

    incrementarContador(valorIncrementado: number) {
        this.valor += valorIncrementado
    }

    retornarValorContador() {
        
        return this.valor
    }
}