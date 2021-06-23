
# hash =  super fast to find ,
# dictrionary similar to hash table

class LinkedTuple:
    def __init(self):
        self.items = list()
    def add(self, key, value):
        self.items.append((key,value))
    def get(self, key):
        for k, v in self.itsms:
            if key == k:
                return v
class LinkedDict:
    def __init__(self):
        self.items = []
        for i in range(8):
            self.items.append(LinkedTuple())
        def put(self, key, value):
            index = hash(key)% len(self.items)
            self.items[index].add(key, value)

        def get(self,key):
            index = hash(key)%len(self.item)
            return self.items[index].get(key)

my_dict= Dict()
my_dict.put("test", 3)
print(my_dict.get("test")