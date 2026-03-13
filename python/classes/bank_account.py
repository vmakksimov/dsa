



class BankAccount:
    def __init__(self, account_holder: str, balance: float = 0.0) -> None:
        self.account_holder = account_holder
        self.balance = balance

    def deposit(self, amount: float) -> None:
        print (type(amount))
        if isinstance(int, type(amount)) or isinstance(float, type(amount)):
            raise ValueError('The amount must of of type int/float')
        self.balance += amount
        print(f"Amount succesfully added to the balance. Total balance: {self.balance}")

    def withdraw(self, amount:float) -> None:
        if isinstance(int, type(amount)) or isinstance(float, type(amount)):
            raise ValueError('The amount must of of type int/float')
        if self.balance < amount:
            raise SystemError('Not enough balance')
        self.balance -= amount
        print(f"Amount succesfully deducted to the balance. Total balance: {self.balance}")

    def get_balance(self) -> float:
        print(f"Balance: {self.balance}")