
export class Calculadora {
    constructor(
        public historico: Array<String> = []
    ) { }

    soma(valor1: number, valor2: number) {
        const resultado: number = valor1 + valor2
        this.historico.push(`${valor1} + ${valor2} = ${resultado}`);
    }

    subtrair(valor1: number, valor2: number) {
        const resultado: number = valor1 - valor2
        this.historico.push(`${valor1} - ${valor2} = ${resultado}`);
    }

    divisao(valor1: number, valor2: number) {
        if (valor1 === 0) {
            throw Error("Não é possivel dividir por 0")
        }
        const resultado: number = valor1 / valor2
        this.historico.push(`${valor1} / ${valor2} = ${resultado}`)
    }

    multiplicacao(valor1: number, valor2: number) {
        const resultado: number =  valor1 * valor2
        this.historico.push(`${valor1} * ${valor2} = ${resultado}`)
    }

    mostraHistorico() {
        this.historico.forEach(element => {
            console.log(element);
        });
    }



}