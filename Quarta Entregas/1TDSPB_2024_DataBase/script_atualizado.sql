-- Código para processar o esquema de banco de dados arquitetado para a terceira sprint do projeto challenge proposto pela SalesForce.
-- O banco de dados terá papel fundamental no sistema de integração com JAVA

-- Integrantes:
-- Murillo Ferreira Ramos      RM: 553315
-- Keven Ike Pereira da Silva  RM: 553215
-- Pedro Luiz Prado            RM: 553874

-- Removendo tabelas na ordem correta para evitar problemas de dependência de chave estrangeira
DROP TABLE produto_pedido;
DROP TABLE pedido;
DROP TABLE endereco;
DROP TABLE contato;
DROP TABLE usuario;
DROP TABLE formulario_usuario_cadastro;
DROP TABLE produto;

CREATE TABLE produto (
    id_produto INTEGER NOT NULL PRIMARY KEY,
    nome_produto VARCHAR(100) NOT NULL,
    tipo_produto VARCHAR(100) NOT NULL,
    valor_produto FLOAT NOT NULL
);

CREATE TABLE formulario_usuario_cadastro (
    id_fr_usuario INTEGER NOT NULL PRIMARY KEY,
    cpf_fr_usuario CHAR(11) NOT NULL UNIQUE,
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
    id_fr_usuario INTEGER REFERENCES formulario_usuario_cadastro (id_fr_usuario)
);

CREATE TABLE pedido (
    id_pedido INTEGER NOT NULL PRIMARY KEY,
    data_pedido DATE,
    status_pedido VARCHAR(3) CHECK (status_pedido IN ('PEN', 'ENV', 'ENT', 'CAN')),
    valor_pedido FLOAT,
    id_usuario INTEGER REFERENCES usuario (id_usuario)
);

CREATE TABLE produto_pedido (
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
    id_usuario INTEGER REFERENCES usuario (id_usuario)
);

CREATE TABLE contato (
    id_contato INTEGER NOT NULL PRIMARY KEY,
    telefone_contato VARCHAR(15) NOT NULL,
    email_contato VARCHAR(100) NOT NULL,
    id_usuario INTEGER REFERENCES usuario (id_usuario)
);

-- Visualizando as Tabelas Criadas e vazias
SELECT * FROM produto;
SELECT * FROM formulario_usuario_cadastro;
SELECT * FROM usuario;
SELECT * FROM pedido;
SELECT * FROM produto_pedido;
SELECT * FROM endereco;
SELECT * FROM contato;

-- Fazendo os inserts 
-- Formato de datas é: 'YYYY-MM-DD' ou seja ano/mês/dia

-- Fazendo Insert de produtos
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (1, 'Sales Cloud Essentials', 'CRM', 25);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (2, 'Sales Cloud Professional', 'CRM', 80);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (3, 'Sales Cloud Enterprise', 'CRM', 165);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (4, 'Sales Cloud Unlimited', 'CRM', 330);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (5, 'Service Cloud Essentials', 'CRM', 25);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (6, 'Service Cloud Professional', 'CRM', 80);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (7, 'Service Cloud Enterprise', 'CRM', 165);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (8, 'Service Cloud Unlimited', 'CRM', 330);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (9, 'Marketing Cloud Email Marketing', 'Marketing', 150);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (10, 'Marketing Cloud Marketing Automation', 'Marketing', 600);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (11, 'Marketing Cloud Social Marketing', 'Marketing', 1200);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (12, 'Marketing Cloud Einstein Marketing Advertising', 'Marketing', 3000);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (13, 'Commerce Cloud Essentials', 'Comércio Eletrônico', 25);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (14, 'Commerce Cloud Professional', 'Comércio Eletrônico', 80);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (15, 'Commerce Cloud Enterprise', 'Comércio Eletrônico', 165);
INSERT INTO produto (id_produto, nome_produto, tipo_produto, valor_produto) VALUES (16, 'Commerce Cloud Unlimited', 'Comércio Eletrônico', 330);

