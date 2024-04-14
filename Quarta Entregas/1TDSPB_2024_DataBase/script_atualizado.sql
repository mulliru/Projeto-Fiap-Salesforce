'''
O código a seguir irá processar o esquema de banco de dados arquitetado para a terceira sprint do projeto challenge proposto pela SalesForce.
o banco de dados terá papel fundamental no sistema de integração com JAVA
'''


''' 
Integrantes: 
Murillo Ferreira Ramos      RM: 553315
Keven Ike Pereira da Silva  RM: 553215
Pedro Luiz Prado            RM: 553874
'''

DROP TABLE produto
DROP TABLE formulario_usuario_cadastro
DROP TABLE usuario
DROP TABLE pedido
DROP TABLE endereco
DROP TABLE contato
Drop TABLE produto_pedido

CREATE TABLE produto (
    id_produto INTEGER NOT NULL PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    tipo_produto VARCHAR(100) NOT NULL,
    valor_produto FLOAT NOT NULL
);


CREATE TABLE formulario_usuario_cadastro (
    id_fr_usuario INTEGER NOT NULL PRIMARY KEY,
    cpf_fr_usuario CHAR(11) NOT NULL,
    nome_fr_usuario VARCHAR(100) NOT NULL,
    sobrenome_fr_usuario VARCHAR(100) NOT NULL,
    dt_nascimento_fr_usuario DATE NOT NULL,
    email_fr_usuario VARCHAR(100) NOT NULL,
    senha_fr_usuario VARCHAR(256) NOT NULL
);

CREATE TABLE usuario (
    id_usuario INTEGER NOT NULL PRIMARY KEY,
    apelido_usuario VARCHAR(100) NOT NULL,
    nome_usuario VARCHAR(100) NOT NULL,
    sobrenome_usuario VARCHAR(100) NOT NULL,
    email_usuario VARCHAR(100) NOT NULL,
    senha_usuario VARCHAR(256) NOT NULL,
    --Chaves que são referenciadas de outras tabelas
    id_fr_usuario INTEGER REFERENCES formulario_usuario_cadastro (id_fr_usuario)
);

CREATE TABLE pedido (
    id_pedido INTEGER NOT NULL PRIMARY KEY,
    data_pedido DATE,
    status_pedido VARCHAR(3) CHECK (status_pedido IN ('PEN', 'ENV', 'ENT', 'CAN')),
    valor_pedido FLOAT,
    --Chaves estrangeiras corrigidas
    id_funcionario INTEGER REFERENCES funcionario (id_funcionario),
    id_usuario INTEGER REFERENCES usuario (id_usuario)
);

CREATE TABLE produto_pedido ( --Inserindo tabela assosciativa--
    id_produto INTEGER NOT NULL,
    id_pedido INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    PRIMARY KEY (id_produto, id_pedido),
    FOREIGN KEY (id_produto) REFERENCES produto (id_produto),
    FOREIGN KEY (id_pedido) REFERENCES pedido (id_pedido)
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
    id_usuario INTEGER REFERENCES usuario (id_usuario)

);

--Fazendo os inserts


--Formato de datas é: 'YYYY-MM-DD' ou seja ano/mês/dia

-- Fazendo Insert de usuarios no formulario
INSERT INTO formulario_usuario_cadastro (id_fr_usuario, cpf_fr_usuario, nome_fr_usuario, sobrenome_fr_usuario, dt_nascimento_fr_usuario, email_fr_usuario, senha_fr_usuario) 
VALUES 
(1, '12345678901', 'Murillo', 'Ramos', '1999-12-12', 'murilloemail@fiap.com.br', '123456'),
(2, '98081500049', 'Pedro', 'Prado', '2004-12-23', 'pedroluiz@fiap.com.br', '789102'),
(3, '17728866028', 'Keven', 'Ike', '1999-12-12', 'kevenike@fiap.com.br', '456789'),
(4, '23225536032', 'Lucas', 'Oliveira', '1999-18-12', 'lucas@fiap.com.br', '789456');


-- Fazendo Insert de usuarios


-- Fazendo Insert de produtos
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto)
VALUES
  (1, 'Sales Cloud Essentials', 'CRM', 25),
  (2, 'Sales Cloud Professional', 'CRM', 80),
  (3, 'Sales Cloud Enterprise', 'CRM', 165),
  (4, 'Sales Cloud Unlimited', 'CRM', 330),
  (5, 'Service Cloud Essentials', 'CRM', 25),
  (6, 'Service Cloud Professional', 'CRM', 80),
  (7, 'Service Cloud Enterprise', 'CRM', 165),
  (8, 'Service Cloud Unlimited', 'CRM', 330),
  (9, 'Marketing Cloud Email Marketing', 'Marketing', 150),
  (10, 'Marketing Cloud Marketing Automation', 'Marketing', 600),
  (11, 'Marketing Cloud Social Marketing', 'Marketing', 1200),
  (12, 'Marketing Cloud Einstein Marketing Advertising', 'Marketing', 3000),
  (13, 'Commerce Cloud Essentials', 'Comércio Eletrônico', 25),
  (14, 'Commerce Cloud Professional', 'Comércio Eletrônico', 80),
  (15, 'Commerce Cloud Enterprise', 'Comércio Eletrônico', 165),
  (16, 'Commerce Cloud Unlimited', 'Comércio Eletrônico', 330);

select * from produto;
select * from formulario_usuario_cadastro;


-- Fazendo update de dados --

-- Fazendo update de usuarios no formulario
UPDATE formulario_usuario_cadastro SET sobrenome_fr_usuario = 'Ferreira' WHERE id_fr_usuario = 1;
-- Fazendo update de usuarios
UPDATE usuario set apelido_usuario = 'murilloramos' where id_usuario = 1;
-- Fazendo update de produtos
UPDATE produto SET valor_produto = 30 WHERE id_produto = 1;

-- Fazendo delete de dados --

-- Fazendo delete de usuarios no formulario
DELETE FROM formulario_usuario_cadastro WHERE id_fr_usuario = 4;

-- Fazendo delete de usuarios #FALTA COLOCAR USUARIO NA TABELA DE USUARIO
 DELETE FROM usuario WHERE id_usuario =

-- Fazendo delete de produtos
DELETE FROM produto WHERE id_produto = 16;