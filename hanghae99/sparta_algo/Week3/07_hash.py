
# hash =  super fast to find ,
# dictrionary similar to hash table

class Dict:
    def __init(self):
        self.items = [None] * 8


    def push(self, key, value):
        index = hash(key) %len(self.items)

        self.items[index]=value



    def get(self, key):
        index = hash(key) % len(self.items)
        return self.items[index]




my_dict= Dict()
my_dict.put("test", 3)
print(my_dict.get("test")