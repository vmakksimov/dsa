from .animal import Animal

class Cat(Animal):
    def __init__(self, name: str, age: int) -> None:
        super().__init__(name, age)
        
    def meow(self) -> None:
        return f"{self.name} is meowing"