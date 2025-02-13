export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number) {
    this.name = name
    this.accountNumber = accountNumber
  }

  setBalance = (prepaid?: number): void => {
    if (prepaid) {
      this.balance += prepaid
    }
  }

  getBalance = (): number => {
    return this.balance
  }


  getName = (): string => {
    return this.name
  }

  getCurrentStatus = (): boolean => {
    return this.status
  }

  deposit = (depositValue: number): void => {
    if (this.validateStatus()) {
      console.log(`Usuário: ${this.name} Saldo anterior: ${this.balance}`)
      this.balance += depositValue
      console.log(`DEPÓSITO REALIZADO COM SUCESSO! \n Saldo atual: ${this.balance}`)
    }
  }

  withdraw = (withDrawValue: number): void => {
    if (this.validateStatus()) {
      if (this.balance > withDrawValue) {
        this.balance -= withDrawValue
        console.log(`USUÁRIO: ${this.getName()} SAQUE REALIZADO COM SUCESSO! \n Novo saldo de: ${this.balance}`)
      } else {
        console.log("Você nao possui saldo disponível")
      }
    }
  }


  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }
    throw new Error('Conta inválida')
  }
}
