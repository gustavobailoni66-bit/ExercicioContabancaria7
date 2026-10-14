import { Contabancaria } from "./Contabancaria.js";
import { ContaCorrenteProps } from "../interfaces/ContaProps.js";

export class ContaCorrente extends Contabancaria<ContaCorrenteProps> {
    declare props: any;
    getNumero: any;
    private _getTitular: any;
    public get getTitular(): any {
        return this._getTitular;
    }
    public set getTitular(value: any) {
        this._getTitular = value;
    }
    private _getAgencia: any;
    public get getAgencia(): any {
        return this._getAgencia;
    }
    public set getAgencia(value: any) {
        this._getAgencia = value;
    }
    private _getSaldo: any;
    public get getSaldo(): any {
        return this._getSaldo;
    }
    public set getSaldo(value: any) {
        this._getSaldo = value;
    }
    constructor(props:ContaCorrenteProps){
        super(props);
    }

    get getLimite(): number { return this.props.limite}

    set setLimite(novoLimite: string) {
        if (novoLimite.trim().length === 0) {
            console.log("\n ERRO: O Limite não pode ser vazio!");
            return;
        }
        this.props.limite = novoLimite;
    }

     public exibirExtrato(): void {
        console.log(
            `
            [Conta Corrente] 
              Numero da conta: ${this.getNumero} 
            | Agencia: ${this.getAgencia} 
            | Titular: ${this.getTitular}
            | Saldo: ${this.getSaldo}
            | Limite: ${this.getLimite}
            `
        );
    }
}