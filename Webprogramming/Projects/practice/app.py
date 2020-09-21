from flask import Flask, render_template, request, jsonify
app = Flask(__name__)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/test', methods=['POST'])
def test_post():
    title_receive = request.form['title_give']
    print(title_receive)
    return jsonify({'result': 'success', 'msg': '이 요청은 POST!'})


@app.route('/test', methods=['GET'])
def test_get():
    title_receive = request.args.get('title_give')
    print(title_receive)
    return jsonify({'result': 'success', 'msg': '이 요청은 GET!'})


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)

    #####  This is the basic format of flask ######
    ##### Falsk is one framework - simple , easy to customize compare to django  #####
    #### but djago provide more function that is usful when you actually have sercie ###

    # basic server code - this couple lines of coding make servers!
    # server , is waiting which means the python file is running at the back all the time
    # when there is request , then the server