-- Fazendo Insert de formulario_usuario_cadastro
INSERT INTO formulario_usuario_cadastro (id_fr_usuario, cpf_fr_usuario, nome_fr_usuario, sobrenome_fr_usuario, dt_nascimento_fr_usuario, email_fr_usuario, senha_fr_usuario) VALUES (1, '12345678901', 'Murillo', 'Ramos', TO_DATE('1999-12-12', 'YYYY-MM-DD'), 'murilloemail@fiap.com.br', '123456');
INSERT INTO formulario_usuario_cadastro (id_fr_usuario, cpf_fr_usuario, nome_fr_usuario, sobrenome_fr_usuario, dt_nascimento_fr_usuario, email_fr_usuario, senha_fr_usuario) VALUES (2, '23456789012', 'Ana', 'Silva', TO_DATE('1985-05-20', 'YYYY-MM-DD'), 'anaemail@fiap.com.br', 'abcdef');
INSERT INTO formulario_usuario_cadastro (id_fr_usuario, cpf_fr_usuario, nome_fr_usuario, sobrenome_fr_usuario, dt_nascimento_fr_usuario, email_fr_usuario, senha_fr_usuario) VALUES (3, '34567890123', 'Carlos', 'Santos', TO_DATE('1978-03-15', 'YYYY-MM-DD'), 'carlosemail@fiap.com.br', '123abc');
INSERT INTO formulario_usuario_cadastro (id_fr_usuario, cpf_fr_usuario, nome_fr_usuario, sobrenome_fr_usuario, dt_nascimento_fr_usuario, email_fr_usuario, senha_fr_usuario) VALUES (4, '45678901234', 'Lucas', 'Oliveira', TO_DATE('1990-07-25', 'YYYY-MM-DD'), 'lucasemail@fiap.com.br', '789xyz');
INSERT INTO formulario_usuario_cadastro (id_fr_usuario, cpf_fr_usuario, nome_fr_usuario, sobrenome_fr_usuario, dt_nascimento_fr_usuario, email_fr_usuario, senha_fr_usuario) VALUES (5, '56789012345', 'João', 'Silva', TO_DATE('1982-10-10', 'YYYY-MM-DD'), 'joaoemail@fiap.com.br', '789456');
INSERT INTO formulario_usuario_cadastro (id_fr_usuario, cpf_fr_usuario, nome_fr_usuario, sobrenome_fr_usuario, dt_nascimento_fr_usuario, email_fr_usuario, senha_fr_usuario) VALUES (6, '67890123456', 'Maria', 'Santos', TO_DATE('1995-09-18', 'YYYY-MM-DD'), 'mariaemail@fiap.com.br', '654321');
INSERT INTO formulario_usuario_cadastro (id_fr_usuario, cpf_fr_usuario, nome_fr_usuario, sobrenome_fr_usuario, dt_nascimento_fr_usuario, email_fr_usuario, senha_fr_usuario) VALUES (7, '78901234567', 'Carlos', 'Souza', TO_DATE('1988-04-30', 'YYYY-MM-DD'), 'carlos@fiap.com.br', '321654');

-- Fazendo Insert de usuario
INSERT INTO usuario (id_usuario, apelido_usuario, nome_usuario, sobrenome_usuario, email_usuario, senha_usuario, id_fr_usuario) VALUES (1, 'murilloramos', 'Murillo', 'Ramos', 'murillo@fiap.com.br', '123456', 1);
INSERT INTO usuario (id_usuario, apelido_usuario, nome_usuario, sobrenome_usuario, email_usuario, senha_usuario, id_fr_usuario) VALUES (2, 'anasilva', 'Ana', 'Silva', 'ana@fiap.com.br', 'abcdef', 2);
INSERT INTO usuario (id_usuario, apelido_usuario, nome_usuario, sobrenome_usuario, email_usuario, senha_usuario, id_fr_usuario) VALUES (3, 'carlossantos', 'Carlos', 'Santos', 'carlos@fiap.com.br', '123abc', 3);
INSERT INTO usuario (id_usuario, apelido_usuario, nome_usuario, sobrenome_usuario, email_usuario, senha_usuario, id_fr_usuario) VALUES (4, 'lucasoliveira', 'Lucas', 'Oliveira', 'lucas@fiap.com.br', '789xyz', 4);
INSERT INTO usuario (id_usuario, apelido_usuario, nome_usuario, sobrenome_usuario, email_usuario, senha_usuario, id_fr_usuario) VALUES (5, 'joaosilva', 'João', 'Silva', 'joaosilva@fiap.com.br', '987654', 5);
INSERT INTO usuario (id_usuario, apelido_usuario, nome_usuario, sobrenome_usuario, email_usuario, senha_usuario, id_fr_usuario) VALUES (6, 'mariasantos', 'Maria', 'Santos', 'mariasantos@fiap.com.br', '654321', 6);
INSERT INTO usuario (id_usuario, apelido_usuario, nome_usuario, sobrenome_usuario, email_usuario, senha_usuario, id_fr_usuario) VALUES (7, 'carlossouza', 'Carlos', 'Souza', 'carlossouza@fiap.com.br', '321654', 7);

