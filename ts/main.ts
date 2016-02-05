class BankAccount {	
	constructor(public balance: number) {
	}
	
	deposit(credit: number) {
		this.balance += credit;
		return this.balance;
	}
}

class MyBankAccount extends BankAccount {
	constructor(balance: number) {
		super(balance);
	}
	
	writeCheck(amount: number) {
		this.balance -= amount;
	}
}