
import time
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/executar', methods=['POST'])
def executar():
    time.sleep(5)
    return jsonify({'resultado': "Amo o professor harrison"})

if __name__ == '__main__':
    app.run(port=5000)

