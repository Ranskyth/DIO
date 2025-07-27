import { CompanyAccount } from './class/CompanyAccount'
import { GovAccount } from './class/GovAccount';
import { PeopleAccount } from './class/PeopleAccount'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)
//peopleAccount.withdraw(90)
console.log(peopleAccount)
console.log("\n---------------------------------------\n")
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(200)
companyAccount.getLoan(100)
//companyAccount.withdraw(110)
console.log(companyAccount)

console.log("\n---------------------------------------\n")

let Gov:GovAccount = new GovAccount("Gov",11)
Gov.deposit(80)
console.log(Gov)
