from .dog import Dog
from .cat import Cat


class DogCat(Dog, Cat):
    def __init__(self, name: str, age: int, km: int) -> None:
        super().__init__(name, age, km)