import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { StudentAccount } from './class/StudentAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)

//* [X] Todos os atributos de qualquer conta devem ser privados

//* [X] Os atributos name e accountNumber não podem ser alterados internamente ou externamente

//* [X] Criar instancias para cada um dos tipos de conta no app.ts e executar os métodos possíveis.

//* [X] Implementar os métodos de depósito (deposit) e saque (withdraw) na classe DioAccount
companyAccount.deposit(1000)
peopleAccount.deposit(20)

companyAccount.withdraw(500)
companyAccount.withdraw(700) //Pra erro
peopleAccount.withdraw(21) //Pra erro

//* [X] Implementar o método de empréstimo (getLoan) na classe CompanyAccount

companyAccount.getLoan(10000)

//* [X] Criar um novo tipo de conta a partir da DioAccount
const studentAccount: StudentAccount = new StudentAccount("Estudante", 16);
studentAccount.deposit(78)




