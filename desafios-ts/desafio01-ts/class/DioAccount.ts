export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  protected balance: number = 100
  private status: boolean = true;

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  deposit = (valor:number): void => {
    if(this.validateStatus()){
      console.log(`Voce depositou ${valor}`)
      this.balance += valor
    }else{
      console.log("Error No Deposito");
    }
  }

  withdraw = (valor:number): void => {
    if(this.validateStatus()){
      if(this.balance >= valor){
        console.log(`Voce sacou ${valor}`)
        this.balance -= valor
      }else{
        console.log("Error No Saque")
      }
    }
  }

  getBalance = (): void => {
    console.log(this.balance)
  }

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
