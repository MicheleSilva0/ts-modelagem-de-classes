export class BombaCombustivel {
    constructor(
        public tipoCombustivel: string,
        public valorLitro: number,
        public quantidadeCombustivelBomba: number
    ) { }


    abastecerPorValor(valor: number) {
        const quantidadeLitrosAbastecida: number = valor / this.valorLitro
        this.validaSeTemCombustivelBomba(quantidadeLitrosAbastecida)
        console.log(quantidadeLitrosAbastecida);
    }

    abastecerPorLitro(qtdLitros: number) {
        this.validaSeTemCombustivelBomba(qtdLitros)
        const valoraPagar: number = qtdLitros * this.valorLitro
        console.log(`Valor a pagar: R$ ${valoraPagar}`);
    }

    alterarValor(novoValor: number) {
        this.valorLitro = novoValor
    }

    alterarCombustivel(novoCombustivel: string) {
        this.tipoCombustivel = novoCombustivel
    }

    alterarQuantidadeCombustivel(quantidadeLitros: number) {
        this.quantidadeCombustivelBomba += quantidadeLitros
    }

    mostraCombustivelDisponivel(){
        console.log(this.quantidadeCombustivelBomba.toFixed(2), "litros restantes"); 
    }

    validaSeTemCombustivelBomba(litros: number) {
        if (litros > this.quantidadeCombustivelBomba) {
            throw Error(`Não tem combustivel suficiente na bomba! Disponivel ${this.quantidadeCombustivelBomba}`)
        }
        this.quantidadeCombustivelBomba -= litros
    }
}