import csv
import oracledb
import os
import json

# FAVOR UTILIZAR PYTHON 3.8.2

# Variável global para controlar o estado de login do usuário
usuario_logado = False

# Nome do arquivo JSON que armazenará os produtos
arquivo_json = 'produtos.json'

def conectar_oracle():
    try:
        # Verifica se o arquivo credenciais.json existe
        if not os.path.exists("./1TDSPB_2024_Python/credenciais.json"):
            print("O arquivo credenciais.json não foi encontrado.")
            exit(1)

        # Abre o arquivo credenciales.json e carrega as credenciais
        with open("./1TDSPB_2024_Python/credenciais.json") as f:
            credenciais = json.load(f)

        USER = credenciais["user"]
        PASS = credenciais["password"]

        # Cria a string DSN para a conexão com o banco de dados Oracle
        dsnStr = oracledb.makedsn("oracle.fiap.com.br", 1521, "ORCL")

        # Estabelece a conexão com o banco de dados
        connection = oracledb.connect(user=USER, password=PASS, dsn=dsnStr)
        return connection
    except Exception as e:
        print(f"Erro ao conectar ao banco de dados: {e}")
        exit(1)

def executar_query(connection, query, params=None):
    try:
        cursor = connection.cursor()
        if params:
            cursor.execute(query, params)
        else:
            cursor.execute(query)
        connection.commit()
        return cursor
    except Exception as e:
        print(f"Erro ao executar consulta: {e}")
        return None

def consultar_produtos(connection):
    query = "SELECT * FROM Estoque_crud"
    cursor = executar_query(connection, query)
    if cursor:
        linhas = cursor.fetchall()
        for row in linhas:
            print(row)
        cursor.close()
    else:
        print("Não foi possível consultar os produtos.")

def inserir_produto(connection, nome_produto, valor_produto, quantidade):
    query = "INSERT INTO Estoque_crud (nome_produto, valor_produto, quantidade) VALUES (:1, :2, :3)"
    executar_query(connection, query, (nome_produto, valor_produto, quantidade))

def alterar_produto(connection, id_produto, nome_produto, valor_produto, quantidade):
    query = "UPDATE Estoque_crud SET nome_produto = :1, valor_produto = :2, quantidade = :3 WHERE id = :4"
    executar_query(connection, query, (nome_produto, valor_produto, quantidade, id_produto))

def excluir_produto(connection, id_produto):
    query = "DELETE FROM Estoque_crud WHERE id = :1"
    executar_query(connection, query, (id_produto,))

def exportar_para_json(connection):
    query = "SELECT * FROM Estoque_crud"
    cursor = executar_query(connection, query)
    if cursor:
        linhas = cursor.fetchall()
        produtos = [{"id": row[0], "nome_produto": row[1], "valor_produto": row[2], "quantidade": row[3]} for row in linhas]
        
        with open(arquivo_json, 'w') as f:
            json.dump(produtos, f)
        print("Produtos exportados com sucesso para '{}'.".format(arquivo_json))
        cursor.close()
    else:
        print("Não foi possível exportar os produtos para JSON.")

def abrir_menu():
    while True:
        print("\n=== Menu Principal ===")
        print("1. Inserir Produto")
        print("2. Alterar Produto")
        print("3. Excluir Produto")
        print("4. Consultar Produtos")
        print("5. Exportar Produtos para JSON")
        print("6. Sair")
        opcao = input("Escolha uma opção (1/2/3/4/5/6): ")

        if opcao == "1":
            nome_produto = input("Digite o nome do novo produto: ")
            valor_produto = float(input("Digite o valor do produto: "))
            quantidade = int(input("Digite a quantidade do produto: "))
            inserir_produto(conectar_oracle(), nome_produto, valor_produto, quantidade)
        elif opcao == "2":
            id_produto = int(input("Digite o ID do produto a ser alterado: "))
            nome_produto = input("Digite o novo nome do produto: ")
            valor_produto = float(input("Digite o novo valor do produto: "))
            quantidade = int(input("Digite a nova quantidade do produto: "))
            alterar_produto(conectar_oracle(), id_produto, nome_produto, valor_produto, quantidade)
        elif opcao == "3":
            id_produto = int(input("Digite o ID do produto a ser excluído: "))
            excluir_produto(conectar_oracle(), id_produto)
        elif opcao == "4":
            consultar_produtos(conectar_oracle())
        elif opcao == "5":
            exportar_para_json(conectar_oracle())
        elif opcao == "6":
            print("Programa encerrado.")
            break
        else:
            print("Opção inválida. Tente novamente.")

# Inicia o programa chamando a função de menu
abrir_menu()
