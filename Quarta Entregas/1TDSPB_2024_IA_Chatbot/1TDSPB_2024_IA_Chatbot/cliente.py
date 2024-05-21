import requests

url = "http://127.0.0.1:5000/users/"
dados = {
"Users":43,
"Já utilizou o sistema":1,
"Consegue navegar facilmente pelo sistema":0
}

response=requests.post(url,json=dados)