-- Fazendo Insert de pedidos
INSERT INTO pedido (id_pedido, data_pedido, status_pedido, valor_pedido, id_usuario) VALUES (1, TO_DATE('2023-05-01', 'YYYY-MM-DD'), 'PEN', 250.00, 1);
INSERT INTO pedido (id_pedido, data_pedido, status_pedido, valor_pedido, id_usuario) VALUES (2, TO_DATE('2023-05-02', 'YYYY-MM-DD'), 'ENV', 500.00, 2);
INSERT INTO pedido (id_pedido, data_pedido, status_pedido, valor_pedido, id_usuario) VALUES (3, TO_DATE('2023-05-03', 'YYYY-MM-DD'), 'ENT', 750.00, 3);
INSERT INTO pedido (id_pedido, data_pedido, status_pedido, valor_pedido, id_usuario) VALUES (4, TO_DATE('2023-05-04', 'YYYY-MM-DD'), 'CAN', 1000.00, 4);
INSERT INTO pedido (id_pedido, data_pedido, status_pedido, valor_pedido, id_usuario) VALUES (5, TO_DATE('2023-05-05', 'YYYY-MM-DD'), 'PEN', 1250.00, 5);
INSERT INTO pedido (id_pedido, data_pedido, status_pedido, valor_pedido, id_usuario) VALUES (6, TO_DATE('2023-05-06', 'YYYY-MM-DD'), 'ENV', 1500.00, 6);
INSERT INTO pedido (id_pedido, data_pedido, status_pedido, valor_pedido, id_usuario) VALUES (7, TO_DATE('2023-05-07', 'YYYY-MM-DD'), 'ENT', 1750.00, 7);

-- Fazendo Insert de produto_pedido
INSERT INTO produto_pedido (id_produto, id_pedido, quantidade) VALUES (1, 1, 2);
INSERT INTO produto_pedido (id_produto, id_pedido, quantidade) VALUES (2, 2, 1);
INSERT INTO produto_pedido (id_produto, id_pedido, quantidade) VALUES (3, 3, 5);
INSERT INTO produto_pedido (id_produto, id_pedido, quantidade) VALUES (4, 4, 1);
INSERT INTO produto_pedido (id_produto, id_pedido, quantidade) VALUES (5, 5, 2);
INSERT INTO produto_pedido (id_produto, id_pedido, quantidade) VALUES (6, 6, 1);
INSERT INTO produto_pedido (id_produto, id_pedido, quantidade) VALUES (7, 7, 5);

