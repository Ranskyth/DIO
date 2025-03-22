import { DioAccount } from "./DioAccount"

export class GovAccount extends DioAccount{
    constructor(name:string, accountNumber:number){
        super(name, accountNumber)
    }
    deposit = (valor: number):void => {
        if(this.validateStatus()){
            console.log(`Voce depositou ${valor}`)
            this.balance += valor + 10
          }else{
            console.log("Error No Deposito");
          }
    }
}