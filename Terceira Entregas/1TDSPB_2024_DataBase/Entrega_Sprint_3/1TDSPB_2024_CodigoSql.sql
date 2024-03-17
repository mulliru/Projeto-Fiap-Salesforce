''' 
Integrantes: 
Murillo Ferreira Ramos      RM: 553315
Keven Ike Pereira da Silva  RM: 553215
Pedro Luiz Prado            RM: 553874
'''

DROP TABLE produto
DROP TABLE funcionario
DROP TABLE empresa
DROP TABLE formulario_usuario_cadastro
DROP TABLE usuario
DROP TABLE pedido
DROP TABLE endereco
DROP TABLE contato

CREATE TABLE produto (
    id_produto INTEGER NOT NULL PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    tipo_produto VARCHAR(100) NOT NULL,
    valor_produto FLOAT NOT NULL
);

CREATE TABLE funcionario(
    id_funcionario INTEGER NOT NULL PRIMARY KEY,
    cpf_funcionario CHAR (11) NOT NULL, 
    nome_funcionario VARCHAR(100) NOT NULL,
    sobrenome_funcionario VARCHAR(100) NOT NULL,
    setor_funcionario CHAR (1),
    salario_funcionario FLOAT
);

CREATE TABLE empresa(
    cnpj_empresa CHAR (14) NOT NULL PRIMARY KEY,
    nome_empresa VARCHAR (100) NOT NULL,
    status_empresa CHAR (1) NOT NULL CHECK (status_empresa IN ('I', 'A', 'F')),
    endereco_empresa VARCHAR (100),
    telefone_empresa VARCHAR (15),
    --Chaves que são referenciadas de outras tabelas
    id_funcionario INTEGER REFERENCES funcionario (id_funcionario),
    id_produto INTEGER REFERENCES produto (id_produto)
);

CREATE TABLE formulario_usuario_cadastro (
    id_fr_usuario INTEGER NOT NULL PRIMARY KEY,
    cpf_fr_usuario CHAR(11) NOT NULL,
    nome_fr_usuario VARCHAR(100) NOT NULL,
    sobrenome_fr_usuario VARCHAR(100) NOT NULL,
    email_fr_usuario VARCHAR(100) NOT NULL,
    senha_fr_usuario VARCHAR(256) NOT NULL
);

CREATE TABLE usuario (
    id_usuario VARCHAR(100) NOT NULL PRIMARY KEY,
    apelido_usuario VARCHAR(100) NOT NULL,
    nome_usuario VARCHAR(100) NOT NULL,
    sobrenome_usuario VARCHAR(100) NOT NULL,
    email_usuario VARCHAR(100) NOT NULL,
    senha_usuario VARCHAR(256) NOT NULL,
    --Chaves que são referenciadas de outras tabelas
    id_fr_usuario INTEGER REFERENCES formulario_usuario_cadastro (id_usuario)
);

CREATE TABLE pedido (
    id_pedido INTEGER NOT NULL PRIMARY KEY,
    data_pedido DATE,
    status_pedido VARCHAR(3) CHECK (status_pedido IN ('PEN', 'ENV', 'ENT', 'CAN')),
    valor_pedido FLOAT,
    --Chaves que são referenciadas de outras tabelas
    id_funcionario INTEGER REFERENCES funcionario (id_funcionario),
    id_usuario INTEGER REFERENCES usuario (id_usuario)
);



CREATE TABLE endereco (
    id_end INTEGER NOT NULL PRIMARY KEY,
    rua_end VARCHAR(100) NOT NULL,
    cidade_end VARCHAR(100),
    estado_end VARCHAR(100),
    cep_end CHAR(8) NOT NULL,
    pais_end VARCHAR(100),
    --Chaves que são referenciadas de outras tabelas
    id_usuario INTEGER REFERENCES usuario (id_usuario)
);

CREATE TABLE contato (
    id_contato INTEGER NOT NULL PRIMARY KEY,
    telefone_contato VARCHAR(15) NOT NULL,
    email_contato VARCHAR(100) NOT NULL,
    --Chaves que são referenciadas de outras tabelas
    id_usuario VARCHAR (100) REFERENCES usuario (id_usuario)

);