-- Fazendo Insert de endereco
INSERT INTO endereco (id_end, rua_end, cidade_end, estado_end, cep_end, pais_end, id_usuario) VALUES (1, 'Rua A', 'São Paulo', 'SP', '01234567', 'Brasil', 1);
INSERT INTO endereco (id_end, rua_end, cidade_end, estado_end, cep_end, pais_end, id_usuario) VALUES (2, 'Rua B', 'São Paulo', 'SP', '01234567', 'Brasil', 2);
INSERT INTO endereco (id_end, rua_end, cidade_end, estado_end, cep_end, pais_end, id_usuario) VALUES (3, 'Rua C', 'São Paulo', 'SP', '01234567', 'Brasil', 3);
INSERT INTO endereco (id_end, rua_end, cidade_end, estado_end, cep_end, pais_end, id_usuario) VALUES (4, 'Rua D', 'São Paulo', 'SP', '01234567', 'Brasil', 4);
INSERT INTO endereco (id_end, rua_end, cidade_end, estado_end, cep_end, pais_end, id_usuario) VALUES (5, 'Rua E', 'São Paulo', 'SC', '01234567', 'Brasil', 5);
INSERT INTO endereco (id_end, rua_end, cidade_end, estado_end, cep_end, pais_end, id_usuario) VALUES (6, 'Rua F', 'São Paulo', 'MG', '01234567', 'Brasil', 6);
INSERT INTO endereco (id_end, rua_end, cidade_end, estado_end, cep_end, pais_end, id_usuario) VALUES (7, 'Rua G', 'São Paulo', 'RJ', '01234567', 'Brasil', 7);

-- Fazendo Insert de contato
INSERT INTO contato (id_contato, telefone_contato, email_contato, id_usuario) VALUES (1, '1234567890', 'contato1@fiap.com.br', 1);
INSERT INTO contato (id_contato, telefone_contato, email_contato, id_usuario) VALUES (2, '2345678901', 'contato2@fiap.com.br', 2);
INSERT INTO contato (id_contato, telefone_contato, email_contato, id_usuario) VALUES (3, '3456789012', 'contato3@fiap.com.br', 3);
INSERT INTO contato (id_contato, telefone_contato, email_contato, id_usuario) VALUES (4, '4567890123', 'contato4@fiap.com.br', 4);
INSERT INTO contato (id_contato, telefone_contato, email_contato, id_usuario) VALUES (5, '5678901234', 'contato7@fiap.com.br', 5);
INSERT INTO contato (id_contato, telefone_contato, email_contato, id_usuario) VALUES (6, '6789012345', 'contato8@fiap.com.br', 6);
INSERT INTO contato (id_contato, telefone_contato, email_contato, id_usuario) VALUES (7, '7890123456', 'contato9@fiap.com.br', 7);

-- Visualizando as Tabelas populadas
SELECT * FROM produto;
SELECT * FROM formulario_usuario_cadastro;
SELECT * FROM usuario;
SELECT * FROM pedido;
SELECT * FROM produto_pedido;
SELECT * FROM endereco;
SELECT * FROM contato;

-- FAZENDO UPDATE DOS DADOS --
-- Fazendo update de produto
UPDATE produto SET valor_produto = 30 WHERE id_produto = 1;
UPDATE produto SET valor_produto = 85 WHERE id_produto = 2;
UPDATE produto SET valor_produto = 170 WHERE id_produto = 3;

-- Fazendo update de usuarios no formulario
UPDATE formulario_usuario_cadastro SET nome_fr_usuario = 'Lucas' WHERE id_fr_usuario = 5;
UPDATE formulario_usuario_cadastro SET nome_fr_usuario = 'Gabriel' WHERE id_fr_usuario = 6;
UPDATE formulario_usuario_cadastro SET nome_fr_usuario = 'João' WHERE id_fr_usuario = 7;

-- Fazendo update de usuarios
UPDATE usuario SET senha_usuario = '909090' WHERE id_usuario = 1;
UPDATE usuario SET senha_usuario = '808080' WHERE id_usuario = 2;
UPDATE usuario SET senha_usuario = '707070' WHERE id_usuario = 3;

-- Fazendo update de pedidos
UPDATE pedido SET status_pedido = 'ENT' WHERE id_pedido = 1;
UPDATE pedido SET status_pedido = 'ENV' WHERE id_pedido = 2;
UPDATE pedido SET status_pedido = 'CAN' WHERE id_pedido = 3;

-- Fazendo update de produto_pedido
UPDATE produto_pedido SET quantidade = 4 WHERE id_produto = 1 AND id_pedido = 4;
UPDATE produto_pedido SET quantidade = 2 WHERE id_produto = 2 AND id_pedido = 5;
UPDATE produto_pedido SET quantidade = 5 WHERE id_produto = 3 AND id_pedido = 6;

