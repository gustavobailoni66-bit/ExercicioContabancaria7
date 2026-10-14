import type { ContaProps } from "../interfaces/ContaProps.js";

export abstract class Contabancaria<T extends ContaProps = ContaProps> {
    constructor(protected props: T){}

    get getnumero(): string { return this.props.numero }
    get getAgencia(): number { return this.props.agencia }
    get getTitular(): number { return this.props.titular }
    get getSaldo(): number { return (this.props as unknown as { saldo: number }).saldo }

    set setNumero(novoNumero: string) {
        if (novoNumero.trim().length === 0) {
            console.log("\n ERRO: O saldo não pode ser vazio! ");
            return;
        }

        this.props.numero = novoNumero;
    }

    set setAgencia(novaAgencia: number) {
        if (novaAgencia <= 0) {
            console.log("\n ERRO: A agência deve ser um número positivo! ");
            return;
        }

        this.props.agencia = novaAgencia;
    }
    set setTitular(novoTitular: number) {
        if (novoTitular <= 0) {
            console.log("\n ERRO: O titular deve ser um número positivo! ");
            return;
        }

        this.props.titular = novoTitular;

    }
    set setSaldo(novoSaldo: number) {
        if (novoSaldo < 0) {
            console.log("\n ERRO: O saldo não pode ser negativo! ");
            return;
        }

        (this.props as unknown as { saldo: number }).saldo = novoSaldo;
    }
    sacar(valor: number) {
        if (valor <= 0) {
            console.log("\n ERRO: O valor do saque deve ser positivo! ");
            return;
        }

        const saldoAtual = Number((this.props as unknown as { saldo: number }).saldo);

        if (Number.isNaN(saldoAtual)) {
            console.log("\n ERRO: O saldo da conta não é válido! ");
            return;
        }

        if (valor > saldoAtual) {
            console.log("\n ERRO: Saldo insuficiente! ");
            return;
        }

        (this.props as unknown as { saldo: number }).saldo = saldoAtual - valor;
    }
    abstract exibirExtrato(): void;
}
   