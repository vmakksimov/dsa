from classes.animal import Animal
from classes.cat import Cat
from classes.dog import Dog
from classes.dogcat import DogCat

from classes.bank_account import BankAccount

dog = Dog("Rex", 3, 55)
animal = Animal("Angel", 44)
dog_cat = DogCat("DogCat", 3, 55)
cat = Cat("Aya", 3)

bank_account= BankAccount("Viktor Maksimov", 1000)

bank_account.get_balance()
bank_account.deposit(5000.500)
bank_account.withdraw(6000)
bank_account.get_balance()
bank_account.withdraw(1000)

# print(dog.eat())
# print(dog.bark())
# print(dog.before_dc())
# print(dog_cat.meow())
# print(cat.meow())