from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
   return 'This is Home!'


@app.route('/mypage')
def mypage():  ## never ever same with other def
   return 'This is mypage!'
if __name__ == '__main__':  
   app.run('0.0.0.0',port=5000,debug=True)


   #####  This is the basic format of flask ######
   ##### Falsk is one framework - simple , easy to customize compare to django  #####
   #### but djago provide more function that is usful when you actually have sercie ###
   

   ## basic server code - this couple lines of coding make servers! 
   ## server , is waiting which means the python file is running at the back all the time
   ## when there is request , then the server response.

   ## local developing enviroment : server is mine and using the my brower