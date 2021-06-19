class Node:
    def __init__(self, data):
        self.data = data
        self.next = None


class Stack:
    def __init__(self):
        self.head = None

    def push(self, value):
        new_head = Node(value)
        new_head.next = self.head
        self.head = new_head
        return

    # pop 기능 구현
    def pop(self):

        delete_head = self.head
        if self.is_empty():
            return "Stack is empty"

        self.head = self.head.next

        return delete_head

    # just to see whats in the head?
    def peek(self):
        if self.is_empty():
            return "stack is empty "
        return self.head.data

    # isEmpty 기능 구현
    def is_empty(self):
        return self.head is None



##

stack = Stack()
stack.push(3)
print(stack.peek())
stack.push(6)
print(stack.peek())
stack.pop()
print(stack.is_empty())
print(stack.peek())
stack.pop()

print(stack.is_empty())