import colorama
from colorama import Fore, Style

# Inicializa o colorama
colorama.init(autoreset=True)

# Variável global para controlar o estado de login
usuario_logado = False

# Lista de produtos como exemplo
produtos = [
    {"nome": "Produto 1", "descricao": "Descrição do Produto 1"},
    {"nome": "Produto 2", "descricao": "Descrição do Produto 2"},
    {"nome": "Produto 3", "descricao": "Descrição do Produto 3"},
    {"nome": "Produto 4", "descricao": "Descrição do Produto 4"},

]

def fazer_login():
    global usuario_logado
    # Sistema de Login
    # Verificar se o usuário já está logado
    if usuario_logado:
        print(Fore.GREEN + "Você já está logado.")
        abrir_menu()
        return

    # Solicitar nome de usuário e senha
    usuario = input("Digite o nome de usuário: ")
    senha = input("Digite a senha: ")

    # Verificar as credenciais
    if verificar_credenciais(usuario, senha):
        print(Fore.GREEN + "Login bem-sucedido!")
        usuario_logado = True
        abrir_menu()
    else:
        print(Fore.RED + "Usuário ou senha incorretos. Tente novamente.")
        fazer_login()

def verificar_credenciais(usuario, senha):
    # Verificar se as credenciais são válidas
    return usuario == "admin" and senha == "senha123"

def abrir_menu():
    while True:
        # Apresentar o menu ao usuário
        print("\n=== Menu ===")
        print("1. " + Fore.CYAN + "Adicionar Produto")
        print("2. " + Fore.CYAN + "Excluir Produto")
        print("3. " + Fore.CYAN + "Editar Produto")
        print("4. " + Fore.CYAN + "Visualizar Produtos")
        print("5. " + Fore.RED + "Encerrar o Programa")

        # Solicitar a escolha do usuário
        opcao = input("Escolha uma opção (1/2/3/4/5): ")

        # Executar a opção escolhida
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
    nome_produto = input("Digite o nome do novo produto: ")
    descricao_produto = input("Digite a descrição do novo produto: ")
    produtos.append({"nome": nome_produto, "descricao": descricao_produto})
    print(Fore.GREEN + "Novo produto adicionado com sucesso.")

def excluir_produto():
    nome_produto = input("Digite o nome do produto a ser excluído: ")
    for produto in produtos:
        if produto['nome'] == nome_produto:
            produtos.remove(produto)
            print(Fore.GREEN + "Produto excluído com sucesso.")
            return
    print(Fore.RED + "Produto não encontrado.")

def editar_produto():
    nome_produto = input("Digite o nome do produto a ser editado: ")
    for produto in produtos:
        if produto['nome'] == nome_produto:
            descricao_nova = input("Digite a nova descrição do produto: ")
            produto['descricao'] = descricao_nova
            print(Fore.GREEN + "Produto editado com sucesso.")
            return
    print(Fore.RED + "Produto não encontrado.")

def visualizar_produtos():
    print("\n=== Produtos ===")
    for produto in produtos:
        print(Fore.YELLOW + f"{produto['nome']}: {produto['descricao']}")

# Iniciar o programa chamando a função de login
fazer_login()