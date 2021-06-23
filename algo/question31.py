# 18258
# from sparatacoding algorithm lecture
# enqueue
# dequeue()
# peek()
# isEmpty()
'''

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Queue:
    def __init__(self):
        self.head = None
        self.tail = None

    def enqueue(self, value):
        new_node = Node(value)
        if self.is_empty():

            self.head = new_node
            self.tail = new_node
            return  
        self.tail.next = new_node 
        self.tail = new_node
 

    def dequeue(self):
        if self.is_empty():
            return "-1"
        deleted_node = self.head
        self.head = self.head.next   
        return deleted_node.data


    def peek(self):
        if self.is_empty():
            return "-1"
        return self.head.data

    def is_empty(self):
         
        return self.head is None


queue = Queue()
queue.enqueue(3)
queue.enqueue(4)
queue.enqueue(5)
queue.dequeue()
print(queue.peek())   
queue.dequeue()
print(queue.peek())     
queue.dequeue()        
'''



import sys


N = int(sys.stdin.readline().rstrip())
queue=[]

for i in range(N):
    command = sys.stdin.readline().split()
  
    #print(command)
    if command[0] == "push":
        queue.append(command[1])
       

    elif command[0] == "pop":

        if queue:
            print(queue.pop(0))
            
        else:
            print("-1")    
     

    elif command[0] == "top":
        if len(queue) > 0: 
            print(queue[-1])
        else:
            print("-1")
           
        
    elif command[0] == "size":
      
            print(len(queue))
      
     

    elif command[0] == "empty":
        if len(queue) > 0:
            print("0")
        else:
            print("1") 
             
    elif command[0] == "front":
        if len(queue) > 0:
            print(queue[0])
        else:
            print("-1")    

    elif command[0] == "back":
            if len(queue) > 0:
                print(queue[-1])
            else:
                print("-1")    

