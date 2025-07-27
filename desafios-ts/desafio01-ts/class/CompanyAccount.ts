import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (valorEmprestimo:number): void => {
    console.log(`Voce pegou um empréstimo de ${valorEmprestimo}`)
    this.balance += valorEmprestimo
  }
}
