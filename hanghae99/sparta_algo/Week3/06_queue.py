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
        return

    def dequeue(self):
        if self.is_empty():
           return "Queue is Empty "
        delete_head = self.head
        self.head = self.head.next
        return delete_head.data



    def peek(self):
        if self.is_empty():
            return "Queue is Empty "
        return self.head.data
        return

    def is_empty(self):
        return self.head is None

    def count(self):

        count = 0
        while self.is_empty() is not True:
            self.dequeue()
            count += 1
        print(count)



queue = Queue()
queue.enqueue(100)
print(queue.peek())
queue.enqueue(200)
print(queue.peek())
queue.enqueue(300)
queue.count()
print(queue.peek())
queue.dequeue()
print(queue.peek())