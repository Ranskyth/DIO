CREATE DATABASE fluery_saude_db;
USE fluery_saude_db;

CREATE TABLE Faixa_Etaria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    descricao VARCHAR(50),
    idade_min INT NOT NULL,
    idade_max INT NOT NULL
);

CREATE TABLE Pacientes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    data_nascimento DATE NOT NULL,
    sexo ENUM('M', 'F', 'Outro') NOT NULL,
    faixa_etaria_id INT,
    FOREIGN KEY (faixa_etaria_id) REFERENCES Faixa_Etaria(id)
);

CREATE TABLE Diagnosticos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

CREATE TABLE Medicacoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    tipo VARCHAR(100)
);

CREATE TABLE Eventos_Climaticos (
    id INT PRIMARY KEY AUTO_INCREMENT,
    tipo VARCHAR(100) NOT NULL,
    intensidade ENUM('baixa', 'média', 'alta') NOT NULL,
    data_ocorrencia DATE NOT NULL
);

CREATE TABLE Consultas (
    id INT PRIMARY KEY AUTO_INCREMENT,
    paciente_id INT NOT NULL,
    diagnostico_id INT NOT NULL,
    evento_climatico_id INT,
    data DATE NOT NULL,
    retorno_em_dias INT,
    FOREIGN KEY (paciente_id) REFERENCES Pacientes(id),
    FOREIGN KEY (diagnostico_id) REFERENCES Diagnosticos(id),
    FOREIGN KEY (evento_climatico_id) REFERENCES Eventos_Climaticos(id)
);

CREATE TABLE Uso_Medicacoes (
    id INT PRIMARY KEY AUTO_INCREMENT,
    consulta_id INT NOT NULL,
    medicacao_id INT NOT NULL,
    frequencia VARCHAR(100),
    FOREIGN KEY (consulta_id) REFERENCES Consultas(id),
    FOREIGN KEY (medicacao_id) REFERENCES Medicacoes(id)
);

INSERT INTO Faixa_Etaria (descricao, idade_min, idade_max) VALUES
('0–5 anos', 0, 5),
('6–17 anos', 6, 17),
('18–35 anos', 18, 35),
('36–50 anos', 36, 50),
('51–65 anos', 51, 65),
('66–75 anos', 66, 75),
('76–85 anos', 76, 85),
('86–95 anos', 86, 95),
('96–100 anos', 96, 100),
('100+ anos', 101, 200);

INSERT INTO Diagnosticos (nome) VALUES
('Asma'),
('DPOC'),
('Infarto'),
('Desidratação'),
('Insolação'),
('Alergia respiratória'),
('Doença cardíaca'),
('Enfisema'),
('Bronquite'),
('Crise hipertensiva');

INSERT INTO Medicacoes (nome, tipo) VALUES
('Salbutamol', 'Broncodilatador'),
('Ibuprofeno', 'Anti-inflamatório'),
('Paracetamol', 'Analgésico'),
('Losartana', 'Anti-hipertensivo'),
('Omeprazol', 'Inibidor de bomba'),
('Prednisona', 'Corticoide'),
('Furosemida', 'Diurético'),
('Atorvastatina', 'Estatina'),
('Clenil', 'Corticoide inalatório'),
('Amoxicilina', 'Antibiótico');

