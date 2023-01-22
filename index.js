const balance = 500.00

class Account {
  constructor (username) {
    this.username = username
    // this.balance = 0;
    this.transactions = []
  }

  get balance () {
    let sum = 0
    this.transactions.map(value => { sum += value })
    return sum
  }

  addTransaction (value) { this.transactions.push(value) }
}
class Transaction {
  constructor (amount, account) {
    this.amount = amount
    this.account = account
  }

  commit () {
    this.time = new Date()
    this.account.addTransaction(this.value())
    return 'Deposit Succesfull'
  }
}

class Withdrawal extends Transaction {
  value () {
    return -this.amount
  }

  commit () {
    if ((this.account.balance - this.amount) < 0) {
      return '0'
    } else { super.commit() }
  }
}

class Deposit extends Transaction {
  value () {
    return this.amount
  }
}

const myAccount = new Account()

console.log('Starting Account Balance: ', myAccount.balance)

console.log('withdrawal is not allowed')
const t1 = new Withdrawal(13.00, myAccount)
console.log('Commit result:', t1.commit())
console.log('Account Balance: ', myAccount.balance)

console.log('Withdrawal attempted and Failed! Only Depositing is allowed')
const t2 = new Deposit(99.99, myAccount)
console.log('Commit result:', t2.commit())
console.log('Account Balance: ', myAccount.balance)

console.log('Withdrawal requested')
const t3 = new Withdrawal(99.99, myAccount)
console.log('Commit result:', t3.commit())

console.log('Ending Account Balance: ', myAccount.balance)
console.log("Back to parents house for free food!")

console.log('Account Transaction History: ', myAccount.transactions)
