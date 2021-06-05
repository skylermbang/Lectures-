

def cal(a,b=2):
    return a+2*b

result = cal(a=1)
print(result)


def eat(*args):
    for name in args:
        print(f"{name} eat your shit ")


eat("skyler","scarlett","toby")


def shit(**kwargs):
    print(kwargs)

shit(name="skyler", age= 30)
