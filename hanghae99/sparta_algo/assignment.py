from bike import *

numOfClients = 50  # intializing 50 bikes at the first
numOfBikes = 50 # initalizing 50cutomers at the first


bikes = getBikes(numOfBikes)
clients = getClients(numOfClients)

for i in range(10):  #testing renting 10 bikes  and return

    result = rentBike()
    if result == None:
        print('No bikes are available now, the client leaves')
    else:
        print('Rent bike ' + str(result) + 'successfully')
        returnBike(result)
        print('Return bike')
    print()
print(bikes)


for i in range(10):
    removeClient(clients[i].id)
    print(f"remove client  {str(clients[i].id)}  successfully")
    print()
print(clients)




