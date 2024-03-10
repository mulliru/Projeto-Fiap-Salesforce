import colorama
from colorama import Fore, Style

# Inicializa o colorama
colorama.init(autoreset=True)

# Variável global para controlar o estado de login
usuario_logado = False

def fazer_login():
    global usuario_logado

#Sistema de Login
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
        print("1. " + Fore.CYAN + "Realizar Produtos da empresa")
        print("2. " + Fore.CYAN + "Realizar Opção Sobre a Empresa")
        print("3. " + Fore.CYAN + "Realizar Opção Suporte")
        print("4. " + Fore.RED + "Encerrar o Programa")

        # Solicitar a escolha do usuário
        opcao = input("Escolha uma opção (1/2/3/4): ")

        # Executar a opção escolhida
        if opcao == "1":
            realizar_operacao1()
        elif opcao == "2":
            realizar_operacao2()
        elif opcao == "3":
            realizar_operacao3()
        elif opcao == "4":
            print(Fore.RED + "Programa encerrado.")
            break
        else:
            print(Fore.RED + "Opção inválida. Tente novamente.")

#operando funções especificas
def realizar_operacao1():
    # Operação 1: Catálogo de Produtos
    print("\n=== Catálogo de Produtos ===")
    print(Fore.YELLOW + "Explore nosso catálogo completo de produtos. Cada produto é apresentado com descrições detalhadas, imagens e informações técnicas para que você possa entender completamente o que está disponível.")
    print(Fore.YELLOW + "Benefícios e Recursos: Descubra os benefícios exclusivos de cada produto, destacando como eles podem atender às suas necessidades ou resolver problemas específicos. Conheça os recursos que tornam nossos produtos únicos.")

def realizar_operacao2():
    # Operação 2: Sobre a Empresa
    print("\n=== Sobre a Empresa ===")
    print(Fore.MAGENTA + "Nossa História: Explore nossa trajetória desde o início, destacando os marcos e momentos que nos trouxeram até aqui. Saiba como nossa empresa foi fundada, quem são os visionários por trás dela e como evoluímos ao longo do tempo.")
    print(Fore.MAGENTA + "Nossa Missão e Valores: Conheça os princípios que nos orientam em cada decisão que tomamos. Nossos valores fundamentais e missão são a bússola que nos direciona na busca pela excelência e pelo impacto positivo.")
    print(Fore.MAGENTA + "Nossa Equipe: Apresentamos a equipe que torna tudo isso possível, com profissionais dedicados e talentosos que compartilham nossa visão e impulsionam nosso sucesso.")

def realizar_operacao3():
    # Operação 3: Suporte
    print("\n=== Suporte ===")
    print(Fore.CYAN + "Base de Conhecimento Abrangente: Navegue pela nossa extensa base de conhecimento, repleta de artigos informativos, tutoriais e guias que o ajudarão a compreender profundamente nosso projeto e suas funcionalidades.")
    print(Fore.CYAN + "Perguntas Frequentes (FAQ): Encontre respostas para as perguntas mais comuns dos usuários, economizando tempo e esforço na busca por soluções para suas dúvidas.")
    print(Fore.CYAN + "Suporte Técnico Profissional: Se suas dúvidas ou problemas não forem resolvidos por meio de nossa base de conhecimento, nossa equipe de suporte técnico altamente qualificada estará pronta para ajudar. Entre em contato conosco para assistência personalizada e orientação na resolução de suas necessidades.")
    print(Fore.CYAN + "Comunidade de Usuários: Faça parte de nossa comunidade de usuários, onde você pode compartilhar experiências, dicas e truques com outros membros, criando um ambiente de colaboração.")
    print(Fore.CYAN + "Formulário de Contato: Se você não encontrou a resposta que procurava, nossa página de suporte também oferece um formulário de contato direto, permitindo que você envie perguntas específicas ou problemas que possam exigir atenção.")

# Iniciar o programa chamando a função de login
fazer_login()
