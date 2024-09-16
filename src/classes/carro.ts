export class Carro {
    constructor(
        public consumo: number,
        public nivel: number = 0
    ){}

    andar(distancia: number){
        const combustivelGasto: number = distancia * this.consumo
        if(combustivelGasto > this.nivel){
            throw Error("Sem combustivel, abasteça para andar mais.")
        }
        this.nivel -= combustivelGasto
    }

    adicionarGasolina(quantidadeLitros: number){
        this.nivel += quantidadeLitros
    }

    obterCombustivel(){
        console.log(`Nivel do tanque: ${this.nivel} litros`);
    }
}