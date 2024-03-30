import colorama
from colorama import Fore, Style
import csv
import os

# Inicializa o colorama para adicionar cores ao texto no terminal
colorama.init(autoreset=True)

# Variável global para controlar o estado de login do usuário
usuario_logado = False

# Nome do arquivo CSV que armazenará os produtos
arquivo_csv = 'produtos.csv'

def ler_csv():
    try:
        # Verifica se o arquivo CSV existe
        if not os.path.isfile(arquivo_csv):
            print(Fore.RED + "Arquivo não encontrado.")
            return []
        # Abre o arquivo CSV em modo de leitura
        with open(arquivo_csv, 'r', newline='') as csvfile:
            # Cria um leitor de CSV que lê o arquivo como um dicionário
            reader = csv.DictReader(csvfile)
            # Retorna a lista de dicionários lidos do arquivo CSV
            return list(reader)
    except csv.Error as e:
        # Caso ocorra um erro ao ler o arquivo CSV, imprime uma mensagem de erro
        print(Fore.RED + f"Erro ao ler o arquivo CSV: {e}")
        return []
    finally:
        # Imprime uma mensagem indicando que a leitura do arquivo CSV foi concluída
        print(Fore.YELLOW + "Leitura do arquivo CSV concluída.")

def escrever_csv(produtos):
    try:
        # Abre o arquivo CSV em modo de escrita
        with open(arquivo_csv, 'w', newline='') as csvfile:
            # Obtém os nomes dos campos do primeiro produto para definir os cabeçalhos do CSV
            fieldnames = produtos[0].keys()
            # Cria um escritor de CSV que escreve no arquivo
            writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
            # Escreve os cabeçalhos no arquivo CSV
            writer.writeheader()
            # Escreve as linhas dos produtos no arquivo CSV
            writer.writerows(produtos)
        # Imprime uma mensagem indicando que os dados foram salvos com sucesso
        print(Fore.GREEN + "Dados salvos com sucesso.")
    except Exception as e:
        # Caso ocorra um erro ao escrever no arquivo CSV, imprime uma mensagem de erro
        print(Fore.RED + f"Erro ao escrever no arquivo CSV: {e}")
    finally:
        # Imprime uma mensagem indicando que a escrita no arquivo CSV foi concluída
        print(Fore.YELLOW + "Escrita no arquivo CSV concluída.")

def fazer_login():
    global usuario_logado
    # Verifica se o usuário já está logado
    if usuario_logado:
        print(Fore.GREEN + "Você já está logado.")
        abrir_menu()
        return
    # Solicita ao usuário o nome de usuário e senha
    usuario = input("Digite o nome de usuário: ")
    senha = input("Digite a senha: ")
    # Verifica as credenciais do usuário
    if verificar_credenciais(usuario, senha):
        print(Fore.GREEN + "Login bem-sucedido!")
        usuario_logado = True
        abrir_menu()
    else:
        print(Fore.RED + "Usuário ou senha incorretos. Tente novamente.")
        fazer_login()

def verificar_credenciais(usuario, senha):
    # Verifica se o nome de usuário e a senha fornecidos correspondem ao usuário válido
    return usuario == "admin" and senha == "senha123"

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
            print(Fore.RED + "Programa encerrado.")
            break
        else:
            print(Fore.RED + "Opção inválida. Tente novamente.")

def adicionar_produto():
    # Solicita ao usuário o nome e a descrição do novo produto
    nome_produto = input("Digite o nome do novo produto: ")
    descricao_produto = input("Digite a descrição do novo produto: ")
    # Lê os produtos existentes do arquivo CSV
    produtos = ler_csv()
    # Adiciona o novo produto à lista de produtos
    produtos.append({"nome": nome_produto, "descricao": descricao_produto})
    # Escreve a lista atualizada de produtos no arquivo CSV
    escrever_csv(produtos)
    print(Fore.GREEN + "Novo produto adicionado com sucesso.")

def excluir_produto():
    # Solicita ao usuário o nome do produto a ser excluído
    nome_produto = input("Digite o nome do produto a ser excluído: ")
    # Lê os produtos existentes do arquivo CSV
    produtos = ler_csv()
    # Filtra a lista de produtos para excluir o produto especificado
    produtos = [produto for produto in produtos if produto['nome'] != nome_produto]
    # Escreve a lista atualizada de produtos no arquivo CSV
    escrever_csv(produtos)
    print(Fore.GREEN + "Produto excluído com sucesso.")

def editar_produto():
    # Solicita ao usuário o nome do produto a ser editado e a nova descrição
    nome_produto = input("Digite o nome do produto a ser editado: ")
    descricao_nova = input("Digite a nova descrição do produto: ")
    # Lê os produtos existentes do arquivo CSV
    produtos = ler_csv()
    # Atualiza a descrição do produto especificado
    for produto in produtos:
        if produto['nome'] == nome_produto:
            produto['descricao'] = descricao_nova
            escrever_csv(produtos)
            print(Fore.GREEN + "Produto editado com sucesso.")
            return
    print(Fore.RED + "Produto não encontrado.")

def visualizar_produtos():
    # Lê os produtos existentes do arquivo CSV
    produtos = ler_csv()
    print("\n=== Produtos ===")
    # Imprime os detalhes de cada produto
    for produto in produtos:
        print(Fore.YELLOW + f"{produto['nome']}: {produto['descricao']}")

# Inicia o programa chamando a função de login
fazer_login()
