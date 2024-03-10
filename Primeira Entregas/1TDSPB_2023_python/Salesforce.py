def fazer_login():
    usuario = input("Digite o nome de usuário: ")
    senha = input("Digite a senha: ")

    # Verificar se o usuário e a senha estão corretos
    if usuario == "admin" and senha == "senha123": #nome de usuario, nesse caso é admin e senha: senha123
        print("Login bem-sucedido!")    #quando o login ja realizado imprimir o login bem sucedido
        abrir_menu()
    else:
        print("Usuário ou senha incorretos. Tente novamente.")  #se for algo diferente de admin e senha123
        fazer_login()

def abrir_menu():   #apresenta menu com as funcionalidades do nosso sistema python
    while True:
        print("\nMenu:")
        print("1. Realizar Produtos da empresa") #opção 1
        print("2. Realizar Opção Sobre a Empresa") #opção 2
        print("3. Realizar Opção Suporte ") #opção 3
        print("4. Encerrar o Programa") #opção 4 de encerramento

        opcao = input("Escolha uma opção (1/2/3/4): ")

        if opcao == "1":
            realizar_operacao1() #aqui se tivesse algo para apresentar ou imprimir ficaria aqui que no nosso caso são informações
        elif opcao == "2":
            realizar_operacao2()
        elif opcao == "3":
            realizar_operacao3()
        elif opcao == "4":
            print("Programa encerrado.") #encerra o programa
            break
        else:
            print("Opção inválida. Tente novamente.") #se for algo diferente de 1,2,3 ou 4 ele da uma opção invalida

def realizar_operacao1():
    print("""
Catálogo de Produtos: Explore nosso catálogo completo de produtos. Cada produto é apresentado com descrições detalhadas, imagens e informações técnicas para que você possa entender completamente o que está disponível.

Benefícios e Recursos: Descubra os benefícios exclusivos de cada produto, destacando como eles podem atender às suas necessidades ou resolver problemas específicos. Conheça os recursos que tornam nossos produtos únicos.
""")

def realizar_operacao2():
    print(""""
Nossa História: Explore nossa trajetória desde o início, destacando os marcos e momentos que nos trouxeram até aqui. Saiba como nossa empresa foi fundada, quem são os visionários por trás dela e como evoluímos ao longo do tempo.

Nossa Missão e Valores: Conheça os princípios que nos orientam em cada decisão que tomamos. Nossos valores fundamentais e missão são a bússola que nos direciona na busca pela excelência e pelo impacto positivo.

Nossa Equipe: Apresentamos a equipe que torna tudo isso possível, com profissionais dedicados e talentosos que compartilham nossa visão e impulsionam nosso sucesso.
""")

def realizar_operacao3():
    print("""\n\nBase de Conhecimento Abrangente: Navegue pela nossa extensa base de conhecimento, repleta de artigos informativos, tutoriais e guias que o ajudarão a compreender profundamente nosso projeto e suas funcionalidades.

Perguntas Frequentes (FAQ): Encontre respostas para as perguntas mais comuns dos usuários, economizando tempo e esforço na busca por soluções para suas dúvidas.

Suporte Técnico Profissional: Se suas dúvidas ou problemas não forem resolvidos por meio de nossa base de conhecimento, nossa equipe de suporte técnico altamente qualificada estará pronta para ajudar. Entre em contato conosco para assistência personalizada e orientação na resolução de suas necessidades.

Comunidade de Usuários: Faça parte de nossa comunidade de usuários, onde você pode compartilhar experiências, dicas e truques com outros membros, criando um ambiente de colaboração.

Formulário de Contato: Se você não encontrou a resposta que procurava, nossa página de suporte também oferece um formulário de contato direto, permitindo que você envie perguntas específicas ou problemas que possam exigir atenção.""")

# Inicie o programa chamando a função de login
fazer_login()