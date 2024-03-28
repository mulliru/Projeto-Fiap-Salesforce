'''
1TDSPB_2024 challenge Salesforce


INTEGRANTES:
Keven Ike Pereira da Silva RM: 553215
Murillo Ferreira Ramos RM: 553315
Pedro Luiz Prado RM:553874
'''

# Abaixo nosso código com comentários explicando as principais funcionalidades do programa.

# Importações Necessárias para o programa
import colorama
from colorama import Fore, Style
import csv
import os

# Inicializa o colorama para impressão colorida no terminal
colorama.init(autoreset=True)

# Variável global para controlar o estado de login
usuario_logado = False

# Nome do arquivo CSV
arquivo_csv = 'produtos.csv'

# Função para ler dados do arquivo CSV (planilha excel)
def ler_csv():
    try:
        # Verifica se o arquivo existe
        if not os.path.isfile(arquivo_csv):
            print(Fore.RED + "Arquivo não encontrado.")
            return []
        with open(arquivo_csv, 'r', newline='') as csvfile:
            reader = csv.DictReader(csvfile)
            return list(reader)
    except csv.Error as e:
        # Casso ocorra algum erro relacionados na leitura do arquivo CSV
        print(Fore.RED + f"Erro ao ler o arquivo CSV: {e}")
        return []
    finally:
        # Mensagem de conclusão da leitura do arquivo CSV
        print(Fore.YELLOW + "Leitura do arquivo CSV concluída.")

# Função para escrever dados no arquivo CSV
def escrever_csv(produtos):
    try:
        with open(arquivo_csv, 'w', newline='') as csvfile:
            fieldnames = produtos[0].keys()
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            writer.writeheader()
            writer.writerows(produtos)
        # Mensagem após o sucesso da escrita no arquivo CSV
        print(Fore.GREEN + "Dados salvos com sucesso.")
    except Exception as e:
        # Mensagem caso ocorra erro relacionados à escrita no arquivo CSV
        print(Fore.RED + f"Erro ao escrever no arquivo CSV: {e}")
    finally:
        # Mensagem após a conclusão da escrita no arquivo CSV
        print(Fore.YELLOW + "Escrita no arquivo CSV concluída.")

# Função para realizar o login
def fazer_login():
    global usuario_logado
    if usuario_logado:
        # Verifica se o usuário já está logado
        print(Fore.GREEN + "Você já está logado.")
        abrir_menu()
        return
    usuario = input("Digite o nome de usuário: ")
    senha = input("Digite a senha: ")
    if verificar_credenciais(usuario, senha):
        # Verifica as credenciais de login
        print(Fore.GREEN + "Login bem-sucedido!")
        usuario_logado = True
        abrir_menu()
    else:
        # Solicita credenciais novamente em caso de falha de login
        print(Fore.RED + "Usuário ou senha incorretos. Tente novamente.")
        fazer_login()

# Função para verificar as credenciais de login
def verificar_credenciais(usuario, senha):
    return usuario == "admin" and senha == "senha123"

# Função para abrir o menu principal
def abrir_menu():
    while True:
        print("\n=== Menu ===")
        print("1. " + Fore.CYAN + "Adicionar Produto")
        print("2. " + Fore.CYAN + "Excluir Produto")
        print("3. " + Fore.CYAN + "Editar Produto")
        print("4. " + Fore.CYAN + "Visualizar Produtos")
        print("5. " + Fore.RED + "Encerrar o Programa")
        opcao = input("Escolha uma opção (1/2/3/4/5): ")
        if opcao == "1":
            adicionar_produto()
        elif opcao == "2":
            excluir_produto()
        elif opcao == "3":
            editar_produto()
        elif opcao == "4":
            visualizar_produtos()
        elif opcao == "5":
            # Encerra o programa
            print(Fore.RED + "Programa encerrado.")
            break
        else:
            # Mensagem de opção inválida
            print(Fore.RED + "Opção inválida. Tente novamente.")

# Função para adicionar um novo produto
def adicionar_produto():
    nome_produto = input("Digite o nome do novo produto: ")
    descricao_produto = input("Digite a descrição do novo produto: ")
    produtos = ler_csv()
    produtos.append({"nome": nome_produto, "descricao": descricao_produto})
    escrever_csv(produtos)
    # Mensagem após a adição bem-sucedida do produto
    print(Fore.GREEN + "Novo produto adicionado com sucesso.")

# Função para excluir um produto existente
def excluir_produto():
    nome_produto = input("Digite o nome do produto a ser excluído: ")
    produtos = ler_csv()
    produtos = [produto for produto in produtos if produto['nome'] != nome_produto]
    escrever_csv(produtos)
    # Mensagem após a exclusão bem-sucedida do produto
    print(Fore.GREEN + "Produto excluído com sucesso.")

# Função para editar um produto existente
def editar_produto():
    nome_produto = input("Digite o nome do produto a ser editado: ")
    descricao_nova = input("Digite a nova descrição do produto: ")
    produtos = ler_csv()
    for produto in produtos:
        if produto['nome'] == nome_produto:
            produto['descricao'] = descricao_nova
            escrever_csv(produtos)
            # Mensagem após a edição bem-sucedida do produto
            print(Fore.GREEN + "Produto editado com sucesso.")
            return
    # Mensagem se o produto não for encontrado para edição
    print(Fore.RED + "Produto não encontrado.")

# Função para visualizar todos os produtos
def visualizar_produtos():
    produtos = ler_csv()
    print("\n=== Produtos ===")
    for produto in produtos:
        # Exibe os produtos e suas descrições
        print(Fore.YELLOW + f"{produto['nome']}: {produto['descricao']}")

# Inicia o programa chamando a função de login
fazer_login()
