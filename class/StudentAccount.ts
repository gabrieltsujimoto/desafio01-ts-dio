import { DioAccount } from "./DioAccount";

export class StudentAccount extends DioAccount {
    constructor(name: string, age: number) {
        super(name, age)
    }

    deposit = (depositValue: number) => {
        this.setBalance(depositValue + 10)
        console.log(`Valor novo do estudante: ${this.getBalance()}`)
    }
}