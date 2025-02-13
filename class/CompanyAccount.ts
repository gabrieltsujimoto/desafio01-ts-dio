import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  private hasLoan: boolean = false

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }


  getLoan = (loanValue: number): void => {
    if (this.getCurrentStatus()) {
      this.hasLoan = true
      this.setBalance(loanValue)
      console.log(`Empréstimo de ${loanValue} aprovado para a Empresa ${this.getName()} \n Novo saldo ${this.getBalance()}`)
    } else {
      console.log("Conta nao está ativa")
    }
  }
}
