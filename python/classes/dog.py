from .animal import Animal

class Dog(Animal):
    def __init__(self, name: str, age: int, km: int) -> None:
        super().__init__(name, age)
        self.km = km

    def bark(self) -> None:
        return f"{self.name} is barking"

    def __str__(self) -> str:
        return f"{self.name} is {self.age} years old and {self.km} km"