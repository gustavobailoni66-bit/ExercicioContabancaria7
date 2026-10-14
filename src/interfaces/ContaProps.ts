export interface ContaProps {
  numero: string;
  agencia: number;
  titular: number;
  saldo: Date;
}

export interface ContaCorrenteProps extends ContaProps {
  limite: number;
}    

export interface ContaPoupancaProps extends ContaProps{
    taxaAniversario: number;
}