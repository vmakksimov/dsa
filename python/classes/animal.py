

class Animal:

    BEFORE_DC = "Before death"
    def __init__(self, name: str, age: int) -> None:
        self.name = name
        self.age = age
        self._dc = self.BEFORE_DC

    def eat(self) -> None:
        return f"{self.name} is eating"

    def before_dc(self) -> None:
        return self._dc

    def __str__(self) -> str:
        return f"{self.name} is {self.age} years old"
    
    async def sleep(self) -> None:
        pokemon = await self.getPokomon()
        return f"{self.name} is sleeping"
    


