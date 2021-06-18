class Dog:
    
    kind = 'canine'  # class variable shared by all instances

    def __init__(self, name):
        self.name = name    # instance variable unique to each instance
d = Dog('aaaaa')
e = Dog('BBBB')
print(d.kind)   # shared by all dogs
print(e.kind)   # shared by all dogs
print(d.name)   # unique to d
print(e.name)   # unique to e

# specail 
# stand error


class Car:
    
    tricks = []

    def __init__(self, name):
        self.name = name

    def add_trick(self,  trick):
        self.tricks.append(trick)

d = Car('DDD')
e = Car('Buddy')
d.add_trick('roll over')
e.add_trick('play dead') # unexpectedly shared by all cars
print(d.tricks)

class Car2:
    


    def __init__(self, name):
        self.name = name
        self.tricks = []

    def add_trick(self,  trick):
        self.tricks.append(trick)

d = Car2('DDD')
e = Car2('Buddy')
d.add_trick('roll over')
e.add_trick('play dead') # unexpectedly shared by all cars
print(d.tricks)
print(e.tricks)