INSERT INTO Eventos_Climaticos (tipo, intensidade, data_ocorrencia) VALUES
('Onda de calor', 'alta', '2023-12-01'),
('Tempestade de poeira', 'média', '2023-11-20'),
('Frente fria', 'baixa', '2023-07-15'),
('Chuva intensa', 'alta', '2023-03-02'),
('Baixa umidade', 'média', '2023-09-10'),
('Inversão térmica', 'baixa', '2023-06-06'),
('Onda de frio', 'alta', '2023-08-21'),
('Nevasca', 'média', '2023-01-10'),
('Calor extremo', 'alta', '2023-12-25'),
('Fumaça de queimada', 'média', '2023-10-01');
INSERT INTO Pacientes (nome, data_nascimento, sexo, faixa_etaria_id) VALUES ('Ana', '1958-11-12', 'M', 1);
INSERT INTO Pacientes (nome, data_nascimento, sexo, faixa_etaria_id) VALUES ('Carlos', '2011-12-15', 'M', 1);
INSERT INTO Pacientes (nome, data_nascimento, sexo, faixa_etaria_id) VALUES ('Beatriz', '1944-03-31', 'Outro', 5);
INSERT INTO Pacientes (nome, data_nascimento, sexo, faixa_etaria_id) VALUES ('João', '2010-01-20', 'M', 10);
INSERT INTO Pacientes (nome, data_nascimento, sexo, faixa_etaria_id) VALUES ('Larissa', '1955-03-29', 'F', 5);
INSERT INTO Pacientes (nome, data_nascimento, sexo, faixa_etaria_id) VALUES ('Pedro', '1996-08-02', 'F', 6);
INSERT INTO Pacientes (nome, data_nascimento, sexo, faixa_etaria_id) VALUES ('Luana', '2006-06-28', 'F', 4);
INSERT INTO Pacientes (nome, data_nascimento, sexo, faixa_etaria_id) VALUES ('Rafael', '1999-06-16', 'F', 3);
INSERT INTO Pacientes (nome, data_nascimento, sexo, faixa_etaria_id) VALUES ('Camila', '2001-11-16', 'Outro', 7);
INSERT INTO Pacientes (nome, data_nascimento, sexo, faixa_etaria_id) VALUES ('Tiago', '1975-06-23', 'M', 1);
INSERT INTO Consultas (paciente_id, diagnostico_id, evento_climatico_id, data, retorno_em_dias) VALUES (10, 6, 3, '2022-05-03', 70);
INSERT INTO Consultas (paciente_id, diagnostico_id, evento_climatico_id, data, retorno_em_dias) VALUES (5, 9, 1, '2024-11-12', 12);
INSERT INTO Consultas (paciente_id, diagnostico_id, evento_climatico_id, data, retorno_em_dias) VALUES (8, 6, 2, '2022-12-22', 57);
INSERT INTO Consultas (paciente_id, diagnostico_id, evento_climatico_id, data, retorno_em_dias) VALUES (10, 5, 9, '2022-01-14', 29);
INSERT INTO Consultas (paciente_id, diagnostico_id, evento_climatico_id, data, retorno_em_dias) VALUES (3, 7, 4, '2024-03-16', 52);
INSERT INTO Consultas (paciente_id, diagnostico_id, evento_climatico_id, data, retorno_em_dias) VALUES (1, 1, 4, '2022-08-12', 44);
INSERT INTO Consultas (paciente_id, diagnostico_id, evento_climatico_id, data, retorno_em_dias) VALUES (8, 1, 1, '2022-06-03', 32);
INSERT INTO Consultas (paciente_id, diagnostico_id, evento_climatico_id, data, retorno_em_dias) VALUES (7, 3, 4, '2022-02-21', 88);
INSERT INTO Consultas (paciente_id, diagnostico_id, evento_climatico_id, data, retorno_em_dias) VALUES (2, 9, 5, '2023-01-02', 55);
INSERT INTO Consultas (paciente_id, diagnostico_id, evento_climatico_id, data, retorno_em_dias) VALUES (7, 1, 6, '2024-12-22', 68);
INSERT INTO Uso_Medicacoes (consulta_id, medicacao_id, frequencia) VALUES (3, 9, '1x por dia');
INSERT INTO Uso_Medicacoes (consulta_id, medicacao_id, frequencia) VALUES (3, 7, '2x por dia');
INSERT INTO Uso_Medicacoes (consulta_id, medicacao_id, frequencia) VALUES (2, 6, '2x por dia');
INSERT INTO Uso_Medicacoes (consulta_id, medicacao_id, frequencia) VALUES (7, 10, '2x por dia');
INSERT INTO Uso_Medicacoes (consulta_id, medicacao_id, frequencia) VALUES (9, 1, '3x por dia');
INSERT INTO Uso_Medicacoes (consulta_id, medicacao_id, frequencia) VALUES (10, 2, '3x por dia');
INSERT INTO Uso_Medicacoes (consulta_id, medicacao_id, frequencia) VALUES (9, 1, '1x por dia');
INSERT INTO Uso_Medicacoes (consulta_id, medicacao_id, frequencia) VALUES (5, 4, '3x por dia');
INSERT INTO Uso_Medicacoes (consulta_id, medicacao_id, frequencia) VALUES (9, 9, '3x por dia');
INSERT INTO Uso_Medicacoes (consulta_id, medicacao_id, frequencia) VALUES (5, 6, '1x por dia');
```