-- fazendo update de endereco
UPDATE endereco SET estado_end = 'SP' WHERE id_end = 5;
UPDATE endereco SET estado_end = 'SP' WHERE id_end = 6;
UPDATE endereco SET estado_end = 'SP' WHERE id_end = 7;

-- fazendo três update de contato
UPDATE contato SET email_contato = 'contato5@fiap.com.br' WHERE id_contato = 5;
UPDATE contato SET email_contato = 'contato6@fiap.com.br' WHERE id_contato = 6;
UPDATE contato SET email_contato = 'contato7@fiap.com.br' WHERE id_contato = 7;

-- Visualizando as Tabelas depois do update
SELECT * FROM produto;
SELECT * FROM formulario_usuario_cadastro;
SELECT * FROM usuario;
SELECT * FROM pedido;
SELECT * FROM produto_pedido;
SELECT * FROM endereco;
SELECT * FROM contato;

-- FAZENDO DELETE DOS DADOS --
-- Fazendo delete de produto
DELETE FROM produto WHERE id_produto = 16;
DELETE FROM produto WHERE id_produto = 15;
DELETE FROM produto WHERE id_produto = 14;

-- Fazendo delete de usuarios no formulario
DELETE FROM formulario_usuario_cadastro WHERE id_fr_usuario = 4;
DELETE FROM formulario_usuario_cadastro WHERE id_fr_usuario = 3;
DELETE FROM formulario_usuario_cadastro WHERE id_fr_usuario = 2;

-- Fazendo delete de usuarios
DELETE FROM usuario WHERE id_usuario = 4;
DELETE FROM usuario WHERE id_usuario = 3;
DELETE FROM usuario WHERE id_usuario = 2;

-- Fazendo delete de pedidos
DELETE FROM pedido WHERE id_pedido = 7;
DELETE FROM pedido WHERE id_pedido = 6;
DELETE FROM pedido WHERE id_pedido = 5;

-- Fazendo delete de produto_pedido
DELETE FROM produto_pedido WHERE id_produto = 7 AND id_pedido = 7;
DELETE FROM produto_pedido WHERE id_produto = 6 AND id_pedido = 6;
DELETE FROM produto_pedido WHERE id_produto = 5 AND id_pedido = 5;

-- Fazendo delete de endereco
DELETE FROM endereco WHERE id_end = 7;
DELETE FROM endereco WHERE id_end = 6;
DELETE FROM endereco WHERE id_end = 5;

-- Fazendo delete de contato
DELETE FROM contato WHERE id_contato = 7;
DELETE FROM contato WHERE id_contato = 6;
DELETE FROM contato WHERE id_contato = 5;

-- Visualizando as Tabelas depois do delete
SELECT * FROM produto;
SELECT * FROM formulario_usuario_cadastro;
SELECT * FROM usuario;
SELECT * FROM pedido;
SELECT * FROM produto_pedido;
SELECT * FROM endereco;
SELECT * FROM contato;

-- Relatório utilizando classificação de dados (Ordenando produtos por nome em ordem crescente)
SELECT *
FROM produto
ORDER BY nome_produto ASC;

-- Relatório utilizando alguma função do tipo numérica simples (Calculando o total de produtos cadastrados)
SELECT COUNT(*) AS total_produtos
FROM produto;

-- Relatório utilizando alguma função de grupo (Calculando a média de valores dos produtos por tipo de produto)
SELECT tipo_produto, AVG(valor_produto) AS media_valor
FROM produto
GROUP BY tipo_produto;

-- Relatório utilizando subconsulta (Selecionando os produtos que possuem o valor mais alto)
SELECT *
FROM produto
WHERE valor_produto = (SELECT MAX(valor_produto) FROM produto);

-- Relatório ajustado para mostrar o nome do produto, o nome do usuário e a data do pedido para cada pedido realizado
SELECT p.nome_produto, u.nome_usuario, u.sobrenome_usuario, pe.data_pedido
FROM produto_pedido pp
JOIN produto p ON pp.id_produto = p.id_produto
JOIN pedido pe ON pp.id_pedido = pe.id_pedido
JOIN usuario u ON pe.id_usuario = u.id_usuario;
