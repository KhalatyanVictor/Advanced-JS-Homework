// Exercise 3.5: Bank Account Balance
// Objective: Create an object that represents a bank account with properties like balance and
// interestRate.
// Expected Result: The object should return a value of 1050 when the balance is 1000 and interest is
// applied, or similar depending on the interest calculation.

const obj = {
    balance: 1000,
    interestRate: 0.05,
    calculateInterestRate: function(){
        return obj.balance * obj.interestRate + obj.balance;
    }
}

console.log(obj.calculateInterestRate())