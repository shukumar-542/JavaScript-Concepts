function createBankAccount() {
  let balance = 0;
  return {
    depositBalance: (deposit) => {
      return (balance += deposit);
    },
    withdrawBalance: (withdraw) => {
      return (balance -= withdraw);
    },
    getBalance: () => {
      return balance;
    },
  };
}

const myAccount = createBankAccount();
console.log(myAccount.depositBalance(500));
console.log(myAccount.getBalance());
console.log(myAccount.withdrawBalance(30));
console.log(myAccount.balance); 