// 1. Crie uma classe Contador, que encapsule um valor usado para
// contagem de itens ou eventos. A classe deve oferecer métodos que
// devem:
// a) Zerar;
// b) Incrementar;
// c) Retornar o valor do contador.

import { Contador } from './classes/contador'

const contador: Contador = new Contador(5)

contador.incrementarContador(2);
console.log(contador.retornarValorContador());
contador.zerarContador();
console.log(contador.retornarValorContador());


// 2. Crie uma classe que modele uma bola:
// a. Atributos
// i. Cor
// ii. Circunferência
// iii. Material
// b. Métodos
// i. Trocar Cor
// ii. Mostrar cor

import { Bola } from './classes/bola'

const bola: Bola = new Bola("Amarela", 35, "Tecido")

console.log(bola.mostrarCor());
bola.trocarCor("Verde");
console.log(bola.mostrarCor());

// 3. Crie uma classe para implementar uma conta corrente. A classe
// deve possuir os seguintes atributos:
// a. Número da conta
// b. Nome do correntista
// c. Saldo
// Os métodos são os seguintes:
// a) Alterar nome
// b) Deposito
// c) Saque
// No construtor, o saldo é opcional, com valor padrão zero e os
// demais atributos são obrigatórios. A conta não pode ficar com saldo
// negativo.

import { Conta } from './classes/conta'
const conta: Conta = new Conta(12345, "Michele")

conta.alterarNome("Caroline")
console.log(conta.saque(100));
console.log(conta.saque(1000));
conta.depositar(12);
console.log(conta);

// 4. Crie uma classe para representar uma Calculadora. Esta classe
// deve conter um atributo que servirá para armazenar o histórico das
// operações e seus respectivos resultados.
// a. Esta classe deve conter as operações de somar, multiplicar,
// dividir e diminuir.
// b. Esta classe deve iniciar com o histórico vazio
// c. Esta classe deve conter uma ação para visualizar o histórico.

import { Calculadora } from './classes/calculadora';

const soma: Calculadora = new Calculadora()
soma.soma(10, 5)
soma.subtrair(10, 5)
soma.divisao(10, 5)
soma.multiplicacao(10, 5)
soma.mostraHistorico()

// 5. Faça um programa completo utilizando classes e métodos que:
// a. Possua uma classe chamada BombaCombustivel, com no
// mínimo esses atributos:
// i. tipoCombustivel.
// ii. valorLitro

// iii. quantidadeCombustivel
// b. Possua no mínimo esses métodos:
// i. abastecerPorValor() – método onde é informado o
// valor a ser abastecido e mostra a quantidade de litros
// que foi colocada no veículo
// ii. abastecerPorLitro() – método onde é informado a
// quantidade em litros de combustível e mostra o valor a
// ser pago pelo cliente.
// iii. alterarValor() – altera o valor do litro do combustível.
// iv. alterarCombustivel() – altera o tipo do combustível.
// v. alterarQuantidadeCombustivel() – altera a
// quantidade de combustível restante na bomba.

// OBS: Sempre que acontecer um abastecimento é necessário
// atualizar a quantidade de combustível total na bomba. Não deve ser
// possível abastecer se não tiver gasolina suficiente na bomba.

import { BombaCombustivel } from './classes/bombaCombustivel';
const abastecimento: BombaCombustivel = new BombaCombustivel("Gasolina", 5.41, 20)
abastecimento.alterarValor(8)
abastecimento.abastecerPorLitro(15)
abastecimento.abastecerPorValor(26)
abastecimento.mostraCombustivelDisponivel()



// 6. Implemente uma classe chamada Carro com as seguintes
// propriedades:
// a. Um veículo tem um certo consumo de combustível (medidos
// em km / litro) e uma certa quantidade de combustível no
// tanque.
// b. O consumo é especificado no construtor e o nível de
// combustível inicial é 0.
// c. Forneça um método andar() que simula o ato de dirigir o
// veículo por uma certa distância, reduzindo o nível de
// combustível no tanque de gasolina.

// d. Forneça um método obterGasolina(), que retorna o nível atual
// de combustível e forneça um método adicionarGasolina(),
// para abastecer o tanque.

import { Carro } from './classes/carro';

const carro: Carro = new Carro(10.2, 50)
carro.adicionarGasolina(50)
carro.andar(4)
carro.obterCombustivel()