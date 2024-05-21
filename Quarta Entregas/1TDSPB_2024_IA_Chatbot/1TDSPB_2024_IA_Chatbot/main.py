from flask import Flask, request, jsonify
from joblib import load
import pickle

# Definir as colunas
colunas = ['Users', 'Já utilizou o sistema', 'Consegue navegar facilmente pelo sistema']

# Carregar o modelo treinado
modelo = pickle.load(open("modelo.pick", "rb"))

# Iniciar o app Flask
app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello World!'

@app.route('/users/', methods=['POST'])
def users():
    dados = request.get_json()
    # Garantir que todas as colunas necessárias estão no JSON
    dados_input = [dados[col] for col in colunas]
    # Fazer a previsão usando o modelo treinado
    identificador = modelo.predict([dados_input])
    return jsonify({"resposta": identificador[0]})


if __name__ == '__main__':
    app.run(debug=True)