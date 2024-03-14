'''
Nível 1: Sem Dependência
T_EMPRESA: Essa tabela não possui dependências com outras tabelas no diagrama.
T_PRODUTO: Essa tabela também não possui dependências com outras tabelas.

Nível 2: Com Dependência Direta
T_FUNCIONARIO: Essa tabela depende da tabela T_EMPRESA através da coluna empresa_id_empresa.
T_PEDIDO: Essa tabela depende da tabela T_CLIENTE através da coluna cliente_id_cliente.
T_PRODUTO_PEDIDO: Essa tabela depende das tabelas T_PRODUTO e T_PEDIDO através das colunas produto_id_produto e pedido_id_pedido.

Nível 3: Com Dependência Indireta (Dependência da Dependência)
T_USUARIO: Essa tabela depende da tabela T_ENDERECO através da coluna endereco_usuario.
T_ENDERECO: Essa tabela, por sua vez, depende da tabela T_CIDADE através da coluna cidade_endereco.
'''




''' 
Integrantes: 
Murillo Ferreira Ramos      RM: 553315
Keven Ike Pereira da Silva  RM: 553215
Pedro Luiz Prado            RM: 553874
'''

DROP TABLE produto
DROP TABLE pedido
DROP TABLE usuario
DROP TABLE endereco
DROP TABLE contato
DROP TABLE contato
DROP TABLE formulario_usuario_cadastro


CREATE TABLE empresa(
    cnpj_empresa CHAR (14) NOT NULL PRIMARY KEY,
    nome_empresa VARCHAR (100) NOT NULL,
    status_empresa CHAR (1) NOT NULL, --Empresa Ativa, Inativa ou Falida
    endereco_empresa VARCHAR (100),
    telefone_empresa VARCHAR (15)
);

CREATE TABLE produto (
    id_produto INTEGER NOT NULL PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    tipo_produto VARCHAR(100) NOT NULL,
    valor_produto FLOAT NOT NULL
    cnpj_empresa CHAR (14) REFERENCES empresa (cnpj_empresa) -- Chave estrangéria sendo pega da tabela empresa, estamos pegando o "cnpj da empresa"
);

CREATE TABLE funcionario(
    id_funcionario INTEGER NOT NULL PRIMARY KEY,
    cpf_funcionario CHAR (11) NOT NULL PRIMARY KEY, 
    nome_funcionario VARCHAR(100) NOT NULL,
    sobrenome_funcionario VARCHAR(100) NOT NULL,
    setor_funcionario CHAR (1),
    Salario_funcionario FLOAT,
    --Chaves que são referenciadas de outras tabelas
    cnpj_empresa CHAR (14) REFERENCES empresa (cnpj_empresa)
);

CREATE TABLE pedido (
    id_pedido INTEGER NOT NULL PRIMARY KEY,
    id_cliente INTEGER NOT NULL PRIMARY KEY, 
    data_pedido DATE,
    status_pedido VARCHAR(4),
    valor_pedido FLOAT,
    --Chaves que são referenciadas de outras tabelas
    id_usuario INTEGER REFERENCES usuario (id_usuario),
    cpf_usuario CHAR(11) REFERENCES usuario (cpf_usuario),
    id_funcionario INTEGER REFERENCES funcionario (id_funcionario),
    cpf_funcionario CHAR(11) REFERENCES funcionario (cpf_funcionario)
);

--TABELA QUE ESTAMOS COM DÚVIDAS DO QUE FAZER
CREATE TABLE usuario (
    id_usuario INTEGER NOT NULL PRIMARY KEY,
    apelido_usuario VARCHAR(100) NOT NULL,
    nome_usuario VARCHAR(100) NOT NULL,
    sobrenome_usuario VARCHAR(100) NOT NULL,
    senha_usuario VARCHAR(256) NOT NULL,
    endereco_usuario VARCHAR(100)
    --Chaves que são referenciadas de outras tabelas
    cpf_usuario CHAR(11) REFERENCES formulario_usuario_cadastro (cpf_funcionario) 
);

CREATE TABLE endereco (
    id_end INTEGER NOT NULL PRIMARY KEY,
    rua_end VARCHAR(100) NOT NULL,
    cidade_end VARCHAR(100),
    estado_end VARCHAR(100),
    cep_end CHAR(8) NOT NULL,
    pais_end VARCHAR(100),
    --Chaves que são referenciadas de outras tabelas
    id_usuario INTEGER REFERENCES usuarios (id_usuario),
    cpf CHAR(11) REFERENCES formulario_usuario_cadastro ()
    --depois de cliente
);

CREATE TABLE contato (
    id_contato INTEGER NOT NULL PRIMARY KEY,
    telefone_contato VARCHAR(15) NOT NULL,
    email_contato VARCHAR(100) NOT NULL,
    id_usuario INTEGER NOT NULL,
    cpf CHAR(11) NOT NULL 
    --depois de cliente
);

CREATE TABLE formulario_usuario_cadastro (
    id_usuario INTEGER NOT NULL PRIMARY KEY,
    nome_usuario VARCHAR(100) NOT NULL,
    sobrenome_usuario VARCHAR(100) NOT NULL,
    cpf_usuario CHAR(11) NOT NULL PRIMARY KEY,
    email_usuario VARCHAR(100) NOT NULL,
    senha_usuario VARCHAR(256) NOT NULL,
    login_usuario VARCHAR(20)
);

