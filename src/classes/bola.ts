export class Bola {
    constructor(
        public cor: string,
        public circunferencia: number,
        public material: string
    ) { }

    trocarCor(novaCor: string) {
        this.cor = novaCor
    }

    mostrarCor() {
        return this.cor
    }
}